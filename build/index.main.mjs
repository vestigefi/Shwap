// Automatically generated with Reach 0.1.10 (c934aa69)
/* eslint-disable */
export const _version = '0.1.10';
export const _versionHash = '0.1.10 (c934aa69)';
export const _backendVersion = 15;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc1, ctc1, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc6 = stdlib.T_Tuple([ctc3, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1]);
  
  return {
    infos: {
      SchmeckleShopView: {
        read: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
              const [v552, v553, v554, v555, v556, v557, v558, v565] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
              const [v552, v553, v554, v555, v556, v584, v585, v586, v587, v588, v589, v590, v591, v592, v593, v599, v600] = svs;
              return (await ((async () => {
                
                const v613 = [v586, v587, v588, v584, v589, v590, v591, v592, v585];
                
                return v613;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc6
          }
        }
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1, ctc2, ctc1, ctc1, ctc5],
      4: [ctc0, ctc1, ctc1, ctc1, ctc2, ctc1, ctc1, ctc3, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Schmeckler(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Schmeckler expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Schmeckler expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Object({
    fee: ctc0,
    initialPrice: ctc0,
    rebaseTime: ctc0,
    schmeckleAmount: ctc0,
    schmeckles: ctc1
    });
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Tuple([]);
  const ctc5 = stdlib.T_Tuple([ctc0]);
  const ctc6 = stdlib.T_Data({
    SchmecklerAPI_claimFees0_84: ctc4,
    Schmuck_buy0_84: ctc5,
    Schmuck_rebase0_84: ctc4,
    Schmuck_sell0_84: ctc5
    });
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Address;
  const ctc9 = stdlib.T_Tuple([ctc0, ctc0, ctc7]);
  const ctc10 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  
  const v534 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v535 = [v534];
  const v541 = stdlib.protect(ctc2, await interact.setUpShop(), {
    at: './index.rsh:49:37:application',
    fs: ['at ./index.rsh:42:18:application call to [unknown function] (defined at: ./index.rsh:42:22:function exp)'],
    msg: 'setUpShop',
    who: 'Schmeckler'
    });
  const v542 = v541.fee;
  const v543 = v541.initialPrice;
  const v544 = v541.rebaseTime;
  const v545 = v541.schmeckleAmount;
  const v546 = v541.schmeckles;
  
  const txn1 = await (ctc.sendrecv({
    args: [v542, v543, v544, v546, v545],
    evt_cnt: 5,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:52:14:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0, ctc0, ctc1, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:52:14:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v553, v554, v555, v556, v557], secs: v559, time: v558, didSend: v41, from: v552 } = txn1;
      
      const v560 = v535[stdlib.checkedBigNumberify('./index.rsh:52:14:dot', stdlib.UInt_max, '0')];
      const v562 = v560[stdlib.checkedBigNumberify('./index.rsh:52:14:dot', stdlib.UInt_max, '1')];
      const v563 = v560[stdlib.checkedBigNumberify('./index.rsh:52:14:dot', stdlib.UInt_max, '2')];
      const v564 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v562, v563];
      const v565 = stdlib.Array_set(v535, stdlib.checkedBigNumberify('./index.rsh:52:14:dot', stdlib.UInt_max, '0'), v564);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v556
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc0, ctc1, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v553, v554, v555, v556, v557], secs: v559, time: v558, didSend: v41, from: v552 } = txn1;
  const v560 = v535[stdlib.checkedBigNumberify('./index.rsh:52:14:dot', stdlib.UInt_max, '0')];
  const v562 = v560[stdlib.checkedBigNumberify('./index.rsh:52:14:dot', stdlib.UInt_max, '1')];
  const v563 = v560[stdlib.checkedBigNumberify('./index.rsh:52:14:dot', stdlib.UInt_max, '2')];
  const v564 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v562, v563];
  const v565 = stdlib.Array_set(v535, stdlib.checkedBigNumberify('./index.rsh:52:14:dot', stdlib.UInt_max, '0'), v564);
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v552, v553, v554, v555, v556, v557, v558, v565],
    evt_cnt: 0,
    funcNum: 1,
    lct: v558,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:63:14:dot', stdlib.UInt_max, '0'), [[v557, v556]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v569, time: v568, didSend: v48, from: v567 } = txn2;
      
      ;
      const v570 = v565[stdlib.checkedBigNumberify('./index.rsh:63:14:dot', stdlib.UInt_max, '0')];
      const v571 = v570[stdlib.checkedBigNumberify('./index.rsh:63:14:dot', stdlib.UInt_max, '0')];
      const v572 = stdlib.add(v571, v557);
      const v575 = v570[stdlib.checkedBigNumberify('./index.rsh:63:14:dot', stdlib.UInt_max, '1')];
      const v576 = v570[stdlib.checkedBigNumberify('./index.rsh:63:14:dot', stdlib.UInt_max, '2')];
      const v577 = [v572, v575, v576];
      const v578 = stdlib.Array_set(v565, stdlib.checkedBigNumberify('./index.rsh:63:14:dot', stdlib.UInt_max, '0'), v577);
      sim_r.txns.push({
        amt: v557,
        kind: 'to',
        tok: v556
        });
      const v579 = stdlib.addressEq(v552, v567);
      ;
      
      const v584 = stdlib.checkedBigNumberify('./index.rsh:74:35:decimal', stdlib.UInt_max, '0');
      const v585 = v558;
      const v586 = true;
      const v587 = false;
      const v588 = stdlib.checkedBigNumberify('./index.rsh:74:32:decimal', stdlib.UInt_max, '0');
      const v589 = stdlib.checkedBigNumberify('./index.rsh:74:39:decimal', stdlib.UInt_max, '0');
      const v590 = v554;
      const v591 = stdlib.checkedBigNumberify('./index.rsh:74:57:decimal', stdlib.UInt_max, '0');
      const v592 = stdlib.checkedBigNumberify('./index.rsh:74:60:decimal', stdlib.UInt_max, '0');
      const v593 = v568;
      const v599 = v578;
      const v600 = stdlib.checkedBigNumberify('./index.rsh:40:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v609 = v599[stdlib.checkedBigNumberify('./index.rsh:80:30:application', stdlib.UInt_max, '0')];
        const v610 = v609[stdlib.checkedBigNumberify('./index.rsh:80:30:application', stdlib.UInt_max, '0')];
        const v611 = stdlib.gt(v610, stdlib.checkedBigNumberify('./index.rsh:80:45:decimal', stdlib.UInt_max, '0'));
        const v612 = v586 ? v611 : false;
        
        return v612;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v1326 = v599[stdlib.checkedBigNumberify('./index.rsh:179:32:application', stdlib.UInt_max, '0')];
        const v1327 = v1326[stdlib.checkedBigNumberify('./index.rsh:179:32:application', stdlib.UInt_max, '0')];
        sim_r.txns.push({
          amt: v600,
          kind: 'from',
          to: v552,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          amt: v1327,
          kind: 'from',
          to: v552,
          tok: v556
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v556
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc8, ctc0, ctc0, ctc0, ctc1, ctc0, ctc0, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v569, time: v568, didSend: v48, from: v567 } = txn2;
  ;
  const v570 = v565[stdlib.checkedBigNumberify('./index.rsh:63:14:dot', stdlib.UInt_max, '0')];
  const v571 = v570[stdlib.checkedBigNumberify('./index.rsh:63:14:dot', stdlib.UInt_max, '0')];
  const v572 = stdlib.add(v571, v557);
  const v575 = v570[stdlib.checkedBigNumberify('./index.rsh:63:14:dot', stdlib.UInt_max, '1')];
  const v576 = v570[stdlib.checkedBigNumberify('./index.rsh:63:14:dot', stdlib.UInt_max, '2')];
  const v577 = [v572, v575, v576];
  const v578 = stdlib.Array_set(v565, stdlib.checkedBigNumberify('./index.rsh:63:14:dot', stdlib.UInt_max, '0'), v577);
  ;
  const v579 = stdlib.addressEq(v552, v567);
  stdlib.assert(v579, {
    at: './index.rsh:63:14:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Schmeckler'
    });
  stdlib.protect(ctc3, await interact.ready(), {
    at: './index.rsh:65:28:application',
    fs: ['at ./index.rsh:65:28:application call to [unknown function] (defined at: ./index.rsh:65:28:function exp)', 'at ./index.rsh:65:28:application call to "liftedInteract" (defined at: ./index.rsh:65:28:application)'],
    msg: 'ready',
    who: 'Schmeckler'
    });
  
  let v584 = stdlib.checkedBigNumberify('./index.rsh:74:35:decimal', stdlib.UInt_max, '0');
  let v585 = v558;
  let v586 = true;
  let v587 = false;
  let v588 = stdlib.checkedBigNumberify('./index.rsh:74:32:decimal', stdlib.UInt_max, '0');
  let v589 = stdlib.checkedBigNumberify('./index.rsh:74:39:decimal', stdlib.UInt_max, '0');
  let v590 = v554;
  let v591 = stdlib.checkedBigNumberify('./index.rsh:74:57:decimal', stdlib.UInt_max, '0');
  let v592 = stdlib.checkedBigNumberify('./index.rsh:74:60:decimal', stdlib.UInt_max, '0');
  let v593 = v568;
  let v599 = v578;
  let v600 = stdlib.checkedBigNumberify('./index.rsh:40:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v609 = v599[stdlib.checkedBigNumberify('./index.rsh:80:30:application', stdlib.UInt_max, '0')];
    const v610 = v609[stdlib.checkedBigNumberify('./index.rsh:80:30:application', stdlib.UInt_max, '0')];
    const v611 = stdlib.gt(v610, stdlib.checkedBigNumberify('./index.rsh:80:45:decimal', stdlib.UInt_max, '0'));
    const v612 = v586 ? v611 : false;
    
    return v612;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc6],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v709], secs: v711, time: v710, didSend: v313, from: v708 } = txn3;
    switch (v709[0]) {
      case 'SchmecklerAPI_claimFees0_84': {
        const v712 = v709[1];
        undefined /* setApiDetails */;
        ;
        const v754 = v599[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '0')];
        const v755 = v754[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '0')];
        const v759 = v754[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '1')];
        const v760 = v754[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '2')];
        const v761 = [v755, v759, v760];
        const v762 = stdlib.Array_set(v599, stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '0'), v761);
        ;
        const v767 = stdlib.sub(v600, v592);
        ;
        const v768 = true;
        await txn3.getOutput('SchmecklerAPI_claimFees', 'v768', ctc7, v768);
        const cv584 = v584;
        const cv585 = v585;
        const cv586 = true;
        const cv587 = v587;
        const cv588 = v588;
        const cv589 = v589;
        const cv590 = v590;
        const cv591 = v591;
        const cv592 = stdlib.checkedBigNumberify('./index.rsh:176:9:decimal', stdlib.UInt_max, '0');
        const cv593 = v710;
        const cv599 = v762;
        const cv600 = v767;
        
        v584 = cv584;
        v585 = cv585;
        v586 = cv586;
        v587 = cv587;
        v588 = cv588;
        v589 = cv589;
        v590 = cv590;
        v591 = cv591;
        v592 = cv592;
        v593 = cv593;
        v599 = cv599;
        v600 = cv600;
        
        continue;
        break;
        }
      case 'Schmuck_buy0_84': {
        const v865 = v709[1];
        undefined /* setApiDetails */;
        const v876 = stdlib.add(v553, v590);
        const v906 = stdlib.add(v600, v876);
        ;
        const v907 = v599[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '0')];
        const v908 = v907[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '0')];
        const v912 = v907[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '1')];
        const v913 = v907[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '2')];
        const v914 = [v908, v912, v913];
        const v915 = stdlib.Array_set(v599, stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '0'), v914);
        ;
        const v929 = v865[stdlib.checkedBigNumberify('./index.rsh:82:7:spread', stdlib.UInt_max, '0')];
        const v930 = stdlib.eq(v929, stdlib.checkedBigNumberify('./index.rsh:86:26:decimal', stdlib.UInt_max, '1'));
        stdlib.assert(v930, {
          at: './index.rsh:86:15:application',
          fs: ['at ./index.rsh:85:17:application call to [unknown function] (defined at: ./index.rsh:85:17:function exp)'],
          msg: null,
          who: 'Schmeckler'
          });
        const v931 = v915[stdlib.checkedBigNumberify('./index.rsh:87:42:application', stdlib.UInt_max, '0')];
        const v932 = v931[stdlib.checkedBigNumberify('./index.rsh:87:42:application', stdlib.UInt_max, '0')];
        const v936 = stdlib.sub(v932, v929);
        const v939 = v931[stdlib.checkedBigNumberify('./index.rsh:87:42:application', stdlib.UInt_max, '1')];
        const v940 = v931[stdlib.checkedBigNumberify('./index.rsh:87:42:application', stdlib.UInt_max, '2')];
        const v941 = [v936, v939, v940];
        const v942 = stdlib.Array_set(v915, stdlib.checkedBigNumberify('./index.rsh:87:42:application', stdlib.UInt_max, '0'), v941);
        ;
        const v943 = true;
        await txn3.getOutput('Schmuck_buy', 'v943', ctc7, v943);
        const v950 = stdlib.add(v584, stdlib.checkedBigNumberify('./index.rsh:90:73:decimal', stdlib.UInt_max, '1'));
        const v951 = stdlib.gt(v588, v950);
        const v952 = v951 ? v588 : v950;
        const v953 = stdlib.add(v589, v590);
        const v954 = stdlib.add(v590, v554);
        const v955 = v951 ? v591 : v954;
        const v956 = stdlib.div(v953, v950);
        const v957 = v951 ? v591 : v956;
        const v958 = stdlib.add(v592, v553);
        const cv584 = v950;
        const cv585 = v585;
        const cv586 = true;
        const cv587 = v951;
        const cv588 = v952;
        const cv589 = v953;
        const cv590 = v955;
        const cv591 = v957;
        const cv592 = v958;
        const cv593 = v710;
        const cv599 = v942;
        const cv600 = v906;
        
        v584 = cv584;
        v585 = cv585;
        v586 = cv586;
        v587 = cv587;
        v588 = cv588;
        v589 = cv589;
        v590 = cv590;
        v591 = cv591;
        v592 = cv592;
        v593 = cv593;
        v599 = cv599;
        v600 = cv600;
        
        continue;
        break;
        }
      case 'Schmuck_rebase0_84': {
        const v1018 = v709[1];
        undefined /* setApiDetails */;
        const v1059 = stdlib.add(v600, v553);
        ;
        const v1060 = v599[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '0')];
        const v1061 = v1060[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '0')];
        const v1062 = stdlib.add(v1061, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
        const v1065 = v1060[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '1')];
        const v1066 = v1060[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '2')];
        const v1067 = [v1062, v1065, v1066];
        const v1068 = stdlib.Array_set(v599, stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '0'), v1067);
        ;
        const v1115 = stdlib.gt(v593, v585);
        const v1117 = v1115 ? v587 : false;
        stdlib.assert(v1117, {
          at: './index.rsh:141:15:application',
          fs: ['at ./index.rsh:140:9:application call to [unknown function] (defined at: ./index.rsh:140:9:function exp)'],
          msg: null,
          who: 'Schmeckler'
          });
        const v1118 = stdlib.sub(v584, stdlib.checkedBigNumberify('./index.rsh:143:73:decimal', stdlib.UInt_max, '1'));
        const v1119 = stdlib.add(v1118, stdlib.checkedBigNumberify('./index.rsh:145:93:decimal', stdlib.UInt_max, '1'));
        const v1120 = stdlib.mul(v1118, v1119);
        const v1121 = stdlib.div(v1120, stdlib.checkedBigNumberify('./index.rsh:145:98:decimal', stdlib.UInt_max, '2'));
        const v1122 = stdlib.mul(v1121, v554);
        const v1123 = stdlib.add(v1118, v554);
        const v1124 = stdlib.div(v1122, v1118);
        const v1125 = stdlib.add(v592, v553);
        const v1126 = stdlib.sub(v589, v1122);
        const v1130 = stdlib.sub(v1059, v1126);
        ;
        const v1131 = true;
        await txn3.getOutput('Schmuck_rebase', 'v1131', ctc7, v1131);
        const cv584 = v1118;
        const cv585 = v585;
        const cv586 = true;
        const cv587 = true;
        const cv588 = v1118;
        const cv589 = v1122;
        const cv590 = v1123;
        const cv591 = v1124;
        const cv592 = v1125;
        const cv593 = v710;
        const cv599 = v1068;
        const cv600 = v1130;
        
        v584 = cv584;
        v585 = cv585;
        v586 = cv586;
        v587 = cv587;
        v588 = cv588;
        v589 = cv589;
        v590 = cv590;
        v591 = cv591;
        v592 = cv592;
        v593 = cv593;
        v599 = cv599;
        v600 = cv600;
        
        continue;
        break;
        }
      case 'Schmuck_sell0_84': {
        const v1171 = v709[1];
        undefined /* setApiDetails */;
        const v1197 = v1171[stdlib.checkedBigNumberify('./index.rsh:108:7:spread', stdlib.UInt_max, '0')];
        const v1212 = stdlib.add(v600, v553);
        ;
        const v1213 = v599[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '0')];
        const v1214 = v1213[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '0')];
        const v1215 = stdlib.add(v1214, v1197);
        const v1218 = v1213[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '1')];
        const v1219 = v1213[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '2')];
        const v1220 = [v1215, v1218, v1219];
        const v1221 = stdlib.Array_set(v599, stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '0'), v1220);
        ;
        const v1293 = stdlib.eq(v1197, stdlib.checkedBigNumberify('./index.rsh:112:26:decimal', stdlib.UInt_max, '1'));
        const v1294 = v1221[stdlib.checkedBigNumberify('./index.rsh:112:38:application', stdlib.UInt_max, '0')];
        const v1295 = v1294[stdlib.checkedBigNumberify('./index.rsh:112:38:application', stdlib.UInt_max, '0')];
        const v1296 = stdlib.gt(v1295, stdlib.checkedBigNumberify('./index.rsh:112:53:decimal', stdlib.UInt_max, '0'));
        const v1297 = v1293 ? v1296 : false;
        const v1298 = stdlib.gt(v584, stdlib.checkedBigNumberify('./index.rsh:112:86:decimal', stdlib.UInt_max, '0'));
        const v1299 = v1297 ? v1298 : false;
        const v1301 = stdlib.gt(v1212, v591);
        const v1302 = v1299 ? v1301 : false;
        stdlib.assert(v1302, {
          at: './index.rsh:112:14:application',
          fs: ['at ./index.rsh:111:17:application call to [unknown function] (defined at: ./index.rsh:111:17:function exp)'],
          msg: null,
          who: 'Schmeckler'
          });
        const v1306 = stdlib.sub(v1212, v591);
        ;
        const v1307 = true;
        await txn3.getOutput('Schmuck_sell', 'v1307', ctc7, v1307);
        const v1314 = stdlib.sub(v584, stdlib.checkedBigNumberify('./index.rsh:117:73:decimal', stdlib.UInt_max, '1'));
        const v1315 = stdlib.eq(v1314, stdlib.checkedBigNumberify('./index.rsh:118:71:decimal', stdlib.UInt_max, '0'));
        const v1316 = v1315 ? stdlib.checkedBigNumberify('./index.rsh:118:75:decimal', stdlib.UInt_max, '0') : v588;
        const v1317 = stdlib.sub(v589, v591);
        const v1319 = v1315 ? v554 : v591;
        const v1320 = stdlib.add(v592, v553);
        const v1321 = stdlib.add(v585, v555);
        const v1322 = v587 ? v585 : v1321;
        const cv584 = v1314;
        const cv585 = v1322;
        const cv586 = true;
        const cv587 = true;
        const cv588 = v1316;
        const cv589 = v1317;
        const cv590 = v1319;
        const cv591 = v591;
        const cv592 = v1320;
        const cv593 = v710;
        const cv599 = v1221;
        const cv600 = v1306;
        
        v584 = cv584;
        v585 = cv585;
        v586 = cv586;
        v587 = cv587;
        v588 = cv588;
        v589 = cv589;
        v590 = cv590;
        v591 = cv591;
        v592 = cv592;
        v593 = cv593;
        v599 = cv599;
        v600 = cv600;
        
        continue;
        break;
        }
      }
    
    }
  const v1326 = v599[stdlib.checkedBigNumberify('./index.rsh:179:32:application', stdlib.UInt_max, '0')];
  const v1327 = v1326[stdlib.checkedBigNumberify('./index.rsh:179:32:application', stdlib.UInt_max, '0')];
  ;
  ;
  return;
  
  
  
  
  };
export async function _SchmecklerAPI_claimFees4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _SchmecklerAPI_claimFees4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _SchmecklerAPI_claimFees4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc1, ctc1, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Tuple([ctc1]);
  const ctc8 = stdlib.T_Data({
    SchmecklerAPI_claimFees0_84: ctc6,
    Schmuck_buy0_84: ctc7,
    Schmuck_rebase0_84: ctc6,
    Schmuck_sell0_84: ctc7
    });
  const ctc9 = stdlib.T_Null;
  
  
  const [v552, v553, v554, v555, v556, v584, v585, v586, v587, v588, v589, v590, v591, v592, v593, v599, v600] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc1, ctc1, ctc2, ctc1, ctc1, ctc3, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1]);
  const v661 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:164:7:application call to [unknown function] (defined at: ./index.rsh:164:7:function exp)', 'at ./index.rsh:74:17:application call to "runSchmecklerAPI_claimFees0_84" (defined at: ./index.rsh:164:7:function exp)', 'at ./index.rsh:74:17:application call to [unknown function] (defined at: ./index.rsh:74:17:function exp)'],
    msg: 'in',
    who: 'SchmecklerAPI_claimFees'
    });
  const v665 = ['SchmecklerAPI_claimFees0_84', v661];
  
  const txn1 = await (ctc.sendrecv({
    args: [v552, v553, v554, v555, v556, v584, v585, v586, v587, v588, v589, v590, v591, v592, v593, v599, v600, v665],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./index.rsh:164:7:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:81:12:decimal', stdlib.UInt_max, '0'), v556]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v709], secs: v711, time: v710, didSend: v313, from: v708 } = txn1;
      
      switch (v709[0]) {
        case 'SchmecklerAPI_claimFees0_84': {
          const v712 = v709[1];
          sim_r.txns.push({
            kind: 'api',
            who: "SchmecklerAPI_claimFees"
            });
          ;
          const v754 = v599[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '0')];
          const v755 = v754[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '0')];
          const v759 = v754[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '1')];
          const v760 = v754[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '2')];
          const v761 = [v755, v759, v760];
          const v762 = stdlib.Array_set(v599, stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '0'), v761);
          ;
          const v767 = stdlib.sub(v600, v592);
          sim_r.txns.push({
            amt: v592,
            kind: 'from',
            to: v552,
            tok: undefined /* Nothing */
            });
          const v768 = true;
          const v769 = await txn1.getOutput('SchmecklerAPI_claimFees', 'v768', ctc3, v768);
          
          const v2243 = v584;
          const v2244 = v585;
          const v2245 = true;
          const v2246 = v587;
          const v2247 = v588;
          const v2248 = v589;
          const v2249 = v590;
          const v2250 = v591;
          const v2251 = stdlib.checkedBigNumberify('./index.rsh:176:9:decimal', stdlib.UInt_max, '0');
          const v2252 = v710;
          const v2253 = v762;
          const v2254 = v767;
          const v2255 = v762[stdlib.checkedBigNumberify('./index.rsh:80:30:application', stdlib.UInt_max, '0')];
          const v2256 = v2255[stdlib.checkedBigNumberify('./index.rsh:80:30:application', stdlib.UInt_max, '0')];
          const v2257 = stdlib.gt(v2256, stdlib.checkedBigNumberify('./index.rsh:80:45:decimal', stdlib.UInt_max, '0'));
          if (v2257) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              amt: v767,
              kind: 'from',
              to: v552,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              amt: v2256,
              kind: 'from',
              to: v552,
              tok: v556
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v556
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'Schmuck_buy0_84': {
          const v865 = v709[1];
          
          break;
          }
        case 'Schmuck_rebase0_84': {
          const v1018 = v709[1];
          
          break;
          }
        case 'Schmuck_sell0_84': {
          const v1171 = v709[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc1, ctc2, ctc1, ctc1, ctc3, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v709], secs: v711, time: v710, didSend: v313, from: v708 } = txn1;
  switch (v709[0]) {
    case 'SchmecklerAPI_claimFees0_84': {
      const v712 = v709[1];
      undefined /* setApiDetails */;
      ;
      const v754 = v599[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '0')];
      const v755 = v754[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '0')];
      const v759 = v754[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '1')];
      const v760 = v754[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '2')];
      const v761 = [v755, v759, v760];
      const v762 = stdlib.Array_set(v599, stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '0'), v761);
      ;
      const v767 = stdlib.sub(v600, v592);
      ;
      const v768 = true;
      const v769 = await txn1.getOutput('SchmecklerAPI_claimFees', 'v768', ctc3, v768);
      if (v313) {
        stdlib.protect(ctc9, await interact.out(v712, v769), {
          at: './index.rsh:164:8:application',
          fs: ['at ./index.rsh:164:8:application call to [unknown function] (defined at: ./index.rsh:164:8:function exp)', 'at ./index.rsh:167:8:application call to "k" (defined at: ./index.rsh:165:9:function exp)', 'at ./index.rsh:165:9:application call to [unknown function] (defined at: ./index.rsh:165:9:function exp)'],
          msg: 'out',
          who: 'SchmecklerAPI_claimFees'
          });
        }
      else {
        }
      
      const v2243 = v584;
      const v2244 = v585;
      const v2245 = true;
      const v2246 = v587;
      const v2247 = v588;
      const v2248 = v589;
      const v2249 = v590;
      const v2250 = v591;
      const v2251 = stdlib.checkedBigNumberify('./index.rsh:176:9:decimal', stdlib.UInt_max, '0');
      const v2252 = v710;
      const v2253 = v762;
      const v2254 = v767;
      const v2255 = v762[stdlib.checkedBigNumberify('./index.rsh:80:30:application', stdlib.UInt_max, '0')];
      const v2256 = v2255[stdlib.checkedBigNumberify('./index.rsh:80:30:application', stdlib.UInt_max, '0')];
      const v2257 = stdlib.gt(v2256, stdlib.checkedBigNumberify('./index.rsh:80:45:decimal', stdlib.UInt_max, '0'));
      if (v2257) {
        return;
        }
      else {
        ;
        ;
        return;
        }
      break;
      }
    case 'Schmuck_buy0_84': {
      const v865 = v709[1];
      return;
      break;
      }
    case 'Schmuck_rebase0_84': {
      const v1018 = v709[1];
      return;
      break;
      }
    case 'Schmuck_sell0_84': {
      const v1171 = v709[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Schmuck_buy4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Schmuck_buy4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Schmuck_buy4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc1, ctc1, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc6 = stdlib.T_Tuple([ctc1]);
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Data({
    SchmecklerAPI_claimFees0_84: ctc7,
    Schmuck_buy0_84: ctc6,
    Schmuck_rebase0_84: ctc7,
    Schmuck_sell0_84: ctc6
    });
  const ctc9 = stdlib.T_Null;
  
  
  const [v552, v553, v554, v555, v556, v584, v585, v586, v587, v588, v589, v590, v591, v592, v593, v599, v600] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc1, ctc1, ctc2, ctc1, ctc1, ctc3, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1]);
  const v616 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:83:14:application call to [unknown function] (defined at: ./index.rsh:83:14:function exp)', 'at ./index.rsh:74:17:application call to "runSchmuck_buy0_84" (defined at: ./index.rsh:82:7:function exp)', 'at ./index.rsh:74:17:application call to [unknown function] (defined at: ./index.rsh:74:17:function exp)'],
    msg: 'in',
    who: 'Schmuck_buy'
    });
  const v617 = v616[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v620 = stdlib.eq(v617, stdlib.checkedBigNumberify('./index.rsh:83:35:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v620, {
    at: './index.rsh:83:24:application',
    fs: ['at ./index.rsh:83:14:application call to [unknown function] (defined at: ./index.rsh:83:14:function exp)', 'at ./index.rsh:83:14:application call to [unknown function] (defined at: ./index.rsh:83:14:function exp)', 'at ./index.rsh:74:17:application call to "runSchmuck_buy0_84" (defined at: ./index.rsh:82:7:function exp)', 'at ./index.rsh:74:17:application call to [unknown function] (defined at: ./index.rsh:74:17:function exp)'],
    msg: null,
    who: 'Schmuck_buy'
    });
  const v624 = ['Schmuck_buy0_84', v616];
  
  const v677 = stdlib.add(v553, v590);
  
  const txn1 = await (ctc.sendrecv({
    args: [v552, v553, v554, v555, v556, v584, v585, v586, v587, v588, v589, v590, v591, v592, v593, v599, v600, v624],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [v677, [[stdlib.checkedBigNumberify('./index.rsh:84:41:decimal', stdlib.UInt_max, '0'), v556]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v709], secs: v711, time: v710, didSend: v313, from: v708 } = txn1;
      
      switch (v709[0]) {
        case 'SchmecklerAPI_claimFees0_84': {
          const v712 = v709[1];
          
          break;
          }
        case 'Schmuck_buy0_84': {
          const v865 = v709[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Schmuck_buy"
            });
          const v876 = stdlib.add(v553, v590);
          const v906 = stdlib.add(v600, v876);
          sim_r.txns.push({
            amt: v876,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v907 = v599[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '0')];
          const v908 = v907[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '0')];
          const v912 = v907[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '1')];
          const v913 = v907[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '2')];
          const v914 = [v908, v912, v913];
          const v915 = stdlib.Array_set(v599, stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '0'), v914);
          ;
          const v929 = v865[stdlib.checkedBigNumberify('./index.rsh:82:7:spread', stdlib.UInt_max, '0')];
          const v930 = stdlib.eq(v929, stdlib.checkedBigNumberify('./index.rsh:86:26:decimal', stdlib.UInt_max, '1'));
          ;
          const v931 = v915[stdlib.checkedBigNumberify('./index.rsh:87:42:application', stdlib.UInt_max, '0')];
          const v932 = v931[stdlib.checkedBigNumberify('./index.rsh:87:42:application', stdlib.UInt_max, '0')];
          const v936 = stdlib.sub(v932, v929);
          const v939 = v931[stdlib.checkedBigNumberify('./index.rsh:87:42:application', stdlib.UInt_max, '1')];
          const v940 = v931[stdlib.checkedBigNumberify('./index.rsh:87:42:application', stdlib.UInt_max, '2')];
          const v941 = [v936, v939, v940];
          const v942 = stdlib.Array_set(v915, stdlib.checkedBigNumberify('./index.rsh:87:42:application', stdlib.UInt_max, '0'), v941);
          sim_r.txns.push({
            amt: v929,
            kind: 'from',
            to: v708,
            tok: v556
            });
          const v943 = true;
          const v944 = await txn1.getOutput('Schmuck_buy', 'v943', ctc3, v943);
          
          const v950 = stdlib.add(v584, stdlib.checkedBigNumberify('./index.rsh:90:73:decimal', stdlib.UInt_max, '1'));
          const v951 = stdlib.gt(v588, v950);
          const v952 = v951 ? v588 : v950;
          const v953 = stdlib.add(v589, v590);
          const v954 = stdlib.add(v590, v554);
          const v955 = v951 ? v591 : v954;
          const v956 = stdlib.div(v953, v950);
          const v957 = v951 ? v591 : v956;
          const v958 = stdlib.add(v592, v553);
          const v2333 = v950;
          const v2334 = v585;
          const v2335 = true;
          const v2336 = v951;
          const v2337 = v952;
          const v2338 = v953;
          const v2339 = v955;
          const v2340 = v957;
          const v2341 = v958;
          const v2342 = v710;
          const v2343 = v942;
          const v2344 = v906;
          const v2345 = v942[stdlib.checkedBigNumberify('./index.rsh:80:30:application', stdlib.UInt_max, '0')];
          const v2346 = v2345[stdlib.checkedBigNumberify('./index.rsh:80:30:application', stdlib.UInt_max, '0')];
          const v2347 = stdlib.gt(v2346, stdlib.checkedBigNumberify('./index.rsh:80:45:decimal', stdlib.UInt_max, '0'));
          if (v2347) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              amt: v906,
              kind: 'from',
              to: v552,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              amt: v2346,
              kind: 'from',
              to: v552,
              tok: v556
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v556
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'Schmuck_rebase0_84': {
          const v1018 = v709[1];
          
          break;
          }
        case 'Schmuck_sell0_84': {
          const v1171 = v709[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc1, ctc2, ctc1, ctc1, ctc3, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v709], secs: v711, time: v710, didSend: v313, from: v708 } = txn1;
  switch (v709[0]) {
    case 'SchmecklerAPI_claimFees0_84': {
      const v712 = v709[1];
      return;
      break;
      }
    case 'Schmuck_buy0_84': {
      const v865 = v709[1];
      undefined /* setApiDetails */;
      const v876 = stdlib.add(v553, v590);
      const v906 = stdlib.add(v600, v876);
      ;
      const v907 = v599[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '0')];
      const v908 = v907[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '0')];
      const v912 = v907[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '1')];
      const v913 = v907[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '2')];
      const v914 = [v908, v912, v913];
      const v915 = stdlib.Array_set(v599, stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '0'), v914);
      ;
      const v929 = v865[stdlib.checkedBigNumberify('./index.rsh:82:7:spread', stdlib.UInt_max, '0')];
      const v930 = stdlib.eq(v929, stdlib.checkedBigNumberify('./index.rsh:86:26:decimal', stdlib.UInt_max, '1'));
      stdlib.assert(v930, {
        at: './index.rsh:86:15:application',
        fs: ['at ./index.rsh:85:17:application call to [unknown function] (defined at: ./index.rsh:85:17:function exp)'],
        msg: null,
        who: 'Schmuck_buy'
        });
      const v931 = v915[stdlib.checkedBigNumberify('./index.rsh:87:42:application', stdlib.UInt_max, '0')];
      const v932 = v931[stdlib.checkedBigNumberify('./index.rsh:87:42:application', stdlib.UInt_max, '0')];
      const v936 = stdlib.sub(v932, v929);
      const v939 = v931[stdlib.checkedBigNumberify('./index.rsh:87:42:application', stdlib.UInt_max, '1')];
      const v940 = v931[stdlib.checkedBigNumberify('./index.rsh:87:42:application', stdlib.UInt_max, '2')];
      const v941 = [v936, v939, v940];
      const v942 = stdlib.Array_set(v915, stdlib.checkedBigNumberify('./index.rsh:87:42:application', stdlib.UInt_max, '0'), v941);
      ;
      const v943 = true;
      const v944 = await txn1.getOutput('Schmuck_buy', 'v943', ctc3, v943);
      if (v313) {
        stdlib.protect(ctc9, await interact.out(v865, v944), {
          at: './index.rsh:82:8:application',
          fs: ['at ./index.rsh:82:8:application call to [unknown function] (defined at: ./index.rsh:82:8:function exp)', 'at ./index.rsh:88:8:application call to "k" (defined at: ./index.rsh:85:17:function exp)', 'at ./index.rsh:85:17:application call to [unknown function] (defined at: ./index.rsh:85:17:function exp)'],
          msg: 'out',
          who: 'Schmuck_buy'
          });
        }
      else {
        }
      
      const v950 = stdlib.add(v584, stdlib.checkedBigNumberify('./index.rsh:90:73:decimal', stdlib.UInt_max, '1'));
      const v951 = stdlib.gt(v588, v950);
      const v952 = v951 ? v588 : v950;
      const v953 = stdlib.add(v589, v590);
      const v954 = stdlib.add(v590, v554);
      const v955 = v951 ? v591 : v954;
      const v956 = stdlib.div(v953, v950);
      const v957 = v951 ? v591 : v956;
      const v958 = stdlib.add(v592, v553);
      const v2333 = v950;
      const v2334 = v585;
      const v2335 = true;
      const v2336 = v951;
      const v2337 = v952;
      const v2338 = v953;
      const v2339 = v955;
      const v2340 = v957;
      const v2341 = v958;
      const v2342 = v710;
      const v2343 = v942;
      const v2344 = v906;
      const v2345 = v942[stdlib.checkedBigNumberify('./index.rsh:80:30:application', stdlib.UInt_max, '0')];
      const v2346 = v2345[stdlib.checkedBigNumberify('./index.rsh:80:30:application', stdlib.UInt_max, '0')];
      const v2347 = stdlib.gt(v2346, stdlib.checkedBigNumberify('./index.rsh:80:45:decimal', stdlib.UInt_max, '0'));
      if (v2347) {
        return;
        }
      else {
        ;
        ;
        return;
        }
      break;
      }
    case 'Schmuck_rebase0_84': {
      const v1018 = v709[1];
      return;
      break;
      }
    case 'Schmuck_sell0_84': {
      const v1171 = v709[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Schmuck_rebase4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Schmuck_rebase4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Schmuck_rebase4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc1, ctc1, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Tuple([ctc1]);
  const ctc8 = stdlib.T_Data({
    SchmecklerAPI_claimFees0_84: ctc6,
    Schmuck_buy0_84: ctc7,
    Schmuck_rebase0_84: ctc6,
    Schmuck_sell0_84: ctc7
    });
  const ctc9 = stdlib.T_Null;
  
  
  const [v552, v553, v554, v555, v556, v584, v585, v586, v587, v588, v589, v590, v591, v592, v593, v599, v600] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc1, ctc1, ctc2, ctc1, ctc1, ctc3, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1]);
  const v649 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:138:8:application call to [unknown function] (defined at: ./index.rsh:138:8:function exp)', 'at ./index.rsh:74:17:application call to "runSchmuck_rebase0_84" (defined at: ./index.rsh:137:7:function exp)', 'at ./index.rsh:74:17:application call to [unknown function] (defined at: ./index.rsh:74:17:function exp)'],
    msg: 'in',
    who: 'Schmuck_rebase'
    });
  const v652 = stdlib.gt(v593, v585);
  const v654 = v652 ? v587 : false;
  stdlib.assert(v654, {
    at: './index.rsh:138:19:application',
    fs: ['at ./index.rsh:138:8:application call to [unknown function] (defined at: ./index.rsh:138:8:function exp)', 'at ./index.rsh:138:8:application call to [unknown function] (defined at: ./index.rsh:138:8:function exp)', 'at ./index.rsh:74:17:application call to "runSchmuck_rebase0_84" (defined at: ./index.rsh:137:7:function exp)', 'at ./index.rsh:74:17:application call to [unknown function] (defined at: ./index.rsh:74:17:function exp)'],
    msg: null,
    who: 'Schmuck_rebase'
    });
  const v657 = ['Schmuck_rebase0_84', v649];
  
  const txn1 = await (ctc.sendrecv({
    args: [v552, v553, v554, v555, v556, v584, v585, v586, v587, v588, v589, v590, v591, v592, v593, v599, v600, v657],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [v553, [[stdlib.checkedBigNumberify('./index.rsh:139:18:decimal', stdlib.UInt_max, '1'), v556]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v709], secs: v711, time: v710, didSend: v313, from: v708 } = txn1;
      
      switch (v709[0]) {
        case 'SchmecklerAPI_claimFees0_84': {
          const v712 = v709[1];
          
          break;
          }
        case 'Schmuck_buy0_84': {
          const v865 = v709[1];
          
          break;
          }
        case 'Schmuck_rebase0_84': {
          const v1018 = v709[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Schmuck_rebase"
            });
          const v1059 = stdlib.add(v600, v553);
          sim_r.txns.push({
            amt: v553,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v1060 = v599[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '0')];
          const v1061 = v1060[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '0')];
          const v1062 = stdlib.add(v1061, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
          const v1065 = v1060[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '1')];
          const v1066 = v1060[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '2')];
          const v1067 = [v1062, v1065, v1066];
          const v1068 = stdlib.Array_set(v599, stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '0'), v1067);
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'),
            kind: 'to',
            tok: v556
            });
          const v1115 = stdlib.gt(v593, v585);
          const v1117 = v1115 ? v587 : false;
          ;
          const v1118 = stdlib.sub(v584, stdlib.checkedBigNumberify('./index.rsh:143:73:decimal', stdlib.UInt_max, '1'));
          const v1119 = stdlib.add(v1118, stdlib.checkedBigNumberify('./index.rsh:145:93:decimal', stdlib.UInt_max, '1'));
          const v1120 = stdlib.mul(v1118, v1119);
          const v1121 = stdlib.div(v1120, stdlib.checkedBigNumberify('./index.rsh:145:98:decimal', stdlib.UInt_max, '2'));
          const v1122 = stdlib.mul(v1121, v554);
          const v1123 = stdlib.add(v1118, v554);
          const v1124 = stdlib.div(v1122, v1118);
          const v1125 = stdlib.add(v592, v553);
          const v1126 = stdlib.sub(v589, v1122);
          const v1130 = stdlib.sub(v1059, v1126);
          sim_r.txns.push({
            amt: v1126,
            kind: 'from',
            to: v708,
            tok: undefined /* Nothing */
            });
          const v1131 = true;
          const v1132 = await txn1.getOutput('Schmuck_rebase', 'v1131', ctc3, v1131);
          
          const v2423 = v1118;
          const v2424 = v585;
          const v2425 = true;
          const v2426 = true;
          const v2427 = v1118;
          const v2428 = v1122;
          const v2429 = v1123;
          const v2430 = v1124;
          const v2431 = v1125;
          const v2432 = v710;
          const v2433 = v1068;
          const v2434 = v1130;
          const v2435 = v1068[stdlib.checkedBigNumberify('./index.rsh:80:30:application', stdlib.UInt_max, '0')];
          const v2436 = v2435[stdlib.checkedBigNumberify('./index.rsh:80:30:application', stdlib.UInt_max, '0')];
          const v2437 = stdlib.gt(v2436, stdlib.checkedBigNumberify('./index.rsh:80:45:decimal', stdlib.UInt_max, '0'));
          if (v2437) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              amt: v1130,
              kind: 'from',
              to: v552,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              amt: v2436,
              kind: 'from',
              to: v552,
              tok: v556
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v556
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'Schmuck_sell0_84': {
          const v1171 = v709[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc1, ctc2, ctc1, ctc1, ctc3, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v709], secs: v711, time: v710, didSend: v313, from: v708 } = txn1;
  switch (v709[0]) {
    case 'SchmecklerAPI_claimFees0_84': {
      const v712 = v709[1];
      return;
      break;
      }
    case 'Schmuck_buy0_84': {
      const v865 = v709[1];
      return;
      break;
      }
    case 'Schmuck_rebase0_84': {
      const v1018 = v709[1];
      undefined /* setApiDetails */;
      const v1059 = stdlib.add(v600, v553);
      ;
      const v1060 = v599[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '0')];
      const v1061 = v1060[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '0')];
      const v1062 = stdlib.add(v1061, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
      const v1065 = v1060[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '1')];
      const v1066 = v1060[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '2')];
      const v1067 = [v1062, v1065, v1066];
      const v1068 = stdlib.Array_set(v599, stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '0'), v1067);
      ;
      const v1115 = stdlib.gt(v593, v585);
      const v1117 = v1115 ? v587 : false;
      stdlib.assert(v1117, {
        at: './index.rsh:141:15:application',
        fs: ['at ./index.rsh:140:9:application call to [unknown function] (defined at: ./index.rsh:140:9:function exp)'],
        msg: null,
        who: 'Schmuck_rebase'
        });
      const v1118 = stdlib.sub(v584, stdlib.checkedBigNumberify('./index.rsh:143:73:decimal', stdlib.UInt_max, '1'));
      const v1119 = stdlib.add(v1118, stdlib.checkedBigNumberify('./index.rsh:145:93:decimal', stdlib.UInt_max, '1'));
      const v1120 = stdlib.mul(v1118, v1119);
      const v1121 = stdlib.div(v1120, stdlib.checkedBigNumberify('./index.rsh:145:98:decimal', stdlib.UInt_max, '2'));
      const v1122 = stdlib.mul(v1121, v554);
      const v1123 = stdlib.add(v1118, v554);
      const v1124 = stdlib.div(v1122, v1118);
      const v1125 = stdlib.add(v592, v553);
      const v1126 = stdlib.sub(v589, v1122);
      const v1130 = stdlib.sub(v1059, v1126);
      ;
      const v1131 = true;
      const v1132 = await txn1.getOutput('Schmuck_rebase', 'v1131', ctc3, v1131);
      if (v313) {
        stdlib.protect(ctc9, await interact.out(v1018, v1132), {
          at: './index.rsh:137:8:application',
          fs: ['at ./index.rsh:137:8:application call to [unknown function] (defined at: ./index.rsh:137:8:function exp)', 'at ./index.rsh:151:8:application call to "k" (defined at: ./index.rsh:140:9:function exp)', 'at ./index.rsh:140:9:application call to [unknown function] (defined at: ./index.rsh:140:9:function exp)'],
          msg: 'out',
          who: 'Schmuck_rebase'
          });
        }
      else {
        }
      
      const v2423 = v1118;
      const v2424 = v585;
      const v2425 = true;
      const v2426 = true;
      const v2427 = v1118;
      const v2428 = v1122;
      const v2429 = v1123;
      const v2430 = v1124;
      const v2431 = v1125;
      const v2432 = v710;
      const v2433 = v1068;
      const v2434 = v1130;
      const v2435 = v1068[stdlib.checkedBigNumberify('./index.rsh:80:30:application', stdlib.UInt_max, '0')];
      const v2436 = v2435[stdlib.checkedBigNumberify('./index.rsh:80:30:application', stdlib.UInt_max, '0')];
      const v2437 = stdlib.gt(v2436, stdlib.checkedBigNumberify('./index.rsh:80:45:decimal', stdlib.UInt_max, '0'));
      if (v2437) {
        return;
        }
      else {
        ;
        ;
        return;
        }
      break;
      }
    case 'Schmuck_sell0_84': {
      const v1171 = v709[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Schmuck_sell4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Schmuck_sell4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Schmuck_sell4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc1, ctc1, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc6 = stdlib.T_Tuple([ctc1]);
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Data({
    SchmecklerAPI_claimFees0_84: ctc7,
    Schmuck_buy0_84: ctc6,
    Schmuck_rebase0_84: ctc7,
    Schmuck_sell0_84: ctc6
    });
  const ctc9 = stdlib.T_Null;
  
  
  const [v552, v553, v554, v555, v556, v584, v585, v586, v587, v588, v589, v590, v591, v592, v593, v599, v600] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc1, ctc1, ctc2, ctc1, ctc1, ctc3, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1]);
  const v628 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:109:14:application call to [unknown function] (defined at: ./index.rsh:109:14:function exp)', 'at ./index.rsh:74:17:application call to "runSchmuck_sell0_84" (defined at: ./index.rsh:108:7:function exp)', 'at ./index.rsh:74:17:application call to [unknown function] (defined at: ./index.rsh:74:17:function exp)'],
    msg: 'in',
    who: 'Schmuck_sell'
    });
  const v629 = v628[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v632 = stdlib.eq(v629, stdlib.checkedBigNumberify('./index.rsh:109:36:decimal', stdlib.UInt_max, '1'));
  const v633 = v599[stdlib.checkedBigNumberify('./index.rsh:109:48:application', stdlib.UInt_max, '0')];
  const v634 = v633[stdlib.checkedBigNumberify('./index.rsh:109:48:application', stdlib.UInt_max, '0')];
  const v635 = stdlib.gt(v634, stdlib.checkedBigNumberify('./index.rsh:109:63:decimal', stdlib.UInt_max, '0'));
  const v636 = v632 ? v635 : false;
  const v637 = stdlib.gt(v584, stdlib.checkedBigNumberify('./index.rsh:109:96:decimal', stdlib.UInt_max, '0'));
  const v638 = v636 ? v637 : false;
  const v640 = stdlib.gt(v600, v591);
  const v641 = v638 ? v640 : false;
  stdlib.assert(v641, {
    at: './index.rsh:109:25:application',
    fs: ['at ./index.rsh:109:14:application call to [unknown function] (defined at: ./index.rsh:109:14:function exp)', 'at ./index.rsh:109:14:application call to [unknown function] (defined at: ./index.rsh:109:14:function exp)', 'at ./index.rsh:74:17:application call to "runSchmuck_sell0_84" (defined at: ./index.rsh:108:7:function exp)', 'at ./index.rsh:74:17:application call to [unknown function] (defined at: ./index.rsh:74:17:function exp)'],
    msg: null,
    who: 'Schmuck_sell'
    });
  const v645 = ['Schmuck_sell0_84', v628];
  
  const txn1 = await (ctc.sendrecv({
    args: [v552, v553, v554, v555, v556, v584, v585, v586, v587, v588, v589, v590, v591, v592, v593, v599, v600, v645],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [v553, [[v629, v556]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v709], secs: v711, time: v710, didSend: v313, from: v708 } = txn1;
      
      switch (v709[0]) {
        case 'SchmecklerAPI_claimFees0_84': {
          const v712 = v709[1];
          
          break;
          }
        case 'Schmuck_buy0_84': {
          const v865 = v709[1];
          
          break;
          }
        case 'Schmuck_rebase0_84': {
          const v1018 = v709[1];
          
          break;
          }
        case 'Schmuck_sell0_84': {
          const v1171 = v709[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Schmuck_sell"
            });
          const v1197 = v1171[stdlib.checkedBigNumberify('./index.rsh:108:7:spread', stdlib.UInt_max, '0')];
          const v1212 = stdlib.add(v600, v553);
          sim_r.txns.push({
            amt: v553,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v1213 = v599[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '0')];
          const v1214 = v1213[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '0')];
          const v1215 = stdlib.add(v1214, v1197);
          const v1218 = v1213[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '1')];
          const v1219 = v1213[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '2')];
          const v1220 = [v1215, v1218, v1219];
          const v1221 = stdlib.Array_set(v599, stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '0'), v1220);
          sim_r.txns.push({
            amt: v1197,
            kind: 'to',
            tok: v556
            });
          const v1293 = stdlib.eq(v1197, stdlib.checkedBigNumberify('./index.rsh:112:26:decimal', stdlib.UInt_max, '1'));
          const v1294 = v1221[stdlib.checkedBigNumberify('./index.rsh:112:38:application', stdlib.UInt_max, '0')];
          const v1295 = v1294[stdlib.checkedBigNumberify('./index.rsh:112:38:application', stdlib.UInt_max, '0')];
          const v1296 = stdlib.gt(v1295, stdlib.checkedBigNumberify('./index.rsh:112:53:decimal', stdlib.UInt_max, '0'));
          const v1297 = v1293 ? v1296 : false;
          const v1298 = stdlib.gt(v584, stdlib.checkedBigNumberify('./index.rsh:112:86:decimal', stdlib.UInt_max, '0'));
          const v1299 = v1297 ? v1298 : false;
          const v1301 = stdlib.gt(v1212, v591);
          const v1302 = v1299 ? v1301 : false;
          ;
          const v1306 = stdlib.sub(v1212, v591);
          sim_r.txns.push({
            amt: v591,
            kind: 'from',
            to: v708,
            tok: undefined /* Nothing */
            });
          const v1307 = true;
          const v1308 = await txn1.getOutput('Schmuck_sell', 'v1307', ctc3, v1307);
          
          const v1314 = stdlib.sub(v584, stdlib.checkedBigNumberify('./index.rsh:117:73:decimal', stdlib.UInt_max, '1'));
          const v1315 = stdlib.eq(v1314, stdlib.checkedBigNumberify('./index.rsh:118:71:decimal', stdlib.UInt_max, '0'));
          const v1316 = v1315 ? stdlib.checkedBigNumberify('./index.rsh:118:75:decimal', stdlib.UInt_max, '0') : v588;
          const v1317 = stdlib.sub(v589, v591);
          const v1319 = v1315 ? v554 : v591;
          const v1320 = stdlib.add(v592, v553);
          const v1321 = stdlib.add(v585, v555);
          const v1322 = v587 ? v585 : v1321;
          const v2513 = v1314;
          const v2514 = v1322;
          const v2515 = true;
          const v2516 = true;
          const v2517 = v1316;
          const v2518 = v1317;
          const v2519 = v1319;
          const v2520 = v591;
          const v2521 = v1320;
          const v2522 = v710;
          const v2523 = v1221;
          const v2524 = v1306;
          if (v1296) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              amt: v1306,
              kind: 'from',
              to: v552,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              amt: v1295,
              kind: 'from',
              to: v552,
              tok: v556
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v556
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc1, ctc2, ctc1, ctc1, ctc3, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v709], secs: v711, time: v710, didSend: v313, from: v708 } = txn1;
  switch (v709[0]) {
    case 'SchmecklerAPI_claimFees0_84': {
      const v712 = v709[1];
      return;
      break;
      }
    case 'Schmuck_buy0_84': {
      const v865 = v709[1];
      return;
      break;
      }
    case 'Schmuck_rebase0_84': {
      const v1018 = v709[1];
      return;
      break;
      }
    case 'Schmuck_sell0_84': {
      const v1171 = v709[1];
      undefined /* setApiDetails */;
      const v1197 = v1171[stdlib.checkedBigNumberify('./index.rsh:108:7:spread', stdlib.UInt_max, '0')];
      const v1212 = stdlib.add(v600, v553);
      ;
      const v1213 = v599[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '0')];
      const v1214 = v1213[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '0')];
      const v1215 = stdlib.add(v1214, v1197);
      const v1218 = v1213[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '1')];
      const v1219 = v1213[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '2')];
      const v1220 = [v1215, v1218, v1219];
      const v1221 = stdlib.Array_set(v599, stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '0'), v1220);
      ;
      const v1293 = stdlib.eq(v1197, stdlib.checkedBigNumberify('./index.rsh:112:26:decimal', stdlib.UInt_max, '1'));
      const v1294 = v1221[stdlib.checkedBigNumberify('./index.rsh:112:38:application', stdlib.UInt_max, '0')];
      const v1295 = v1294[stdlib.checkedBigNumberify('./index.rsh:112:38:application', stdlib.UInt_max, '0')];
      const v1296 = stdlib.gt(v1295, stdlib.checkedBigNumberify('./index.rsh:112:53:decimal', stdlib.UInt_max, '0'));
      const v1297 = v1293 ? v1296 : false;
      const v1298 = stdlib.gt(v584, stdlib.checkedBigNumberify('./index.rsh:112:86:decimal', stdlib.UInt_max, '0'));
      const v1299 = v1297 ? v1298 : false;
      const v1301 = stdlib.gt(v1212, v591);
      const v1302 = v1299 ? v1301 : false;
      stdlib.assert(v1302, {
        at: './index.rsh:112:14:application',
        fs: ['at ./index.rsh:111:17:application call to [unknown function] (defined at: ./index.rsh:111:17:function exp)'],
        msg: null,
        who: 'Schmuck_sell'
        });
      const v1306 = stdlib.sub(v1212, v591);
      ;
      const v1307 = true;
      const v1308 = await txn1.getOutput('Schmuck_sell', 'v1307', ctc3, v1307);
      if (v313) {
        stdlib.protect(ctc9, await interact.out(v1171, v1308), {
          at: './index.rsh:108:8:application',
          fs: ['at ./index.rsh:108:8:application call to [unknown function] (defined at: ./index.rsh:108:8:function exp)', 'at ./index.rsh:115:8:application call to "k" (defined at: ./index.rsh:111:17:function exp)', 'at ./index.rsh:111:17:application call to [unknown function] (defined at: ./index.rsh:111:17:function exp)'],
          msg: 'out',
          who: 'Schmuck_sell'
          });
        }
      else {
        }
      
      const v1314 = stdlib.sub(v584, stdlib.checkedBigNumberify('./index.rsh:117:73:decimal', stdlib.UInt_max, '1'));
      const v1315 = stdlib.eq(v1314, stdlib.checkedBigNumberify('./index.rsh:118:71:decimal', stdlib.UInt_max, '0'));
      const v1316 = v1315 ? stdlib.checkedBigNumberify('./index.rsh:118:75:decimal', stdlib.UInt_max, '0') : v588;
      const v1317 = stdlib.sub(v589, v591);
      const v1319 = v1315 ? v554 : v591;
      const v1320 = stdlib.add(v592, v553);
      const v1321 = stdlib.add(v585, v555);
      const v1322 = v587 ? v585 : v1321;
      const v2513 = v1314;
      const v2514 = v1322;
      const v2515 = true;
      const v2516 = true;
      const v2517 = v1316;
      const v2518 = v1317;
      const v2519 = v1319;
      const v2520 = v591;
      const v2521 = v1320;
      const v2522 = v710;
      const v2523 = v1221;
      const v2524 = v1306;
      if (v1296) {
        return;
        }
      else {
        ;
        ;
        return;
        }
      break;
      }
    }
  
  
  };
export async function SchmecklerAPI_claimFees(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for SchmecklerAPI_claimFees expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for SchmecklerAPI_claimFees expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 4, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [4]');
  if (step == 4) {return _SchmecklerAPI_claimFees4(ctcTop, interact);}
  };
export async function Schmuck_buy(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Schmuck_buy expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Schmuck_buy expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 4, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [4]');
  if (step == 4) {return _Schmuck_buy4(ctcTop, interact);}
  };
export async function Schmuck_rebase(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Schmuck_rebase expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Schmuck_rebase expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 4, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [4]');
  if (step == 4) {return _Schmuck_rebase4(ctcTop, interact);}
  };
export async function Schmuck_sell(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Schmuck_sell expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Schmuck_sell expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 4, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [4]');
  if (step == 4) {return _Schmuck_sell4(ctcTop, interact);}
  };
const _ALGO = {
  ABI: {
    impure: [`SchmecklerAPI_claimFees()byte`, `Schmuck_buy(uint64)byte`, `Schmuck_rebase()byte`, `Schmuck_sell(uint64)byte`],
    pure: [`SchmeckleShopView_read()(byte,byte,uint64,uint64,uint64,uint64,uint64,uint64,uint64)`],
    sigs: [`SchmeckleShopView_read()(byte,byte,uint64,uint64,uint64,uint64,uint64,uint64,uint64)`, `SchmecklerAPI_claimFees()byte`, `Schmuck_buy(uint64)byte`, `Schmuck_rebase()byte`, `Schmuck_sell(uint64)byte`]
    },
  appApproval: `BiARAAEECAMg2KiU7w3W8J+8DpCF5b0Pjaf77QEoMDhASAKgjQYmAwEBAQAAIjUAMRhBBk8qZEkiWzUBJVs1AjYaABdJQQC0IjUEIzUGSSEGDEAAQ0khBwxAACpJIQgMQAATIQgSRCo1/4ABAjT/UCWvUEIApCEHEkQ2GgE1/yg0/1BCAJQhBhJENhoBNf+AAQM0/1BCAIJJIQkMQABJIQkSRDQBJBJEKWQoZFBJNQNXUAE0A1dRAVA0A1dSCFA0A1dACFA0A1daCFA0A1diCFA0A1dqCFA0A1dyCFA0A1dICFA1B0IFlIGqkZhkEkQqNf8pNP9QJa9QQgAeNhoCFzUENhoDNhoBF0kjDEADokkhBAxAAxQhBBJEJDQBEkQ0BEkiEkw0AhIRRClkKGRQSTUDSUpKSkpKSklXACA1/yEFWzX+IQpbNf0hC1s1/CEMWzX7IQ1bNfohDls1+VdRARc1+IFSWzX3gVpbNfaBYls19YFqWzX0gXJbNfNXghE18oGTAVs18Uk1BTXwgASR8aeaNPBQsDTwIlVJIQ8MQAFiSSEEDEAAwCEEEkQ08FcBCDXvNO8XNe408TT+CDXtNP6IBMk08lcAEUk17CJbNO4IFjTsVwgIUDTsVxABUDXrNO40+4gEvjTuIxI061cAESJbIg0QNPoiDRA07TT0DRBEsSKyATT0sggjshAxALIHs4AJAAAAAAAABRsBsCg1BzT6IwlJNeoiEjXpNP80/jT9NPw0+zTqNPk0/Ag0+TT4TSMjNPciNOlNNPY09Ak09DT9NOlNNPQ08zT+CDIGNOs07TT0CUIC+Ug0/ogEHzTyVwARNe8jNPuIBCo0A4F6WzT5DTT4EEQ0+iMJSTXuSSMICyEPCjT9CzXtNPY07Qk17LEisgE07LIII7IQMQCyB7OACQAAAAAAAARrAbAoNQc0/zT+NP00/DT7NO40+SMjNO407TTuNP0INO007go08zT+CDIGNO8iWyMIFjTvVwgIUDTvVxABUDTxNP4INOwJQgJeSSMMQADFSDTwVwEINe80/jT1CDXuNO6IA3A08lcAEUk17VcACDTtVwgIUDTtVxABUDXsNO8XSTXrIxJENOxXABE16rEisgE067ISJLIQMQCyFDT7shGzgAkAAAAAAAADrwGwKDUHNPojCDXpNPc06Q016DT2NPUINec0/zT+NP00/DT7NOk0+SM06DTpNPc06E005zT1NP0INPQ06E005zTpCjT0NOhNNPM0/ggyBjTqIls06wkWNOpXCAhQNOpXEAFQNPE07ghCAZNINPJXABE177EisgE087III7IQNP+yB7OACQAAAAAAAAMAAbAoNQc0/zT+NP00/DT7NPo0+SM0+DT3NPY09TT0IjIGNO9XAAg071cICFA071cQAVA08TTzCUIBNyMSRCM0ARJENARJIhJMNAISEUQpZEk1A0lKSVcAIDX/IQpbNf4hDFs1/SENWzX8V1ARNfuABJqLkXSwNPtXABE1+jT8NP2IAjI0/zEAEkQ0/zQDIQVbNP40AyELWzT9IjQDIQ5bIyIiIjT+IiIyBjT6Ils0/AgWNPpXCAhQNPpXEAFQIkIAsEgiNAESRDQESSISTDQCEhFESTUFSUpJIls1/yVbNf6BEFs1/YEYWzX8IQVbNfuABE1+Byc0/xZQNP4WUDT9FlA0/BZQNPsWULAhEIgBjoERr0k1+lcAETX5Ja80+VcICFA0+VcQAVA1+CEQiAFusSKyASKyEiSyEDIKshQ0/LIRszEANP8WUDT+FlA0/RZQNPwWUDT7FlAyBhZQNPhQKUsBVwBhZ0gjNQEyBjUCQgDvNf81/jX9Nfw1+zX6Nfk1+DX3NfY19TX0NfM18jXxNfA17zT+VwARIls17jT2NO4iDRBBAGA07zTwFlA08RZQNPIWUDTzFlA09BZQNPUWUDT2FlEHCFA09xZRBwhQNPgWUDT5FlA0+hZQNPsWUDT8FlA0/RZQNP5QNP8WUClLAVcAf2coSwFXfxxnSCQ1ATIGNQJCAFqxIrIBNP+yCCOyEDTvsgezsSKyATTushIkshA077IUNPOyEbOxIrIBIrISJLIQMgmyFTIKshQ087IRs0IAADEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjUBIjUCQv/DNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBAkEkQ4EU8CEkQ4EhJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 155,
  unsupported: [],
  version: 10,
  warnings: []
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:62:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:180:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:74:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO
  };
export const _Participants = {
  "Schmeckler": Schmeckler,
  "SchmecklerAPI_claimFees": SchmecklerAPI_claimFees,
  "Schmuck_buy": Schmuck_buy,
  "Schmuck_rebase": Schmuck_rebase,
  "Schmuck_sell": Schmuck_sell
  };
export const _APIs = {
  SchmecklerAPI: {
    claimFees: SchmecklerAPI_claimFees
    },
  Schmuck: {
    buy: Schmuck_buy,
    rebase: Schmuck_rebase,
    sell: Schmuck_sell
    }
  };
