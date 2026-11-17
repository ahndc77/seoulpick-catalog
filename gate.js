/* ============================================================
   SeoulPick · access-code gate
   ------------------------------------------------------------
   data.js holds only an AES-256-GCM encrypted catalog and, per
   access code, a PBKDF2-SHA256 wrapped data key. This file asks
   for the code, derives the key in the browser, decrypts the
   catalog and only then starts the catalog app (window.SP_BOOT).
   ============================================================ */
(function () {
  'use strict';

  var L = window.SP_LOCK || null;

  var LS_LANG = 'sp_lang_v1';
  var LS_REMEMBER = 'sp_gate_remember_v1';
  var LS_SESSION = 'sp_gate_session_v1';

  var T = {
    mm: {
      title: 'လက်ကား စျေးနှုန်း စာရင်း',
      sub: 'ပါတနာ ဖြစ်ပါက သင့်ထံ ပေးထားသော ကုဒ်ဖြင့် ဖွင့်ပါ။',
      label: 'ပါတနာ ကုဒ်',
      ph: 'SP-XX-0000',
      remember: 'ဒီ ဖုန်း/ကွန်ပျူတာမှာ မှတ်ထားမည်',
      unlock: 'ဖွင့်မည်',
      checking: 'စစ်ဆေးနေသည်…',
      err_empty: 'ကုဒ် ထည့်ပါ။',
      err_bad: 'ကုဒ် မမှန်ပါ။ ပြန်စစ်ပြီး ထပ်ကြိုးစားပါ၊ သို့မဟုတ် SeoulPick ကို ဆက်သွယ်ပါ။',
      err_crypto: 'ဤဘရောက်ဇာတွင် လုံခြုံသော ဖွင့်နည်း (https) မရပါ။ https ဖြင့် ပြန်ဖွင့်ပါ။',
      foot: 'ကုဒ် မရှိသေးပါက TikTok @seoulpick.mm သို့ ဆက်သွယ်ပါ။',
      switch_q: 'ကုဒ် လဲမည်လား? လက်ရှိ အမှာစာ စာရင်း ဒီစက်ထဲ ကျန်ပါသည်။'
    },
    en: {
      title: 'Wholesale price list',
      sub: 'Partners only — open the catalog with the access code we gave you.',
      label: 'Access code',
      ph: 'SP-XX-0000',
      remember: 'Remember on this device',
      unlock: 'Unlock',
      checking: 'Checking…',
      err_empty: 'Enter your access code.',
      err_bad: 'That code is not valid. Check it and try again, or contact SeoulPick.',
      err_crypto: 'This browser cannot open the secure catalog (https required). Reopen this page over https.',
      foot: 'No code yet? Message us on TikTok @seoulpick.mm.',
      switch_q: 'Switch access code? The cart stays on this device.'
    },
    zh: {
      title: '批发价格表',
      sub: '仅限合作商 — 请使用我们提供的访问码打开目录。',
      label: '访问码',
      ph: 'SP-XX-0000',
      remember: '在此设备上记住',
      unlock: '解锁',
      checking: '验证中…',
      err_empty: '请输入访问码。',
      err_bad: '访问码不正确。请核对后重试，或联系 SeoulPick。',
      err_crypto: '此浏览器无法安全解锁（需要 https）。请用 https 重新打开本页。',
      foot: '还没有访问码？请通过 TikTok @seoulpick.mm 联系我们。',
      switch_q: '要更换访问码吗？购物车仍保留在本设备上。'
    }
  };

  var lang = 'mm';
  var busy = false;
  var SESSION = null;

  /* ---------------------------------------------------------- helpers */
  function $(s) { return document.querySelector(s); }

  function store(key, val) {
    try {
      if (val === undefined) { var v = localStorage.getItem(key); return v ? JSON.parse(v) : null; }
      if (val === null) localStorage.removeItem(key); else localStorage.setItem(key, JSON.stringify(val));
    } catch (e) { return null; }
  }

  function b64d(s) {
    var bin = atob(s), u = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) u[i] = bin.charCodeAt(i);
    return u;
  }

  function normalize(code) {
    return String(code || '').replace(/\s+/g, '').toUpperCase();
  }

  function tx(k) { return (T[lang] && T[lang][k]) || T.en[k] || k; }

  /* ---------------------------------------------------------- crypto */
  function deriveKek(code, salt, kdf) {
    return crypto.subtle.importKey('raw', new TextEncoder().encode(code), 'PBKDF2', false, ['deriveKey'])
      .then(function (base) {
        return crypto.subtle.deriveKey(
          { name: 'PBKDF2', salt: b64d(salt), iterations: kdf.iter, hash: kdf.hash },
          base, { name: 'AES-GCM', length: kdf.bits }, false, ['decrypt']);
      });
  }

  function unwrapDataKey(code) {
    var entries = (L && L.codes) || [];
    var i = 0;
    function next() {
      if (i >= entries.length) return Promise.reject(new Error('bad_code'));
      var e = entries[i++];
      return deriveKek(code, e.salt, L.kdf)
        .then(function (kek) {
          return crypto.subtle.decrypt({ name: 'AES-GCM', iv: b64d(e.iv) }, kek, b64d(e.wrappedKey));
        })
        .then(function (dk) { return { entry: e, dataKey: dk }; })
        .catch(function () { return next(); });
    }
    return next();
  }

  function decryptPayload(dataKey) {
    return crypto.subtle.importKey('raw', dataKey, { name: 'AES-GCM' }, false, ['decrypt'])
      .then(function (key) {
        return crypto.subtle.decrypt({ name: 'AES-GCM', iv: b64d(L.payload.iv) }, key, b64d(L.payload.ct));
      })
      .then(function (buf) { return JSON.parse(new TextDecoder().decode(buf)); });
  }

  /* ---------------------------------------------------------- ui */
  function setLang(l) {
    lang = T[l] ? l : 'en';
    store(LS_LANG, lang);
    document.documentElement.lang = lang === 'zh' ? 'zh-Hans' : lang;
    var box = $('#gateLang');
    if (box) {
      Array.prototype.forEach.call(box.querySelectorAll('button'), function (b) {
        b.classList.toggle('on', b.dataset.lang === lang);
      });
    }
    $('#gTitle').textContent = tx('title');
    $('#gSub').textContent = tx('sub');
    $('#gLabel').textContent = tx('label');
    $('#gCode').placeholder = tx('ph');
    $('#gRememberTxt').textContent = tx('remember');
    $('#gBtnTxt').textContent = busy ? tx('checking') : tx('unlock');
    $('#gFoot').textContent = tx('foot');
    if ($('#gErr').dataset.on === 'empty') $('#gErr').textContent = tx('err_empty');
    else if ($('#gErr').dataset.on === 'bad') $('#gErr').textContent = tx('err_bad');
    else if ($('#gErr').dataset.on === 'crypto') $('#gErr').textContent = tx('err_crypto');
  }

  function showGate(msgKind) {
    document.body.classList.add('locked');
    var gate = $('#gate');
    gate.hidden = false;
    gate.removeAttribute('aria-busy');
    busy = false;
    if (msgKind) {
      var err = $('#gErr');
      err.dataset.on = msgKind;
      err.textContent = tx('err_' + msgKind);
      $('#gField').classList.add('err');
      gate.classList.remove('shake');
      void gate.offsetWidth;
      gate.classList.add('shake');
    }
    var input = $('#gCode');
    if (input && !input.value) setTimeout(function () { input.focus(); }, 60);
  }

  function clearErr() {
    var err = $('#gErr');
    err.dataset.on = '';
    err.textContent = '';
    $('#gField').classList.remove('err');
    $('#gate').classList.remove('shake');
  }

  function setBusy(on) {
    busy = on;
    var gate = $('#gate');
    var btn = $('#gBtn');
    if (on) {
      gate.setAttribute('aria-busy', 'true');
      btn.classList.add('busy');
      btn.disabled = true;
      $('#gBtnTxt').textContent = tx('checking');
    } else {
      gate.removeAttribute('aria-busy');
      btn.classList.remove('busy');
      btn.disabled = false;
      $('#gBtnTxt').textContent = tx('unlock');
    }
  }

  function boot(entry, dataKey, code, remember) {
    return decryptPayload(dataKey).then(function (data) {
      SESSION = { id: entry.id, label: entry.label, role: entry.role, code: code };
      window.SP_SESSION = SESSION;
      window.SP_DATA = data;

      store(LS_REMEMBER, !!remember);
      if (remember) store(LS_SESSION, { id: entry.id, label: entry.label, role: entry.role, code: code });
      else store(LS_SESSION, null);

      document.body.classList.remove('locked');
      $('#gate').hidden = true;
      var who = $('#who');
      if (who) who.hidden = false;

      if (typeof window.SP_BOOT === 'function') window.SP_BOOT(data);
    });
  }

  function attempt(code, remember) {
    if (!window.isSecureContext || !window.crypto || !crypto.subtle) { showGate('crypto'); return; }
    setBusy(true);
    clearErr();
    unwrapDataKey(code).then(function (res) {
      return boot(res.entry, res.dataKey, code, remember);
    }).then(function () {
      setBusy(false);
    }).catch(function () {
      setBusy(false);
      showGate('bad');
    });
  }

  function logout() {
    if (window.confirm && !window.confirm(tx('switch_q'))) return;
    store(LS_SESSION, null);
    SESSION = null;
    window.SP_SESSION = null;
    location.reload();
  }

  window.SP_GATE = { logout: logout, get session() { return SESSION; } };

  /* ---------------------------------------------------------- start */
  function onReady() {
    lang = store(LS_LANG) || 'mm';

    $('#gateLang').onclick = function (e) {
      var b = e.target.closest('button[data-lang]');
      if (!b) return;
      setLang(b.dataset.lang);
      if ($('#gate').hidden === false) clearErr();
    };

    $('#gCode').oninput = function () {
      if (!this.value) return;
      clearErr();
    };

    $('#gForm').onsubmit = function (e) {
      e.preventDefault();
      if (busy) return;
      var code = normalize($('#gCode').value);
      if (!code) { showGate('empty'); return; }
      attempt(code, $('#gRemember').checked);
    };

    var remember = store(LS_REMEMBER);
    $('#gRemember').checked = remember === null ? true : !!remember;

    setLang(lang);

    var saved = store(LS_SESSION);
    if (saved && saved.code) {
      $('#gCode').value = saved.code;
      setBusy(true);
      attempt(normalize(saved.code), true);
      return;
    }
    showGate(null);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', onReady);
  else onReady();
})();
