

    /* ASTRA Web Viewer - Core Logic. All business logic, data, and Firebase integration is preserved. */

    firebase.initializeApp({
      apiKey: "AIzaSyAboQqH7BmtLCO0ciHUvgGIUOU6SMzHnzo",
      authDomain: "astra-boss-timer-759e5.firebaseapp.com",
      projectId: "astra-boss-timer-759e5",
      storageBucket: "astra-boss-timer-759e5.firebasestorage.app",
      messagingSenderId: "136730864029",
      appId: "1:136730864029:web:62fc717006db8f36e8e774"
    });
    const db = firebase.firestore();

    const BOSSES=[
  {id:"Venatus",name:"Venatus",lvl:60,rs:36000},
  {id:"Viorent",name:"Viorent",lvl:65,rs:36000},
  {id:"Ego",name:"Ego",lvl:70,rs:75600},
  {id:"Clemantis",name:"Clemantis",lvl:70,wr:[{d:1,h:12,m:30},{d:4,h:20,m:0}]},
  {id:"Livera",name:"Livera",lvl:75,rs:86400},
  {id:"Araneo",name:"Araneo",lvl:75,rs:86400},
  {id:"Undomiel",name:"Undomiel",lvl:80,rs:86400},
  {id:"Saphirus",name:"Saphirus",lvl:80,wr:[{d:0,h:18,m:0},{d:2,h:12,m:30}]},
  {id:"Neutro",name:"Neutro",lvl:80,wr:[{d:2,h:20,m:0},{d:4,h:12,m:30}]},
  {id:"LadyDalia",name:"Lady Dalia",lvl:85,rs:64800},
  {id:"GeneralAquleus",name:"General Aquleus",lvl:85,rs:104400},
  {id:"Thymele",name:"Thymele",lvl:85,wr:[{d:1,h:20,m:0},{d:3,h:12,m:30}]},
  {id:"Amentis",name:"Amentis",lvl:88,rs:104400},
  {id:"BaronBraudmore",name:"Baron Braudmore",lvl:88,rs:115200},
  {id:"Milavy",name:"Milavy",lvl:90,wr:[{d:6,h:16,m:0}]},
  {id:"Wannitas",name:"Wannitas",lvl:93,rs:172800},
  {id:"Metus",name:"Metus",lvl:93,rs:172800},
  {id:"Duplican",name:"Duplican",lvl:93,rs:172800},
  {id:"Shuliar",name:"Shuliar",lvl:95,rs:126000},
  {id:"Ringor",name:"Ringor",lvl:95,wr:[{d:6,h:18,m:0}]},
  {id:"Roderick",name:"Roderick",lvl:95,wr:[{d:5,h:20,m:0}]},
  {id:"Gareth",name:"Gareth",lvl:98,rs:115200},
  {id:"Titore",name:"Titore",lvl:98,rs:133200},
  {id:"Larba",name:"Larba",lvl:98,rs:126000},
  {id:"Catena",name:"Catena",lvl:100,rs:126000},
  {id:"Auraq",name:"Auraq",lvl:100,wr:[{d:5,h:23,m:0},{d:3,h:22,m:0}]},
  {id:"Secreta",name:"Secreta",lvl:100,rs:223200},
  {id:"Ordo",name:"Ordo",lvl:100,rs:223200},
  {id:"Asta",name:"Asta",lvl:100,rs:223200},
  {id:"Supore",name:"Supore",lvl:100,rs:223200},
  {id:"Chaiflock",name:"Chaiflock",lvl:120,wr:[{d:0,h:16,m:0}]},
  {id:"Benji",name:"Benji",lvl:120,wr:[{d:0,h:22,m:0}]},
  {id:"Libitina",name:"Libitina",lvl:130,wr:[{d:1,h:22,m:0},{d:6,h:22,m:0}]},
  {id:"Rakajeth",name:"Rakajeth",lvl:130,wr:[{d:2,h:23,m:0},{d:0,h:20,m:0}]},
  {id:"Icaruthia",name:"Icaruthia",lvl:135,wr:[{d:2,h:22,m:0},{d:5,h:22,m:0}]},
  {id:"Motti",name:"Motti",lvl:135,wr:[{d:3,h:20,m:0},{d:6,h:20,m:0}]},
  {id:"Camalia",name:"Camalia",lvl:135,wr:[{d:4,h:22,m:0}]},
  {id:"Nevaeh",name:"Nevaeh",lvl:140,wr:[{d:0,h:23,m:0}]},
  {id:"Tumier",name:"Tumier",lvl:140,wr:[{d:0,h:20,m:0}]},
  {id:"Lucus",name:"Lucus",lvl:145,wr:[{d:6,h:23,m:0}]}
];

    const LOCS={
  en:{Venatus:"Corrupted River Stream",Viorent:"Gill Stream",Ego:"Reclaimed Gathering Point",Clemantis:"White Witch's Cradle",Livera:"Black Storm Peninsula",Araneo:"Lower Tomb of Tyriosa 1F",Undomiel:"Test Subject Lab",Saphirus:"Moonlight Shackle",Neutro:"Battlefield of Love and Hatred",LadyDalia:"Bloody Shadow",GeneralAquleus:"Lower Tomb of Tyriosa 2F",Thymele:"Mark of Rampage",Amentis:"Limestone Cape",BaronBraudmore:"Rosevine Bridge",Milavy:"Lower Tomb of Tyriosa 3F",Wannitas:"Snare Swamp",Metus:"Follower's Field",Duplican:"Open-Eyed Puppet's Throne",Shuliar:"Masquerade of Hounds",Ringor:"Torchlight Highway",Roderick:"Garbana Underground Waterway 1F",Gareth:"Deadman's Land District 1",Titore:"Deadman's Land District 2",Larba:"Garbana Reclaimed Land",Catena:"Deadman's Land District 3",Auraq:"Garbana Underground Waterway 2F",Secreta:"Kallion's Tomb",Ordo:"Successor's Paradise",Asta:"Goldblood Plain",Supore:"Goldblood Plain",Chaiflock:"Kallion's Tomb",Benji:"Nest of Vengeance",Libitina:"Chapel of Eternal Vassalage",Rakajeth:"Secreta's Punishment",Icaruthia:"Royal Valley",Motti:"Evelyn's Outer Court",Camalia:"Controlled Laboratory",Nevaeh:"Celine's Courtyard",Tumier:"Garbana Underground Waterway 3F",Lucus:"Silent Smelter"},
  ja:{Venatus:"汚染された川の流れ",Viorent:"ギルの小川",Ego:"奪還された集結地点",Clemantis:"白魔女のゆりかご",Livera:"黒嵐の半島",Araneo:"ティリオサ地下墓所1F",Undomiel:"実験体研究所",Saphirus:"月光の束縛",Neutro:"愛憎の戦場",LadyDalia:"血染めの影",GeneralAquleus:"ティリオサ地下墓所2F",Thymele:"暴走の刻印",Amentis:"石灰岩の岬",BaronBraudmore:"薔薇蔦の橋",Milavy:"ティリオサ地下墓所3F",Wannitas:"罠の沼",Metus:"追従者の野原",Duplican:"開眼の人形の玉座",Shuliar:"猟犬の仮面舞踏会",Ringor:"松明の街道",Roderick:"ガルバナ地下水路1F",Gareth:"死者の地 第1区域",Titore:"死者の地 第2区域",Larba:"ガルバナ奪還地",Catena:"死者の地 第3区域",Auraq:"ガルバナ地下水路2F",Secreta:"カリオンの墓",Ordo:"継承者の楽園",Asta:"黄金血の平原",Supore:"黄金血の平原",Chaiflock:"カリオンの墓",Benji:"復讐の巣",Libitina:"永遠の臣従の礼拝堂",Rakajeth:"セクレタの刑罰",Icaruthia:"王族の谷",Motti:"エブリンの外庭",Camalia:"管理された研究所",Nevaeh:"セリーヌの中庭",Tumier:"ガルバナ地下水路3F",Lucus:"静寂の精錬所"},
  ko:{Venatus:"오염된 강줄기",Viorent:"길의 시냇물",Ego:"탈환된 집결지",Clemantis:"백마녀의 요람",Livera:"검은 폭풍의 반도",Araneo:"티리오사 지하묘지 1층",Undomiel:"실험체 연구소",Saphirus:"달빛의 속박",Neutro:"애증의 전장",LadyDalia:"핏빛 그림자",GeneralAquleus:"티리오사 지하묘지 2층",Thymele:"폭주의 낙인",Amentis:"석회암 곶",BaronBraudmore:"장미넝쿨 다리",Milavy:"티리오사 지하묘지 3층",Wannitas:"덫의 늪",Metus:"추종자의 들판",Duplican:"눈을 뜬 인형의 옥좌",Shuliar:"사냥개의 가면무도회",Ringor:"횃불의 가도",Roderick:"가르바나 지하수로 1층",Gareth:"죽은 자의 땅 제1구역",Titore:"죽은 자의 땅 제2구역",Larba:"가르바나 탈환지",Catena:"죽은 자의 땅 제3구역",Auraq:"가르바나 지하수로 2층",Secreta:"칼리온의 무덤",Ordo:"계승자의 낙원",Asta:"황금피의 평원",Supore:"황금피의 평원",Chaiflock:"칼리온의 무덤",Benji:"복수의 둥지",Libitina:"영원한 신종의 예배당",Rakajeth:"세크레타의 형벌",Icaruthia:"왕족의 계곡",Motti:"에블린의 외정",Camalia:"통제된 연구소",Nevaeh:"셀린의 안뜰",Tumier:"가르바나 지하수로 3층",Lucus:"침묵의 제련소"}
};

    const TO=9*3600000;

    const LANG={
  en:{brand:'ASTRA',dash:'Dashboard',bsTab:'Bosses',live:'Live',offline:'Offline',nextSpawn:'Next Spawn',upcoming:'Upcoming',today:'Today',tomorrow:'Tomorrow',noSpawns:'No spawns',schedTag:'Schedule',schedTitle:'SCHEDULED',ivTag:'Interval',ivTitle:'Interval',every:'Every',lv:'Lv.',spawned:'SPAWNED',now:'Now',updated:'Updated',ago:'ago',tracker:'TRACKER',hiddenClass:'HIDDEN CLASS',history:'Activity',killed:'killed',missed:'missed',days:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],timeRemaining:'Time Remaining',relic:'Relic',relicLevels:'Relic Levels',current:'Current',goal:'Goal',totalTP:'Total Temporal Pieces',rareDism:'Rare dismantles (84 TP each)',epicDism:'Epic dismantles (450 TP each)',marketPrices:'Live Market Prices',origin:'Origin',refresh:'Refresh',bestPerTP:'Best $/TP',buyQty:(n,t)=>'Buy '+t+' ['+fmtNum(n)+']',updated:'Updated',mktLoading:'Fetching market prices...',mktErr:'Offline — showing cached prices',mktEmpty:'Set your relic goals above to see market prices',mktNoL:'No chest listings on Origin market',priceLabel:'Price',recoTitle:'Recommended Purchase',gPieces:'Temporal Piece',gUp:'Total Levels',gCp:'Combat Power',cpRef:'CP Reference',chestMarket:'Temporal Piece Market',per1k:'/1k',chests:'Chests',chest:'Chest',setGoal:'Set levels to calculate',piecesNeeded:'pieces needed',cpTotal:'CP total',bestTag:'Best / 1k',viewBest:'View Best',att:'Attack',def:'Defense',res:'Resource',pve:'PvE',pvp:'PvP',oth:'Other',snipe:'snipe',best:'best',memDeal:'Memory deal',cpUnit:'per',nm:['Venatus','Viorent','Ego','Clemantis','Livera','Araneo','Undomiel','Saphirus','Neutro','Lady Dalia','General Aquleus','Thymele','Amentis','Baron Braudmore','Milavy','Wannitas','Metus','Duplican','Shuliar','Ringor','Roderick','Gareth','Titore','Larba','Catena','Auraq','Secreta','Ordo','Asta','Supore','Chaiflock','Benji','Libitina','Rakajeth','Icaruthia','Motti','Camalia','Nevaeh','Tumier','Lucus'],ttsIn:(n,m)=>`${n} spawns in ${m} minute${m!==1?'s':''}.`,ttsSpawned:n=>`${n} has spawned.`,ttsWbIn:(m)=>`World Boss spawns in ${m} minute${m!==1?'s':''}.`,ttsWbSpawned:`World Boss has spawned.`,age:(m)=>{if(m<1)return 'just now';if(m<60)return m+'m ago';const h=Math.floor(m/60);return h<24?h+'h ago':Math.floor(h/24)+'d ago'},relicNames:['Origin of Destruction','Barrier Protection','Crystal of Life','Magic Storm'],mktInsight:'Cost & Efficiency',mktCostCp:'per 1 CP',mktBestTier:'Best tier to buy',mktBestTip:'Cheapest per 1,000 pieces.',mktCalc:'How it is calculated',mktCalcPieces:'Pieces needed = sum of level costs',mktCalcCp:'CP gained = milestones + base stat',mktCalcCost:'Cost = pieces / chest size x price',mktTable:'Relic Efficiency',mktHRelic:'Relic',mktHLevel:'Level',mktHCp:'CP',mktHCost:'Cost',mktHCpCur:'per CP',mktSavings:'Savings',mktSavingsMsg:'Buying the cheapest tier saves',mktAlreadyBest:'You are already buying the best-value chest',mktEffic:'most CP per currency',mktFromTo:'to',mktPerChunk:'per 1,000'},
  ja:{brand:'ASTRA',dash:'ダッシュボード',bsTab:'ボス',live:'オンライン',offline:'オフライン',nextSpawn:'次のスポーン',upcoming:'予定',today:'今日',tomorrow:'明日',noSpawns:'スポーンなし',schedTag:'スケジュール',schedTitle:'予定',ivTag:'インターバル',ivTitle:'インターバル',every:'毎',lv:'Lv.',spawned:'出現中',now:'今',updated:'更新',ago:'前',tracker:'追跡',hiddenClass:'隠しクラス',history:'履歴',killed:'討伐',missed:'取り逃し',days:['日','月','火','水','木','金','土'],timeRemaining:'残り時間',relic:'レリック',relicLevels:'レリックレベル',current:'現在',goal:'目標',totalTP:'必要TP合計',rareDism:'レア分解（TP 84/個）',epicDism:'エピック分解（TP 450/個）',marketPrices:'ライブ市場価格',origin:'Origin',refresh:'更新',bestPerTP:'最安 $/TP',buyQty:(n,t)=>t+' を購入 ['+fmtNum(n)+']',updated:'更新',mktLoading:'市場価格を取得中...',mktErr:'オフライン — キャッシュ表示',mktEmpty:'上でレリック目標を設定してください',mktNoL:'Origin市場に出品なし',priceLabel:'価格',recoTitle:'推奨購入',gPieces:'テンポラルピース',gUp:'合計レベル',gCp:'戦闘力',cpRef:'CP参考',chestMarket:'テンポラルピース市場',per1k:'/1k',chests:'チェスト',chest:'チェスト',setGoal:'レベルを設定すると計算します',piecesNeeded:'必要ピース',cpTotal:'CP合計',bestTag:'最良/1k',viewBest:'最良を表示',att:'攻撃',def:'防御',res:'資源',pve:'PvE',pvp:'PvP',oth:'その他',snipe:'狙い目',best:'最良',memDeal:'メモリー特価',cpUnit:'単位',nm:['ベナトゥス','ビオレント','エゴ','クレメンティス','リベラ','アラネオ','アンドゥミエル','サピルス','ネウトロ','レディ·ダリア','将軍アクレウス','テュメレ','アメンティス','ブラウドモア','ミラベ','ワニタス','メトゥス','デュプリカン','シュライヤー','リンゴル','ロデリック','ガレス','ティトル','ラルバ','カテナ','アウラーク','セクレタ','オルド','アスタ','スポル','シャイフロック','ベンジー','リビティーナ','ラカゼス','イカルシア','モティ','カマリア','ネバ','トゥミエル','ルクス'],ttsIn:(n,m)=>`${n}は${m}分後に出現します。`,ttsSpawned:n=>`${n}が出現しました。`,ttsWbIn:(m)=>`ワールドボスは${m}分後に出現します。`,ttsWbSpawned:`ワールドボスが出現しました。`,age:(m)=>{if(m<1)return 'たった今';if(m<60)return m+'分前';const h=Math.floor(m/60);return h<24?h+'時間前':Math.floor(h/24)+'日前'},relicNames:['破壊の根源','結界の守護','生命の結晶','魔力の嵐'],mktInsight:'コストと効率',mktCostCp:'CPあたり',mktBestTier:'購入する最良のティア',mktBestTip:'1,000個あたり最安。',mktCalc:'計算方法',mktCalcPieces:'必要ピース = レベルコストの合計',mktCalcCp:'獲得CP = マイルストーン + 基礎ステータス',mktCalcCost:'コスト = ピース ÷ 箱サイズ × 価格',mktTable:'レリック効率',mktHRelic:'レリック',mktHLevel:'レベル',mktHCp:'CP',mktHCost:'コスト',mktHCpCur:'CPあたり',mktSavings:'節約',mktSavingsMsg:'最安ティアを買うと節約',mktAlreadyBest:'すでに最良の箱を購入しています',mktEffic:'通貨あたりCPが最も高い',mktFromTo:'→',mktPerChunk:'1,000個あたり'},
  ko:{brand:'ASTRA',dash:'대시보드',bsTab:'보스',live:'온라인',offline:'오프라인',nextSpawn:'다음 스폰',upcoming:'예정',today:'오늘',tomorrow:'내일',noSpawns:'스폰 없음',schedTag:'일정',schedTitle:'일정',ivTag:'간격',ivTitle:'간격',every:'매',lv:'레벨',spawned:'출현중',now:'지금',updated:'업데이트',ago:'전',tracker:'추적',hiddenClass:'비밀 클래스',history:'활동',killed:'처치',missed:'놓침',days:['일','월','화','수','목','금','토'],timeRemaining:'남은 시간',relic:'유물',relicLevels:'유물 레벨',current:'현재',goal:'목표',totalTP:'필요 TP 합계',rareDism:'레어 분해 (TP 84/개)',epicDism:'에픽 분해 (TP 450/개)',marketPrices:'실시간 시장 가격',origin:'Origin',refresh:'새로고침',bestPerTP:'최저 $/TP',buyQty:(n,t)=>t+' 구매 ['+fmtNum(n)+']',updated:'업데이트',mktLoading:'시장 가격 불러오는 중...',mktErr:'오프라인 — 캐시 표시',mktEmpty:'위에서 유물 목표를 설정하세요',mktNoL:'Origin 시장에 등록 없음',priceLabel:'가격',recoTitle:'추천 구매',gPieces:'시간 조각',gUp:'총 레벨',gCp:'전투력',cpRef:'CP 참고',chestMarket:'시간 조각 시장',per1k:'/1k',chests:'상자',chest:'상자',setGoal:'레벨을 설정하면 계산합니다',piecesNeeded:'필요 조각',cpTotal:'CP 합계',bestTag:'최적/1k',viewBest:'최적 보기',att:'공격',def:'방어',res:'자원',pve:'PvE',pvp:'PvP',oth:'기타',snipe:'노려야 할',best:'최적',memDeal:'메모리 특가',cpUnit:'단위',nm:['베나투스','비오렌트','에고','클레멘티스','리베라','아라네오','안두미엘','사피루스','네우트로','레이디 달리아','장군 아클레우스','튜메레','아멘티스','남작 브라우드모어','미라베','와니타스','메투스','듀플리칸','슈라이어','링고르','로데릭','가레스','티토르','라르바','카테나','아우라크','세크레타','오르도','아스타','스포르','샤이플록','벤지','리비티나','라카제스','이카루시아','모티','카말리아','네바','투미엘','루크스'],ttsIn:(n,m)=>`${n}${koParticle(n,'subj')} ${m}분 후에 출현합니다.`,ttsSpawned:n=>`${n}${koParticle(n,'subj')} 출현했습니다.`,ttsWbIn:(m)=>`월드 보스가 ${m}분 후 출현합니다.`,ttsWbSpawned:`월드 보스가 출현했습니다.`,age:(m)=>{if(m<1)return '방금 전';if(m<60)return m+'분 전';const h=Math.floor(m/60);return h<24?h+'시간 전':Math.floor(h/24)+'일 전'},relicNames:['파괴의 근원','결계의 수호','생명의 수정','마력의 폭풍'],mktInsight:'비용 및 효율',mktCostCp:'CP당',mktBestTier:'구매 최적 티어',mktBestTip:'1,000개당 최저.',mktCalc:'계산 방법',mktCalcPieces:'필요 조각 = 레벨 비용 합계',mktCalcCp:'획득 CP = 마일스톤 + 기본 스탯',mktCalcCost:'비용 = 조각 ÷ 상자 크기 × 가격',mktTable:'유물 효율',mktHRelic:'유물',mktHLevel:'레벨',mktHCp:'CP',mktHCost:'비용',mktHCpCur:'CP당',mktSavings:'절약',mktSavingsMsg:'최저 티어 구매 시 절약',mktAlreadyBest:'이미 최고 가치 상자를 구매 중입니다',mktEffic:'통화당 CP 최대',mktFromTo:'→',mktPerChunk:'1,000개당'},
};

    function lsSet(k,v){try{localStorage.setItem(k,v)}catch(e){}}
    function lsGet(k){try{return localStorage.getItem(k)}catch(e){return null}}

    let lang='en';
function t(k){return LANG[lang][k]||k}
function bn(b){const i=BOSSES.indexOf(b);return LANG[lang].nm[i]||b.name}
function locOf(id){return (LOCS[lang]&&LOCS[lang][id])||LOCS.en[id]||''}
function koParticle(n,t){const c=n.charCodeAt(n.length-1),b=(c-0xAC00)%28!==0;const p={subj:['이','가'],obj:['을','를'],top:['은','는']};return b?p[t][0]:p[t][1]}
function langNext(){
  const ls=['en','ja','ko'];
  lang=ls[(ls.indexOf(lang)+1)%ls.length];
  lsSet('astralang',lang);
  applyLang();
  loadPrices(true);
  rAll();
}


    const FLAGS={en:'🇺🇸',ja:'🇯🇵',ko:'🇰🇷'};
    function applyLang(){
      fmtDCache.clear();fmtTCache.clear();
      document.title=t('brand');
      $('brand').querySelector('.brand-text').textContent=t('brand');
      $('nextLbl').textContent=t('nextSpawn');
      $('upcomingLbl').textContent=t(currentUpView==='tomorrow'?'tomorrow':'today');
      $('upTodayLbl').textContent=t('today');
      $('upTmrwLbl').textContent=t('tomorrow');
      $('viewTitle').textContent=t(currentView==='schedule'?'schedTitle':'ivTitle');
      $('ivBtnLbl').textContent=t('ivTag');
      $('schedBtnLbl').textContent=t('schedTag');
      $('navTracker').textContent=t('tracker');
      $('navHidden').textContent=t('hiddenClass');
      $('relicNavLbl').textContent=t('relic');
      $('relicLbl').textContent=t('relicLevels');
      $('relicGrandLblP').textContent=t('gPieces');
      $('relicGrandLblU').textContent=t('gUp');
      $('relicGrandLblC').textContent=t('gCp');
      $('mktLbl').textContent=t('chestMarket');
      $('mktRealm').textContent=t('origin');
      $('mktRefresh').setAttribute('aria-label',t('refresh'));
      document.querySelectorAll('#relicSettings .relic-field-label').forEach((f,idx)=>f.textContent=idx%2===0?t('current'):t('goal'));
      $('langText').textContent=FLAGS[lang];
      const lp=$('livePill'),lt=$('liveText');
      const isOn=lp.classList.contains('on');
      lt.textContent=isOn?t('live'):t('offline');
      $('nextCdLabel').textContent = t('timeRemaining');
      rRelic();
      requestAnimationFrame(()=>requestAnimationFrame(positionNavIndicator));
    }

    let alarmOn=false;
    const ttsSpoken=new Set();
    const ttsArmed=new Map();
    function toggleAlarm(){
      alarmOn=!alarmOn;
      lsSet('astraalarm',alarmOn?'1':'0');
      updateAlarmBtn();
      if(!alarmOn&&window.speechSynthesis)window.speechSynthesis.cancel();
      if(alarmOn){ttsSpoken.clear();ttsArmed.clear();if(window.speechSynthesis){syncVoices();window.speechSynthesis.speak(new SpeechSynthesisUtterance(''))}}
    }
    function updateAlarmBtn(){
      const b=$('alarmBtn');
      b.classList.toggle('on',alarmOn);
      const icon = alarmOn
        ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>'
        : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>';
      b.innerHTML=icon;
    }
    let ttsVoices=[];
    function ttsVoice(){
      if(!window.speechSynthesis)return null;
      const sv=lsGet('astraVoice_'+lang);
      if(sv){const m=ttsVoices.find(v=>v.name===sv);if(m)return m}
      const want={en:'en-US',ja:'ja-JP',ko:'ko-KR'}[lang];
      const edge={en:'en-US-AriaNeural',ko:'ko-KR-SunHiNeural',ja:'ja-JP-NanamiNeural'};
      const m=ttsVoices.find(v=>v.name.includes(edge[lang]))||ttsVoices.find(v=>v.voiceURI===edge[lang])||ttsVoices.find(v=>v.lang===want)||ttsVoices.find(v=>v.lang.startsWith(lang));
      return m||null;
    }
    function speak(text,enText){
      if(!window.speechSynthesis||!text)return;
      const v=ttsVoice();
      const u=new SpeechSynthesisUtterance(v?text:(enText||text));
      if(v){u.voice=v;u.lang=v.lang}else{u.lang='en-US'}
      u.rate=1;u.pitch=1;
      window.speechSynthesis.speak(u);
    }
    function ttsCheck(){
      if(!alarmOn||!window.speechSynthesis)return;
      const n=now();
      for(const b of BOSSES){
        const tm=timers[b.id];
        if(!tm||!tm.endTime)continue;
        const rem=tm.endTime-n;
        if(rem>0)ttsArmed.set(b.id,tm.endTime);
        if(rem>0&&rem<=5*60000){
          const m=Math.ceil(rem/60000);
          const key=`${b.id}_${tm.endTime}_${m}`;
          if(!ttsSpoken.has(key)){ttsSpoken.add(key);speak(t('ttsIn')(bn(b),m),`${b.name} spawns in ${m} minute${m!==1?'s':''}.`)}
        }else if(rem<=0&&rem>-300000){
          const armedEnd=ttsArmed.get(b.id);
          if(armedEnd===tm.endTime){
            const key=`${b.id}_${tm.endTime}_spawned`;
            if(!ttsSpoken.has(key)){ttsSpoken.add(key);speak(t('ttsSpawned')(bn(b)),`${b.name} has spawned.`);ttsArmed.delete(b.id)}
          }
        }
      }
      wbTtsCheck(n);
    }

    const WORLD_BOSS_TIMES=[{hour:12,minute:0},{hour:21,minute:0}];
    const ttsWbMinutes=new Map();
    const sentWbSpawned=new Set();
    let wbDay='';
    function wbTtsCheck(n){
      try{
        const jstNow=new Date(n+TO);
        let nextSpawn=null;
        for(const {hour,minute} of WORLD_BOSS_TIMES){
          const s=Date.UTC(jstNow.getUTCFullYear(),jstNow.getUTCMonth(),jstNow.getUTCDate(),hour-9,minute);
          let ts=s;
          if(ts<n-300000)ts+=86400000;
          if(!nextSpawn||ts<nextSpawn)nextSpawn=ts;
        }
        if(!nextSpawn)return;
        const remainingMs=nextSpawn-n;
        const d=new Date(nextSpawn+TO);
        const spawnKey=`${String(d.getUTCMonth()+1).padStart(2,'0')}${String(d.getUTCDate()).padStart(2,'0')}_${String(d.getUTCHours()).padStart(2,'0')}${String(d.getUTCMinutes()).padStart(2,'0')}`;
        if(remainingMs>0&&remainingMs<=5*60000){
          const minutesLeft=Math.ceil(remainingMs/60000);
          const spokeKey=`${spawnKey}_${minutesLeft}`;
          if(!ttsWbMinutes.has(spokeKey)){ttsWbMinutes.set(spokeKey,true);speak(t('ttsWbIn')(minutesLeft),`World Boss spawns in ${minutesLeft} minute${minutesLeft!==1?'s':''}.`)}
        }
        if(remainingMs<=0&&remainingMs>-300000&&!sentWbSpawned.has(spawnKey)){
          sentWbSpawned.add(spawnKey);
          speak(t('ttsWbSpawned'),`World Boss has spawned.`);
        }
        const todayStr=`${String(jstNow.getUTCMonth()+1).padStart(2,'0')}${String(jstNow.getUTCDate()).padStart(2,'0')}`;
        if(wbDay!==todayStr){
          wbDay=todayStr;
          for(const k of sentWbSpawned)if(!k.startsWith(todayStr))sentWbSpawned.delete(k);
          ttsWbMinutes.clear();
        }
      }catch(e){}
    }

    let timers={};
    let nxtBoss=null,nxtTime=null;

    function p2(n){return String(n).padStart(2,'0')}
    function now(){return Date.now()}
    function fmtNum(n){return (Number(n)||0).toLocaleString('en-US')}
    function fmtCompact(n){const v=Number(n)||0;const a=Math.abs(v);if(a>=1e6)return trimK(v/1e6)+'M';if(a>=1e4)return trimK(v/1e3)+'k';if(a>=1e3)return (v/1e3).toFixed(1).replace(/\.0$/,'')+'k';return fmtNum(v)}
    function trimK(x){const s=(Math.round(x*10)/10).toFixed(1).replace(/\.0$/,'');return s}

    const LOC={en:'en-US',ja:'ja-JP',ko:'ko-KR'};
    const fmtDCache=new Map(),fmtTCache=new Map();
    function fmt(ms){return new Date(ms).toLocaleString(LOC[lang],{month:'short',day:'numeric',hour:'2-digit',minute:'2-digit',hour12:lang==='en',timeZone:'Asia/Tokyo'})}
    function fmtD(ms){
      const k=Math.floor(ms/86400000);
      const c=fmtDCache.get(k);
      if(c)return c;
      const v=new Date(ms).toLocaleDateString(LOC[lang],{month:'short',day:'numeric',timeZone:'Asia/Tokyo'});
      fmtDCache.set(k,v);
      return v;
    }
    function fmtT(ms){
      const k=Math.floor(ms/60000);
      const c=fmtTCache.get(k);
      if(c)return c;
      const v=new Date(ms).toLocaleTimeString(LOC[lang],{hour:'2-digit',minute:'2-digit',hour12:lang==='en',timeZone:'Asia/Tokyo'});
      fmtTCache.set(k,v);
      return v;
    }
    const UNITS={en:{d:'d',h:'h',m:'m',s:'s'},ja:{d:'\u65E5',h:'\u6642\u9593',m:'\u5206',s:'\u79D2'},ko:{d:'\uC77C',h:'\uC2DC\uAC04',m:'\uBD84',s:'\uCD08'}};
    function fmtDur(ms){if(ms<=0)return t('spawned');const s=Math.floor(ms/1000),d=Math.floor(s/86400),h=Math.floor((s%86400)/3600),m=Math.floor((s%3600)/60),u=UNITS[lang],sp=lang==='ja'?'':' ';return d?`${d}${u.d}${sp}${h}${u.h}`:h?`${h}${u.h}${sp}${m}${u.m}`:`${m}${u.m}${sp}${p2(s%60)}${u.s}`}
    function fmtShort(ms){if(ms<=0)return t('now');const s=Math.floor(ms/1000),d=Math.floor(s/86400),h=Math.floor((s%86400)/3600),m=Math.floor((s%3600)/60),u=UNITS[lang];return d?`${d}${u.d}`:h?`${h}${u.h}`:`${m}${u.m}`}
    function fmtInt(s){const h=Math.floor(s/3600),m=Math.floor((s%3600)/60),u=UNITS[lang],sp=lang==='ja'?'':' ';return m?`${h}${u.h}${sp}${m}${u.m}`:`${h}${u.h}`}

    function nextSpawn(b){return nextSpawnAt(b,now())}
    function nextSpawnAt(b,baseMs){
      const t=timers[b.id];
      if(b.rs){return t?.endTime?new Date(t.endTime):null}
      if(b.wr){const n=baseMs,base=new Date(n+TO);let best=null;for(const w of b.wr){const c=new Date(base),del=(w.d+7-base.getUTCDay())%7;c.setUTCDate(base.getUTCDate()+del);c.setUTCHours(w.h,w.m,0,0);let r=c.getTime()-TO;if(r<n)r+=604800000;if(!best||r<best)best=r}return best?new Date(best):null}
      return null
    }
    function prevSpawn(b,baseMs){
      const n=baseMs,base=new Date(n+TO);let best=null;
      for(const w of b.wr){const c=new Date(base),del=(w.d+7-base.getUTCDay())%7;c.setUTCDate(base.getUTCDate()+del);c.setUTCHours(w.h,w.m,0,0);let r=c.getTime()-TO;if(r>=n)r-=604800000;if(!best||r>best)best=r}
      return best?new Date(best):null
    }
    function schedB(){return BOSSES.filter(b=>b.wr)}
    function intB(){return BOSSES.filter(b=>b.rs)}
    function grpInt(){const g={};for(const b of intB()){const k=b.rs;if(!g[k])g[k]={s:k,b:[]};g[k].b.push(b)}return Object.values(g).sort((a,b)=>a.s-b.s)}

    function urgencyClass(ms) {
      if (ms <= 0) return 'alive';
      if (ms <= 5 * 60000) return 'urgent';
      if (ms <= 30 * 60000) return 'soon';
      return '';
    }
    function statusClassFor(ms) {
      if (ms <= 0) return 'status-alive';
      if (ms <= 5 * 60000) return 'status-danger';
      if (ms <= 30 * 60000) return 'status-soon';
      return '';
    }

    function rNext(){
      let bb=null,bs=null,cn=now();
      for(const b of BOSSES){const n=nextSpawn(b);if(n&&n.getTime()>cn&&(!bs||n.getTime()<bs.getTime())){bs=n;bb=b}}
      if(bb&&bs){
        $('nextName').textContent=bn(bb);$('nextLv').textContent=t('lv')+bb.lvl;
        $('nextLoc').textContent=locOf(bb.id);
        const isInt=!!bb.rs;$('nextTag').textContent=isInt?t('ivTag'):t('schedTag');
        $('nextTag').className='hero-tag '+(isInt?'interval':'scheduled');
        $('nextAt').textContent=fmtD(bs.getTime())+' '+fmtT(bs.getTime());
        nxtBoss=bb;nxtTime=bs;
        const im=$('heroBossImg'),url='assets/'+bb.id+'.png';
        if(im.getAttribute('src')!==url){im.style.opacity=0;im.onload=()=>{im.style.opacity=1};im.src=url}
      }else if(nxtBoss){
        $('nextName').textContent='--';$('nextLv').textContent='';$('nextLoc').textContent='';$('nextTag').textContent='';$('nextAt').textContent='';nxtBoss=null;nxtTime=null;
        $('heroBossImg').style.opacity=0;
      }
    }

    const RING_CIRCUMFERENCE = 2 * Math.PI * 44;
    function rNextCd(){
      const el=$('nextCd');
      if(nxtTime){
        const r=Math.max(0,nxtTime.getTime()-now());
        const text=fmtDur(r);
        if (el.textContent !== text) el.textContent=text;
        const cls='hero-countdown-value '+urgencyClass(r);
        if(el.className!==cls) el.className=cls;
        const ring=$('heroProgress');
        if (ring) {
          let maxSpan = 24 * 3600000;
          if (nxtBoss) {
            if (nxtBoss.rs) maxSpan = nxtBoss.rs * 1000;
            else if (nxtBoss.wr) {
              const prev = prevSpawn(nxtBoss, nxtTime.getTime() - 1000);
              maxSpan = prev ? nxtTime.getTime() - prev.getTime() : 604800000;
            }
          }
          const offset = RING_CIRCUMFERENCE * (1 - Math.min(1, Math.max(0, r / maxSpan)));
          if(ring.style.strokeDashoffset!==offset+'px')ring.style.strokeDashoffset=offset;
        }
      } else {
        if (el.textContent !== '--:--:--') el.textContent='--:--:--';
        const cls='hero-countdown-value';
        if(el.className!==cls) el.className=cls;
        const ring=$('heroProgress');
        if (ring) ring.style.strokeDashoffset = RING_CIRCUMFERENCE;
      }
    }
    const SCHED_SPAWN_EXPIRE_MS=60000;
    function expireSchedSpawn(){
      if(nxtBoss&&nxtBoss.wr&&nxtTime&&now()-nxtTime.getTime()>=SCHED_SPAWN_EXPIRE_MS)rNext();
    }
    function rNextCdTick(){
      if(document.hidden)return;
      const tr=$('pageTracker');
      if(tr&&!tr.classList.contains('active'))return;
      expireSchedSpawn();
      rNextCd();
    }
    setInterval(rNextCdTick,1000)
    document.addEventListener('visibilitychange',()=>{if(!document.hidden){expireSchedSpawn();rNextCd()}});

    let lastUpHtml={today:'',tomorrow:''};
    function rUpcoming(){
      const n=now(),tKey=Math.floor((n+TO)/86400000),tmKey=tKey+1;
      const list={today:[],tomorrow:[]};
      for(const b of BOSSES){const x=nextSpawn(b);if(x&&x.getTime()>n)list[Math.floor((x.getTime()+TO)/86400000)===tKey?'today':'tomorrow'].push({b,t:x.getTime()})}
      list.today.sort((a,b)=>a.t-b.t);list.tomorrow.sort((a,b)=>a.t-b.t);
      for(const v of ['today','tomorrow']){
        const e=v==='today'?$('upcomingList'):$('upcomingTmrw');
        let h;
        if(!list[v].length){
          h='<div class="empty-state"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg><p>'+t('noSpawns')+'</p></div>';
        }else{
          h='<div class="boss-list">'+list[v].map(x=>{
            const rem=x.t-n;
            const cls=statusClassFor(rem);
            return '<div class="boss-card '+cls+'" data-t="'+x.t+'"><div class="boss-card-main"><span class="boss-card-name">'+bn(x.b)+'</span></div><div class="boss-card-time"><span class="boss-card-time-value">'+fmtT(x.t)+'</span></div></div>';
          }).join('')+'</div>';
        }
        if(h!==lastUpHtml[v]){e.innerHTML=h;lastUpHtml[v]=h;}
      }
    }

    let lastSchedHtml='';
    function rSched(){
      const j=new Date(now()+TO),cd=j.getUTCDay();
      const order=[1,2,3,4,5,6,0];
      const by=order.map(d=>({d,n:t('days')[d],es:[]}));
      for(const b of schedB())for(const w of b.wr){const col=by.find(x=>x.d===w.d);if(col)col.es.push({b,t:p2(w.h)+':'+p2(w.m)})}
      for(const d of by)d.es.sort((a,b)=>a.t.localeCompare(b.t))
      const h='<div class="schedule-grid">'+by.map((d,i)=>{
        return '<div class="day-card '+(d.d===cd?'today':'')+'"><div class="day-header"><span>'+d.n+'</span><span>'+(d.d===cd?t('today'):'')+'</span></div><div class="day-events">'+(d.es.length?d.es.map(e=>'<div class="day-event"><span class="day-event-name">'+bn(e.b)+'</span><span class="day-event-time">'+e.t+'</span></div>').join(''):'<div class="day-empty">--</div>')+'</div></div>';
      }).join('')+'</div>';
      if(h===lastSchedHtml)return;
      const sg=$('schedGrid');sg.innerHTML=h;lastSchedHtml=h;fitPanelCards(sg);
    }

    let lastIntHtml='';
    function rInt(){
      const n=now();
      const h='<div class="interval-grid">'+grpInt().map((g,i)=>{
        const isNext=nxtBoss&&g.b.includes(nxtBoss);
        return '<div class="interval-card '+(isNext?'highlight':'')+'"><div class="interval-header"><div class="interval-title"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg><span>'+t('every')+' '+fmtInt(g.s)+'</span></div><span class="interval-count">'+g.b.length+'</span></div><div class="interval-rows">'+g.b.map(b=>{const et=timers[b.id]?.endTime,al=et&&et>n;return'<div class="interval-row" data-t="'+(et||0)+'"><span class="interval-row-name">'+bn(b)+'</span><span class="interval-row-time '+(al?'live':'na')+'">'+(al?fmtShort(et-n):'--')+'</span></div>'}).join('')+'</div></div>';
      }).join('')+'</div>';
      if(h===lastIntHtml)return;
      const ig=$('ivGrid');ig.innerHTML=h;lastIntHtml=h;fitPanelCards(ig);
    }

    function rAll(){rNext();rUpcoming();rSched();rInt();rHidden();rNextCd()}

    const RELIC_COST=[
0,15,25,36,48,62,78,96,116,138,163,192,225,263,306,355,410,471,539,614,697,790,890,990,1090,1190,1340,1490,1760,1964,2172,2400,2650,2924,3224,3552,3910,4300,4724,5184,5682,6220,6800,7424,8094,8812,9580,10400,11274,12204,13192,14240,15350,16524,17764,19072,20450,21900,23424,25024,26702,28460,30300,32224,34234,36332,38520,40800,43174,45644,48212,50880,53650,56524,59504,62592,65790,69100,72524,76064,79722,83500,87400,91424,95574,99852,104260,108800,113474,118284,123232,128320,133550,138924,144444,150112,155930,161900,168024,174304];
    const RELIC_STORM_COST=[
0,5000,5104,5219,5346,5485,5637,5802,5981,6174,6382,6610,6860,7134,7434,7762,8120,8510,8934,9394,9892,10430,11010,11634,12304,13022,13790,14610,15484,16414,17402,18450,19560,20734,21974,23282,24660,26110,27634,29234,30912,32670,34510,36434,38444,40542,42730,45010,47384,49854,52422,55090,57860,60734,63714,66802,70000,73310,76734,80274,83932,87710,91610,95634,99784,104062,108470,113010,117684,122494,127442,132530,137760,143134,148654,154322,160140,166110,172234,178514,184952,191550,198310,205234,212324,219582,227010,234610,242384,250334,258462,266770,275260,283934,292794,301842,311080,320510,330134,339954];
    const RELIC_TABLES=[RELIC_COST,RELIC_COST,RELIC_COST,RELIC_STORM_COST];
    const RELIC_NAMES=['Origin of Destruction','Barrier Protection','Crystal of Life','Magic Storm'];
    const CHESTS=[
      {key:'T1',qty:1000},
      {key:'T2',qty:5000},
      {key:'T3',qty:10000},
      {key:'T4',qty:50000},
      {key:'T5',qty:100000}
    ];
    const CURR={usd:{sym:'$',rate:'usd'},php:{sym:'\u20B1',rate:'php'},jpy:{sym:'\u00A5',rate:'jpy'},krw:{sym:'\u20A9',rate:'krw'}};
    // NEXT Market grade palette (from next-market css vars) + tile gradients (142deg)
    const NEXT_BG_COLOR={NONE:'#ffffff',GREEN:'#34d361',BLUE:'#3b9cff',MAGENTA:'#9d66ff',ORANGE:'#ff9500',RED:'#ef4444',YELLOW:'#ffc83d'};
    const NEXT_BG_TILE={NONE:'linear-gradient(142deg,#282a2b,#4c4c4c)',GREY:'linear-gradient(142deg,#474a4c,#6a6e71)',GREEN:'linear-gradient(142deg,#243128,#325539)',BLUE:'linear-gradient(142deg,#1d273b,#214075)',MAGENTA:'linear-gradient(142deg,#282131,#422958)',YELLOW:'linear-gradient(142deg,#46391c,#8b6a1b)',ORANGE:'linear-gradient(142deg,#37291f,#6f441b)',RED:'linear-gradient(142deg,#412022,#7e1b1d)'};
    function gradeColor(g){return NEXT_BG_COLOR[g]||'';}
    function gradeBg(g){return NEXT_BG_TILE[g]||'';}
    const RELIC_API='https://relic-prices.arianthonyungsod.workers.dev/prices';
    const LS_PKEY='astraprices';

    let relicState=[[1,1],[1,1],[1,1],[1,1]];
    let relicPrices=null,relicFx=null,relicUpdated=null,relicCurrency='usd',relicLoading=false;
    let relicTier='auto';
    const PRICE_MEMORY_KEY='relic_price_memory_v1';

    const RELIC_IDS=['destruction','protection','life','storm'];
    const RELIC_COLORS=['#ef4444','#3b82f6','#22c55e','#eab308'];
    const RELIC_STATS={
      destruction:['Defense Penetration + 10','Accuracy + 10','Melee Critical Hit Resistance + 10','Damage to Boss Monsters Increase + 2%','Max MP + 20'],
      protection:['Defense Penetration + 10','Evasion + 10','Ranged Critical Hit Resistance + 10','Damage to Elite Monsters Increase + 2%','Max MP + 20'],
      life:['Defense Penetration + 10','Potion Recovery + 3','Magic Critical Hit Resistance + 10','Damage to Normal Monsters Increase + 2%','Max MP + 20'],
      storm:['Basic Attack Damage Received Decrease in PvP + 1%','MP Recovery in Battle + 9','Critical Hit + 10','Potion Recovery + 3','Global Cooldown Decrease + 0.03 sec']
    };
    const STAT_CP={
      'Defense Penetration + 10':100,'Accuracy + 10':60,
      'Melee Critical Hit Resistance + 10':20,'Ranged Critical Hit Resistance + 10':20,'Magic Critical Hit Resistance + 10':20,
      'Damage to Boss Monsters Increase + 2%':40,'Damage to Elite Monsters Increase + 2%':44,'Damage to Normal Monsters Increase + 2%':44,
      'Max MP + 20':2,'Evasion + 10':40,'Potion Recovery + 3':30,'MP Recovery in Battle + 9':90,'Critical Hit + 10':80,
      'Basic Attack Damage Received Decrease in PvP + 1%':44,'Global Cooldown Decrease + 0.03 sec':0
    };
    const PROTECTION_DEF=[0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,7,7,7,7,7,7,8,8,8,8,8,8,9,9,9,9,10,10,10,10,10,11,11,11,11,12,12,12,13,13,13,13,14,14,14,15,15,15,16,16,16,17,17,17,18,18,18,19,19,19,20,20,21,22,22,23,23];
    const DESTRUCTION_ATTACK_TOTALS=(()=>{
      const anchors=[[1,0],[20,90],[21,97],[47,339],[48,351],[52,401],[53,413],[60,510],[61,525],[80,830],[81,848],[89,992],[95,1122],[96,1156],[97,1190],[98,1226],[99,1262],[100,1300]];
      const totals=Array(101).fill(0);
      for(let i=0;i<anchors.length-1;i++){
        const [fl,ft]=anchors[i],[tl,tt]=anchors[i+1];
        const span=tl-fl;
        for(let lv=fl;lv<=tl;lv++){
          if(lv===fl){totals[lv]=ft;continue;}
          if(lv===tl){totals[lv]=tt;continue;}
          totals[lv]=Math.round(ft+((tt-ft)*(lv-fl)/span));
        }
      }
      return totals;
    })();
    const LIFE_HP_TOTALS=DESTRUCTION_ATTACK_TOTALS.map(v=>v*10);

    function relicTP(from,to,idx){
      const tbl=RELIC_TABLES[idx];
      if(!tbl||!(from>=1)||!(to>from)||to>tbl.length)return 0;
      let s=0;
      for(let i=from;i<to;i++)s+=tbl[i];
      return s;
    }
    function relicMilestones(idx,from,to){
      const stats=RELIC_STATS[RELIC_IDS[idx]];if(!stats)return[];
      const ms=[];
      for(let lv=10;lv<=100;lv+=2)if(lv>from&&lv<=to)ms.push({level:lv,stat:stats[((lv-10)/2)%stats.length]});
      return ms;
    }
    function relicBreakdown(idx,from,to){
      const ms=relicMilestones(idx,from,to);
      const totals={};let mCP=0;
      for(const m of ms){
        const match=m.stat.match(/^(.+?)\s*[+\-]\s*(.+)$/);
        if(!match)continue;
        const name=match[1].trim(),val=parseFloat(match[2].replace('%','')),isP=match[2].includes('%'),cp=STAT_CP[m.stat]||0;
        if(!totals[name])totals[name]={val:0,isP,cp:0};
        totals[name].val+=val;totals[name].cp+=cp;mCP+=cp;
      }
      let bName=null,bGain=0,bCP=0;
      const id=RELIC_IDS[idx];
      if(id==='destruction'){bName='Attack';bGain=DESTRUCTION_ATTACK_TOTALS[to]-DESTRUCTION_ATTACK_TOTALS[from];bCP=bGain*10;}
      else if(id==='life'){bName='HP';bGain=LIFE_HP_TOTALS[to]-LIFE_HP_TOTALS[from];bCP=Math.floor(bGain/10);}
      else if(id==='protection'){bName='Defense';for(let l=from;l<to;l++)bGain+=PROTECTION_DEF[l]||0;bCP=bGain*8;}
      return {totals,mCP,bName,bGain,bCP,totalCP:mCP+bCP};
    }
    function relicCurConv(usdt){
      const r=(relicFx&&relicFx[CURR[relicCurrency].rate])||0;
      return r>0?(usdt*r):(relicCurrency==='usd'?usdt:null);
    }
    function relicFmt(usdt){
      const v=relicCurConv(usdt);
      if(v===null)return '\u2014';
      const fixed=v.toFixed(2).split('.');
      fixed[0]=fmtNum(fixed[0]);
      return CURR[relicCurrency].sym+fixed.join('.');
    }
    function cachePrices(){
      if(!relicPrices)return;
      lsSet(LS_PKEY,JSON.stringify({p:relicPrices,fx:relicFx,u:relicUpdated,ts:Date.now()}));
    }
    function readCache(){
      try{
        const raw=lsGet(LS_PKEY);
        if(!raw)return;
        const d=JSON.parse(raw);
        if(d&&d.p&&typeof d.p==='object'){relicPrices=d.p;relicFx=d.fx||null;relicUpdated=d.u||null;}
      }catch(e){}
    }
    async function loadPrices(force){
      if(relicLoading)return;
      relicLoading=true;
      rRelic();
      try{
        const url=RELIC_API+'?lang='+lang+(force?'&force=1&_='+Date.now():'&_='+Date.now());
        const r=await fetch(url,{cache:'no-store'});
        if(!r.ok)throw Error(r.status);
        const d=await r.json();
        if(!d.success)throw Error(d.message||'bad');
        relicPrices=d.prices||null;
        relicFx=d.fx||null;
        relicUpdated=d.lastUpdated||null;
        $('mktSave').textContent='';
        cachePrices();
      }catch(e){
        readCache();
        $('mktSave').textContent=t('mktErr');
      }finally{
        relicLoading=false;
        rRelic();
      }
    }
    function mktUpdatedLabel(){
      if(!relicUpdated)return '--';
      const mins=Math.floor((now()-new Date(relicUpdated).getTime())/60000);
      return t('updated')+': '+t('age')(mins);
    }

    function pricedRows(){
      if(!relicPrices)return[];
      return CHESTS.filter(c=>relicPrices[c.key]).map(c=>{
        const p=relicPrices[c.key];
        const usdt=p.priceUSDT;
        return {key:c.key,qty:c.qty,usdt,per1k:usdt/c.qty*1000,name:p.name||c.key,imageUrl:p.imageUrl||'',bg:p.bg||'NONE'};
}).sort((a,b)=>a.per1k-b.per1k);
    }

    function playPing(){
      try{
        const Ctx=window.AudioContext||window.webkitAudioContext;
        if(!Ctx)return;
        const ctx=new Ctx(),osc=ctx.createOscillator(),gain=ctx.createGain();
        const nowMs=ctx.currentTime;
        osc.type='sine';
        osc.frequency.setValueAtTime(980,nowMs);
        osc.frequency.exponentialRampToValueAtTime(740,nowMs+0.24);
        gain.gain.setValueAtTime(0.0001,nowMs);
        gain.gain.exponentialRampToValueAtTime(0.10,nowMs+0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001,nowMs+0.26);
        osc.connect(gain);gain.connect(ctx.destination);
        osc.start(nowMs);osc.stop(nowMs+0.26);
        setTimeout(()=>ctx.close().catch(()=>{}),420);
      }catch(e){}
    }
    function relicPieceCost(pieces){
      if(!pieces||pieces<=0||!relicPrices)return null;
      const rows=pricedRows();
      if(!rows.length)return null;
      let best=rows[0];
      if(relicTier&&relicTier!=='auto'){
        const pick=rows.find(r=>r.key===relicTier);
        if(pick)best=pick;
      }
      if(!(best.usdt>0)||!(best.qty>0))return null;
      return pieces*(best.usdt/best.qty);
    }
    function rRelic(){
      let total=0,gUp=0,gCP=0,per=[],bd=[];
      for(let i=0;i<4;i++){
        const tp=relicTP(relicState[i][0],relicState[i][1],i);
        per.push(tp);total+=tp;
        gUp+=Math.max(0,relicState[i][1]-relicState[i][0]);
        bd.push(relicBreakdown(i,relicState[i][0],relicState[i][1]));
        gCP+=bd[i].totalCP;
      }
      for(let i=0;i<4;i++){
        const row=$('relicRow'+i);
        $('relicName'+i).textContent=(LANG[lang].relicNames||RELIC_NAMES)[i];
        $('relicFrom'+i).value=relicState[i][0];
        $('relicTo'+i).value=relicState[i][1];
        row.classList.toggle('active',per[i]>0);
        const b=bd[i],hex=RELIC_COLORS[i];
        const el=$('relicResult'+i);
        const cost=relicPieceCost(per[i]);
        $('relicCp'+i).textContent='';
        if(per[i]<=0){el.innerHTML='';continue;}
        let h='<div class="relic-result-cp" style="color:'+hex+'">+'+fmtNum(b.totalCP)+' CP</div><div class="relic-result-pieces" style="color:'+hex+'">'+fmtCompact(per[i])+'</div><div class="relic-result-price">'+(cost?relicFmt(cost):'\u2014')+'</div>';
        el.innerHTML=h;
      }
      $('relicGrandPieces').textContent=fmtCompact(total);
      $('relicGrandUp').textContent=fmtNum(gUp);
      $('relicGrandCp').textContent='+'+fmtCompact(gCP);
      $('mktUpdated').textContent=mktUpdatedLabel();
      renderMkt(total);
      requestAnimationFrame(()=>{fitRelic();fitMarketInsight()});
    }
    function renderMkt(total){
      const state=$('mktState'),save=$('mktSave'),tier=$('tierList');
      document.querySelectorAll('.mkt-currency .seg-btn').forEach(b=>{
        const avail=relicCurrency==='usd'||((relicFx&&relicFx[CURR[b.dataset.cur].rate])||0)>0;
        b.classList.toggle('active',b.dataset.cur===relicCurrency);
        b.classList.toggle('off',!avail);
      });
      const clear=(txt)=>{state.textContent=txt;state.classList.add('show');tier.innerHTML='';};
      if(relicLoading){clear(t('mktLoading'));return;}
      if(!relicPrices){clear(t('mktErr'));return;}
      const rows=pricedRows();
      if(!rows.length){clear(t('mktNoL'));return;}
      state.classList.remove('show');
      const byKey={};rows.forEach(r=>byKey[r.key]=r);
      const ordered=CHESTS.filter(c=>byKey[c.key]).map(c=>byKey[c.key]);
      const best=rows[0];
      tier.innerHTML=ordered.map(row=>{
        const need=total>0?Math.ceil(total/row.qty):1;
        const isBest=row===best;
        const isSel=row.key===relicTier;
        const rowName=(row.name&&row.name!==row.key)?row.name:row.key;
        const rc=gradeColor(row.bg),rb=gradeBg(row.bg);
        return '<div class="tier-row'+(isBest?' best-value':'')+(isSel?' selected':'')+'" data-tier="'+row.key+'">'+(row.imageUrl?'<span class="tier-ico '+(rb?'g':'')+'" '+(rb?'style="background:'+rb+'"':'')+'><img class="tier-img" src="'+row.imageUrl+'" alt="" loading="lazy" onerror="this.style.display=\'none\'"></span>':'')+'<span class="tier-name"><span class="tier-real" style="color:'+(rc||'')+'">'+rowName+'</span>'+(isBest?'<i class="chk-ico" title="'+t('bestTag')+'"></i>':'')+'</span><span class="tier-cost">'+relicFmt(row.usdt)+'</span></div>';
      }).join('');
      tier.hidden=false;
      renderInsight(total);
    }
    function renderInsight(total){
      const host=$('mktInsight');
      if(!host)return;
      const rows=pricedRows();
      if(!rows.length){host.innerHTML='';return;}
      if(total<=0){
        host.innerHTML='<div class="mkt-insight-card mkt-insight-empty">'+t('setGoal')+'</div>';
        return;
      }
      const per=[],bd=[];let gCP=0;
      for(let i=0;i<4;i++){
        per.push(relicTP(relicState[i][0],relicState[i][1],i));
        const b=relicBreakdown(i,relicState[i][0],relicState[i][1]);
        bd.push(b);gCP+=b.totalCP;
      }
      if(gCP<=0)return;
      const totalCost=relicPieceCost(total);
      const costCP=(totalCost>0&&gCP>0)?(totalCost/gCP):null;
      const best=rows[0];
      const pick=relicTier&&rows.find(r=>r.key===relicTier)?rows.find(r=>r.key===relicTier):best;
      const bestQ=Math.ceil(total/best.qty),bestCost=best.usdt*bestQ;
      const pickQ=Math.ceil(total/pick.qty),pickCost=pick.usdt*pickQ;
      const save=pickCost>bestCost+0.001?(pickCost-bestCost):0;
      const savePct=save>0&&pickCost>0?(save/pickCost*100):0;
      const eff=[];for(let i=0;i<4;i++){
        if(per[i]<=0||bd[i].totalCP<=0)continue;
        const c=relicPieceCost(per[i]);
        eff.push({i,cp:bd[i].totalCP,cost:c,cpc:c>0?c/bd[i].totalCP:null,pieces:per[i]});
      }
      eff.sort((a,b)=>(a.cpc??1e18)-(b.cpc??1e18));
      let h='';
      h+='<div class="mkt-insight-card mkt-cost-card"><div class="mkt-insight-title">'+t('mktInsight')+'</div><div class="mkt-cost-cp"><span class="mkt-cost-cp-val">'+(costCP!==null?relicFmt(costCP):'\u2014')+'</span><span class="mkt-cost-cp-unit">'+t('mktCostCp')+'</span></div></div>';
      h+='<div class="mkt-insight-card"><div class="mkt-insight-title">'+t('mktBestTier')+'</div><div class="mkt-best-row"><span class="tier-real" style="color:'+(gradeColor(best.bg)||'')+'">'+(best.name&&best.name!==best.key?best.name:best.key)+'</span><span class="mkt-best-meta">'+relicFmt(best.per1k)+' / '+fmtNum(1000)+'</span></div><div class="mkt-best-cta">'+t('mktBestTip')+' '+relicFmt(bestCost)+' <span class="mkt-qty">('+fmtNum(bestQ)+')</span></div></div>';
      h+='<div class="mkt-insight-card"><div class="mkt-insight-title">'+t('mktCalc')+'</div><div class="mkt-calc-row"><span>'+t('mktCalcPieces')+'</span><b>'+fmtCompact(total)+'</b></div><div class="mkt-calc-row"><span>'+t('mktCalcCp')+'</span><b>+'+fmtCompact(gCP)+'</b></div><div class="mkt-calc-row"><span>'+t('mktCalcCost')+'</span><b>'+relicFmt(totalCost)+'</b></div></div>';

      if(eff.length){
        let th='<div class="mkt-tbl-row mkt-tbl-head"><span>'+t('mktHRelic')+'</span><span class="mkt-tbl-lv">'+t('mktHLevel')+'</span><span>'+t('mktHCp')+'</span><span>'+t('mktHCost')+'</span><span>'+t('mktHCpCur')+'</span></div>';
        th+=eff.map(e=>{
          const name=(LANG[lang].relicNames||RELIC_NAMES)[e.i];
          const from=relicState[e.i][0],to=relicState[e.i][1];
          return '<div class="mkt-tbl-row"><span class="mkt-tbl-name"><span class="relic-dot re-'+e.i+'" aria-hidden="true"></span>'+name+'</span><span class="mkt-t-lv">'+fmtNum(from)+' '+t('mktFromTo')+' '+fmtNum(to)+'</span><span>+'+fmtCompact(e.cp)+'</span><span>'+relicFmt(e.cost)+'</span><span class="mkt-t-cpc">'+(e.cpc?relicFmt(e.cpc):'\u2014')+'</span></div>';
        }).join('');
        h+='<div class="mkt-insight-card"><div class="mkt-insight-title">'+t('mktTable')+' <span class="mkt-insight-sub">'+t('mktEffic')+'</span></div>'+th+'</div>';
      }

      if(save>0){
        h+='<div class="mkt-insight-card mkt-save-card"><div class="mkt-insight-title">'+t('mktSavings')+'</div><div class="mkt-save-row"><div class="mkt-save-msg">'+t('mktSavingsMsg')+'</div><div class="mkt-save-amt">'+relicFmt(save)+' <span class="mkt-save-pct">('+savePct.toFixed(1)+'%)</span></div></div></div>';
      }else{
        h+='<div class="mkt-insight-card mkt-save mkt-save-ok"><div class="mkt-insight-title">'+t('mktSavings')+'</div><div class="mkt-save-msg">'+t('mktAlreadyBest')+'</div></div>';
      }
      host.innerHTML=h;
    }
    function rRelicSoft(){
      if(!$('pageRelic').classList.contains('active'))return;
      $('mktUpdated').textContent=mktUpdatedLabel();
    }
    function resetRelic(){
      relicState=[[1,1],[1,1],[1,1],[1,1]];
      relicCurrency='usd';
      relicTier='auto';
      rRelic();
    }

function fitRelic(){
      const page=$('pageRelic');
      if(!page||!page.classList.contains('active'))return;
      if(window.matchMedia('(max-width: 900px)').matches)return;
      const panel=document.querySelector('#pageRelic .relic-grid > .panel');
      const body=panel?panel.querySelector('.panel-body'):null;
      if(!body)return;
      body.style.removeProperty('transform');
      const avail=body.clientHeight;
      const need=body.scrollHeight;
      if(avail<=1||need<=avail+1)return;
      const s=Math.max(0.5,avail/need);
      body.style.transformOrigin='top center';
      body.style.transform='scale('+s+')';
    }
    function fitMarketInsight(){
      const page=$('pageRelic');
      if(!page||!page.classList.contains('active'))return;
      if(window.matchMedia('(max-width: 900px)').matches)return;
      const ins=$('mktInsight');
      if(!ins||!ins.innerHTML)return;
      ins.style.setProperty('--fit','1');
      const avail=ins.clientHeight;
      if(avail<=1)return;
      let fit=1;
      for(let i=0;i<8;i++){
        if(ins.scrollHeight<=avail+1)break;
        fit=Math.max(0.5,fit*avail/ins.scrollHeight);
        ins.style.setProperty('--fit',fit);
      }
    }
    function fitPanelCards(root){
      const cards=[...root.querySelectorAll('.day-card,.interval-card')];
      if(!cards.length)return;
      cards.forEach(c=>c.style.removeProperty('font-size'));
      const cardFrac=c=>{
        const area=c.querySelector('.day-events,.interval-rows');
        if(!area)return 1;
        const avail=area.clientHeight,need=area.scrollHeight;
        if(avail<=1||need<=avail+1)return 1;
        return Math.max(0.5,(avail/need)*0.97);
      };
      let cur=16;
      for(let i=0;i<6;i++){
        let frac=1;
        for(const c of cards)frac=Math.min(frac,cardFrac(c));
        if(frac>=1)break;
        const next=Math.max(8,cur*frac);
        if(Math.abs(next-cur)<0.1){cur=next;break}
        cur=next;
        cards.forEach(c=>c.style.setProperty('font-size',cur+'px'));
      }
      cards.forEach(c=>c.style.setProperty('font-size',cur+'px'));
    }

    const HIDDEN_CLASSES=[{className:"Sword Master",skillName:"Exalted Will",skill:"Basic Attacks have a 25% chance of dealing Extra Combined Damage.",pairs:[{skills:[{name:"Deathblow",type:"Enhance"},{name:"Time Haste",type:"Trick"}]},{skills:[{name:"Secreta's Talent",type:"Recon"},{name:"Parry",type:"Defense"}]},{skills:[{name:"Wild Dance",type:"Combat"},{name:"Deliberate Attack",type:"Support"}]}],milestones:[{lvl:100,desc:"Melee Defense Penetration +50"},{lvl:200,desc:"Movement Speed +8%"},{lvl:300,desc:"Attack Speed +8%"},{lvl:400,desc:"Attack Power +70"},{lvl:500,desc:"Melee Attack +50 / All Damage +3.5%"},{lvl:600,desc:"On hit, reduce Damage Received for next 3 hits (10 sec)."},{lvl:700,desc:"Defense Power +100"},{lvl:800,desc:"Deals Combined Damage to the target, and drains the target's MP and Stamina equal to 80% of Max MP and Max Stamina."}]},
{className:"Destroyer",skillName:"Land Crush",skill:"Jumps to target within 7m and deals Combined Damage around impact, gaining Damage Immunity for 3.5 sec.",pairs:[{skills:[{name:"Hellfire Weapon",type:"Enhance"},{name:"Honed Weaponry",type:"Recon"}]},{skills:[{name:"Blink",type:"Trick"},{name:"Power of Darkness",type:"Spell"}]},{skills:[{name:"Polish Weapon",type:"Combat"},{name:"Gamble",type:"Support"}]}],milestones:[{lvl:100,desc:"Defense Penetration +50"},{lvl:200,desc:"Movement Speed +8%"},{lvl:300,desc:"Attack Speed +8%"},{lvl:400,desc:"Attack Power +70"},{lvl:500,desc:"Skill Damage +7% / Cooldown Decrease +10%"},{lvl:600,desc:"Landing Attack boosts Attack/Defense Power for 60 sec."},{lvl:700,desc:"Attack Power +100 / Defense Power +100"},{lvl:800,desc:"Causes an Earthquake around the caster for 10 sec. Deals 50% extra Physical Damage to targets within range every 2 sec, and inflicts Stun for 1 sec with a +80% chance. (Up to 20 targets)"}]},
{className:"Frost Knight",skillName:"Frost Curse",skill:"Deals Combined Damage in target area and inflicts Frozen for 4 sec; reducing Movement Speed for 10 sec.",pairs:[{skills:[{name:"Frost Weapon",type:"Spell"},{name:"Earth Shock",type:"Combat"}]},{skills:[{name:"Cutting Strike",type:"Enhance"},{name:"Life Tap",type:"Trick"}]},{skills:[{name:"Leech",type:"Vitality"},{name:"Anatomy",type:"Support"}]}],milestones:[{lvl:100,desc:"Endurance Ignore +50"},{lvl:200,desc:"Movement Speed +8%"},{lvl:300,desc:"Attack Speed +8%"},{lvl:400,desc:"Attack Power +70"},{lvl:500,desc:"Critical Hit +100 / Critical Hit Damage +7%"},{lvl:600,desc:"At 50% HP or below, increases Endurance."},{lvl:700,desc:"Attack Power +100"},{lvl:800,desc:"Causes an Ice Storm around the target for 10 sec. Deals 50% extra Magic Damage to targets within range every second, and reduces Movement Speed for 3 sec. (Up to 20 targets)"}]},
{className:"Ancient Protector",skillName:"Ancient Protector",skill:"Landing a Basic Attack can stack All Damage and Damage to Monsters up to 20 times.",pairs:[{skills:[{name:"Create Zone",type:"Defense"},{name:"Deliberate Attack",type:"Support"}]},{skills:[{name:"Overcome",type:"Vitality"},{name:"Fire Spirit",type:"Enhance"}]},{skills:[{name:"Spell Infusion",type:"Spell"},{name:"Wanderer",type:"Trick"}]}],milestones:[{lvl:100,desc:"Defense Power +50"},{lvl:200,desc:"Movement Speed +8%"},{lvl:300,desc:"Attack Speed +8%"},{lvl:400,desc:"Attack Power +70"},{lvl:500,desc:"Defense Power +75 / Attack Power +100"},{lvl:600,desc:"Increases Attack/Defense Power per HP lost."},{lvl:700,desc:"Defense Power +100 / Endurance +30"},{lvl:800,desc:"Increases All Damage of the caster and allies within a 10m radius for 30 sec, and reduces Damage Received. (Up to 10 targets)"}]},
{className:"Immortal Knight",skillName:"Immortality",skill:"At very low HP, becomes Immortal briefly and recovers HP equal to a portion of max HP.",pairs:[{skills:[{name:"Chase",type:"Combat"},{name:"Defensive Stance",type:"Defense"}]},{skills:[{name:"Deathblow",type:"Enhance"},{name:"Supersense",type:"Recon"}]},{skills:[{name:"Install Bomb",type:"Trick"},{name:"Secreta's Talent",type:"Recon"}]}],milestones:[{lvl:100,desc:"Defense Penetration +50"},{lvl:200,desc:"Movement Speed +8%"},{lvl:300,desc:"Attack Speed +8%"},{lvl:400,desc:"Attack Power +70"},{lvl:500,desc:"Attack Power +75 / Damage Received Decrease +3.5%"},{lvl:600,desc:"Landing Attack increases Accuracy and Critical Hit for 30 sec."},{lvl:700,desc:"Defense Power +100"},{lvl:800,desc:"Grants Petrify to the caster for 5 sec."}]},
{className:"Trinity",skillName:"Everlasting Flow",skill:"Basic attack has a chance to grant Attack Speed, Defense Penetration, and Critical Strike effects.",pairs:[{skills:[{name:"Cutting Strike",type:"Enhance"},{name:"Magic Ignition",type:"Vitality"}]},{skills:[{name:"Magic Circulation",type:"Vitality"},{name:"Supersense",type:"Recon"}]},{skills:[{name:"Weapon of Destruction",type:"Trick"},{name:"Weak Spot Analysis",type:"Support"}]}],milestones:[{lvl:100,desc:"Defense Power +50"},{lvl:200,desc:"Movement Speed +8%"},{lvl:300,desc:"Attack Speed +8%"},{lvl:400,desc:"Attack Power +70"},{lvl:500,desc:"Attack Power +75 / All Damage +3.5%"},{lvl:600,desc:"Hitting Attack Skill grants AP, HP, and Crit for 1 minute."},{lvl:700,desc:"Attack Power +100 / Attack Speed +5%"},{lvl:800,desc:"Deals Combined Damage around the caster and inflicts Stun for 5 sec with a +80% chance. (Up to 10 targets)"}]},
{className:"Harbinger of Storms",skillName:"Raging Storm",skill:"Summons a storm area that pulls targets, applies movement penalties, and grants immunity to status effects.",pairs:[{skills:[{name:"Mirror Shield",type:"Defense"},{name:"War Cry",type:"Vitality"}]},{skills:[{name:"Ice Spirit",type:"Enhance"},{name:"Power of Darkness",type:"Spell"}]},{skills:[{name:"Spread Venom",type:"Recon"},{name:"Magnetic Field",type:"Spell"}]}],milestones:[{lvl:100,desc:"Skill Damage +7%"},{lvl:200,desc:"Movement Speed +8%"},{lvl:300,desc:"Attack Speed +8%"},{lvl:400,desc:"Attack Power +70"},{lvl:500,desc:"Skill Damage +15%"},{lvl:600,desc:"+15% movement speed for 30 sec when landing attack skills."},{lvl:700,desc:"Attack Speed +5%"},{lvl:800,desc:"Increases the caster's Max HP, Defense Power, Attack Speed, and Movement Speed for 30 sec."}]},
{className:"Goddess of Blessings",skillName:"Hands of the Goddess",skill:"Increases Attack Power, Movement Speed, and Status Effects Resistance in a 15m area.",pairs:[{skills:[{name:"Create Zone",type:"Defense"},{name:"Lightning Spirit",type:"Enhance"}]},{skills:[{name:"Leech",type:"Vitality"},{name:"Time Haste",type:"Trick"}]},{skills:[{name:"Wanderer",type:"Trick"},{name:"Continuous Curing",type:"Support"}]}],milestones:[{lvl:100,desc:"Endurance +50"},{lvl:200,desc:"Movement Speed +8%"},{lvl:300,desc:"Attack Speed +8%"},{lvl:400,desc:"Attack Power +70"},{lvl:500,desc:"Defense +75 / Cooldown Reduction +10%"},{lvl:600,desc:"Landing attack skill grants AP/Defense and +10% attack speed for 1 minute."},{lvl:700,desc:"Attack Power +100 / Attack Speed +5%"},{lvl:800,desc:"Recovers HP of the caster and party members within a 10m radius equal to 10% of Max HP every 2 sec for 10 sec. Reduces Healing Received for 60 sec. [Recovery cannot exceed Max 5,000 per instance.]"}]}];

    const HT={ko:{},ja:{}};(function(){
  const add=(en,ko,ja)=>{HT.ko[en]=ko;HT.ja[en]=ja};
  add("Sword Master","검술 마스터","剣術マスター");
  add("Destroyer","파괴자","破壊者");
  add("Frost Knight","서리 기사","氷霜の騎士");
  add("Ancient Protector","고대 수호자","古代守護者");
  add("Immortal Knight","불멸 기사","不死の騎士");
  add("Trinity","삼위일체","三位一体");
  add("Harbinger of Storms","폭풍의 전조","嵐の先駆け");
  add("Goddess of Blessings","축복의 여신","祝福の女神");
  add("Exalted Will","고귀한 의지","高貴なる意志");
  add("Land Crush","대지 분쇄","大地粉砕");
  add("Frost Curse","서리 저주","氷霜の呪い");
  add("Immortality","불멸","不死");
  add("Everlasting Flow","영원한 흐름","永劫の流れ");
  add("Raging Storm","폭풍우","荒れ狂う嵐");
  add("Hands of the Goddess","여신의 손길","女神の御手");
  add("Basic Attacks have a 25% chance of dealing Extra Combined Damage.","기본 공격 시 25% 확률로 추가 합산 피해를 입힙니다.","基本攻撃時、25%の確率で追加の合算ダメージを与える。");
  add("Jumps to target within 7m and deals Combined Damage around impact, gaining Damage Immunity for 3.5 sec.","7m 이내 대상에게 도약하여 충격 지점 주변에 합산 피해를 입히고 3.5초간 피해 면역을 얻습니다.","7m以内の対象に跳躍し、着弾地点周辺に合算ダメージを与え、3.5秒間ダメージ無効を得る。");
  add("Deals Combined Damage in target area and inflicts Frozen for 4 sec; reducing Movement Speed for 10 sec.","대상 지역에 합산 피해를 입히고 4초간 빙결 상태로 만들어 10초간 이동 속도를 감소시킵니다.","対象エリアに合算ダメージを与え、4秒間凍結状態にし、10秒間移動速度を低下させる。");
  add("Landing a Basic Attack can stack All Damage and Damage to Monsters up to 20 times.","기본 공격 적중 시 모든 피해 및 몬스터 대상 피해를 최대 20회까지 중첩합니다.","基本攻撃命中時、全ダメージとモンスターへのダメージを最大20回まで累積する。");
  add("At very low HP, becomes Immortal briefly and recovers HP equal to a portion of max HP.","HP가 매우 낮을 때 잠시 불사 상태가 되어 최대 HP의 일부를 회복합니다.","HPが非常に低い時、一時的に不死状態となり最大HPの一部を回復する。");
  add("Basic attack has a chance to grant Attack Speed, Defense Penetration, and Critical Strike effects.","기본 공격 시 공격 속도, 방어 관통, 치명타 효과를 부여할 확률이 있습니다.","基本攻撃時、確率で攻撃速度、防御貫通、クリティカル効果を付与する。");
  add("Summons a storm area that pulls targets, applies movement penalties, and grants immunity to status effects.","대상을 끌어당기고 이동 패널티를 부여하며 상태 효과 면역을 부여하는 폭풍 지대를 소환합니다.","対象を引き寄せ、移動ペナルティを与え、状態異常無効を付与する嵐の領域を召喚する。");
  add("Increases Attack Power, Movement Speed, and Status Effects Resistance in a 15m area.","15m 범위 내 공격력, 이동 속도, 상태 효과 저항을 증가시킵니다.","15m範囲内の攻撃力、移動速度、状態異常耐性を増加させる。");
  add("Deathblow","필살 일격","必殺の一撃");
  add("Time Haste","시간 가속","時空加速");
  add("Secreta's Talent","세크레타의 재능","セクレタの才能");
  add("Parry","받아넘기기","受け流し");
  add("Wild Dance","광란의 춤","乱舞");
  add("Deliberate Attack","신중한 공격","精密攻撃");
  add("Hellfire Weapon","지옥불 무기","地獄火の武器");
  add("Honed Weaponry","연마된 무기","研磨された武器");
  add("Blink","점멸","ブリンク");
  add("Power of Darkness","어둠의 힘","闇の力");
  add("Polish Weapon","무기 연마","武器研磨");
  add("Gamble","도박","ギャンブル");
  add("Frost Weapon","서리 무기","氷霜の武器");
  add("Earth Shock","대지 충격","大地衝撃");
  add("Cutting Strike","베어내기","斬撃");
  add("Life Tap","생명력 전환","生命転換");
  add("Leech","흡혈","吸血");
  add("Anatomy","해부학","解剖学");
  add("Create Zone","영역 생성","領域生成");
  add("Overcome","극복","克服");
  add("Fire Spirit","불의 정령","火の精霊");
  add("Spell Infusion","주문 주입","呪文注入");
  add("Wanderer","방랑자","放浪者");
  add("Chase","추격","追撃");
  add("Defensive Stance","방어 태세","防御態勢");
  add("Supersense","초감각","超感覚");
  add("Install Bomb","폭탄 설치","爆弾設置");
  add("Magic Ignition","마법 점화","魔力点火");
  add("Magic Circulation","마법 순환","魔力循環");
  add("Weapon of Destruction","파괴의 무기","破壊の武器");
  add("Weak Spot Analysis","약점 분석","弱点分析");
  add("Mirror Shield","거울 방패","鏡の盾");
  add("War Cry","전투의 함성","戦の雄叫び");
  add("Ice Spirit","얼음 정령","氷の精霊");
  add("Spread Venom","맹독 살포","猛毒散布");
  add("Magnetic Field","자기장","磁場");
  add("Lightning Spirit","번개 정령","雷の精霊");
  add("Continuous Curing","지속 치유","持続治療");
  add("Combat","전투","戦闘");
  add("Recon","정찰","偵察");
  add("Defense","방어","防御");
  add("Spell","주문","呪文");
  add("Enhance","강화","強化");
  add("Support","지원","支援");
  add("Vitality","생명력","生命力");
  add("Trick","술책","策略");
  add("Melee Defense Penetration +50","근접 방어 관통 +50","近接防御貫通 +50");
  add("Movement Speed +8%","이동 속도 +8%","移動速度 +8%");
  add("Attack Speed +8%","공격 속도 +8%","攻撃速度 +8%");
  add("Attack Power +70","공격력 +70","攻撃力 +70");
  add("Melee Attack +50 / All Damage +3.5%","근접 공격 +50 / 모든 피해 +3.5%","近接攻撃 +50 / 全ダメージ +3.5%");
  add("On hit, reduce Damage Received for next 3 hits (10 sec).","적중 시 다음 3회 피격의 피해 감소 (10초).","命中時、次の3回の被ダメージを軽減 (10秒)。");
  add("Defense Power +100","방어력 +100","防御力 +100");
  add("Deals Combined Damage to the target, and drains the target's MP and Stamina equal to 80% of Max MP and Max Stamina.","대상에게 합산 피해를 입히고 대상의 최대 MP와 최대 스태미나의 80%에 해당하는 MP와 스태미나를 흡수합니다.","対象に合算ダメージを与え、対象の最大MPと最大スタミナの80%相当のMPとスタミナを吸収する。");
  add("Defense Penetration +50","방어 관통 +50","防御貫通 +50");
  add("Skill Damage +7% / Cooldown Decrease +10%","스킬 피해 +7% / 쿨다운 감소 +10%","スキルダメージ +7% / クールダウン減少 +10%");
  add("Landing Attack boosts Attack/Defense Power for 60 sec.","공격 적중 시 60초간 공격력/방어력 증가.","攻撃命中時、60秒間攻撃力/防御力が増加。");
  add("Attack Power +100 / Defense Power +100","공격력 +100 / 방어력 +100","攻撃力 +100 / 防御力 +100");
  add("Causes an Earthquake around the caster for 10 sec. Deals 50% extra Physical Damage to targets within range every 2 sec, and inflicts Stun for 1 sec with a +80% chance. (Up to 20 targets)","시전자 주변에 10초간 지진을 일으킵니다. 2초마다 범위 내 대상에게 50% 추가 물리 피해를 입히고 +80% 확률로 1초간 기절시킵니다. (최대 20명)","術者の周囲に10秒間地震を発生させる。2秒毎に範囲内の対象に50%追加物理ダメージを与え、+80%の確率で1秒間スタンさせる。(最大20体)");
  add("Endurance Ignore +50","인내 무시 +50","耐久無視 +50");
  add("Critical Hit +100 / Critical Hit Damage +7%","치명타 +100 / 치명타 피해 +7%","クリティカル +100 / クリティカルダメージ +7%");
  add("At 50% HP or below, increases Endurance.","HP 50% 이하일 때 인내 증가.","HP50%以下で耐久が増加。");
  add("Causes an Ice Storm around the target for 10 sec. Deals 50% extra Magic Damage to targets within range every second, and reduces Movement Speed for 3 sec. (Up to 20 targets)","대상 주변에 10초간 얼음 폭풍을 일으킵니다. 매초 범위 내 대상에게 50% 추가 마법 피해를 입히고 3초간 이동 속도를 감소시킵니다. (최대 20명)","対象の周囲に10秒間氷の嵐を発生させる。毎秒範囲内の対象に50%追加魔法ダメージを与え、3秒間移動速度を低下させる。(最大20体)");
  add("Defense Power +50","방어력 +50","防御力 +50");
  add("Defense Power +75 / Attack Power +100","방어력 +75 / 공격력 +100","防御力 +75 / 攻撃力 +100");
  add("Increases Attack/Defense Power per HP lost.","HP 손실에 비례하여 공격력/방어력 증가.","HP減少に応じて攻撃力/防御力が増加。");
  add("Defense Power +100 / Endurance +30","방어력 +100 / 인내 +30","防御力 +100 / 耐久 +30");
  add("Increases All Damage of the caster and allies within a 10m radius for 30 sec, and reduces Damage Received. (Up to 10 targets)","10m 반경 내 시전자와 아군의 모든 피해를 30초간 증가시키고 받는 피해를 감소시킵니다. (최대 10명)","10m半径内の術者と味方の全ダメージを30秒間増加させ、被ダメージを減少させる。(最大10体)");
  add("Attack Power +75 / Damage Received Decrease +3.5%","공격력 +75 / 받는 피해 감소 +3.5%","攻撃力 +75 / 被ダメージ減少 +3.5%");
  add("Landing Attack increases Accuracy and Critical Hit for 30 sec.","공격 적중 시 30초간 명중률과 치명타 증가.","攻撃命中時、30秒間命中率とクリティカルが増加。");
  add("Grants Petrify to the caster for 5 sec.","시전자에게 5초간 석화 부여.","術者に5秒間石化を付与。");
  add("Attack Power +75 / All Damage +3.5%","공격력 +75 / 모든 피해 +3.5%","攻撃力 +75 / 全ダメージ +3.5%");
  add("Hitting Attack Skill grants AP, HP, and Crit for 1 minute.","공격 스킬 적중 시 1분간 공격력, HP, 치명타 증가.","攻撃スキル命中時、1分間攻撃力、HP、クリティカルが増加。");
  add("Attack Power +100 / Attack Speed +5%","공격력 +100 / 공격 속도 +5%","攻撃力 +100 / 攻撃速度 +5%");
  add("Deals Combined Damage around the caster and inflicts Stun for 5 sec with a +80% chance. (Up to 10 targets)","시전자 주변에 합산 피해를 입히고 +80% 확률로 5초간 기절시킵니다. (최대 10명)","術者の周囲に合算ダメージを与え、+80%の確率で5秒間スタンさせる。(最大10体)");
  add("Skill Damage +7%","스킬 피해 +7%","スキルダメージ +7%");
  add("Skill Damage +15%","스킬 피해 +15%","スキルダメージ +15%");
  add("+15% movement speed for 30 sec when landing attack skills.","공격 스킬 적중 시 30초간 이동 속도 +15%.","攻撃スキル命中時、30秒間移動速度 +15%。");
  add("Increases the caster's Max HP, Defense Power, Attack Speed, and Movement Speed for 30 sec.","30초간 시전자의 최대 HP, 방어력, 공격 속도, 이동 속도를 증가시킵니다.","30秒間、術者の最大HP、防御力、攻撃速度、移動速度を増加させる。");
  add("Endurance +50","인내 +50","耐久 +50");
  add("Defense +75 / Cooldown Reduction +10%","방어 +75 / 쿨다운 감소 +10%","防御 +75 / クールダウン減少 +10%");
  add("Landing attack skill grants AP/Defense and +10% attack speed for 1 minute.","공격 스킬 적중 시 1분간 공격력/방어력 및 공격 속도 +10% 증가.","攻撃スキル命中時、1分間攻撃力/防御力および攻撃速度 +10%が増加。");
  add("Recovers HP of the caster and party members within a 10m radius equal to 10% of Max HP every 2 sec for 10 sec. Reduces Healing Received for 60 sec. [Recovery cannot exceed Max 5,000 per instance.]","10m 반경 내 시전자와 파티원의 최대 HP의 10%에 해당하는 HP를 10초간 2초마다 회복합니다. 60초간 받는 치유 감소. [회복량은 회당 최대 5,000을 초과할 수 없습니다.]","10m半径内の術者とパーティーメンバーの最大HPの10%相当のHPを10秒間2秒毎に回復する。60秒間被治癒量が減少。[回復量は1回につき最大5,000を超えない]");
})();
    let lastHiddenLang='';
    function rHidden(){
      if(lastHiddenLang===lang)return;
      lastHiddenLang=lang;
      const ht=(en)=>(HT[lang]&&HT[lang][en])||en;
      const expandedSet=new Set([...document.querySelectorAll('.class-card.expanded')].map(c=>c.dataset.key));
      $('hiddenList').innerHTML=HIDDEN_CLASSES.map((c,i)=>{
        const exp=expandedSet.has(c.className);
        const pairs=c.pairs.map(p=>'<div class="skill-pair">'+p.skills.map(s=>'<span class="skill-pair-item skill-pair-'+s.type+'"><img src="assets/'+s.type.toLowerCase()+'.png" alt="" class="hc-type-icon" loading="lazy" decoding="async"><span class="skill-pair-name">'+ht(s.name)+'</span></span>').join('')+'</div>').join('');
        const mils=c.milestones.map(m=>'<div class="milestone-item"><span class="milestone-lvl">'+m.lvl+'</span><span class="milestone-desc">'+ht(m.desc).replace(/(\+\d+(?:\.\d+)?%?)/g,'<span class="stat-val">$1</span>')+'</span></div>').join('');
        return '<div class="class-card'+(exp?' expanded':'')+'" tabindex="0" aria-expanded="'+exp+'" data-key="'+c.className+'"><div class="class-card-header"><div class="class-icon"><img src="assets/'+c.className+'.png" alt="" class="class-icon-img" loading="lazy" decoding="async"></div><div class="class-title-group"><span class="class-name">'+ht(c.className)+'</span></div><span class="class-toggle" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></span></div><div class="class-card-body"><div class="skill-block"><div class="skill-block-label">'+ht(c.skillName)+'</div><div class="skill-block-text">'+ht(c.skill)+'</div></div><div class="skill-pairs">'+pairs+'</div><div class="milestones"><div class="milestone-title">Milestones</div><div class="milestone-list">'+mils+'</div></div></div></div>';
      }).join('');
      fitPairTexts();
      fitExpandedCards();
      fitCollapsedCards();
    }

    function fitPairTexts(){
      document.querySelectorAll('#hiddenList .skill-pair-name').forEach(n=>{
        const item=n.closest('.skill-pair-item');
        const w=n.clientWidth;
        if(!w) return;
        const tx=n.style.transition,ix=item.style.transition;
        n.style.transition='none';item.style.transition='none';
        n.style.fontSize='';
        if(n.scrollWidth>w){
          let fs=parseFloat(getComputedStyle(n).fontSize);
          while(fs>10&&n.scrollWidth>w){fs=Math.max(10,fs-0.5);n.style.fontSize=fs+'px';}
        }
        n.style.transition=tx;item.style.transition=ix;
      });
    }

    function fitClassCard(card){
      const body=card.querySelector('.class-card-body');
      if(!body)return;
      body.style.removeProperty('zoom');
      const avail=body.clientHeight;
      if(avail<=1)return;
      const need=body.scrollHeight;
      if(need<=avail+1)return;
      let z=Math.min(1,(avail/need)*0.97);
      if(z<0.5)z=0.5;
      body.style.zoom=z;
      if(z>0.5&&body.scrollHeight>avail+1){
        z=Math.max(0.5,z*(avail/body.scrollHeight)*0.97);
        body.style.zoom=z;
      }
    }

    function fitExpandedCards(){
      if(window.innerWidth>900)return;
      document.querySelectorAll('#hiddenList .class-card .class-card-body').forEach(b=>b.style.removeProperty('zoom'));
      document.querySelectorAll('#hiddenList .class-card.expanded').forEach(fitClassCard);
    }

    function fitCollapsedCards(){
      if(window.innerWidth>900)return;
      const cards=[...document.querySelectorAll('#hiddenList .class-card')];
      for(const c of cards){
        const h=c.querySelector('.class-card-header');
        if(h)h.style.removeProperty('zoom');
      }
      for(const c of cards){
        if(c.classList.contains('expanded'))continue;
        const h=c.querySelector('.class-card-header');
        if(!h)continue;
        const availW=h.clientWidth,availH=h.clientHeight;
        if(availW<=1||availH<=1)continue;
        const needW=h.scrollWidth,needH=h.scrollHeight;
        if(needW<=availW+1&&needH<=availH+1)continue;
        let z=Math.min(1,Math.min(availW/needW,availH/needH)*0.97);
        if(z<0.5)z=0.5;
        h.style.zoom=z;
        if(z>0.5&&(h.scrollHeight>availH+1||h.scrollWidth>availW+1)){
          z=Math.max(0.5,z*Math.min(availW/h.scrollWidth,availH/h.scrollHeight)*0.97);
          h.style.zoom=z;
        }
      }
    }

    const $=(id)=>document.getElementById(id);

    $('langBtn').onclick=langNext;
    $('alarmBtn').onclick=toggleAlarm;

    for(let i=0;i<4;i++)(function(idx){
      const from=$('relicFrom'+idx),to=$('relicTo'+idx);
      const setPair=(a,b)=>{relicState[idx]=[Math.max(1,Math.min(100,a)),Math.max(1,Math.min(100,b))];rRelic();};
      const upd=()=>{
        let a=parseInt(from.value,10)||1,b=parseInt(to.value,10)||1;
        a=Math.max(1,Math.min(100,a));b=Math.max(1,Math.min(100,b));
        from.value=a;to.value=b;
        setPair(a,b);
      };
      from.addEventListener('input',upd);
      to.addEventListener('input',upd);
    })(i);

    document.getElementById('relicSettings').addEventListener('click',(e)=>{
      const btn=e.target.closest('.relic-stepper');
      if(!btn)return;
      const idx=+btn.dataset.idx,field=btn.dataset.field,dir=+btn.dataset.dir;
      const inp=$('relic'+(field[0].toUpperCase()+field.slice(1))+idx);
      const cur=Math.max(1,Math.min(100,parseInt(inp.value,10)||1));
      const nxt=Math.max(1,Math.min(100,cur+dir));
      inp.value=nxt;
      relicState[idx]=[field==='from'?nxt:relicState[idx][0],field==='to'?nxt:relicState[idx][1]];
      rRelic();
    });

    const refreshBtn=$('mktRefresh');
    refreshBtn.onclick=()=>{
      if(refreshBtn.dataset.lock)return;
      loadPrices(true);
      let left=5;
      refreshBtn.dataset.lock='1';
      refreshBtn.classList.add('locked');
      refreshBtn.textContent='';
      const tick=()=>{
        refreshBtn.textContent=left;
        if(left<=0){
          delete refreshBtn.dataset.lock;
          refreshBtn.classList.remove('locked');
          refreshBtn.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-2.64-6.36"></path><polyline points="21 3 21 9 15 9"></polyline></svg>';
          clearInterval(iv);
          return;
        }
        left--;
      };
      tick();
      const iv=setInterval(tick,1000);
    };
    document.querySelectorAll('.mkt-currency .seg-btn').forEach(b=>b.onclick=()=>{
      if(b.classList.contains('off'))return;
      relicCurrency=b.dataset.cur;
      rRelic();
    });
    document.querySelectorAll('.tier-list').forEach(l=>l.addEventListener('click',(e)=>{
      const row=e.target.closest('.tier-row');
      if(!row)return;
      const key=row.dataset.tier;
      relicTier=(relicTier===key)?'auto':key;
      rRelic();
    }));

    function positionNavIndicator(){
      const pill=document.querySelector('.nav-pill');
      const active=document.querySelector('.nav-btn.active');
      const ind=pill&&pill.querySelector('.nav-indicator');
      if(!pill||!active||!ind)return;
      const pillLeft=pill.getBoundingClientRect().left;
      const r=active.getBoundingClientRect();
      ind.style.left=Math.max(0,r.left-pillLeft)+'px';
      ind.style.width=Math.max(0,r.width)+'px';
    }
    function debounceNav(fn,ms){let t;return()=>{clearTimeout(t);t=setTimeout(fn,ms)}}

    document.querySelectorAll('.nav-btn').forEach(btn=>btn.onclick=()=>{
      const leavingRelic=$('pageRelic').classList.contains('active')&&btn.dataset.page!=='relic';
      document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
      if(leavingRelic)resetRelic();
      const PAGES={tracker:'pageTracker',hidden:'pageHidden',relic:'pageRelic'};
      $((PAGES[btn.dataset.page]||'pageTracker')).classList.add('active');
      requestAnimationFrame(()=>{fitPairTexts();fitExpandedCards();fitCollapsedCards();const ap=document.querySelector('.page.active');if(ap){fitPanelCards(ap)};if(ap&&ap===document.getElementById('pageRelic'))rRelic();});
      requestAnimationFrame(()=>{requestAnimationFrame(fitRelic);});
      requestAnimationFrame(positionNavIndicator);
    });

    document.addEventListener('click',(e)=>{
      const hdr=e.target.closest('.class-card-header');
      if(!hdr) return;
      const card=hdr.closest('.class-card');
      if(window.innerWidth<=900&&!card.classList.contains('expanded'))document.querySelectorAll('.class-card.expanded').forEach(c=>{
        if(c!==card){c.classList.remove('expanded');c.setAttribute('aria-expanded','false');}
      });
      card.classList.toggle('expanded');
      const expanded=card.classList.contains('expanded');
      card.setAttribute('aria-expanded',expanded);
      fitPairTexts();
      fitExpandedCards();
      fitCollapsedCards();
      if(expanded&&window.innerWidth<=900)requestAnimationFrame(()=>card.scrollIntoView({behavior:'smooth',block:'start'}));
    });

    document.addEventListener('keydown',(e)=>{
      if(e.key!=='Enter'&&e.key!==' ') return;
      const card=e.target.closest('.class-card');
      if(!card) return;
      e.preventDefault();
      if(window.innerWidth<=900&&!card.classList.contains('expanded'))document.querySelectorAll('.class-card.expanded').forEach(c=>{
        if(c!==card){c.classList.remove('expanded');c.setAttribute('aria-expanded','false');}
      });
      card.classList.toggle('expanded');
      const expanded=card.classList.contains('expanded');
      card.setAttribute('aria-expanded',expanded);
      fitPairTexts();
      fitExpandedCards();
      fitCollapsedCards();
      if(expanded&&window.innerWidth<=900)requestAnimationFrame(()=>card.scrollIntoView({behavior:'smooth',block:'start'}));
    });

    let fitTimer;
    window.addEventListener('resize',()=>{clearTimeout(fitTimer);fitTimer=setTimeout(()=>{fitPairTexts();fitExpandedCards();fitCollapsedCards();const ap=document.querySelector('.page.active');if(ap){fitPanelCards(ap)};fitRelic();fitMarketInsight()},150);});
    if(document.fonts&&document.fonts.ready)document.fonts.ready.then(()=>{fitPairTexts();fitExpandedCards();fitCollapsedCards();const ap=document.querySelector('.page.active');if(ap)fitPanelCards(ap);fitRelic();fitMarketInsight()});

    const ptrEl=$('ptrIndicator');
    let ptrY=0,ptrReady=false,ptrActive=false;
    document.addEventListener('touchstart',(e)=>{
      if(window.innerWidth>900||!ptrEl)return;
      let el=e.target,scrollable=false;
      while(el&&el!==document.body&&el!==document.documentElement){
        if(el.scrollHeight>el.clientHeight+1){
          scrollable=true;
          if(el.scrollTop>1)return;
        }
        el=el.parentElement;
      }
      if(!scrollable)return;
      ptrY=e.touches[0].clientY;ptrReady=true;ptrActive=false;
    },{passive:true});
    document.addEventListener('touchmove',(e)=>{
      if(!ptrReady)return;
      const dy=e.touches[0].clientY-ptrY;
      if(dy>0){
        ptrActive=true;
        ptrEl.style.top=Math.min(120,dy*0.5)+'px';
        ptrEl.style.opacity=Math.min(1,dy/100);
        if(e.cancelable)e.preventDefault();
      }
    },{passive:false});
    function ptrReset(){ptrReady=false;ptrActive=false;ptrEl.classList.remove('loading');ptrEl.style.top='';ptrEl.style.opacity='';}
    document.addEventListener('touchend',(e)=>{
      if(!ptrReady)return;
      ptrReady=false;
      const dy=e.changedTouches[0].clientY-ptrY;
      if(ptrActive&&dy>=80){
        ptrEl.classList.add('loading');
        location.reload();
        return;
      }
      ptrReset();
    },{passive:true});
    document.addEventListener('touchcancel',ptrReset,{passive:true});

    let currentView='interval',currentUpView='today';
    const segBtns=document.querySelectorAll('.segmented .seg-btn[data-view]');
    const viewBodies={interval:$('ivGrid'),schedule:$('schedGrid')};
    segBtns.forEach(btn=>{
      btn.addEventListener('click',()=>{
        currentView=btn.dataset.view;
        segBtns.forEach(b=>{
          b.classList.toggle('active',b===btn);
          b.setAttribute('aria-selected',b===btn?'true':'false');
        });
        viewBodies[currentView].hidden=false;
        Object.entries(viewBodies).forEach(([k,el])=>{if(k!==currentView) el.hidden=true;});
        $('viewTitle').textContent=t(currentView==='schedule'?'schedTitle':'ivTitle');
        fitPanelCards(viewBodies[currentView]);
      });
    });
    const upSegBtns=document.querySelectorAll('.segmented .seg-btn[data-upview]');
    const upViewBodies={today:$('upcomingList'),tomorrow:$('upcomingTmrw')};
    upSegBtns.forEach(btn=>{
      btn.addEventListener('click',()=>{
        currentUpView=btn.dataset.upview;
        upSegBtns.forEach(b=>{
          b.classList.toggle('active',b===btn);
          b.setAttribute('aria-selected',b===btn?'true':'false');
        });
        upViewBodies[currentUpView].hidden=false;
        Object.entries(upViewBodies).forEach(([k,el])=>{if(k!==currentUpView) el.hidden=true;});
        $('upcomingLbl').textContent=t(currentUpView==='tomorrow'?'tomorrow':'today');
        rUpcoming();
      });
    });

    let dataOnline=false;
    function setOnline(on){
      dataOnline=on;
      const lp=$('livePill'),lt=$('liveText');
      lp.className='live-pill '+(on?'on':'off');
      lt.textContent=on?t('live'):t('offline');
      const sb=$('exportInfo');
      sb.classList.toggle('online',on);
      sb.classList.toggle('offline',!on);
    }

    function listenData(){
      db.doc('timers/global').onSnapshot({includeMetadataChanges:true},snap=>{
        if(snap.exists){
          const d=snap.data().timers||{};
          const c=Object.keys(d).length;
          if(c!==Object.keys(timers).length||JSON.stringify(d)!==JSON.stringify(timers)){
            timers=d;rAll();ttsCheck();setOnline(true)
          }
        }
      },()=>{setOnline(false)});
    }
    async function pollData(){
      if(dataOnline)return;
      try{
        const r=await fetch('https://firestore.googleapis.com/v1/projects/astra-boss-timer-759e5/databases/(default)/documents/timers/global?key=AIzaSyAboQqH7BmtLCO0ciHUvgGIUOU6SMzHnzo');
        if(!r.ok)throw Error(r.status);
        const d=await r.json();
        if(d.fields&&d.fields.timers&&d.fields.timers.mapValue){
          const parsed={};
          for(const [id,val] of Object.entries(d.fields.timers.mapValue.fields)){
            const m=val.mapValue.fields;
            parsed[id]={endTime:Number(m.endTime.integerValue||m.endTime.doubleValue),startedAt:Number(m.startedAt.integerValue||m.startedAt.doubleValue)};
          }
          if(JSON.stringify(parsed)!==JSON.stringify(timers)){timers=parsed;rAll();ttsCheck();setOnline(true)}
        }
      }catch(e){setOnline(false)}
      $('exportInfo').querySelector('span').textContent='Last sync: '+new Date().toLocaleTimeString();
      setTimeout(pollData,30000);
    }

    function syncVoices(){
      if(!window.speechSynthesis)return;
      const v=window.speechSynthesis.getVoices();
      if(!v.length)return;
      ttsVoices=v;
    }
    if(window.speechSynthesis){window.speechSynthesis.getVoices();window.speechSynthesis.addEventListener('voiceschanged',()=>syncVoices());setTimeout(()=>syncVoices(),500)}

    function checkForUpdate(){
      try{
        fetch('version.json?_='+Date.now(),{cache:'no-store'})
          .then(r=>{if(!r.ok)throw Error(r.status);return r.json()})
          .then(d=>{
            const v=d&&d.v;
            if(!v)return;
            const prev=lsGet('astraver');
            if(prev&&prev!==v){
              lsSet('astraver',v);
              try{localStorage.removeItem(LS_PKEY);localStorage.removeItem(PRICE_MEMORY_KEY)}catch(e){}
              location.reload();
            }else if(!prev){
              lsSet('astraver',v);
            }
          })
          .catch(()=>{});
      }catch(e){}
    }

    function softTick(){
      const n=now();
      expireSchedSpawn();
      document.querySelectorAll('#upcomingList .boss-card[data-t],#upcomingTmrw .boss-card[data-t]').forEach(card=>{
        const tm=+card.dataset.t;
        if(!tm)return;
        const rem=tm-n;
        const cls='boss-card '+statusClassFor(rem);
        if(card.className!==cls)card.className=cls;
      });
      document.querySelectorAll('#ivGrid .interval-row[data-t]').forEach(row=>{
        const tm=+row.dataset.t;
        const time=row.querySelector('.interval-row-time');
        if(!tm||!time)return;
        const al=tm>n;
        time.textContent=al?fmtShort(tm-n):'--';
        time.className='interval-row-time '+(al?'live':'na');
      });
      rRelicSoft();
    }

    try{
      lang=lsGet('astralang')||'en';
      alarmOn=lsGet('astraalarm')==='1';
      applyLang();
      updateAlarmBtn();
      checkForUpdate();
      listenData();
      pollData();
      rAll();
      readCache();
      rRelic();
      loadPrices();
      setInterval(ttsCheck,3000);
      setInterval(softTick,30000);
      setInterval(checkForUpdate,120000);
      const onNavResize=debounceNav(positionNavIndicator,150);
      window.addEventListener('resize',onNavResize);
      requestAnimationFrame(()=>requestAnimationFrame(positionNavIndicator));
      if(document.fonts&&document.fonts.ready){document.fonts.ready.then(()=>requestAnimationFrame(positionNavIndicator));}
    }catch(e){$('exportInfo').querySelector('span').textContent='Init error: '+e.message}
    
  