/* ============================================================
   SeoulPick · Yangon wholesale catalog
   ============================================================ */
(function () {
  'use strict';

  var D = window.SP_DATA;
  var P = D.products;
  var BY_NO = {};
  P.forEach(function (p) { BY_NO[p.no] = p; });

  /* ---------------------------------------------------------- i18n */
  var I18N = {
    mm: {
      hero_eyebrow: 'K-BEAUTY · INNER BEAUTY · 2026',
      hero_title: 'K-Beauty လက်ကား စျေးနှုန်း — ရန်ကုန်',
      hero_sub: 'TikTok နှင့် ဆိုင်ပိုင်ရှင်များအတွက် ပါတနာ ပေးသွင်းစျေး · ပစ္စည်း ၃၃ မျိုး',
      stat_items: 'ကုန်ပစ္စည်း',
      stat_tiers: 'အဆင့် စနစ်',
      stat_currency: 'ကျပ်ငွေသာ',
      search: 'ကုန်ပစ္စည်း ရှာဖွေရန် (အမည် / brand)',
      all: 'အားလုံး',
      supply: 'ပေးသွင်းစျေး',
      retail: 'လက်လီစျေး',
      detail_title: 'ကုန်ပစ္စည်း အသေးစိတ်',
      save_more: 'ပိုများဝယ်ရင် ပိုသက်သာ',
      items_short: 'မျိုး',
      added: 'အမှာစာထဲ ထည့်ပြီးပါပြီ',
      add: 'အမှာစာထဲ ထည့်ရန်',
      tier_table: 'လစဉ် ဝယ်ယူ အရေအတွက် အဆင့် ၅ ဆင့်',
      tier_table_sub: 'ပေးသွင်းစျေး (Ks)',
      tier_qty: 'လစဉ် အရေအတွက်',
      current: 'လက်ရှိ',
      tier_rule: 'အဆင့်ကို ပစ္စည်းတစ်မျိုးချင်းမဟုတ်ဘဲ ထိုလ၏ စုစုပေါင်း ဝယ်ယူအရေအတွက်ဖြင့် သတ်မှတ်ပါသည်။',
      qty: 'အရေအတွက်',
      order: 'အမှာစာ',
      order_sheet: 'အမှာစာ ဖွဲ့စည်းရန်',
      cart_title: 'အမှာစာ',
      cart_sub: 'အမှာစာ အတည်ပြုရန် အချက်အလက် ဖြည့်ပါ',
      clear: 'ရှင်းလင်းရန်',
      empty_cart: 'အမှာစာ မရှိသေးပါ။ ကုန်ပစ္စည်း ရွေးချယ်ပြီး + ကို နှိပ်ပါ။',
      buyer: 'ဝယ်ယူသူ အမည်',
      buyer_ph: 'အမည် အပြည့်အစုံ',
      shop: 'ဆိုင်အမည် / Channel',
      shop_ph: 'ဥပမာ) Glow Yangon TikTok',
      phone: 'ဖုန်း / Viber',
      phone_ph: '09 xxx xxx xxx',
      township: 'မြို့နယ် (ရန်ကုန်)',
      township_ph: 'ဥပမာ) လှိုင်၊ စမ်းချောင်း',
      notes: 'မှတ်ချက်',
      notes_ph: 'ပို့ဆောင်ချိန်၊ ငွေပေးချေမှု စည်းကမ်း စသဖြင့်',
      subtotal: 'ကုန်ပစ္စည် စုစုပေါင်း',
      tier_line: 'အဆင့် လျှော့စျေး',
      total: 'စုစုပေါင်း',
      copy: 'အမှာစာ ကူးယူရန်',
      email: 'အီးမေးလ် ဖြင့် ပို့ရန်',
      copied: 'အမှာစာ ကူးယူပြီးပါပြီ — Viber တွင် paste လုပ်ပါ',
      copy_fail: 'ကူးယူ၍ မရပါ — အောက်ပါ စာသားကို ကိုယ်တိုင် ရွေးယူပါ',
      need_name: 'ဝယ်ယူသူ အမည် ဖြည့်ပါ',
      need_phone: 'ဖုန်း / Viber နံပါတ် ဖြည့်ပါ',
      next_tier: 'အဆင့်တိုးရန် {n} လုံး ထပ်ဝယ်ပါက {t} သို့ ရောက်ပါမည်',
      top_tier: 'အမြင့်ဆုံး အဆင့် (T5) ရောက်နေပါသည်',
      qty_total: 'စုစုပေါင်း အရေအတွက်',
      piece: 'လုံး',
      search_empty: 'ရှာမတွေ့ပါ',
      search_empty_sub: 'အခြား စကားလုံး သို့မဟုတ် အမျိုးအစား ရွေးပါ',
      sourcing_kicker: 'BEYOND THIS CATALOG',
      sourcing_title: 'စာရင်းတွင် မပါသော ကိုရီးယား ပစ္စည်းများ',
      sourcing_body: 'လိုချင်သော ကုန်ပစ္စည်း အမည်၊ ဓာတ်ပုံ သို့မဟုတ် လင့်ခ် ပို့ပါ — သီးသန့် စျေးနှုန်း (custom quote) ပြန်ပို့ပါမည်။',
      sourcing_cta: 'စျေးနှုန်း တောင်းရန်',
      quote_subject: 'SeoulPick custom quote request',
      tiktok_dm: 'TikTok DM',
      email_me: 'အီးမေးလ်',
      foot_note: 'ဈေးနှုန်းများသည် ၂၀၂၆ ခုနှစ် နိုဝင်ဘာ ၁၄ ရက် အနေအထား ဖြစ်ပါသည်။ ပို့ဆောင်ခြင်းနှင့် ငွေပေးချေမှု စည်းကမ်းများကို ပါတနာအလိုက် ညှိနှိုင်းပါသည်။',
      in_cart: 'အမှာစာထဲ',
      clear_confirm: 'အမှာစာ အားလုံး ရှင်းလင်းမလား?',
      summary_title: 'SEOULPICK · အမှာစာ',
      lbl_name: 'အမည်',
      lbl_shop: 'ဆိုင်/Channel',
      lbl_phone: 'ဖုန်း/Viber',
      lbl_township: 'မြို့နယ်',
      lbl_note: 'မှတ်ချက်',
      lbl_total_qty: 'စုစုပေါင်း',
      lbl_tier: 'အဆင့်',
      lbl_total: 'စုစုပေါင်း ကျသင့်ငွေ',
      mail_subject: 'SeoulPick အမှာစာ',
      sect_beauty: 'အလှကုန် · K-Beauty',
      sect_inner: 'ကျန်းမာရေး ဖြည့်စွက်စာ'
    },
    en: {
      hero_eyebrow: 'K-BEAUTY · INNER BEAUTY · 2026',
      hero_title: 'K-Beauty wholesale, priced for Yangon',
      hero_sub: 'Partner supply pricing for TikTok sellers and shop owners · 33 items',
      stat_items: 'products',
      stat_tiers: 'tier system',
      stat_currency: 'in Kyat',
      search: 'Search products (name or brand)',
      all: 'All',
      supply: 'Supply price',
      retail: 'Retail',
      detail_title: 'Product details',
      save_more: 'Save more in bulk',
      items_short: 'items',
      added: 'Added to your order',
      add: 'Add to order',
      tier_table: 'Monthly volume — 5 supply tiers',
      tier_table_sub: 'Supply price (Ks)',
      tier_qty: 'Monthly quantity',
      current: 'Current',
      tier_rule: 'Your tier is set by the total quantity of all items in one month, not by item.',
      qty: 'Quantity',
      order: 'Order',
      order_sheet: 'Build your order',
      cart_title: 'Your order',
      cart_sub: 'Add your details to confirm',
      clear: 'Clear',
      empty_cart: 'Your order is empty. Tap + on any product to start.',
      buyer: 'Buyer name',
      buyer_ph: 'Full name',
      shop: 'Shop / channel',
      shop_ph: 'e.g. Glow Yangon TikTok',
      phone: 'Phone / Viber',
      phone_ph: '09 xxx xxx xxx',
      township: 'Township (Yangon)',
      township_ph: 'e.g. Hlaing, Sanchaung',
      notes: 'Notes',
      notes_ph: 'Delivery time, payment terms…',
      subtotal: 'Items at T1',
      tier_line: 'Tier discount',
      total: 'Total',
      copy: 'Copy order summary',
      email: 'Send order by email',
      copied: 'Order copied — paste it into Viber',
      copy_fail: 'Could not copy — select the text below',
      need_name: 'Please add the buyer name',
      need_phone: 'Please add a phone / Viber number',
      next_tier: '{n} more pcs reaches {t}',
      top_tier: 'You are at the top tier (T5)',
      qty_total: 'Total quantity',
      piece: 'pcs',
      search_empty: 'No products found',
      search_empty_sub: 'Try another word or category',
      sourcing_kicker: 'BEYOND THIS CATALOG',
      sourcing_title: 'Need a Korean product that is not listed?',
      sourcing_body: 'Send the product name, a photo or a link — we reply with a custom quote.',
      sourcing_cta: 'Request a quote',
      quote_subject: 'SeoulPick custom quote request',
      tiktok_dm: 'TikTok DM',
      email_me: 'Email',
      foot_note: 'Prices as of 14 Nov 2026. Delivery and payment terms are agreed per partner.',
      in_cart: 'in order',
      clear_confirm: 'Clear the whole order?',
      summary_title: 'SEOULPICK · ORDER',
      lbl_name: 'Name',
      lbl_shop: 'Shop/Channel',
      lbl_phone: 'Phone/Viber',
      lbl_township: 'Township',
      lbl_note: 'Note',
      lbl_total_qty: 'Total',
      lbl_tier: 'Tier',
      lbl_total: 'Total amount',
      mail_subject: 'SeoulPick order',
      sect_beauty: 'Beauty · K-Beauty',
      sect_inner: 'Inner Beauty · Supplements'
    },
    zh: {
      hero_eyebrow: 'K-BEAUTY · INNER BEAUTY · 2026',
      hero_title: '韩国美妆批发价 · 仰光',
      hero_sub: 'TikTok 卖家与门店的供货价，共 33 款',
      stat_items: '款商品',
      stat_tiers: '阶梯价',
      stat_currency: '仅缅元',
      search: '搜索商品（名称 / 品牌）',
      all: '全部',
      supply: '批发价',
      retail: '零售价',
      detail_title: '商品详情',
      save_more: '批量越大越便宜',
      items_short: '款',
      added: '已加入订单',
      add: '加入订单',
      tier_table: '月度采购量 5 级批发价',
      tier_table_sub: '批发价（Ks）',
      tier_qty: '月采购量',
      current: '当前',
      tier_rule: '等级按当月全部商品合计采购量计算，不是按单个商品计算。',
      qty: '数量',
      order: '订单',
      order_sheet: '填写订单',
      cart_title: '订单',
      cart_sub: '请填写信息以确认订单',
      clear: '清空',
      empty_cart: '订单还是空的，点击商品上的 + 加入。',
      buyer: '下单人姓名',
      buyer_ph: '全名',
      shop: '门店 / 渠道',
      shop_ph: '例：Glow Yangon TikTok',
      phone: '电话 / Viber',
      phone_ph: '09 xxx xxx xxx',
      township: '镇区（仰光）',
      township_ph: '例：Hlaing、Sanchaung',
      notes: '备注',
      notes_ph: '送货时间、付款条件等',
      subtotal: '商品小计',
      tier_line: '等级优惠',
      total: '总计',
      copy: '复制订单',
      email: '发送邮件',
      copied: '已复制订单 — 粘贴到 Viber 即可',
      copy_fail: '无法复制 — 请手动选取下方文字',
      need_name: '请填写下单人姓名',
      need_phone: '请填写电话 / Viber 号码',
      next_tier: '再买 {n} 件即达 {t}',
      top_tier: '已是最高等级（T5）',
      qty_total: '总数量',
      piece: '件',
      search_empty: '没有找到商品',
      search_empty_sub: '换个关键词或选择其他分类',
      sourcing_kicker: 'BEYOND THIS CATALOG',
      sourcing_title: '需要目录里没有的韩国产品？',
      sourcing_body: '发来产品名称、照片或链接 — 我们回复专属报价。',
      sourcing_cta: '索取报价',
      quote_subject: 'SeoulPick 报价请求',
      tiktok_dm: 'TikTok DM',
      email_me: '邮箱',
      foot_note: '价格截至 2026 年 11 月 14 日。配送与付款条件按合作伙伴分别商定。',
      in_cart: '已加入',
      clear_confirm: '要清空全部订单吗？',
      summary_title: 'SEOULPICK · 订单',
      lbl_name: '姓名',
      lbl_shop: '门店/渠道',
      lbl_phone: '电话/Viber',
      lbl_township: '镇区',
      lbl_note: '备注',
      lbl_total_qty: '总数量',
      lbl_tier: '等级',
      lbl_total: '总计金额',
      mail_subject: 'SeoulPick 订单',
      sect_beauty: '美妆 · K-Beauty',
      sect_inner: '内服美容 · 健康食品'
    }
  };

  var TIER_ORDER = ['T1', 'T2', 'T3', 'T4', 'T5'];
  var TIER_MIN = { T1: 1, T2: 50, T3: 150, T4: 300, T5: 500 };
  var DISC = { T1: 0 };           // display only; per-item discount is computed from the ladder
  var LS_CART = 'sp_cart_v1';
  var LS_BUYER = 'sp_buyer_v1';
  var LS_LANG = 'sp_lang_v1';

  var state = {
    lang: 'mm',
    cat: 'all',
    q: '',
    cart: {},     // no -> qty
    buyer: {},
    detailNo: null,
    sheet: null
  };

  /* ---------------------------------------------------------- utils */
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function t(k) { return (I18N[state.lang] && I18N[state.lang][k]) || I18N.en[k] || k; }
  function nf(n) { return Number(n).toLocaleString('en-US'); }
  // brand label: on the Chinese screen prefer the glossed Chinese brand
  function brandOf(p) { return (state.lang === 'zh' && p.brandZh) ? p.brandZh : p.brand; }
  function fmt(n) { return nf(Math.round(n)); }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function store(key, val) {
    try {
      if (val === undefined) { var v = localStorage.getItem(key); return v ? JSON.parse(v) : null; }
      localStorage.setItem(key, JSON.stringify(val));
    } catch (e) { return null; }
  }

  function cartQty() {
    var n = 0;
    for (var k in state.cart) n += state.cart[k];
    return n;
  }
  function tierFor(q) {
    if (q >= 500) return 'T5';
    if (q >= 300) return 'T4';
    if (q >= 150) return 'T3';
    if (q >= 50) return 'T2';
    return 'T1';
  }
  function priceOf(p, tier) { return tier === 'T1' ? p.s1 : p.tiers[tier]; }
  function discOf(p, tier) {
    if (tier === 'T1') return 0;
    return Math.round((1 - p.tiers[tier] / p.s1) * 100);
  }
  function curTier() { return tierFor(cartQty()); }
  function cartLines() {
    var tier = curTier(), out = [];
    Object.keys(state.cart).forEach(function (no) {
      var p = BY_NO[no], q = state.cart[no];
      if (!p || !q) return;
      var unit = priceOf(p, tier);
      out.push({ p: p, q: q, unit: unit, line: unit * q, base: p.s1 * q });
    });
    out.sort(function (a, b) { return a.p.no - b.p.no; });
    return out;
  }
  function cartTotals() {
    var lines = cartLines(), tier = curTier();
    var total = 0, base = 0, qty = 0;
    lines.forEach(function (l) { total += l.line; base += l.base; qty += l.q; });
    return { lines: lines, tier: tier, total: total, base: base, saving: base - total, qty: qty };
  }

  /* ---------------------------------------------------------- render: chips */
  function renderCats() {
    var host = $('#cats');
    host.innerHTML = D.cats.map(function (c) {
      var n = c.id === 'all' ? P.length : P.filter(function (p) { return p.cat === c.id; }).length;
      return '<button class="cat' + (state.cat === c.id ? ' on' : '') + '" data-cat="' + c.id + '">' +
        esc(c[state.lang] || c.en) + '<span class="n">' + n + '</span></button>';
    }).join('');
  }

  /* ---------------------------------------------------------- render: grid */
  function matches(p) {
    if (state.cat !== 'all' && p.cat !== state.cat) return false;
    if (!state.q) return true;
    var q = state.q.toLowerCase();
    return (p.brand + ' ' + (p.brandZh || '') + ' ' +
      p.name.mm + ' ' + p.name.en + ' ' + p.name.zh + ' ' +
      p.sp.mm + ' ' + p.sp.en + ' ' + p.sp.zh + ' ' +
      p.spec.en + ' ' + p.spec.zh + ' #' + p.no).toLowerCase().indexOf(q) >= 0;
  }

  function card(p, tier) {
    var q = state.cart[p.no] || 0;
    var price = priceOf(p, tier);
    var d = discOf(p, tier);
    var pill = tier === 'T1'
      ? 'T1 · ' + fmt(price)
      : tier + ' −' + d + '%';
    return '<article class="card' + (q ? ' has' : '') + '" data-no="' + p.no + '">' +
      '<button class="card-main" data-open="' + p.no + '" aria-label="' + esc(p.name[state.lang]) + '">' +
        '<div class="thumb"><img src="' + p.img + '" alt="' + esc(p.name.en) + '" loading="lazy" width="760" height="760"></div>' +
        '<div class="cbody">' +
          '<div class="cbrand">' + esc(brandOf(p)) + '</div>' +
          '<h3 class="cname">' + esc(p.name[state.lang]) + '</h3>' +
          '<div class="cspec">' + esc(p.spec[state.lang]) + '</div>' +
          '<div class="cprices">' +
            '<span class="price-main">' + fmt(price) + '</span><span class="cur">Ks</span>' +
            '<span class="cretail">' + fmt(p.R) + '</span>' +
          '</div>' +
        '</div>' +
      '</button>' +
      '<div class="cfoot">' +
        '<span class="tierpill' + (tier !== 'T1' ? ' up' : '') + '">' + pill + '</span>' +
        '<div class="stepper">' +
          '<button data-step="-1" data-no="' + p.no + '" aria-label="-"' + (q ? '' : ' disabled') + '>−</button>' +
          '<span class="q' + (q ? '' : ' zero') + '">' + q + '</span>' +
          '<button data-step="1" data-no="' + p.no + '" aria-label="+">+</button>' +
        '</div>' +
      '</div>' +
    '</article>';
  }

  function renderGrid() {
    var tier = curTier();
    var list = P.filter(matches);
    // beauty first, inner beauty next (same order as the source catalog)
    list.sort(function (a, b) { return a.no - b.no; });
    $('#grid').innerHTML = list.map(function (p) { return card(p, tier); }).join('');
    $('#empty').classList.toggle('on', list.length === 0);
    $('#resultCount').textContent = list.length + ' ' + t('items_short');
  }

  /* ---------------------------------------------------------- cart bar */
  function renderCartBar() {
    var T = cartTotals();
    var bar = $('#cartbar');
    bar.classList.toggle('on', T.qty > 0);
    if (!T.qty) return;
    $('#cbCount').textContent = T.qty + ' ' + t('piece');
    $('#cbTier').textContent = T.tier;
    $('#cbTotal').textContent = fmt(T.total);
    $('#cbN').textContent = T.lines.length;
    document.body.style.paddingBottom = '';
  }

  /* ---------------------------------------------------------- detail sheet */
  function openDetail(no) {
    var p = BY_NO[no];
    if (!p) return;
    state.detailNo = no;
    var tier = curTier();
    var q = state.cart[no] || 0;
    var rows = TIER_ORDER.map(function (tr) {
      var pr = priceOf(p, tr), d = discOf(p, tr);
      var isCur = tr === tier;
      return '<div class="trow' + (isCur ? ' cur' : '') + '">' +
        '<span class="tid">' + tr + '</span>' +
        '<span class="tqty">' + D.tiers[TIER_ORDER.indexOf(tr)].qty + ' ' + t('piece') +
          (isCur ? ' · <b style="color:var(--coral-deep)">' + t('current') + '</b>' : '') + '</span>' +
        '<span class="tprice">' + fmt(pr) + (d ? '<em>−' + d + '%</em>' : '') + '</span>' +
      '</div>';
    }).join('');

    $('#detailTitle').textContent = t('detail_title');
    $('#detailSub').textContent = brandOf(p) + ' · ' + t('supply') + ' ' + tier;

    $('#detailBody').innerHTML =
      '<div class="d-top">' +
        '<div class="d-hero"><img src="' + p.img + '" alt="' + esc(p.name.en) + '"></div>' +
        '<div class="d-info">' +
          '<div class="d-brand">' + esc(brandOf(p)) + '</div>' +
          '<h2 class="d-name">' + esc(p.name[state.lang]) + '</h2>' +
          '<div class="d-spec">' + esc(p.spec[state.lang]) + '</div>' +
        '</div>' +
      '</div>' +
      '<p class="d-pitch">' + esc(p.sp[state.lang]) + '</p>' +
      '<p class="d-benefit">' + esc(p.ef[state.lang]) + '</p>' +
      '<div class="d-price">' +
        '<div><div class="lbl">' + t('supply') + ' · ' + tier + '</div>' +
        '<div class="val" id="dPrice">' + fmt(priceOf(p, tier)) + '<small>Ks</small></div></div>' +
        '<div class="retail">' + t('retail') + '<b>' + fmt(p.R) + ' Ks</b></div>' +
      '</div>' +
      '<div class="tiers">' +
        '<div class="tiers-h"><b>' + t('tier_table') + '</b><span>' + t('tier_table_sub') + '</span></div>' +
        rows +
      '</div>' +
      '<p class="tier-note">' + t('tier_rule') + '</p>' +
      '<div class="qtyline">' +
        '<span class="lbl">' + t('qty') + '</span>' +
        '<div class="big-stepper">' +
          '<button id="dMinus"' + (q ? '' : ' disabled') + '>−</button>' +
          '<input id="dQty" type="number" inputmode="numeric" min="0" value="' + q + '">' +
          '<button id="dPlus">+</button>' +
        '</div>' +
      '</div>';

    $('#detailFoot').innerHTML =
      '<button class="btn btn-primary" id="dAdd">' +
        t('add') + ' · <span id="dSum">' + fmt(priceOf(p, tier) * (q || 1)) + '</span> Ks' +
        (q ? ' <span style="opacity:.65;font-weight:600;font-size:12px">(' + q + ')</span>' : '') + '</button>';

    $('#dMinus').onclick = function () { setQty(no, (state.cart[no] || 0) - 1, true); };
    $('#dPlus').onclick = function () { setQty(no, (state.cart[no] || 0) + 1, true); };
    $('#dQty').oninput = function () {
      var v = Math.max(0, Math.min(9999, parseInt(this.value || '0', 10) || 0));
      state.cart[no] = v; if (!v) delete state.cart[no];
      persist(); syncDetail(); renderGrid(); renderCartBar(); renderCart();
    };
    $('#dAdd').onclick = function () {
      if (!state.cart[no]) setQty(no, 1, true);
      toast(t('added'));
      closeSheets();
    };

    openSheet('detail');
  }

  function syncDetail() {
    var no = state.detailNo; if (!no) return;
    var p = BY_NO[no], q = state.cart[no] || 0, tier = curTier();
    var mi = $('#dMinus'); if (mi) mi.disabled = !q;
    var iq = $('#dQty'); if (iq && document.activeElement !== iq) iq.value = q;
    var pr = $('#dPrice'); if (pr) pr.innerHTML = fmt(priceOf(p, tier)) + '<small>Ks</small>';
    var ds = $('#dSum'); if (ds) ds.textContent = fmt(priceOf(p, tier) * (q || 1));
    var lbl = $('#dAdd');
    if (lbl) lbl.firstChild.nodeValue = t('add') + ' · ';
  }

  /* ---------------------------------------------------------- cart sheet */
  function renderCart() {
    var T = cartTotals();
    var body = $('#cartBody');
    var b = state.buyer;

    if (!T.qty) {
      body.innerHTML = '<div class="cart-empty">' + t('empty_cart') + '</div>';
      $('#cartFoot').innerHTML = '';
      return;
    }

    // tier ladder
    var tier = T.tier, nextT = null;
    for (var i = 0; i < TIER_ORDER.length; i++) {
      if (TIER_MIN[TIER_ORDER[i]] > T.qty) { nextT = TIER_ORDER[i]; break; }
    }
    var pct = nextT ? Math.min(100, Math.round(T.qty / TIER_MIN[nextT] * 100)) : 100;
    var ladderTxt = nextT
      ? t('next_tier').replace('{n}', TIER_MIN[nextT] - T.qty).replace('{t}', nextT)
      : t('top_tier');

    var lines = T.lines.map(function (l) {
      var d = discOf(l.p, tier);
      return '<div class="ci">' +
        '<div class="ci-img"><img src="' + l.p.img + '" alt=""></div>' +
        '<div class="ci-mid">' +
          '<div class="ci-brand">' + esc(brandOf(l.p)) + '</div>' +
          '<div class="ci-name">' + esc(l.p.name[state.lang]) + '</div>' +
          '<div class="ci-unit">' + fmt(l.unit) + ' Ks × ' + l.q + (d ? ' · −' + d + '%' : '') + '</div>' +
        '</div>' +
        '<div class="ci-right">' +
          '<div class="ci-total">' + fmt(l.line) + '</div>' +
          '<div class="stepper">' +
            '<button data-step="-1" data-no="' + l.p.no + '">−</button>' +
            '<span class="q">' + l.q + '</span>' +
            '<button data-step="1" data-no="' + l.p.no + '">+</button>' +
          '</div>' +
        '</div>' +
      '</div>';
    }).join('');

    body.innerHTML =
      '<div class="ladder">' +
        '<div class="ladder-top"><b>' + tier + ' · ' + T.qty + ' ' + t('piece') + '</b>' +
          '<span>' + ladderTxt + '</span></div>' +
        '<div class="ladder-bar"><i style="width:' + pct + '%"></i></div>' +
        '<div class="ladder-note">' + t('tier_rule') + '</div>' +
      '</div>' +
      '<div class="cart-sect"><h3>' + T.lines.length + ' ' + t('items_short') + ' · ' + T.qty + ' ' + t('piece') + '</h3>' + lines + '</div>' +
      '<div class="cart-sect"><h3>' + t('cart_sub') + '</h3>' +
        '<div class="form-row">' +
          '<div class="field" id="f-buyer"><label>' + t('buyer') + '</label>' +
            '<input id="i-buyer" value="' + esc(b.buyer || '') + '" placeholder="' + esc(t('buyer_ph')) + '"></div>' +
          '<div class="field" id="f-phone"><label>' + t('phone') + '</label>' +
            '<input id="i-phone" inputmode="tel" value="' + esc(b.phone || '') + '" placeholder="' + esc(t('phone_ph')) + '"></div>' +
        '</div>' +
        '<div class="field"><label>' + t('shop') + '</label>' +
          '<input id="i-shop" value="' + esc(b.shop || '') + '" placeholder="' + esc(t('shop_ph')) + '"></div>' +
        '<div class="field"><label>' + t('township') + '</label>' +
          '<input id="i-town" value="' + esc(b.town || '') + '" placeholder="' + esc(t('township_ph')) + '"></div>' +
        '<div class="field"><label>' + t('notes') + '</label>' +
          '<textarea id="i-note" placeholder="' + esc(t('notes_ph')) + '">' + esc(b.note || '') + '</textarea></div>' +
      '</div>';

    $('#cartFoot').innerHTML =
      '<div class="sum-mini sum">' +
        '<div class="sum-row"><span>' + t('subtotal') + ' (T1)</span><b>' + fmt(T.base) + ' Ks</b></div>' +
        (T.saving ? '<div class="sum-row save"><span>' + t('tier_line') + ' · ' + tier + '</span><b>−' + fmt(T.saving) + ' Ks</b></div>' : '') +
        '<div class="sum-total"><span class="l">' + t('total') + ' · ' + T.qty + ' ' + t('piece') + '</span>' +
          '<span class="v">' + fmt(T.total) + '<small>Ks</small></span></div>' +
      '</div>' +
      '<div class="btn-row">' +
        '<button class="btn btn-primary" id="btnCopy">' + t('copy') + '</button>' +
        '<a class="btn btn-ghost" id="btnMail" href="' + mailHref() + '">' + t('email') + '</a>' +
      '</div>';

    // field bindings
    [['i-buyer', 'buyer'], ['i-phone', 'phone'], ['i-shop', 'shop'], ['i-town', 'town'], ['i-note', 'note']].forEach(function (pair) {
      var el = $('#' + pair[0]); if (!el) return;
      el.oninput = function () {
        state.buyer[pair[1]] = el.value; store(LS_BUYER, state.buyer);
        if (el.value.trim()) { var f = el.closest('.field'); if (f) f.classList.remove('err'); }
        var m = $('#btnMail'); if (m) m.setAttribute('href', mailHref());
      };
    });
    $('#btnCopy').onclick = doCopy;
    $('#btnMail').onclick = function (e) { if (!validate()) { e.preventDefault(); } };
  }

  /* ---------------------------------------------------------- order text */
  function validate() {
    var ok = true, b = state.buyer || {};
    if (!(b.buyer || '').trim()) { var f1 = $('#f-buyer'); if (f1) f1.classList.add('err'); ok = false; }
    if (!(b.phone || '').trim()) { var f2 = $('#f-phone'); if (f2) f2.classList.add('err'); ok = false; }
    if (!ok) toast(!(b.buyer || '').trim() ? t('need_name') : t('need_phone'));
    return ok;
  }

  function orderText() {
    var T = cartTotals(), b = state.buyer || {}, L = [];
    L.push(t('summary_title'));
    L.push('--------------------------------');
    if (b.buyer) L.push(t('lbl_name') + ': ' + b.buyer);
    if (b.shop) L.push(t('lbl_shop') + ': ' + b.shop);
    if (b.phone) L.push(t('lbl_phone') + ': ' + b.phone);
    if (b.town) L.push(t('lbl_township') + ': ' + b.town);
    L.push('');
    T.lines.forEach(function (l, i) {
      L.push((i + 1) + ') ' + brandOf(l.p) + ' — ' + l.p.name[state.lang]);
      L.push('    ' + l.q + ' × ' + fmt(l.unit) + ' = ' + fmt(l.line) + ' Ks');
    });
    L.push('');
    L.push(t('lbl_total_qty') + ': ' + T.qty + ' ' + t('piece') + '  |  ' + t('lbl_tier') + ' ' + T.tier);
    L.push(t('lbl_total') + ': ' + fmt(T.total) + ' Ks');
    if (T.saving) L.push('(' + t('tier_line') + ' −' + fmt(T.saving) + ' Ks)');
    if (b.note) { L.push(''); L.push(t('lbl_note') + ': ' + b.note); }
    L.push('');
    L.push('SeoulPick · ' + D.contact.tiktok + ' · ' + D.contact.email);
    return L.join('\n');
  }

  function doCopy() {
    if (!validate()) return;
    var txt = orderText();
    function fallback() {
      var ta = document.createElement('textarea');
      ta.value = txt; ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy'); toast(t('copied')); }
      catch (e) { toast(t('copy_fail')); }
      document.body.removeChild(ta);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(txt).then(function () { toast(t('copied')); }, fallback);
    } else fallback();
  }

  function mailHref() {
    var subj = t('mail_subject') + ' — ' + ((state.buyer && state.buyer.buyer) || '') +
      ' · ' + cartQty() + ' ' + t('piece');
    return 'mailto:' + D.contact.email + '?subject=' + encodeURIComponent(subj) +
      '&body=' + encodeURIComponent(orderText());
  }

  /* ---------------------------------------------------------- sheets */
  function openSheet(name) {
    state.sheet = name;
    $('#backdrop').classList.add('on');
    $('#' + name + 'Sheet').classList.add('on');
    document.body.style.overflow = 'hidden';
    if (name === 'cart') renderCart();
  }
  function closeSheets() {
    state.sheet = null;
    $('#backdrop').classList.remove('on');
    $$('.sheet').forEach(function (s) { s.classList.remove('on'); });
    document.body.style.overflow = '';
    setTimeout(function () { if (!state.sheet) state.detailNo = null; }, 340);
  }

  /* ---------------------------------------------------------- mutation */
  function setQty(no, q, fromDetail) {
    q = Math.max(0, Math.min(9999, q | 0));
    if (q) state.cart[no] = q; else delete state.cart[no];
    persist();
    renderGrid(); renderCartBar();
    if (state.sheet === 'cart') renderCart();
    if (fromDetail) syncDetail();
  }
  function persist() { store(LS_CART, state.cart); }

  var toastT = null;
  function toast(msg) {
    var el = $('#toast');
    el.textContent = msg; el.classList.add('on');
    clearTimeout(toastT);
    toastT = setTimeout(function () { el.classList.remove('on'); }, 2200);
  }

  /* ---------------------------------------------------------- lang */
  function applyLang(l) {
    state.lang = l;
    store(LS_LANG, l);
    document.documentElement.lang = l === 'zh' ? 'zh-Hans' : l;
    $$('.lang button').forEach(function (b) { b.classList.toggle('on', b.dataset.lang === l); });
    $('#heroTitle').textContent = t('hero_title');
    $('#heroSub').textContent = t('hero_sub');
    $('#heroEyebrow').textContent = t('hero_eyebrow');
    $('#stItems').textContent = t('stat_items');
    $('#stTiers').textContent = t('stat_tiers');
    $('#stCur').textContent = t('stat_currency');
    $('#q').placeholder = t('search');
    $('#copyLink').textContent = t('email_me');
    $('#copyMail').textContent = D.contact.email;
    $('#cartTitle').textContent = t('cart_title');
    $('#cartSub').textContent = t('cart_sub');
    $('#cbOrderLabel').textContent = t('order');
    $('#sourceKicker').textContent = t('sourcing_kicker');
    $('#sourceTitle').textContent = t('sourcing_title');
    $('#sourceBody').textContent = t('sourcing_body');
    $('#sourceCta').textContent = t('sourcing_cta');
    $('#sourceCta').setAttribute('href',
      'mailto:' + D.contact.email + '?subject=' + encodeURIComponent(t('quote_subject')));
    $('#footNote').textContent = t('foot_note');
    renderCats(); renderGrid(); renderCartBar(); renderCart();
    if (state.detailNo) { var no = state.detailNo; openDetail(no); }
  }

  /* ---------------------------------------------------------- init */
  function init() {
    state.lang = store(LS_LANG) || 'mm';
    state.cart = store(LS_CART) || {};
    state.buyer = store(LS_BUYER) || {};

    applyLang(state.lang);

    $('#cats').onclick = function (e) {
      var b = e.target.closest('.cat'); if (!b) return;
      state.cat = b.dataset.cat; renderCats(); renderGrid();
      window.scrollTo({ top: $('#tools').offsetTop - 56, behavior: 'smooth' });
    };

    $('#q').oninput = function () {
      state.q = this.value.trim();
      $('#searchBox').classList.toggle('has', !!this.value);
      renderGrid();
    };
    $('#qClear').onclick = function () {
      $('#q').value = ''; state.q = ''; $('#searchBox').classList.remove('has'); renderGrid();
    };

    document.addEventListener('click', function (e) {
      var open = e.target.closest('[data-open]');
      if (open) { openDetail(+open.dataset.open); return; }
      var step = e.target.closest('[data-step]');
      if (step) {
        e.preventDefault(); e.stopPropagation();
        var no = +step.dataset.no;
        setQty(no, (state.cart[no] || 0) + (+step.dataset.step), state.sheet === 'detail' && state.detailNo === no);
        return;
      }
    });

    $('#lang').onclick = function (e) {
      var b = e.target.closest('button[data-lang]'); if (!b) return;
      applyLang(b.dataset.lang);
    };

    $('#cartClear').onclick = function () {
      if (!cartQty()) return;
      if (!window.confirm(t('clear_confirm'))) return;
      state.cart = {}; persist(); renderGrid(); renderCartBar(); renderCart();
    };

    $('#backdrop').onclick = closeSheets;
    $$('[data-close]').forEach(function (b) { b.onclick = closeSheets; });
    $('#cartbar').onclick = function () { openSheet('cart'); };

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && state.sheet) closeSheets();
    });

    renderCartBar();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
