

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
];;

    const LOCS={
  en:{Venatus:"Corrupted River Stream",Viorent:"Gill Stream",Ego:"Reclaimed Gathering Point",Clemantis:"White Witch's Cradle",Livera:"Black Storm Peninsula",Araneo:"Lower Tomb of Tyriosa 1F",Undomiel:"Test Subject Lab",Saphirus:"Moonlight Shackle",Neutro:"Battlefield of Love and Hatred",LadyDalia:"Bloody Shadow",GeneralAquleus:"Lower Tomb of Tyriosa 2F",Thymele:"Mark of Rampage",Amentis:"Limestone Cape",BaronBraudmore:"Rosevine Bridge",Milavy:"Lower Tomb of Tyriosa 3F",Wannitas:"Snare Swamp",Metus:"Follower's Field",Duplican:"Open-Eyed Puppet's Throne",Shuliar:"Masquerade of Hounds",Ringor:"Torchlight Highway",Roderick:"Garbana Underground Waterway 1F",Gareth:"Deadman's Land District 1",Titore:"Deadman's Land District 2",Larba:"Garbana Reclaimed Land",Catena:"Deadman's Land District 3",Auraq:"Garbana Underground Waterway 2F",Secreta:"Kallion's Tomb",Ordo:"Successor's Paradise",Asta:"Goldblood Plain",Supore:"Goldblood Plain",Chaiflock:"Kallion's Tomb",Benji:"Nest of Vengeance",Libitina:"Chapel of Eternal Vassalage",Rakajeth:"Secreta's Punishment",Icaruthia:"Royal Valley",Motti:"Evelyn's Outer Court",Camalia:"Controlled Laboratory",Nevaeh:"Celine's Courtyard",Tumier:"Garbana Underground Waterway 3F",Lucus:"Silent Smelter"},
  ja:{Venatus:"汚染された川の流れ",Viorent:"ギルの小川",Ego:"奪還された集結地点",Clemantis:"白魔女のゆりかご",Livera:"黒嵐の半島",Araneo:"ティリオサ地下墓所1F",Undomiel:"実験体研究所",Saphirus:"月光の束縛",Neutro:"愛憎の戦場",LadyDalia:"血染めの影",GeneralAquleus:"ティリオサ地下墓所2F",Thymele:"暴走の刻印",Amentis:"石灰岩の岬",BaronBraudmore:"薔薇蔦の橋",Milavy:"ティリオサ地下墓所3F",Wannitas:"罠の沼",Metus:"追従者の野原",Duplican:"開眼の人形の玉座",Shuliar:"猟犬の仮面舞踏会",Ringor:"松明の街道",Roderick:"ガルバナ地下水路1F",Gareth:"死者の地 第1区域",Titore:"死者の地 第2区域",Larba:"ガルバナ奪還地",Catena:"死者の地 第3区域",Auraq:"ガルバナ地下水路2F",Secreta:"カリオンの墓",Ordo:"継承者の楽園",Asta:"黄金血の平原",Supore:"黄金血の平原",Chaiflock:"カリオンの墓",Benji:"復讐の巣",Libitina:"永遠の臣従の礼拝堂",Rakajeth:"セクレタの刑罰",Icaruthia:"王族の谷",Motti:"エブリンの外庭",Camalia:"管理された研究所",Nevaeh:"セリーヌの中庭",Tumier:"ガルバナ地下水路3F",Lucus:"静寂の精錬所"},
  ko:{Venatus:"오염된 강줄기",Viorent:"길의 시냇물",Ego:"탈환된 집결지",Clemantis:"백마녀의 요람",Livera:"검은 폭풍의 반도",Araneo:"티리오사 지하묘지 1층",Undomiel:"실험체 연구소",Saphirus:"달빛의 속박",Neutro:"애증의 전장",LadyDalia:"핏빛 그림자",GeneralAquleus:"티리오사 지하묘지 2층",Thymele:"폭주의 낙인",Amentis:"석회암 곶",BaronBraudmore:"장미넝쿨 다리",Milavy:"티리오사 지하묘지 3층",Wannitas:"덫의 늪",Metus:"추종자의 들판",Duplican:"눈을 뜬 인형의 옥좌",Shuliar:"사냥개의 가면무도회",Ringor:"횃불의 가도",Roderick:"가르바나 지하수로 1층",Gareth:"죽은 자의 땅 제1구역",Titore:"죽은 자의 땅 제2구역",Larba:"가르바나 탈환지",Catena:"죽은 자의 땅 제3구역",Auraq:"가르바나 지하수로 2층",Secreta:"칼리온의 무덤",Ordo:"계승자의 낙원",Asta:"황금피의 평원",Supore:"황금피의 평원",Chaiflock:"칼리온의 무덤",Benji:"복수의 둥지",Libitina:"영원한 신종의 예배당",Rakajeth:"세크레타의 형벌",Icaruthia:"왕족의 계곡",Motti:"에블린의 외정",Camalia:"통제된 연구소",Nevaeh:"셀린의 안뜰",Tumier:"가르바나 지하수로 3층",Lucus:"침묵의 제련소"}
};;

    const TO=9*3600000;;

    const LANG={
  en:{brand:'ASTRA',dash:'Dashboard',bsTab:'Bosses',live:'Live',offline:'Offline',nextSpawn:'Next Spawn',upcoming:'Upcoming',today:'Today',tomorrow:'Tomorrow',noSpawns:'No spawns',schedTag:'Schedule',schedTitle:'SCHEDULED',ivTag:'Interval',ivTitle:'Interval',every:'Every',lv:'Lv.',spawned:'SPAWNED',now:'Now',updated:'Updated',ago:'ago',tracker:'TRACKER',hiddenClass:'HIDDEN CLASS',history:'Activity',killed:'killed',missed:'missed',days:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],nm:['Venatus','Viorent','Ego','Clemantis','Livera','Araneo','Undomiel','Saphirus','Neutro','Lady Dalia','General Aquleus','Thymele','Amentis','Baron Braudmore','Milavy','Wannitas','Metus','Duplican','Shuliar','Ringor','Roderick','Gareth','Titore','Larba','Catena','Auraq','Secreta','Ordo','Asta','Supore','Chaiflock','Benji','Libitina','Rakajeth','Icaruthia','Motti','Camalia','Nevaeh','Tumier','Lucus'],ttsIn:(n,m)=>`${n} will respawn in ${m} minute${m!==1?'s':''}.`,ttsSpawned:n=>`${n} has respawned.`},
  ja:{brand:'ASTRA',dash:'ダッシュボード',bsTab:'ボス',live:'オンライン',offline:'オフライン',nextSpawn:'次のスポーン',upcoming:'予定',today:'今日',tomorrow:'明日',noSpawns:'スポーンなし',schedTag:'スケジュール',schedTitle:'予定',ivTag:'インターバル',ivTitle:'インターバル',every:'毎',lv:'Lv.',spawned:'出現中',now:'今',updated:'更新',ago:'前',tracker:'追跡',hiddenClass:'隠しクラス',history:'履歴',killed:'討伐',missed:'取り逃し',days:['日','月','火','水','木','金','土'],nm:['ベナトゥス','ビオレント','エゴ','クレメンティス','リベラ','アラネオ','アンドゥミエル','サピルス','ネウトロ','レディ·ダリア','将軍アクレウス','テュメレ','アメンティス','ブラウドモア','ミラベ','ワニタス','メトゥス','デュプリカン','シュライヤー','リンゴル','ロデリック','ガレス','ティトル','ラルバ','カテナ','アウラーク','セクレタ','オルド','アスタ','スポル','シャイフロック','ベンジー','リビティーナ','ラカゼス','イカルシア','モティ','カマリア','ネバ','トゥミエル','ルクス'],ttsIn:(n,m)=>`${n}が${m}分後に出現します。`,ttsSpawned:n=>`${n}が出現しました。`},
  ko:{brand:'ASTRA',dash:'대시보드',bsTab:'보스',live:'온라인',offline:'오프라인',nextSpawn:'다음 스폰',upcoming:'예정',today:'오늘',tomorrow:'내일',noSpawns:'스폰 없음',schedTag:'일정',schedTitle:'일정',ivTag:'간격',ivTitle:'간격',every:'매',lv:'레벨',spawned:'출현중',now:'지금',updated:'업데이트',ago:'전',tracker:'추적',hiddenClass:'비밀 클래스',history:'활동',killed:'처치',missed:'놓침',days:['일','월','화','수','목','금','토'],nm:['베나투스','비오렌트','에고','클레멘티스','리베라','아라네오','안두미엘','사피루스','네우트로','레이디 달리아','장군 아클레우스','튜메레','아멘티스','남작 브라우드모어','미라베','와니타스','메투스','듀플리칸','슈라이어','링고르','로데릭','가레스','티토르','라르바','카테나','아우라크','세크레타','오르도','아스타','스포르','샤이플록','벤지','리비티나','라카제스','이카루시아','모티','카말리아','네바','투미엘','루크스'],ttsIn:(n,m)=>`${n}${koParticle(n,'subj')} ${m}분 후에 출현합니다.`,ttsSpawned:n=>`${n}${koParticle(n,'subj')} 출현했습니다.`}
};;

    let lang='en';
function t(k){return LANG[lang][k]||k}
function bn(b){const i=BOSSES.indexOf(b);return LANG[lang].nm[i]||b.name}
function locOf(id){return (LOCS[lang]&&LOCS[lang][id])||LOCS.en[id]||''}
function koParticle(n,t){const c=n.charCodeAt(n.length-1),b=(c-0xAC00)%28!==0;const p={subj:['이','가'],obj:['을','를'],top:['은','는']};return b?p[t][0]:p[t][1]}
function langNext(){
  const ls=['en','ja','ko'];
  lang=ls[(ls.indexOf(lang)+1)%ls.length];
  localStorage.setItem('astralang',lang);
  applyLang();rAll();
  const say={en:'Language set to English.',ja:'\u8A00\u8A9E\u3092\u65E5\u672C\u8A9E\u306B\u8A2D\u5B9A\u3057\u307E\u3057\u305F\u3002',ko:'\uC5B8\uC5B4\uAC00 \uD55C\uAD6D\uC5B4\uB85C \uBCC0\uACBD\uB418\uC5C8\uC2B5\uB2C8\uB2E4.'};
  const fb={en:'Language set to English.',ja:'Language set to Japanese.',ko:'Language set to Korean.'};
  if(window.speechSynthesis){syncVoices();speak(say[lang],fb[lang])}
}


    const FLAGS={en:'EN',ja:'JA',ko:'KO'};
    function applyLang(){
      fmtDCache.clear();fmtTCache.clear();
      document.title=t('brand');
      $('brand').querySelector('.brand-text').textContent=t('brand');
      $('nextLbl').textContent=t('nextSpawn');
      $('upcomingLbl').textContent=t('upcoming');
      $('viewTitle').textContent=t(currentView==='schedule'?'schedTitle':'ivTitle');
      $('ivBtnLbl').textContent=t('ivTag');
      $('schedBtnLbl').textContent=t('schedTag');
      $('navTracker').textContent=t('tracker');
      $('navHidden').textContent=t('hiddenClass');
      $('langText').textContent=FLAGS[lang];
      const lp=$('livePill'),lt=$('liveText');
      const isOn=lp.classList.contains('on');
      lt.textContent=isOn?t('live'):t('offline');
      $('nextCdLabel').textContent = t('nextSpawn') === 'Next Spawn' ? 'Time Remaining' : t('nextSpawn');
    }

    let alarmOn=false;
    const ttsSpoken=new Set();
    const ttsArmed=new Map();
    function toggleAlarm(){
      alarmOn=!alarmOn;
      localStorage.setItem('astraalarm',alarmOn?'1':'0');
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
      const sv=localStorage.getItem('astraVoice_'+lang);
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
          if(!ttsSpoken.has(key)){ttsSpoken.add(key);speak(t('ttsIn')(bn(b),m),`${b.name} will respawn in ${m} minute${m!==1?'s':''}.`)}
        }else if(rem<=0&&rem>-60000){
          const armedEnd=ttsArmed.get(b.id);
          if(armedEnd===tm.endTime){
            const key=`${b.id}_${tm.endTime}_spawned`;
            if(!ttsSpoken.has(key)){ttsSpoken.add(key);speak(t('ttsSpawned')(bn(b)),`${b.name} has respawned.`);ttsArmed.delete(b.id)}
          }
        }
      }
    }

    let timers={};
    let nxtBoss=null,nxtTime=null;

    function p2(n){return String(n).padStart(2,'0')}
    function now(){return Date.now()}

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
    function fmtShort(ms){if(ms<=0)return t('now');const s=Math.floor(ms/1000),d=Math.floor(s/86400),h=Math.floor((s%86400)/3600),m=Math.floor((s%3600)/60),u=UNITS[lang],sp=lang==='ja'?'':' ';return d?`${d}${u.d}${sp}${h}${u.h}`:h?`${h}${u.h}${sp}${m}${u.m}`:`${m}${u.m}`}
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
      return 'status-killed';
    }

    function rNext(){
      let bb=null,bs=null,cn=now();
      for(const b of BOSSES){const n=nextSpawn(b);if(n&&n.getTime()>cn&&(!bs||n.getTime()<bs.getTime())){bs=n;bb=b}}
      if(bb&&bs){
        $('nextName').textContent=bn(bb);$('nextLv').textContent=t('lv')+bb.lvl;
        $('nextLoc').textContent=locOf(bb.id);
        const isInt=!!bb.rs;$('nextTag').textContent=isInt?t('ivTag'):t('schedTag');
        $('nextTag').className='hero-tag '+(isInt?'interval':'scheduled');
        $('nextAt').textContent=fmtT(bs.getTime())+' '+fmtD(bs.getTime());
        nxtBoss=bb;nxtTime=bs;
        const im=$('heroBossImg'),url='assets/'+bb.id+'.png';
        if(im.src!==url){im.style.opacity=0;im.onload=()=>{im.style.opacity=1};im.src=url}
      }else if(!nxtBoss||(nxtTime&&nxtTime.getTime()>cn)){
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
    setInterval(rNextCd,1000)

    let lastUpHtml='';
    function rUpcoming(){
      const n=now(),list=[];
      for(const b of BOSSES){const x=nextSpawn(b);if(x&&x.getTime()>n)list.push({b,t:x.getTime()})}
      list.sort((a,b)=>a.t-b.t)
      const e=$('upcomingList');$('upcomingSub').textContent=list.length;
      let h;
      if(!list.length){
        h='<div class="empty-state"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg><p>'+t('noSpawns')+'</p></div>';
        if(h===lastUpHtml)return;
        e.innerHTML=h;lastUpHtml=h;
        return;
      }
      h='<div class="boss-list">'+list.map((x,i)=>{
        const rem=x.t-n;
        const cls=statusClassFor(rem);
        const label=rem<=0?t('spawned'):(lang==='ko'?fmtShort(rem)+' \uD6C4':lang==='ja'?'\u3042\u3068'+fmtShort(rem):'In '+fmtShort(rem));
        return '<div class="boss-card '+cls+'"><div class="boss-card-main"><span class="boss-card-name">'+bn(x.b)+'</span><div class="boss-card-meta"><span>'+t('lv')+x.b.lvl+'</span><span>.</span><span>'+fmtD(x.t)+'</span></div></div><div class="boss-card-time"><span class="boss-card-time-value">'+fmtT(x.t)+'</span><span class="boss-card-time-label">'+label+'</span></div></div>';
      }).join('')+'</div>';
      if(h===lastUpHtml)return;
      e.innerHTML=h;lastUpHtml=h;
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
      $('schedGrid').innerHTML=h;lastSchedHtml=h;
    }

    let lastIntHtml='';
    function rInt(){
      const n=now();
      const h='<div class="interval-grid">'+grpInt().map((g,i)=>{
        const isNext=nxtBoss&&g.b.includes(nxtBoss);
        return '<div class="interval-card '+(isNext?'highlight':'')+'"><div class="interval-header"><div class="interval-title"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg><span>'+t('every')+' '+fmtInt(g.s)+'</span></div><span class="interval-count">'+g.b.length+'</span></div>'+g.b.map(b=>{const et=timers[b.id]?.endTime,al=et&&et>n;return'<div class="interval-row"><span class="interval-row-name">'+bn(b)+'</span><span class="interval-row-time '+(al?'live':'na')+'">'+(al?fmtShort(et-n):'--')+'</span></div>'}).join('')+'</div>';
      }).join('')+'</div>';
      if(h===lastIntHtml)return;
      $('ivGrid').innerHTML=h;lastIntHtml=h;
    }

    function rAll(){rNext();rUpcoming();rSched();rInt();rHidden();rNextCd()}

    const HIDDEN_CLASSES=[{className:"Sword Master",skillName:"Exalted Will",skill:"Basic Attacks have a 25% chance of dealing Extra Combined Damage.",pairs:[{skills:[{name:"Deathblow",type:"Enhance"},{name:"Time Haste",type:"Trick"}]},{skills:[{name:"Secreta's Talent",type:"Recon"},{name:"Parry",type:"Defense"}]},{skills:[{name:"Wild Dance",type:"Combat"},{name:"Deliberate Attack",type:"Support"}]}],milestones:[{lvl:100,desc:"Melee Defense Penetration +50"},{lvl:200,desc:"Movement Speed +8%"},{lvl:300,desc:"Attack Speed +8%"},{lvl:400,desc:"Attack Power +70"},{lvl:500,desc:"Melee Attack +50 / All Damage +3.5%"},{lvl:600,desc:"On hit, reduce Damage Received for next 3 hits (10 sec)."},{lvl:700,desc:"Defense Power +100"},{lvl:800,desc:"Deals Combined Damage to the target, and drains the target's MP and Stamina equal to 80% of Max MP and Max Stamina."}]},
{className:"Destroyer",skillName:"Land Crush",skill:"Jumps to target within 7m and deals Combined Damage around impact, gaining Damage Immunity for 3.5 sec.",pairs:[{skills:[{name:"Hellfire Weapon",type:"Enhance"},{name:"Honed Weaponry",type:"Recon"}]},{skills:[{name:"Blink",type:"Trick"},{name:"Power of Darkness",type:"Spell"}]},{skills:[{name:"Polish Weapon",type:"Combat"},{name:"Gamble",type:"Support"}]}],milestones:[{lvl:100,desc:"Defense Penetration +50"},{lvl:200,desc:"Movement Speed +8%"},{lvl:300,desc:"Attack Speed +8%"},{lvl:400,desc:"Attack Power +70"},{lvl:500,desc:"Skill Damage +7% / Cooldown Decrease +10%"},{lvl:600,desc:"Landing Attack boosts Attack/Defense Power for 60 sec."},{lvl:700,desc:"Attack Power +100 / Defense Power +100"},{lvl:800,desc:"Causes an Earthquake around the caster for 10 sec. Deals 50% extra Physical Damage to targets within range every 2 sec, and inflicts Stun for 1 sec with a +80% chance. (Up to 20 targets)"}]},
{className:"Frost Knight",skillName:"Frost Curse",skill:"Deals Combined Damage in target area and inflicts Frozen for 4 sec; reducing Movement Speed for 10 sec.",pairs:[{skills:[{name:"Frost Weapon",type:"Spell"},{name:"Earth Shock",type:"Combat"}]},{skills:[{name:"Cutting Strike",type:"Enhance"},{name:"Life Tap",type:"Trick"}]},{skills:[{name:"Leech",type:"Vitality"},{name:"Anatomy",type:"Support"}]}],milestones:[{lvl:100,desc:"Endurance Ignore +50"},{lvl:200,desc:"Movement Speed +8%"},{lvl:300,desc:"Attack Speed +8%"},{lvl:400,desc:"Attack Power +70"},{lvl:500,desc:"Critical Hit +100 / Critical Hit Damage +7%"},{lvl:600,desc:"At 50% HP or below, increases Endurance."},{lvl:700,desc:"Attack Power +100"},{lvl:800,desc:"Causes an Ice Storm around the target for 10 sec. Deals 50% extra Magic Damage to targets within range every second, and reduces Movement Speed for 3 sec. (Up to 20 targets)"}]},
{className:"Ancient Protector",skillName:"Ancient Protector",skill:"Landing a Basic Attack can stack All Damage and Damage to Monsters up to 20 times.",pairs:[{skills:[{name:"Create Zone",type:"Defense"},{name:"Deliberate Attack",type:"Support"}]},{skills:[{name:"Overcome",type:"Vitality"},{name:"Fire Spirit",type:"Enhance"}]},{skills:[{name:"Spell Infusion",type:"Spell"},{name:"Wanderer",type:"Trick"}]}],milestones:[{lvl:100,desc:"Defense Power +50"},{lvl:200,desc:"Movement Speed +8%"},{lvl:300,desc:"Attack Speed +8%"},{lvl:400,desc:"Attack Power +70"},{lvl:500,desc:"Defense Power +75 / Attack Power +100"},{lvl:600,desc:"Increases Attack/Defense Power per HP lost."},{lvl:700,desc:"Defense Power +100 / Endurance +30"},{lvl:800,desc:"Increases All Damage of the caster and allies within a 10m radius for 30 sec, and reduces Damage Received. (Up to 10 targets)"}]},
{className:"Immortal Knight",skillName:"Immortality",skill:"At very low HP, becomes Immortal briefly and recovers HP equal to a portion of max HP.",pairs:[{skills:[{name:"Chase",type:"Combat"},{name:"Defensive Stance",type:"Defense"}]},{skills:[{name:"Deathblow",type:"Enhance"},{name:"Supersense",type:"Recon"}]},{skills:[{name:"Install Bomb",type:"Trick"},{name:"Secreta's Talent",type:"Recon"}]}],milestones:[{lvl:100,desc:"Defense Penetration +50"},{lvl:200,desc:"Movement Speed +8%"},{lvl:300,desc:"Attack Speed +8%"},{lvl:400,desc:"Attack Power +70"},{lvl:500,desc:"Attack Power +75 / Damage Received Decrease +3.5%"},{lvl:600,desc:"Landing Attack increases Accuracy and Critical Hit for 30 sec."},{lvl:700,desc:"Defense Power +100"},{lvl:800,desc:"Grants Petrify to the caster for 5 sec."}]},
{className:"Trinity",skillName:"Everlasting Flow",skill:"Basic attack has a chance to grant Attack Speed, Defense Penetration, and Critical Strike effects.",pairs:[{skills:[{name:"Cutting Strike",type:"Enhance"},{name:"Magic Ignition",type:"Vitality"}]},{skills:[{name:"Magic Circulation",type:"Vitality"},{name:"Supersense",type:"Recon"}]},{skills:[{name:"Weapon of Destruction",type:"Trick"},{name:"Weak Spot Analysis",type:"Support"}]}],milestones:[{lvl:100,desc:"Defense Power +50"},{lvl:200,desc:"Movement Speed +8%"},{lvl:300,desc:"Attack Speed +8%"},{lvl:400,desc:"Attack Power +70"},{lvl:500,desc:"Attack Power +75 / All Damage +3.5%"},{lvl:600,desc:"Hitting Attack Skill grants AP, HP, and Crit for 1 minute."},{lvl:700,desc:"Attack Power +100 / Attack Speed +5%"},{lvl:800,desc:"Deals Combined Damage around the caster and inflicts Stun for 5 sec with a +80% chance. (Up to 10 targets)"}]},
{className:"Harbinger of Storms",skillName:"Raging Storm",skill:"Summons a storm area that pulls targets, applies movement penalties, and grants immunity to status effects.",pairs:[{skills:[{name:"Mirror Shield",type:"Defense"},{name:"War Cry",type:"Vitality"}]},{skills:[{name:"Ice Spirit",type:"Enhance"},{name:"Power of Darkness",type:"Spell"}]},{skills:[{name:"Spread Venom",type:"Recon"},{name:"Magnetic Field",type:"Spell"}]}],milestones:[{lvl:100,desc:"Skill Damage +7%"},{lvl:200,desc:"Movement Speed +8%"},{lvl:300,desc:"Attack Speed +8%"},{lvl:400,desc:"Attack Power +70"},{lvl:500,desc:"Skill Damage +15%"},{lvl:600,desc:"+15% movement speed for 30 sec when landing attack skills."},{lvl:700,desc:"Attack Speed +5%"},{lvl:800,desc:"Increases the caster's Max HP, Defense Power, Attack Speed, and Movement Speed for 30 sec."}]},
{className:"Goddess of Blessings",skillName:"Hands of the Goddess",skill:"Increases Attack Power, Movement Speed, and Status Effects Resistance in a 15m area.",pairs:[{skills:[{name:"Create Zone",type:"Defense"},{name:"Lightning Spirit",type:"Enhance"}]},{skills:[{name:"Leech",type:"Vitality"},{name:"Time Haste",type:"Trick"}]},{skills:[{name:"Wanderer",type:"Trick"},{name:"Continuous Curing",type:"Support"}]}],milestones:[{lvl:100,desc:"Endurance +50"},{lvl:200,desc:"Movement Speed +8%"},{lvl:300,desc:"Attack Speed +8%"},{lvl:400,desc:"Attack Power +70"},{lvl:500,desc:"Defense +75 / Cooldown Reduction +10%"},{lvl:600,desc:"Landing attack skill grants AP/Defense and +10% attack speed for 1 minute."},{lvl:700,desc:"Attack Power +100 / Attack Speed +5%"},{lvl:800,desc:"Recovers HP of the caster and party members within a 10m radius equal to 10% of Max HP every 2 sec for 10 sec. Reduces Healing Received for 60 sec. [Recovery cannot exceed Max 5,000 per instance.]"}]}];;

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
})();;
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

    const $=(id)=>document.getElementById(id);

    $('langBtn').onclick=langNext;
    $('alarmBtn').onclick=toggleAlarm;

    document.querySelectorAll('.nav-btn').forEach(btn=>btn.onclick=()=>{
      document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
      $('page'+(btn.dataset.page==='tracker'?'Tracker':'Hidden')).classList.add('active');
    });

    document.addEventListener('click',(e)=>{
      const hdr=e.target.closest('.class-card-header');
      if(!hdr) return;
      const card=hdr.closest('.class-card');
      card.classList.toggle('expanded');
      const expanded=card.classList.contains('expanded');
      card.setAttribute('aria-expanded',expanded);
      fitPairTexts();
      if(expanded&&window.innerWidth<=900)requestAnimationFrame(()=>card.scrollIntoView({behavior:'smooth',block:'center'}));
    });

    document.addEventListener('keydown',(e)=>{
      if(e.key!=='Enter'&&e.key!==' ') return;
      const card=e.target.closest('.class-card');
      if(!card) return;
      e.preventDefault();
      card.classList.toggle('expanded');
      const expanded=card.classList.contains('expanded');
      card.setAttribute('aria-expanded',expanded);
      fitPairTexts();
      if(expanded&&window.innerWidth<=900)requestAnimationFrame(()=>card.scrollIntoView({behavior:'smooth',block:'center'}));
    });

    let fitTimer;
    window.addEventListener('resize',()=>{clearTimeout(fitTimer);fitTimer=setTimeout(()=>{fitPairTexts()},150);});
    if(document.fonts&&document.fonts.ready)document.fonts.ready.then(()=>{fitPairTexts()});

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

    let currentView='interval';
    const segBtns=document.querySelectorAll('.segmented .seg-btn');
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
      });
    });

    function setOnline(on){
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

    try{
      lang=localStorage.getItem('astralang')||'en';
      alarmOn=localStorage.getItem('astraalarm')==='1';
      applyLang();
      updateAlarmBtn();
      listenData();
      pollData();
      rAll();
      setInterval(()=>{
        const run=()=>{rNext();rUpcoming();rSched();rInt()};
        if(window.requestIdleCallback)requestIdleCallback(run,{timeout:8000});
        else run();
      },15000);
      setInterval(ttsCheck,3000);
    }catch(e){$('exportInfo').querySelector('span').textContent='Init error: '+e.message}
    
  