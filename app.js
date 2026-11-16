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
      tier_table_sub: 'ပေးချေရမည့်စျေး (Ks) · ပွိုင့်',
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
      subtotal: 'ကုန်ပစ္စည် စုစုပေါင်း (T1)',
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
      sect_inner: 'ကျန်းမာရေး ဖြည့်စွက်စာ',
      kit_kicker: 'STARTER KIT',
      kit_title: 'ပထမဆုံး အမှာစာအတွက် ၁၀ မျိုး စတာတာ ကစ်',
      kit_sub: 'အမျိုးအစား ၅ ခုမှ ရွေးချယ်ထားသော ၁၀ မျိုး · T1 {n} Ks',
      kit_profit_line: 'ခန့်မှန်း အမြတ် +{p} Ks',
      kit_cta: 'ကြည့်ရန်',
      kit_sheet_title: 'ပထမဆုံး အမှာစာ ၁၀ မျိုး',
      kit_sheet_sub: 'အမျိုးအစား ၅ ခုမှ ၂ မျိုးစီ — စုစုပေါင်း ၁၀ မျိုး',
      kit_supply_total: 'T1 ပေးသွင်းစျေး စုစုပေါင်း',
      kit_retail_total: 'လက်လီစျေး စုစုပေါင်း',
      kit_profit: 'ခန့်မှန်း အမြတ်',
      kit_add_all: '၁၀ မျိုး တစ်မျိုးလျှင် ၁ ခု ထည့်ရန်',
      kit_add_bulk: 'တစ်မျိုးလျှင် ၅ ခု (၅၀ ခု) · T2 စျေး',
      kit_note: 'တစ်မျိုးလျှင် ၁ ခု ထည့်ပါသည်။ စုစုပေါင်း ၅၀ ခု ပြည့်လျှင် T2 ပေးသွင်းစျေး ဖြစ်ပါသည်။',
      kit_added: '၁၀ မျိုး အမှာစာထဲ ထည့်ပြီးပါပြီ',
      calc_title: 'အရောင်းဆိုင် အမြတ် တွက်စက်',
      calc_sub: 'ခန့်မှန်း ရောင်းစျေးထည့်ပြီး အမြတ်ကို ကြည့်ပါ',
      calc_tier: 'ပေးသွင်း အဆင့်',
      calc_sell: 'ခန့်မှန်း ရောင်းစျေး (Ks)',
      calc_supply: 'ပေးသွင်းစျေး',
      calc_margin_unit: 'တစ်ခုလျှင် အမြတ်',
      calc_margin_rate: 'အမြတ် ရာခိုင်နှုန်း',
      calc_m30: 'တစ်လ ၃၀ ခု ရောင်းလျှင်',
      calc_m50: 'တစ်လ ၅၀ ခု ရောင်းလျှင်',
      calc_reset: 'လက်လီစျေးသို့ ပြန်ထားရန်',
      calc_note: 'အမြတ် = ရောင်းစျေး − ပေးသွင်းစျေး (ပို့ဆောင်ခနှင့် ကော်မရှင် မပါဝင်ပါ)',
      calc_neg: 'ပေးသွင်းစျေးထက် နည်းနေပါသည်',
      /* --- ချက်ချင်း လျှော့စျေး + ပွိုင့် --- */
      pts_kicker: 'POINT REWARD',
      pts_title: 'ချက်ချင်း လျှော့စျေး + ပွိုင့်',
      pts_sub: 'လစဉ် ဝယ်ယူမှု များလေလေ ချက်ချင်း လျှော့စျေးနှင့် ပွိုင့် နှစ်မျိုးလုံး တိုးလာပါသည်။',
      pts_col_tier: 'အဆင့်',
      pts_col_qty: 'အရေအတွက်',
      pts_col_disc: 'လျှော့စျေး',
      pts_col_point: 'ပွိုင့်',
      pts_col_total: 'စုစုပေါင်း',
      pts_r1_t: 'နောက်အမှာစာမှ စတင် အသုံးပြုနိုင်သည်',
      pts_r1_b: 'အမှာစာ ငွေပမာဏ၏ အများဆုံး 50% အထိ ပွိုင့်ဖြင့် နုတ်နိုင်ပါသည်။',
      pts_r2_t: 'ငွေသားအဖြစ် ပြန်လဲ၍ မရပါ',
      pts_r2_b: 'ပွိုင့်ကို ငွေသားအဖြစ် ထုတ်ယူနိုင်မည် မဟုတ်ပါ။',
      pts_r3_t: '၆၀ ရက် အမှာစာ မရှိလျှင် ပျက်သွားမည်',
      pts_r3_b: '၆၀ ရက်အတွင်း အမှာစာ တစ်ခု ရှိလျှင် ပွိုင့်အားလုံး သက်တမ်း တိုးပါသည်။',
      pts_note: 'ပွိုင့်သည် ပွိုင့် နုတ်ပြီးနောက် အမှန်တကယ် ပေးချေသည့် ငွေပမာဏအပေါ် တွက်ချက်ပါသည်။',
      card_point: 'ပွိုင့် {p}%',
      lbl_disc: 'ချက်ချင်း လျှော့စျေး',
      lbl_use: 'ပွိုင့် နုတ်ယူမှု',
      lbl_paid: 'အပြီးသတ် ပေးချေရမည့်ငွေ',
      lbl_earn: 'ဤအမှာစာ ရရှိမည့် ပွိုင့်',
      pts_form_title: 'ပွိုင့် အသုံးပြုမှု',
      pts_form_hint: 'ဤအမှာစာ၏ အများဆုံး 50% ({c} Ks) အထိ ပွိုင့်ဖြင့် နုတ်နိုင်ပါသည်',
      pts_use_label: 'ပွိုင့် အသုံးပြုမည်',
      pts_max: 'အများဆုံး',
      pts_over: 'အများဆုံး 50% အထိသာ နုတ်နိုင်ပါသည်',
      calc_points: 'ပွိုင့် (တစ်ခုလျှင်)',
      calc_net: 'ပွိုင့် အပါအဝင် တစ်ခုလျှင်',
      kit_earn: 'ရရှိမည့် ပွိုင့်',
      earn_short: 'ပွိုင့်'
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
      tier_table_sub: 'Price paid (Ks) · points',
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
      sect_inner: 'Inner Beauty · Supplements',
      kit_kicker: 'STARTER KIT',
      kit_title: '10-SKU starter kit for your first order',
      kit_sub: 'Ten picks from five categories · T1 total {n} Ks',
      kit_profit_line: 'Est. profit +{p} Ks',
      kit_cta: 'View',
      kit_sheet_title: 'First-order 10-SKU starter kit',
      kit_sheet_sub: 'Two picks from each of the five categories — 10 SKUs',
      kit_supply_total: 'T1 supply total',
      kit_retail_total: 'Retail total',
      kit_profit: 'Estimated profit',
      kit_add_all: 'Add all 10 — one of each',
      kit_add_bulk: 'Add 5 of each (50 pcs) at T2',
      kit_note: 'Adds one of each. An order of 50 pcs or more moves to T2 supply pricing.',
      kit_added: '10 items added to your order',
      calc_title: 'Seller margin calculator',
      calc_sub: 'Enter your selling price to see the margin',
      calc_tier: 'Supply tier',
      calc_sell: 'Expected selling price (Ks)',
      calc_supply: 'Supply price',
      calc_margin_unit: 'Margin per pc',
      calc_margin_rate: 'Margin rate',
      calc_m30: '30 pcs / month',
      calc_m50: '50 pcs / month',
      calc_reset: 'Reset to retail',
      calc_note: 'Margin = selling price − supply price (delivery and fees excluded)',
      calc_neg: 'Below supply price',
      pts_kicker: 'POINT REWARD',
      pts_title: 'Instant discount + point rewards',
      pts_sub: 'The more you buy in a month, the bigger both the instant discount and the points.',
      pts_col_tier: 'Tier',
      pts_col_qty: 'Monthly volume',
      pts_col_disc: 'Instant discount',
      pts_col_point: 'Points',
      pts_col_total: 'Total',
      pts_r1_t: 'Usable from your next order',
      pts_r1_b: 'Up to 50% of an order amount can be paid with points.',
      pts_r2_t: 'No cash refund',
      pts_r2_b: 'Points cannot be converted into cash.',
      pts_r3_t: 'Expires after 60 days without an order',
      pts_r3_b: 'Any single order within 60 days extends the whole balance.',
      pts_note: 'Points are earned on the amount actually paid after redemption.',
      card_point: 'earn {p}%',
      lbl_disc: 'Instant discount',
      lbl_use: 'Points used',
      lbl_paid: 'Amount due',
      lbl_earn: 'Points you will earn',
      pts_form_title: 'Use your points',
      pts_form_hint: 'Up to 50% of this order ({c} Ks) can be paid with points',
      pts_use_label: 'Use points',
      pts_max: 'Max',
      pts_over: 'You can use up to 50% of the order',
      calc_points: 'Points per pc',
      calc_net: 'Net per pc incl. points',
      kit_earn: 'Points earned',
      earn_short: 'pts'
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
      tier_table_sub: '实付价（Ks）· 积分',
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
      subtotal: '商品小计（T1）',
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
      sect_inner: '内服美容 · 健康食品',
      kit_kicker: 'STARTER KIT',
      kit_title: '首次进货 10 款套装',
      kit_sub: '5 大分类精选 10 款 · T1 合计 {n} Ks',
      kit_profit_line: '预计毛利 +{p} Ks',
      kit_cta: '查看',
      kit_sheet_title: '首次进货 10 款套装',
      kit_sheet_sub: '5 大分类各 2 款，共 10 款',
      kit_supply_total: 'T1 批发价合计',
      kit_retail_total: '零售价合计',
      kit_profit: '预计毛利',
      kit_add_all: '10 款各 1 件，加入订单',
      kit_add_bulk: '每款 5 件（共 50 件）· T2 价',
      kit_note: '每款加入 1 件；满 50 件按 T2 批发价计算。',
      kit_added: '10 款已加入订单',
      calc_title: '卖家毛利计算器',
      calc_sub: '输入预计售价，立即看到毛利',
      calc_tier: '批发等级',
      calc_sell: '预计售价（Ks）',
      calc_supply: '批发价',
      calc_margin_unit: '每件净毛利',
      calc_margin_rate: '毛利率',
      calc_m30: '月销 30 件',
      calc_m50: '月销 50 件',
      calc_reset: '恢复零售价',
      calc_note: '毛利 = 售价 − 批发价（不含运费与平台费）',
      calc_neg: '低于批发价',
      pts_kicker: 'POINT REWARD',
      pts_title: '即时折扣 + 积分回馈',
      pts_sub: '月采购量越高，即时折扣与积分同时提高。',
      pts_col_tier: '等级',
      pts_col_qty: '月采购量',
      pts_col_disc: '即时折扣',
      pts_col_point: '积分',
      pts_col_total: '合计',
      pts_r1_t: '下次订单起可用',
      pts_r1_b: '每笔订单最高可用积分抵扣 50%。',
      pts_r2_t: '不可兑换现金',
      pts_r2_b: '积分不能兑换为现金。',
      pts_r3_t: '60 天未下单即失效',
      pts_r3_b: '60 天内下单一次，全部积分自动延期。',
      pts_note: '积分按抵扣后实付金额计算。',
      card_point: '积分 {p}%',
      lbl_disc: '即时折扣',
      lbl_use: '积分抵扣',
      lbl_paid: '应付金额',
      lbl_earn: '本单预计积分',
      pts_form_title: '使用积分',
      pts_form_hint: '本单最高可用积分抵扣 50%（{c} Ks）',
      pts_use_label: '使用积分',
      pts_max: '最多',
      pts_over: '最多只能抵扣订单的 50%',
      calc_points: '每件积分',
      calc_net: '含积分每件',
      kit_earn: '获得积分',
      earn_short: '积分'
    }
  };

  var TIER_ORDER = ['T1', 'T2', 'T3', 'T4', 'T5'];
  var TIER_MIN = { T1: 1, T2: 50, T3: 150, T4: 300, T5: 500 };
  // 하이브리드 리베이트 정책 — data.js(build_data.py ← work/mk/points_policy.py)와 동일한 숫자
  var PT = D.pointPolicy || {
    disc: { T1: 0, T2: 1, T3: 2, T4: 3, T5: 4 },
    point: { T1: 1, T2: 2, T3: 4, T4: 6, T5: 8 },
    maxUsePct: 50, expiryDays: 60
  };
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
    sheet: null,
    calcTier: null,   // supply tier being simulated in the margin calculator
    calcSell: null,   // seller's expected selling price (Ks)
    calcManual: false // true once the seller picked a tier by hand
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
  function discOf(p, tier) { return PT.disc[tier] || 0; }
  function pointPct(tier) { return PT.point[tier] || 0; }
  function pointOf(amount, tier) { return Math.round(amount * pointPct(tier) / 100); }
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
    var cap = Math.floor(total * PT.maxUsePct / 100);
    var use = 0;
    if (state.buyer && state.buyer.usePoints && total > 0) {
      use = Math.min(Math.max(0, Math.round(state.buyer.pointsUse || 0)), cap);
    }
    var paid = total - use;
    return {
      lines: lines, tier: tier, total: total, base: base, qty: qty,
      saving: base - total, discPct: discOf(null, tier), pct: pointPct(tier),
      cap: cap, use: use, paid: paid, earn: pointOf(paid, tier)
    };
  }

  /* ---------------------------------------------------------- starter kit */
  var KIT = (D.starterKit && D.starterKit.no) || [];
  var KIT_EACH = (D.starterKit && D.starterKit.each) || 1;
  var KIT_BULK = (D.starterKit && D.starterKit.bulkEach) || 5;

  function kitItems() {
    return KIT.map(function (no) { return BY_NO[no]; }).filter(Boolean);
  }
  function kitTotals(per) {
    var items = kitItems(), s1 = 0, retail = 0;
    items.forEach(function (p) {
      s1 += p.s1 * per;
      retail += p.R * per;
    });
    var qty = items.length * per;
    var tier = tierFor(qty);
    var paid = 0;
    items.forEach(function (p) { paid += priceOf(p, tier) * per; });
    var points = pointOf(paid, tier);
    var profit = retail - paid;
    return {
      items: items, per: per, qty: qty, tier: tier,
      s1: s1, disc: s1 - paid, paid: paid, points: points,
      pct: pointPct(tier), retail: retail, profit: profit,
      profitNet: profit + points,
      rate: retail ? profit / retail * 100 : 0
    };
  }

  function renderKit() {
    var host = $('#kitHost');
    if (!host) return;
    var T = kitTotals(KIT_EACH);
    if (!T.items.length) { host.innerHTML = ''; return; }
    host.innerHTML =
      '<button class="kit" id="kitCard" type="button">' +
        '<span class="kit-ico" aria-hidden="true">🎁</span>' +
        '<span class="kit-txt">' +
          '<span class="kit-kick">' + esc(t('kit_kicker')) + '</span>' +
          '<b class="kit-title">' + esc(t('kit_title')) + '</b>' +
          '<span class="kit-sub">' + esc(t('kit_sub').replace('{n}', fmt(T.paid))) + '</span>' +
          '<span class="kit-gain">' + esc(t('kit_profit_line').replace('{p}', fmt(T.profit))) +
            ' · ' + esc(t('kit_earn')) + ' ' + fmt(T.points) + ' Ks</span>' +
        '</span>' +
        '<span class="kit-go" aria-hidden="true">›</span>' +
      '</button>';
    $('#kitCard').onclick = openKit;
  }

  function openKit() {
    var T = kitTotals(KIT_EACH);
    var B = kitTotals(KIT_BULK);
    $('#kitTitle').textContent = t('kit_sheet_title');
    $('#kitSub').textContent = t('kit_sheet_sub');

    var rows = T.items.map(function (p) {
      return '<div class="ki">' +
        '<div class="ki-img"><img src="' + p.img + '" alt="" loading="lazy"></div>' +
        '<div class="ki-mid">' +
          '<div class="ki-brand">' + esc(brandOf(p)) + '</div>' +
          '<div class="ki-name">' + esc(p.name[state.lang]) + '</div>' +
          '<div class="ki-line">' + t('supply') + ' ' + fmt(p.s1) + ' · ' + t('retail') + ' ' + fmt(p.R) + ' Ks</div>' +
        '</div>' +
        '<div class="ki-right"><b>+' + fmt(p.R - p.s1) + '</b><span>Ks</span></div>' +
      '</div>';
    }).join('');

    $('#kitBody').innerHTML =
      '<div class="kit-sum">' +
        '<div class="ks-row"><span>' + t('kit_supply_total') + '</span><b>' + fmt(T.s1) + ' Ks</b></div>' +
        (T.disc ? '<div class="ks-row"><span>' + t('lbl_disc') + ' · ' + T.tier + ' −' + T.pct + '%</span><b>−' + fmt(T.disc) + ' Ks</b></div>' : '') +
        '<div class="ks-row"><span>' + t('lbl_paid') + '</span><b>' + fmt(T.paid) + ' Ks</b></div>' +
        '<div class="ks-row"><span>' + t('kit_earn') + ' · ' + T.tier + ' ' + T.pct + '%</span><b>+' + fmt(T.points) + ' Ks</b></div>' +
        '<div class="ks-row"><span>' + t('kit_retail_total') + '</span><b>' + fmt(T.retail) + ' Ks</b></div>' +
        '<div class="ks-row hi"><span>' + t('kit_profit') + '</span>' +
          '<b>' + fmt(T.profitNet) + ' Ks<em>' + T.rate.toFixed(1) + '%</em></b></div>' +
      '</div>' +
      '<p class="kit-note">' + t('pts_note') + '</p>' +
      '<div class="cart-sect" style="margin-top:16px"><h3>' + T.items.length + ' ' + t('items_short') + '</h3>' + rows + '</div>' +
      '<p class="kit-note">' + esc(t('kit_note')) + '</p>';

    $('#kitFoot').innerHTML =
      '<div class="kit-btns">' +
        '<button class="btn btn-coral" id="kitAdd">' + esc(t('kit_add_all')) +
          ' · ' + fmt(T.paid) + ' Ks</button>' +
        '<button class="btn btn-ghost" id="kitAddBulk">' + esc(t('kit_add_bulk')) +
          ' · ' + fmt(B.paid) + ' Ks</button>' +
      '</div>';

    $('#kitAdd').onclick = function () { addKit(KIT_EACH); };
    $('#kitAddBulk').onclick = function () { addKit(KIT_BULK); };

    openSheet('kit');
  }

  function addKit(per) {
    var items = kitItems();
    items.forEach(function (p) { state.cart[p.no] = (state.cart[p.no] || 0) + per; });
    persist();
    closeSheets();
    renderGrid(); renderCartBar();
    toast(t('kit_added').replace('{n}', items.length));
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

  /* ---------------------------------------------------------- render: points */
  function renderPoints() {
    var host = $('#ptsTable');
    if (!host) return;
    $('#ptsKicker').textContent = t('pts_kicker');
    $('#ptsTitle').textContent = t('pts_title');
    $('#ptsSub').textContent = t('pts_sub');
    $('#ptsNote').textContent = t('pts_note');

    var head = '<div class="ptrow hd">' +
      '<span>' + t('pts_col_tier') + '</span>' +
      '<span>' + t('pts_col_qty') + '</span>' +
      '<span>' + t('pts_col_disc') + '</span>' +
      '<span>' + t('pts_col_point') + '</span>' +
      '<span>' + t('pts_col_total') + '</span>' +
      '</div>';
    var body = D.tiers.map(function (d) {
      var total = (d.disc || 0) + (d.point || 0);
      var cur = d.id === curTier();
      return '<div class="ptrow' + (cur ? ' cur' : '') + '">' +
        '<span class="tid">' + d.id + '</span>' +
        '<span class="qty">' + d.qty + '</span>' +
        '<span class="dv">' + ((d.disc || 0) ? '−' + d.disc + '%' : '0%') + '</span>' +
        '<span class="pv">+' + d.point + '%</span>' +
        '<span class="tt">' + total + '%</span>' +
        '</div>';
    }).join('');
    host.innerHTML = head + body;

    var rules = [
      ['1', 'pts_r1_t', 'pts_r1_b'],
      ['2', 'pts_r2_t', 'pts_r2_b'],
      ['3', 'pts_r3_t', 'pts_r3_b']
    ].map(function (r) {
      return '<div class="ptrule">' +
        '<i>' + r[0] + '</i>' +
        '<div><b>' + t(r[1]) + '</b><span>' + t(r[2]) + '</span></div>' +
      '</div>';
    }).join('');
    $('#ptsRules').innerHTML = rules;
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
          '<div class="cpoint">+ ' + t('card_point').replace('{p}', String(pointPct(tier))) + '</div>' +
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
    $('#cbTotal').textContent = fmt(T.paid);
    $('#cbN').textContent = T.lines.length;
    document.body.style.paddingBottom = '';
  }

  /* ---------------------------------------------------------- margin calculator */
  function calcSell() {
    var el = $('#calcPrice');
    if (!el) return 0;
    var v = parseInt(String(el.value).replace(/[^0-9]/g, ''), 10);
    return isFinite(v) && v > 0 ? v : 0;
  }

  function calcBlock(p, tier) {
    var chips = TIER_ORDER.map(function (tr) {
      return '<button type="button" class="ctier' + (tr === tier ? ' on' : '') + '" data-ctier="' + tr + '">' +
        '<b>' + tr + '</b><span>' + fmt(priceOf(p, tr)) + '</span></button>';
    }).join('');
    return '<div class="calc" id="calcBox">' +
      '<div class="calc-h"><b>' + t('calc_title') + '</b><span>' + t('calc_sub') + '</span></div>' +
      '<div class="calc-lab">' + t('calc_tier') + '</div>' +
      '<div class="ctiers">' + chips + '</div>' +
      '<div class="calc-lab">' + t('calc_sell') + '</div>' +
      '<div class="calc-in">' +
        '<button type="button" class="cstep" data-cp="-10">−10%</button>' +
        '<input id="calcPrice" type="text" inputmode="numeric" autocomplete="off" value="' +
          fmt(state.calcSell == null ? p.R : state.calcSell) + '">' +
        '<button type="button" class="cstep" data-cp="10">+10%</button>' +
      '</div>' +
      '<button type="button" class="calc-reset" data-cp="reset">' + t('calc_reset') +
        ' · ' + fmt(p.R) + ' Ks</button>' +
      '<div class="calc-res">' +
        '<div class="cr"><span>' + t('calc_margin_unit') + '</span><b id="cmMargin">—</b></div>' +
        '<div class="cr"><span>' + t('calc_margin_rate') + '</span><b id="cmRate">—</b></div>' +
      '</div>' +
      '<div class="calc-row2">' +
        '<div class="cw"><span id="cmPtsLbl">' + t('calc_points') + '</span><b id="cmPoints">—</b></div>' +
        '<div class="cw"><span>' + t('calc_net') + '</span><b id="cmNet">—</b></div>' +
      '</div>' +
      '<div class="calc-row2">' +
        '<div class="cw"><span>' + t('calc_m30') + ' <small>+P</small></span><b id="cmM30">—</b></div>' +
        '<div class="cw"><span>' + t('calc_m50') + ' <small>+P</small></span><b id="cmM50">—</b></div>' +
      '</div>' +
      '<div class="calc-foot"><span id="cmSupply">—</span>' +
        '<span class="calc-warn" id="cmWarn"></span></div>' +
      '<p class="calc-note">' + t('calc_note') + '</p>' +
    '</div>';
  }

  function refreshTierChips() {
    $$('#detailBody [data-ctier]').forEach(function (b) {
      b.classList.toggle('on', b.dataset.ctier === state.calcTier);
    });
  }

  function money(n, el) {
    if (!el) return;
    var neg = n < 0;
    el.innerHTML = (neg ? '−' : '') + fmt(Math.abs(n)) + '<small>Ks</small>';
    el.classList.toggle('neg', neg);
  }

  function updateCalc() {
    var no = state.detailNo;
    if (!no || !$('#calcBox')) return;
    var p = BY_NO[no];
    if (!p) return;
    var tier = state.calcTier || curTier();
    var sup = priceOf(p, tier);
    var el = $('#calcPrice');
    var sell = el ? calcSell() : 0;
    var margin = sell - sup;
    var rate = sell > 0 ? margin / sell * 100 : 0;

    if (!sell) {
      ['#cmMargin', '#cmRate', '#cmM30', '#cmM50', '#cmPoints', '#cmNet'].forEach(function (sel) {
        var e = $(sel); if (e) { e.innerHTML = '—'; e.classList.remove('neg'); }
      });
      var s0 = $('#cmSupply');
      if (s0) s0.textContent = t('calc_supply') + ' · ' + tier + ' ' + fmt(sup) + ' Ks';
      var w0 = $('#cmWarn'); if (w0) w0.textContent = '';
      return;
    }

    var pts = pointOf(sup, tier);
    money(margin, $('#cmMargin'));
    money(margin + pts, $('#cmNet'));
    money(pts, $('#cmPoints'));
    money((margin + pts) * 30, $('#cmM30'));
    money((margin + pts) * 50, $('#cmM50'));

    var r = $('#cmRate');
    if (r) {
      var rn = rate < 0;
      r.innerHTML = (rn ? '−' : '') + Math.abs(rate).toFixed(1) + '<small>%</small>';
      r.classList.toggle('neg', rn);
    }
    var s = $('#cmSupply');
    if (s) s.textContent = t('calc_supply') + ' · ' + tier + ' ' + fmt(sup) + ' Ks';
    var w = $('#cmWarn');
    if (w) w.textContent = sell > 0 && margin < 0 ? t('calc_neg') : '';
  }

  function nudgeCalc(mode) {
    var el = $('#calcPrice');
    var p = state.detailNo ? BY_NO[state.detailNo] : null;
    if (!el || !p) return;
    var cur = calcSell();
    var v;
    if (mode === 'reset') {
      v = p.R;
    } else {
      var base = cur || p.R;
      v = Math.round(base * (1 + parseInt(mode, 10) / 100) / 100) * 100;
    }
    if (!isFinite(v) || v < 0) v = 0;
    el.value = fmt(v);
    state.calcSell = v;
    updateCalc();
  }

  /* ---------------------------------------------------------- detail sheet */
  function openDetail(no) {
    var p = BY_NO[no];
    if (!p) return;
    var isNew = state.detailNo !== no;
    state.detailNo = no;
    var tier = curTier();
    if (isNew) {
      state.calcTier = tier;
      state.calcSell = p.R;
      state.calcManual = false;
    }
    var q = state.cart[no] || 0;
    var rows = TIER_ORDER.map(function (tr) {
      var pr = priceOf(p, tr), d = discOf(p, tr);
      var isCur = tr === tier;
      return '<div class="trow' + (isCur ? ' cur' : '') + '">' +
        '<span class="tid">' + tr + '</span>' +
        '<span class="tqty">' + D.tiers[TIER_ORDER.indexOf(tr)].qty + ' ' + t('piece') +
          (isCur ? ' · <b style="color:var(--coral-deep)">' + t('current') + '</b>' : '') + '</span>' +
        '<span class="tprice">' + fmt(pr) + (d ? '<em>−' + d + '%</em>' : '') + '</span>' +
        '<span class="tpts">+' + pointPct(tr) + '%</span>' +
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
        '<div class="retail">' + t('card_point').replace('{p}', String(pointPct(tier))) +
          '<b>+' + fmt(pointOf(priceOf(p, tier), tier)) + ' Ks</b>' + t('retail') + '<b>' + fmt(p.R) + ' Ks</b></div>' +
      '</div>' +
      '<div class="tiers">' +
        '<div class="tiers-h"><b>' + t('tier_table') + '</b><span>' + t('tier_table_sub') + '</span></div>' +
        rows +
      '</div>' +
      '<p class="tier-note">' + t('tier_rule') + '</p>' +
      calcBlock(p, state.calcTier || tier) +
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
    var cp = $('#calcPrice');
    if (cp) {
      cp.oninput = function () {
        var raw = cp.value.replace(/[^0-9]/g, '').slice(0, 9);
        var n = raw ? parseInt(raw, 10) : 0;
        cp.value = raw ? fmt(n) : '';
        state.calcSell = n;
        updateCalc();
      };
      cp.onblur = function () {
        if (!calcSell()) { state.calcSell = p.R; }
        cp.value = fmt(calcSell() || p.R);
        updateCalc();
      };
    }
    updateCalc();
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
    if (!state.calcManual) { state.calcTier = tier; refreshTierChips(); }
    updateCalc();
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
          '<div class="ci-unit">' + fmt(l.unit) + ' Ks × ' + l.q + (d ? ' · −' + d + '%' : '') +
            ' · +' + fmt(pointOf(l.line, tier)) + ' ' + t('earn_short') + '</div>' +
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
      '</div>' +
      '<div class="cart-sect"><h3>' + t('pts_form_title') + '</h3>' +
        '<div class="ptsbox' + (b.usePoints ? ' on' : '') + '">' +
          '<label class="ptcheck"><input type="checkbox" id="i-usepoints"' + (b.usePoints ? ' checked' : '') + '>' +
            '<span>' + t('pts_use_label') + '</span></label>' +
          '<div class="ptsrow">' +
            '<input id="i-pointsuse" inputmode="numeric" autocomplete="off" value="' + (b.usePoints ? fmt(T.use) : '') + '" placeholder="0"' + (b.usePoints ? '' : ' disabled') + '>' +
            '<span>Ks</span>' +
            '<button type="button" class="ptmax" id="i-ptmax"' + (b.usePoints ? '' : ' disabled') + '>' +
              t('pts_max') + ' 50%</button>' +
          '</div>' +
          '<div class="hint" id="ptsHint">' + esc(t('pts_form_hint').replace('{c}', fmt(T.cap))) + '</div>' +
        '</div>' +
      '</div>';

    $('#cartFoot').innerHTML =
      '<div class="sum-mini sum">' +
        '<div class="sum-row"><span>' + t('subtotal') + '</span><b>' + fmt(T.base) + ' Ks</b></div>' +
        (T.saving ? '<div class="sum-row save"><span>' + t('lbl_disc') + ' · ' + tier + ' −' + T.discPct + '%</span><b>−' + fmt(T.saving) + ' Ks</b></div>' : '') +
        (T.use ? '<div class="sum-row save"><span>' + t('lbl_use') + '</span><b>−' + fmt(T.use) + ' Ks</b></div>' : '') +
        '<div class="sum-total"><span class="l">' + t('lbl_paid') + ' · ' + T.qty + ' ' + t('piece') + '</span>' +
          '<span class="v">' + fmt(T.paid) + '<small>Ks</small></span></div>' +
        '<div class="sum-row earn"><span>' + t('lbl_earn') + ' · ' + tier + ' ' + T.pct + '%</span>' +
          '<b>+' + fmt(T.earn) + ' Ks</b></div>' +
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

    // 포인트 사용 입력
    var chk = $('#i-usepoints');
    var pin = $('#i-pointsuse');
    var pmax = $('#i-ptmax');
    if (chk) {
      chk.onchange = function () {
        state.buyer.usePoints = chk.checked;
        if (chk.checked && !(state.buyer.pointsUse > 0)) state.buyer.pointsUse = T.cap;
        if (!chk.checked) state.buyer.pointsUse = 0;
        store(LS_BUYER, state.buyer);
        renderCart(); renderCartBar();
      };
    }
    if (pin) {
      pin.oninput = function () {
        var raw = String(pin.value).replace(/[^0-9]/g, '').slice(0, 9);
        var v = raw ? parseInt(raw, 10) : 0;
        state.buyer.pointsUse = v;
        store(LS_BUYER, state.buyer);
        var h = $('#ptsHint');
        if (h) {
          var over = v > T.cap;
          h.textContent = over ? t('pts_over') : t('pts_form_hint').replace('{c}', fmt(T.cap));
          h.classList.toggle('err', over);
        }
        renderCartBar();
        var m = $('#btnMail'); if (m) m.setAttribute('href', mailHref());
      };
      pin.onblur = function () {
        var v = parseInt(String(pin.value).replace(/[^0-9]/g, ''), 10) || 0;
        state.buyer.pointsUse = Math.min(Math.max(0, v), T.cap);
        store(LS_BUYER, state.buyer);
        renderCart(); renderCartBar();
      };
    }
    if (pmax) {
      pmax.onclick = function () {
        state.buyer.usePoints = true;
        state.buyer.pointsUse = T.cap;
        store(LS_BUYER, state.buyer);
        renderCart(); renderCartBar();
      };
    }
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
    L.push(t('subtotal') + ': ' + fmt(T.base) + ' Ks');
    if (T.saving) L.push(t('lbl_disc') + ' (' + T.tier + ' −' + T.discPct + '%): −' + fmt(T.saving) + ' Ks');
    if (T.use) L.push(t('lbl_use') + ': −' + fmt(T.use) + ' Ks');
    L.push(t('lbl_paid') + ': ' + fmt(T.paid) + ' Ks');
    L.push(t('lbl_earn') + ': +' + fmt(T.earn) + ' Ks (' + T.tier + ' ' + T.pct + '%)');
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
    $('#emptyTitle').textContent = t('search_empty');
    $('#emptySub').textContent = t('search_empty_sub');
    renderCats(); renderGrid(); renderCartBar(); renderCart(); renderKit(); renderPoints();
    if (state.sheet === 'kit') openKit();
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
      var ct = e.target.closest('[data-ctier]');
      if (ct) {
        state.calcTier = ct.dataset.ctier;
        state.calcManual = true;
        refreshTierChips();
        updateCalc();
        return;
      }
      var cp = e.target.closest('[data-cp]');
      if (cp) { nudgeCalc(cp.dataset.cp); return; }
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

    renderKit();
    renderPoints();
    renderCartBar();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
