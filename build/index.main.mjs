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
              const [v557, v558, v559, v560, v561, v562, v564, v570] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
              const [v557, v558, v559, v560, v561, v589, v590, v591, v592, v593, v594, v595, v596, v597, v601, v604, v605] = svs;
              return (await ((async () => {
                
                const v618 = [v591, v592, v593, v589, v594, v595, v596, v597, v590];
                
                return v618;}))(...args));
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
  
  
  const v539 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v540 = [v539];
  const v546 = stdlib.protect(ctc2, await interact.setUpShop(), {
    at: './index.rsh:49:37:application',
    fs: ['at ./index.rsh:42:18:application call to [unknown function] (defined at: ./index.rsh:42:22:function exp)'],
    msg: 'setUpShop',
    who: 'Schmeckler'
    });
  const v547 = v546.fee;
  const v548 = v546.initialPrice;
  const v549 = v546.rebaseTime;
  const v550 = v546.schmeckleAmount;
  const v551 = v546.schmeckles;
  
  const txn1 = await (ctc.sendrecv({
    args: [v547, v548, v549, v551, v550],
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
      
      
      const {data: [v558, v559, v560, v561, v562], secs: v564, time: v563, didSend: v41, from: v557 } = txn1;
      
      const v565 = v540[stdlib.checkedBigNumberify('./index.rsh:52:14:dot', stdlib.UInt_max, '0')];
      const v567 = v565[stdlib.checkedBigNumberify('./index.rsh:52:14:dot', stdlib.UInt_max, '1')];
      const v568 = v565[stdlib.checkedBigNumberify('./index.rsh:52:14:dot', stdlib.UInt_max, '2')];
      const v569 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v567, v568];
      const v570 = stdlib.Array_set(v540, stdlib.checkedBigNumberify('./index.rsh:52:14:dot', stdlib.UInt_max, '0'), v569);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v561
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
  const {data: [v558, v559, v560, v561, v562], secs: v564, time: v563, didSend: v41, from: v557 } = txn1;
  const v565 = v540[stdlib.checkedBigNumberify('./index.rsh:52:14:dot', stdlib.UInt_max, '0')];
  const v567 = v565[stdlib.checkedBigNumberify('./index.rsh:52:14:dot', stdlib.UInt_max, '1')];
  const v568 = v565[stdlib.checkedBigNumberify('./index.rsh:52:14:dot', stdlib.UInt_max, '2')];
  const v569 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v567, v568];
  const v570 = stdlib.Array_set(v540, stdlib.checkedBigNumberify('./index.rsh:52:14:dot', stdlib.UInt_max, '0'), v569);
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v557, v558, v559, v560, v561, v562, v564, v570],
    evt_cnt: 0,
    funcNum: 1,
    lct: v563,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:63:14:dot', stdlib.UInt_max, '0'), [[v562, v561]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v574, time: v573, didSend: v48, from: v572 } = txn2;
      
      ;
      const v575 = v570[stdlib.checkedBigNumberify('./index.rsh:63:14:dot', stdlib.UInt_max, '0')];
      const v576 = v575[stdlib.checkedBigNumberify('./index.rsh:63:14:dot', stdlib.UInt_max, '0')];
      const v577 = stdlib.add(v576, v562);
      const v580 = v575[stdlib.checkedBigNumberify('./index.rsh:63:14:dot', stdlib.UInt_max, '1')];
      const v581 = v575[stdlib.checkedBigNumberify('./index.rsh:63:14:dot', stdlib.UInt_max, '2')];
      const v582 = [v577, v580, v581];
      const v583 = stdlib.Array_set(v570, stdlib.checkedBigNumberify('./index.rsh:63:14:dot', stdlib.UInt_max, '0'), v582);
      sim_r.txns.push({
        amt: v562,
        kind: 'to',
        tok: v561
        });
      const v584 = stdlib.addressEq(v557, v572);
      ;
      
      const v589 = stdlib.checkedBigNumberify('./index.rsh:74:35:decimal', stdlib.UInt_max, '0');
      const v590 = v564;
      const v591 = true;
      const v592 = false;
      const v593 = stdlib.checkedBigNumberify('./index.rsh:74:32:decimal', stdlib.UInt_max, '0');
      const v594 = stdlib.checkedBigNumberify('./index.rsh:74:39:decimal', stdlib.UInt_max, '0');
      const v595 = v559;
      const v596 = stdlib.checkedBigNumberify('./index.rsh:74:57:decimal', stdlib.UInt_max, '0');
      const v597 = stdlib.checkedBigNumberify('./index.rsh:74:60:decimal', stdlib.UInt_max, '0');
      const v598 = v573;
      const v601 = v574;
      const v604 = v583;
      const v605 = stdlib.checkedBigNumberify('./index.rsh:40:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v614 = v604[stdlib.checkedBigNumberify('./index.rsh:80:30:application', stdlib.UInt_max, '0')];
        const v615 = v614[stdlib.checkedBigNumberify('./index.rsh:80:30:application', stdlib.UInt_max, '0')];
        const v616 = stdlib.gt(v615, stdlib.checkedBigNumberify('./index.rsh:80:45:decimal', stdlib.UInt_max, '0'));
        const v617 = v591 ? v616 : false;
        
        return v617;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v1347 = v604[stdlib.checkedBigNumberify('./index.rsh:179:32:application', stdlib.UInt_max, '0')];
        const v1348 = v1347[stdlib.checkedBigNumberify('./index.rsh:179:32:application', stdlib.UInt_max, '0')];
        sim_r.txns.push({
          amt: v605,
          kind: 'from',
          to: v557,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          amt: v1348,
          kind: 'from',
          to: v557,
          tok: v561
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v561
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
  const {data: [], secs: v574, time: v573, didSend: v48, from: v572 } = txn2;
  ;
  const v575 = v570[stdlib.checkedBigNumberify('./index.rsh:63:14:dot', stdlib.UInt_max, '0')];
  const v576 = v575[stdlib.checkedBigNumberify('./index.rsh:63:14:dot', stdlib.UInt_max, '0')];
  const v577 = stdlib.add(v576, v562);
  const v580 = v575[stdlib.checkedBigNumberify('./index.rsh:63:14:dot', stdlib.UInt_max, '1')];
  const v581 = v575[stdlib.checkedBigNumberify('./index.rsh:63:14:dot', stdlib.UInt_max, '2')];
  const v582 = [v577, v580, v581];
  const v583 = stdlib.Array_set(v570, stdlib.checkedBigNumberify('./index.rsh:63:14:dot', stdlib.UInt_max, '0'), v582);
  ;
  const v584 = stdlib.addressEq(v557, v572);
  stdlib.assert(v584, {
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
  
  let v589 = stdlib.checkedBigNumberify('./index.rsh:74:35:decimal', stdlib.UInt_max, '0');
  let v590 = v564;
  let v591 = true;
  let v592 = false;
  let v593 = stdlib.checkedBigNumberify('./index.rsh:74:32:decimal', stdlib.UInt_max, '0');
  let v594 = stdlib.checkedBigNumberify('./index.rsh:74:39:decimal', stdlib.UInt_max, '0');
  let v595 = v559;
  let v596 = stdlib.checkedBigNumberify('./index.rsh:74:57:decimal', stdlib.UInt_max, '0');
  let v597 = stdlib.checkedBigNumberify('./index.rsh:74:60:decimal', stdlib.UInt_max, '0');
  let v598 = v573;
  let v601 = v574;
  let v604 = v583;
  let v605 = stdlib.checkedBigNumberify('./index.rsh:40:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v614 = v604[stdlib.checkedBigNumberify('./index.rsh:80:30:application', stdlib.UInt_max, '0')];
    const v615 = v614[stdlib.checkedBigNumberify('./index.rsh:80:30:application', stdlib.UInt_max, '0')];
    const v616 = stdlib.gt(v615, stdlib.checkedBigNumberify('./index.rsh:80:45:decimal', stdlib.UInt_max, '0'));
    const v617 = v591 ? v616 : false;
    
    return v617;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc6],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v714], secs: v716, time: v715, didSend: v313, from: v713 } = txn3;
    switch (v714[0]) {
      case 'SchmecklerAPI_claimFees0_84': {
        const v717 = v714[1];
        undefined /* setApiDetails */;
        ;
        const v759 = v604[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '0')];
        const v760 = v759[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '0')];
        const v764 = v759[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '1')];
        const v765 = v759[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '2')];
        const v766 = [v760, v764, v765];
        const v767 = stdlib.Array_set(v604, stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '0'), v766);
        ;
        const v772 = stdlib.sub(v605, v597);
        ;
        const v773 = true;
        await txn3.getOutput('SchmecklerAPI_claimFees', 'v773', ctc7, v773);
        const cv589 = v589;
        const cv590 = v590;
        const cv591 = true;
        const cv592 = v592;
        const cv593 = v593;
        const cv594 = v594;
        const cv595 = v595;
        const cv596 = v596;
        const cv597 = stdlib.checkedBigNumberify('./index.rsh:176:9:decimal', stdlib.UInt_max, '0');
        const cv598 = v715;
        const cv601 = v716;
        const cv604 = v767;
        const cv605 = v772;
        
        v589 = cv589;
        v590 = cv590;
        v591 = cv591;
        v592 = cv592;
        v593 = cv593;
        v594 = cv594;
        v595 = cv595;
        v596 = cv596;
        v597 = cv597;
        v598 = cv598;
        v601 = cv601;
        v604 = cv604;
        v605 = cv605;
        
        continue;
        break;
        }
      case 'Schmuck_buy0_84': {
        const v874 = v714[1];
        undefined /* setApiDetails */;
        const v885 = stdlib.add(v558, v595);
        const v915 = stdlib.add(v605, v885);
        ;
        const v916 = v604[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '0')];
        const v917 = v916[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '0')];
        const v921 = v916[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '1')];
        const v922 = v916[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '2')];
        const v923 = [v917, v921, v922];
        const v924 = stdlib.Array_set(v604, stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '0'), v923);
        ;
        const v938 = v874[stdlib.checkedBigNumberify('./index.rsh:82:7:spread', stdlib.UInt_max, '0')];
        const v939 = stdlib.eq(v938, stdlib.checkedBigNumberify('./index.rsh:86:26:decimal', stdlib.UInt_max, '1'));
        stdlib.assert(v939, {
          at: './index.rsh:86:15:application',
          fs: ['at ./index.rsh:85:17:application call to [unknown function] (defined at: ./index.rsh:85:17:function exp)'],
          msg: null,
          who: 'Schmeckler'
          });
        const v940 = v924[stdlib.checkedBigNumberify('./index.rsh:87:42:application', stdlib.UInt_max, '0')];
        const v941 = v940[stdlib.checkedBigNumberify('./index.rsh:87:42:application', stdlib.UInt_max, '0')];
        const v945 = stdlib.sub(v941, v938);
        const v948 = v940[stdlib.checkedBigNumberify('./index.rsh:87:42:application', stdlib.UInt_max, '1')];
        const v949 = v940[stdlib.checkedBigNumberify('./index.rsh:87:42:application', stdlib.UInt_max, '2')];
        const v950 = [v945, v948, v949];
        const v951 = stdlib.Array_set(v924, stdlib.checkedBigNumberify('./index.rsh:87:42:application', stdlib.UInt_max, '0'), v950);
        ;
        const v952 = true;
        await txn3.getOutput('Schmuck_buy', 'v952', ctc7, v952);
        const v959 = stdlib.add(v589, stdlib.checkedBigNumberify('./index.rsh:90:73:decimal', stdlib.UInt_max, '1'));
        const v960 = stdlib.gt(v593, v959);
        const v961 = v960 ? v593 : v959;
        const v962 = stdlib.add(v594, v595);
        const v963 = stdlib.ge(v959, v593);
        const v964 = v963 ? false : true;
        const v965 = stdlib.add(v959, stdlib.checkedBigNumberify('./index.rsh:94:110:decimal', stdlib.UInt_max, '1'));
        const v966 = stdlib.mul(v965, v559);
        const v967 = v963 ? v966 : v596;
        const v968 = stdlib.div(v962, v959);
        const v969 = v963 ? v968 : v596;
        const v970 = stdlib.add(v597, v558);
        const cv589 = v959;
        const cv590 = v590;
        const cv591 = true;
        const cv592 = v964;
        const cv593 = v961;
        const cv594 = v962;
        const cv595 = v967;
        const cv596 = v969;
        const cv597 = v970;
        const cv598 = v715;
        const cv601 = v716;
        const cv604 = v951;
        const cv605 = v915;
        
        v589 = cv589;
        v590 = cv590;
        v591 = cv591;
        v592 = cv592;
        v593 = cv593;
        v594 = cv594;
        v595 = cv595;
        v596 = cv596;
        v597 = cv597;
        v598 = cv598;
        v601 = cv601;
        v604 = cv604;
        v605 = cv605;
        
        continue;
        break;
        }
      case 'Schmuck_rebase0_84': {
        const v1031 = v714[1];
        undefined /* setApiDetails */;
        const v1072 = stdlib.add(v605, v558);
        ;
        const v1073 = v604[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '0')];
        const v1074 = v1073[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '0')];
        const v1075 = stdlib.add(v1074, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
        const v1078 = v1073[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '1')];
        const v1079 = v1073[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '2')];
        const v1080 = [v1075, v1078, v1079];
        const v1081 = stdlib.Array_set(v604, stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '0'), v1080);
        ;
        const v1131 = stdlib.gt(v601, v590);
        const v1133 = v1131 ? v592 : false;
        stdlib.assert(v1133, {
          at: './index.rsh:141:15:application',
          fs: ['at ./index.rsh:140:9:application call to [unknown function] (defined at: ./index.rsh:140:9:function exp)'],
          msg: null,
          who: 'Schmeckler'
          });
        const v1134 = stdlib.sub(v589, stdlib.checkedBigNumberify('./index.rsh:143:73:decimal', stdlib.UInt_max, '1'));
        const v1135 = stdlib.add(v1134, stdlib.checkedBigNumberify('./index.rsh:145:93:decimal', stdlib.UInt_max, '1'));
        const v1136 = stdlib.mul(v1134, v1135);
        const v1137 = stdlib.div(v1136, stdlib.checkedBigNumberify('./index.rsh:145:98:decimal', stdlib.UInt_max, '2'));
        const v1138 = stdlib.mul(v1137, v559);
        const v1139 = stdlib.add(v1134, v559);
        const v1140 = stdlib.div(v1138, v1134);
        const v1141 = stdlib.add(v597, v558);
        const v1142 = stdlib.sub(v594, v1138);
        const v1146 = stdlib.sub(v1072, v1142);
        ;
        const v1147 = true;
        await txn3.getOutput('Schmuck_rebase', 'v1147', ctc7, v1147);
        const cv589 = v1134;
        const cv590 = v590;
        const cv591 = true;
        const cv592 = false;
        const cv593 = v1134;
        const cv594 = v1138;
        const cv595 = v1139;
        const cv596 = v1140;
        const cv597 = v1141;
        const cv598 = v715;
        const cv601 = v716;
        const cv604 = v1081;
        const cv605 = v1146;
        
        v589 = cv589;
        v590 = cv590;
        v591 = cv591;
        v592 = cv592;
        v593 = cv593;
        v594 = cv594;
        v595 = cv595;
        v596 = cv596;
        v597 = cv597;
        v598 = cv598;
        v601 = cv601;
        v604 = cv604;
        v605 = cv605;
        
        continue;
        break;
        }
      case 'Schmuck_sell0_84': {
        const v1188 = v714[1];
        undefined /* setApiDetails */;
        const v1214 = v1188[stdlib.checkedBigNumberify('./index.rsh:108:7:spread', stdlib.UInt_max, '0')];
        const v1229 = stdlib.add(v605, v558);
        ;
        const v1230 = v604[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '0')];
        const v1231 = v1230[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '0')];
        const v1232 = stdlib.add(v1231, v1214);
        const v1235 = v1230[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '1')];
        const v1236 = v1230[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '2')];
        const v1237 = [v1232, v1235, v1236];
        const v1238 = stdlib.Array_set(v604, stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '0'), v1237);
        ;
        const v1313 = stdlib.eq(v1214, stdlib.checkedBigNumberify('./index.rsh:112:26:decimal', stdlib.UInt_max, '1'));
        const v1314 = v1238[stdlib.checkedBigNumberify('./index.rsh:112:38:application', stdlib.UInt_max, '0')];
        const v1315 = v1314[stdlib.checkedBigNumberify('./index.rsh:112:38:application', stdlib.UInt_max, '0')];
        const v1316 = stdlib.gt(v1315, stdlib.checkedBigNumberify('./index.rsh:112:53:decimal', stdlib.UInt_max, '0'));
        const v1317 = v1313 ? v1316 : false;
        const v1318 = stdlib.gt(v589, stdlib.checkedBigNumberify('./index.rsh:112:86:decimal', stdlib.UInt_max, '0'));
        const v1319 = v1317 ? v1318 : false;
        const v1321 = stdlib.gt(v1229, v596);
        const v1322 = v1319 ? v1321 : false;
        stdlib.assert(v1322, {
          at: './index.rsh:112:14:application',
          fs: ['at ./index.rsh:111:17:application call to [unknown function] (defined at: ./index.rsh:111:17:function exp)'],
          msg: null,
          who: 'Schmeckler'
          });
        const v1326 = stdlib.sub(v1229, v596);
        ;
        const v1327 = true;
        await txn3.getOutput('Schmuck_sell', 'v1327', ctc7, v1327);
        const v1334 = stdlib.sub(v589, stdlib.checkedBigNumberify('./index.rsh:117:73:decimal', stdlib.UInt_max, '1'));
        const v1335 = stdlib.eq(v1334, stdlib.checkedBigNumberify('./index.rsh:118:71:decimal', stdlib.UInt_max, '0'));
        const v1336 = v1335 ? stdlib.checkedBigNumberify('./index.rsh:118:75:decimal', stdlib.UInt_max, '0') : v593;
        const v1337 = stdlib.sub(v594, v596);
        const v1339 = v1335 ? v559 : v596;
        const v1340 = stdlib.add(v597, v558);
        const v1342 = stdlib.add(v601, v560);
        const v1343 = v592 ? v590 : v1342;
        const cv589 = v1334;
        const cv590 = v1343;
        const cv591 = true;
        const cv592 = true;
        const cv593 = v1336;
        const cv594 = v1337;
        const cv595 = v1339;
        const cv596 = v596;
        const cv597 = v1340;
        const cv598 = v715;
        const cv601 = v716;
        const cv604 = v1238;
        const cv605 = v1326;
        
        v589 = cv589;
        v590 = cv590;
        v591 = cv591;
        v592 = cv592;
        v593 = cv593;
        v594 = cv594;
        v595 = cv595;
        v596 = cv596;
        v597 = cv597;
        v598 = cv598;
        v601 = cv601;
        v604 = cv604;
        v605 = cv605;
        
        continue;
        break;
        }
      }
    
    }
  const v1347 = v604[stdlib.checkedBigNumberify('./index.rsh:179:32:application', stdlib.UInt_max, '0')];
  const v1348 = v1347[stdlib.checkedBigNumberify('./index.rsh:179:32:application', stdlib.UInt_max, '0')];
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
  
  
  const [v557, v558, v559, v560, v561, v589, v590, v591, v592, v593, v594, v595, v596, v597, v601, v604, v605] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc1, ctc1, ctc2, ctc1, ctc1, ctc3, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1]);
  const v666 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:164:7:application call to [unknown function] (defined at: ./index.rsh:164:7:function exp)', 'at ./index.rsh:74:17:application call to "runSchmecklerAPI_claimFees0_84" (defined at: ./index.rsh:164:7:function exp)', 'at ./index.rsh:74:17:application call to [unknown function] (defined at: ./index.rsh:74:17:function exp)'],
    msg: 'in',
    who: 'SchmecklerAPI_claimFees'
    });
  const v670 = ['SchmecklerAPI_claimFees0_84', v666];
  
  const txn1 = await (ctc.sendrecv({
    args: [v557, v558, v559, v560, v561, v589, v590, v591, v592, v593, v594, v595, v596, v597, v601, v604, v605, v670],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./index.rsh:164:7:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:81:12:decimal', stdlib.UInt_max, '0'), v561]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v714], secs: v716, time: v715, didSend: v313, from: v713 } = txn1;
      
      switch (v714[0]) {
        case 'SchmecklerAPI_claimFees0_84': {
          const v717 = v714[1];
          sim_r.txns.push({
            kind: 'api',
            who: "SchmecklerAPI_claimFees"
            });
          ;
          const v759 = v604[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '0')];
          const v760 = v759[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '0')];
          const v764 = v759[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '1')];
          const v765 = v759[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '2')];
          const v766 = [v760, v764, v765];
          const v767 = stdlib.Array_set(v604, stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '0'), v766);
          ;
          const v772 = stdlib.sub(v605, v597);
          sim_r.txns.push({
            amt: v597,
            kind: 'from',
            to: v557,
            tok: undefined /* Nothing */
            });
          const v773 = true;
          const v774 = await txn1.getOutput('SchmecklerAPI_claimFees', 'v773', ctc3, v773);
          
          const v2264 = v589;
          const v2265 = v590;
          const v2266 = true;
          const v2267 = v592;
          const v2268 = v593;
          const v2269 = v594;
          const v2270 = v595;
          const v2271 = v596;
          const v2272 = stdlib.checkedBigNumberify('./index.rsh:176:9:decimal', stdlib.UInt_max, '0');
          const v2274 = v716;
          const v2275 = v767;
          const v2276 = v772;
          const v2277 = v767[stdlib.checkedBigNumberify('./index.rsh:80:30:application', stdlib.UInt_max, '0')];
          const v2278 = v2277[stdlib.checkedBigNumberify('./index.rsh:80:30:application', stdlib.UInt_max, '0')];
          const v2279 = stdlib.gt(v2278, stdlib.checkedBigNumberify('./index.rsh:80:45:decimal', stdlib.UInt_max, '0'));
          if (v2279) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              amt: v772,
              kind: 'from',
              to: v557,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              amt: v2278,
              kind: 'from',
              to: v557,
              tok: v561
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v561
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
          const v874 = v714[1];
          
          break;
          }
        case 'Schmuck_rebase0_84': {
          const v1031 = v714[1];
          
          break;
          }
        case 'Schmuck_sell0_84': {
          const v1188 = v714[1];
          
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
  const {data: [v714], secs: v716, time: v715, didSend: v313, from: v713 } = txn1;
  switch (v714[0]) {
    case 'SchmecklerAPI_claimFees0_84': {
      const v717 = v714[1];
      undefined /* setApiDetails */;
      ;
      const v759 = v604[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '0')];
      const v760 = v759[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '0')];
      const v764 = v759[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '1')];
      const v765 = v759[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '2')];
      const v766 = [v760, v764, v765];
      const v767 = stdlib.Array_set(v604, stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '0'), v766);
      ;
      const v772 = stdlib.sub(v605, v597);
      ;
      const v773 = true;
      const v774 = await txn1.getOutput('SchmecklerAPI_claimFees', 'v773', ctc3, v773);
      if (v313) {
        stdlib.protect(ctc9, await interact.out(v717, v774), {
          at: './index.rsh:164:8:application',
          fs: ['at ./index.rsh:164:8:application call to [unknown function] (defined at: ./index.rsh:164:8:function exp)', 'at ./index.rsh:167:8:application call to "k" (defined at: ./index.rsh:165:9:function exp)', 'at ./index.rsh:165:9:application call to [unknown function] (defined at: ./index.rsh:165:9:function exp)'],
          msg: 'out',
          who: 'SchmecklerAPI_claimFees'
          });
        }
      else {
        }
      
      const v2264 = v589;
      const v2265 = v590;
      const v2266 = true;
      const v2267 = v592;
      const v2268 = v593;
      const v2269 = v594;
      const v2270 = v595;
      const v2271 = v596;
      const v2272 = stdlib.checkedBigNumberify('./index.rsh:176:9:decimal', stdlib.UInt_max, '0');
      const v2274 = v716;
      const v2275 = v767;
      const v2276 = v772;
      const v2277 = v767[stdlib.checkedBigNumberify('./index.rsh:80:30:application', stdlib.UInt_max, '0')];
      const v2278 = v2277[stdlib.checkedBigNumberify('./index.rsh:80:30:application', stdlib.UInt_max, '0')];
      const v2279 = stdlib.gt(v2278, stdlib.checkedBigNumberify('./index.rsh:80:45:decimal', stdlib.UInt_max, '0'));
      if (v2279) {
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
      const v874 = v714[1];
      return;
      break;
      }
    case 'Schmuck_rebase0_84': {
      const v1031 = v714[1];
      return;
      break;
      }
    case 'Schmuck_sell0_84': {
      const v1188 = v714[1];
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
  
  
  const [v557, v558, v559, v560, v561, v589, v590, v591, v592, v593, v594, v595, v596, v597, v601, v604, v605] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc1, ctc1, ctc2, ctc1, ctc1, ctc3, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1]);
  const v621 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:83:14:application call to [unknown function] (defined at: ./index.rsh:83:14:function exp)', 'at ./index.rsh:74:17:application call to "runSchmuck_buy0_84" (defined at: ./index.rsh:82:7:function exp)', 'at ./index.rsh:74:17:application call to [unknown function] (defined at: ./index.rsh:74:17:function exp)'],
    msg: 'in',
    who: 'Schmuck_buy'
    });
  const v622 = v621[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v625 = stdlib.eq(v622, stdlib.checkedBigNumberify('./index.rsh:83:35:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v625, {
    at: './index.rsh:83:24:application',
    fs: ['at ./index.rsh:83:14:application call to [unknown function] (defined at: ./index.rsh:83:14:function exp)', 'at ./index.rsh:83:14:application call to [unknown function] (defined at: ./index.rsh:83:14:function exp)', 'at ./index.rsh:74:17:application call to "runSchmuck_buy0_84" (defined at: ./index.rsh:82:7:function exp)', 'at ./index.rsh:74:17:application call to [unknown function] (defined at: ./index.rsh:74:17:function exp)'],
    msg: null,
    who: 'Schmuck_buy'
    });
  const v629 = ['Schmuck_buy0_84', v621];
  
  const v682 = stdlib.add(v558, v595);
  
  const txn1 = await (ctc.sendrecv({
    args: [v557, v558, v559, v560, v561, v589, v590, v591, v592, v593, v594, v595, v596, v597, v601, v604, v605, v629],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [v682, [[stdlib.checkedBigNumberify('./index.rsh:84:41:decimal', stdlib.UInt_max, '0'), v561]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v714], secs: v716, time: v715, didSend: v313, from: v713 } = txn1;
      
      switch (v714[0]) {
        case 'SchmecklerAPI_claimFees0_84': {
          const v717 = v714[1];
          
          break;
          }
        case 'Schmuck_buy0_84': {
          const v874 = v714[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Schmuck_buy"
            });
          const v885 = stdlib.add(v558, v595);
          const v915 = stdlib.add(v605, v885);
          sim_r.txns.push({
            amt: v885,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v916 = v604[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '0')];
          const v917 = v916[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '0')];
          const v921 = v916[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '1')];
          const v922 = v916[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '2')];
          const v923 = [v917, v921, v922];
          const v924 = stdlib.Array_set(v604, stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '0'), v923);
          ;
          const v938 = v874[stdlib.checkedBigNumberify('./index.rsh:82:7:spread', stdlib.UInt_max, '0')];
          const v939 = stdlib.eq(v938, stdlib.checkedBigNumberify('./index.rsh:86:26:decimal', stdlib.UInt_max, '1'));
          ;
          const v940 = v924[stdlib.checkedBigNumberify('./index.rsh:87:42:application', stdlib.UInt_max, '0')];
          const v941 = v940[stdlib.checkedBigNumberify('./index.rsh:87:42:application', stdlib.UInt_max, '0')];
          const v945 = stdlib.sub(v941, v938);
          const v948 = v940[stdlib.checkedBigNumberify('./index.rsh:87:42:application', stdlib.UInt_max, '1')];
          const v949 = v940[stdlib.checkedBigNumberify('./index.rsh:87:42:application', stdlib.UInt_max, '2')];
          const v950 = [v945, v948, v949];
          const v951 = stdlib.Array_set(v924, stdlib.checkedBigNumberify('./index.rsh:87:42:application', stdlib.UInt_max, '0'), v950);
          sim_r.txns.push({
            amt: v938,
            kind: 'from',
            to: v713,
            tok: v561
            });
          const v952 = true;
          const v953 = await txn1.getOutput('Schmuck_buy', 'v952', ctc3, v952);
          
          const v959 = stdlib.add(v589, stdlib.checkedBigNumberify('./index.rsh:90:73:decimal', stdlib.UInt_max, '1'));
          const v960 = stdlib.gt(v593, v959);
          const v961 = v960 ? v593 : v959;
          const v962 = stdlib.add(v594, v595);
          const v963 = stdlib.ge(v959, v593);
          const v964 = v963 ? false : true;
          const v965 = stdlib.add(v959, stdlib.checkedBigNumberify('./index.rsh:94:110:decimal', stdlib.UInt_max, '1'));
          const v966 = stdlib.mul(v965, v559);
          const v967 = v963 ? v966 : v596;
          const v968 = stdlib.div(v962, v959);
          const v969 = v963 ? v968 : v596;
          const v970 = stdlib.add(v597, v558);
          const v2359 = v959;
          const v2360 = v590;
          const v2361 = true;
          const v2362 = v964;
          const v2363 = v961;
          const v2364 = v962;
          const v2365 = v967;
          const v2366 = v969;
          const v2367 = v970;
          const v2369 = v716;
          const v2370 = v951;
          const v2371 = v915;
          const v2372 = v951[stdlib.checkedBigNumberify('./index.rsh:80:30:application', stdlib.UInt_max, '0')];
          const v2373 = v2372[stdlib.checkedBigNumberify('./index.rsh:80:30:application', stdlib.UInt_max, '0')];
          const v2374 = stdlib.gt(v2373, stdlib.checkedBigNumberify('./index.rsh:80:45:decimal', stdlib.UInt_max, '0'));
          if (v2374) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              amt: v915,
              kind: 'from',
              to: v557,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              amt: v2373,
              kind: 'from',
              to: v557,
              tok: v561
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v561
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
          const v1031 = v714[1];
          
          break;
          }
        case 'Schmuck_sell0_84': {
          const v1188 = v714[1];
          
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
  const {data: [v714], secs: v716, time: v715, didSend: v313, from: v713 } = txn1;
  switch (v714[0]) {
    case 'SchmecklerAPI_claimFees0_84': {
      const v717 = v714[1];
      return;
      break;
      }
    case 'Schmuck_buy0_84': {
      const v874 = v714[1];
      undefined /* setApiDetails */;
      const v885 = stdlib.add(v558, v595);
      const v915 = stdlib.add(v605, v885);
      ;
      const v916 = v604[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '0')];
      const v917 = v916[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '0')];
      const v921 = v916[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '1')];
      const v922 = v916[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '2')];
      const v923 = [v917, v921, v922];
      const v924 = stdlib.Array_set(v604, stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '0'), v923);
      ;
      const v938 = v874[stdlib.checkedBigNumberify('./index.rsh:82:7:spread', stdlib.UInt_max, '0')];
      const v939 = stdlib.eq(v938, stdlib.checkedBigNumberify('./index.rsh:86:26:decimal', stdlib.UInt_max, '1'));
      stdlib.assert(v939, {
        at: './index.rsh:86:15:application',
        fs: ['at ./index.rsh:85:17:application call to [unknown function] (defined at: ./index.rsh:85:17:function exp)'],
        msg: null,
        who: 'Schmuck_buy'
        });
      const v940 = v924[stdlib.checkedBigNumberify('./index.rsh:87:42:application', stdlib.UInt_max, '0')];
      const v941 = v940[stdlib.checkedBigNumberify('./index.rsh:87:42:application', stdlib.UInt_max, '0')];
      const v945 = stdlib.sub(v941, v938);
      const v948 = v940[stdlib.checkedBigNumberify('./index.rsh:87:42:application', stdlib.UInt_max, '1')];
      const v949 = v940[stdlib.checkedBigNumberify('./index.rsh:87:42:application', stdlib.UInt_max, '2')];
      const v950 = [v945, v948, v949];
      const v951 = stdlib.Array_set(v924, stdlib.checkedBigNumberify('./index.rsh:87:42:application', stdlib.UInt_max, '0'), v950);
      ;
      const v952 = true;
      const v953 = await txn1.getOutput('Schmuck_buy', 'v952', ctc3, v952);
      if (v313) {
        stdlib.protect(ctc9, await interact.out(v874, v953), {
          at: './index.rsh:82:8:application',
          fs: ['at ./index.rsh:82:8:application call to [unknown function] (defined at: ./index.rsh:82:8:function exp)', 'at ./index.rsh:88:8:application call to "k" (defined at: ./index.rsh:85:17:function exp)', 'at ./index.rsh:85:17:application call to [unknown function] (defined at: ./index.rsh:85:17:function exp)'],
          msg: 'out',
          who: 'Schmuck_buy'
          });
        }
      else {
        }
      
      const v959 = stdlib.add(v589, stdlib.checkedBigNumberify('./index.rsh:90:73:decimal', stdlib.UInt_max, '1'));
      const v960 = stdlib.gt(v593, v959);
      const v961 = v960 ? v593 : v959;
      const v962 = stdlib.add(v594, v595);
      const v963 = stdlib.ge(v959, v593);
      const v964 = v963 ? false : true;
      const v965 = stdlib.add(v959, stdlib.checkedBigNumberify('./index.rsh:94:110:decimal', stdlib.UInt_max, '1'));
      const v966 = stdlib.mul(v965, v559);
      const v967 = v963 ? v966 : v596;
      const v968 = stdlib.div(v962, v959);
      const v969 = v963 ? v968 : v596;
      const v970 = stdlib.add(v597, v558);
      const v2359 = v959;
      const v2360 = v590;
      const v2361 = true;
      const v2362 = v964;
      const v2363 = v961;
      const v2364 = v962;
      const v2365 = v967;
      const v2366 = v969;
      const v2367 = v970;
      const v2369 = v716;
      const v2370 = v951;
      const v2371 = v915;
      const v2372 = v951[stdlib.checkedBigNumberify('./index.rsh:80:30:application', stdlib.UInt_max, '0')];
      const v2373 = v2372[stdlib.checkedBigNumberify('./index.rsh:80:30:application', stdlib.UInt_max, '0')];
      const v2374 = stdlib.gt(v2373, stdlib.checkedBigNumberify('./index.rsh:80:45:decimal', stdlib.UInt_max, '0'));
      if (v2374) {
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
      const v1031 = v714[1];
      return;
      break;
      }
    case 'Schmuck_sell0_84': {
      const v1188 = v714[1];
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
  
  
  const [v557, v558, v559, v560, v561, v589, v590, v591, v592, v593, v594, v595, v596, v597, v601, v604, v605] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc1, ctc1, ctc2, ctc1, ctc1, ctc3, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1]);
  const v654 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:138:8:application call to [unknown function] (defined at: ./index.rsh:138:8:function exp)', 'at ./index.rsh:74:17:application call to "runSchmuck_rebase0_84" (defined at: ./index.rsh:137:7:function exp)', 'at ./index.rsh:74:17:application call to [unknown function] (defined at: ./index.rsh:74:17:function exp)'],
    msg: 'in',
    who: 'Schmuck_rebase'
    });
  const v657 = stdlib.gt(v601, v590);
  const v659 = v657 ? v592 : false;
  stdlib.assert(v659, {
    at: './index.rsh:138:19:application',
    fs: ['at ./index.rsh:138:8:application call to [unknown function] (defined at: ./index.rsh:138:8:function exp)', 'at ./index.rsh:138:8:application call to [unknown function] (defined at: ./index.rsh:138:8:function exp)', 'at ./index.rsh:74:17:application call to "runSchmuck_rebase0_84" (defined at: ./index.rsh:137:7:function exp)', 'at ./index.rsh:74:17:application call to [unknown function] (defined at: ./index.rsh:74:17:function exp)'],
    msg: null,
    who: 'Schmuck_rebase'
    });
  const v662 = ['Schmuck_rebase0_84', v654];
  
  const txn1 = await (ctc.sendrecv({
    args: [v557, v558, v559, v560, v561, v589, v590, v591, v592, v593, v594, v595, v596, v597, v601, v604, v605, v662],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [v558, [[stdlib.checkedBigNumberify('./index.rsh:139:18:decimal', stdlib.UInt_max, '1'), v561]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v714], secs: v716, time: v715, didSend: v313, from: v713 } = txn1;
      
      switch (v714[0]) {
        case 'SchmecklerAPI_claimFees0_84': {
          const v717 = v714[1];
          
          break;
          }
        case 'Schmuck_buy0_84': {
          const v874 = v714[1];
          
          break;
          }
        case 'Schmuck_rebase0_84': {
          const v1031 = v714[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Schmuck_rebase"
            });
          const v1072 = stdlib.add(v605, v558);
          sim_r.txns.push({
            amt: v558,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v1073 = v604[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '0')];
          const v1074 = v1073[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '0')];
          const v1075 = stdlib.add(v1074, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
          const v1078 = v1073[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '1')];
          const v1079 = v1073[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '2')];
          const v1080 = [v1075, v1078, v1079];
          const v1081 = stdlib.Array_set(v604, stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '0'), v1080);
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'),
            kind: 'to',
            tok: v561
            });
          const v1131 = stdlib.gt(v601, v590);
          const v1133 = v1131 ? v592 : false;
          ;
          const v1134 = stdlib.sub(v589, stdlib.checkedBigNumberify('./index.rsh:143:73:decimal', stdlib.UInt_max, '1'));
          const v1135 = stdlib.add(v1134, stdlib.checkedBigNumberify('./index.rsh:145:93:decimal', stdlib.UInt_max, '1'));
          const v1136 = stdlib.mul(v1134, v1135);
          const v1137 = stdlib.div(v1136, stdlib.checkedBigNumberify('./index.rsh:145:98:decimal', stdlib.UInt_max, '2'));
          const v1138 = stdlib.mul(v1137, v559);
          const v1139 = stdlib.add(v1134, v559);
          const v1140 = stdlib.div(v1138, v1134);
          const v1141 = stdlib.add(v597, v558);
          const v1142 = stdlib.sub(v594, v1138);
          const v1146 = stdlib.sub(v1072, v1142);
          sim_r.txns.push({
            amt: v1142,
            kind: 'from',
            to: v713,
            tok: undefined /* Nothing */
            });
          const v1147 = true;
          const v1148 = await txn1.getOutput('Schmuck_rebase', 'v1147', ctc3, v1147);
          
          const v2454 = v1134;
          const v2455 = v590;
          const v2456 = true;
          const v2457 = false;
          const v2458 = v1134;
          const v2459 = v1138;
          const v2460 = v1139;
          const v2461 = v1140;
          const v2462 = v1141;
          const v2464 = v716;
          const v2465 = v1081;
          const v2466 = v1146;
          const v2467 = v1081[stdlib.checkedBigNumberify('./index.rsh:80:30:application', stdlib.UInt_max, '0')];
          const v2468 = v2467[stdlib.checkedBigNumberify('./index.rsh:80:30:application', stdlib.UInt_max, '0')];
          const v2469 = stdlib.gt(v2468, stdlib.checkedBigNumberify('./index.rsh:80:45:decimal', stdlib.UInt_max, '0'));
          if (v2469) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              amt: v1146,
              kind: 'from',
              to: v557,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              amt: v2468,
              kind: 'from',
              to: v557,
              tok: v561
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v561
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
          const v1188 = v714[1];
          
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
  const {data: [v714], secs: v716, time: v715, didSend: v313, from: v713 } = txn1;
  switch (v714[0]) {
    case 'SchmecklerAPI_claimFees0_84': {
      const v717 = v714[1];
      return;
      break;
      }
    case 'Schmuck_buy0_84': {
      const v874 = v714[1];
      return;
      break;
      }
    case 'Schmuck_rebase0_84': {
      const v1031 = v714[1];
      undefined /* setApiDetails */;
      const v1072 = stdlib.add(v605, v558);
      ;
      const v1073 = v604[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '0')];
      const v1074 = v1073[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '0')];
      const v1075 = stdlib.add(v1074, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
      const v1078 = v1073[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '1')];
      const v1079 = v1073[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '2')];
      const v1080 = [v1075, v1078, v1079];
      const v1081 = stdlib.Array_set(v604, stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '0'), v1080);
      ;
      const v1131 = stdlib.gt(v601, v590);
      const v1133 = v1131 ? v592 : false;
      stdlib.assert(v1133, {
        at: './index.rsh:141:15:application',
        fs: ['at ./index.rsh:140:9:application call to [unknown function] (defined at: ./index.rsh:140:9:function exp)'],
        msg: null,
        who: 'Schmuck_rebase'
        });
      const v1134 = stdlib.sub(v589, stdlib.checkedBigNumberify('./index.rsh:143:73:decimal', stdlib.UInt_max, '1'));
      const v1135 = stdlib.add(v1134, stdlib.checkedBigNumberify('./index.rsh:145:93:decimal', stdlib.UInt_max, '1'));
      const v1136 = stdlib.mul(v1134, v1135);
      const v1137 = stdlib.div(v1136, stdlib.checkedBigNumberify('./index.rsh:145:98:decimal', stdlib.UInt_max, '2'));
      const v1138 = stdlib.mul(v1137, v559);
      const v1139 = stdlib.add(v1134, v559);
      const v1140 = stdlib.div(v1138, v1134);
      const v1141 = stdlib.add(v597, v558);
      const v1142 = stdlib.sub(v594, v1138);
      const v1146 = stdlib.sub(v1072, v1142);
      ;
      const v1147 = true;
      const v1148 = await txn1.getOutput('Schmuck_rebase', 'v1147', ctc3, v1147);
      if (v313) {
        stdlib.protect(ctc9, await interact.out(v1031, v1148), {
          at: './index.rsh:137:8:application',
          fs: ['at ./index.rsh:137:8:application call to [unknown function] (defined at: ./index.rsh:137:8:function exp)', 'at ./index.rsh:151:8:application call to "k" (defined at: ./index.rsh:140:9:function exp)', 'at ./index.rsh:140:9:application call to [unknown function] (defined at: ./index.rsh:140:9:function exp)'],
          msg: 'out',
          who: 'Schmuck_rebase'
          });
        }
      else {
        }
      
      const v2454 = v1134;
      const v2455 = v590;
      const v2456 = true;
      const v2457 = false;
      const v2458 = v1134;
      const v2459 = v1138;
      const v2460 = v1139;
      const v2461 = v1140;
      const v2462 = v1141;
      const v2464 = v716;
      const v2465 = v1081;
      const v2466 = v1146;
      const v2467 = v1081[stdlib.checkedBigNumberify('./index.rsh:80:30:application', stdlib.UInt_max, '0')];
      const v2468 = v2467[stdlib.checkedBigNumberify('./index.rsh:80:30:application', stdlib.UInt_max, '0')];
      const v2469 = stdlib.gt(v2468, stdlib.checkedBigNumberify('./index.rsh:80:45:decimal', stdlib.UInt_max, '0'));
      if (v2469) {
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
      const v1188 = v714[1];
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
  
  
  const [v557, v558, v559, v560, v561, v589, v590, v591, v592, v593, v594, v595, v596, v597, v601, v604, v605] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc1, ctc1, ctc2, ctc1, ctc1, ctc3, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1]);
  const v633 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:109:14:application call to [unknown function] (defined at: ./index.rsh:109:14:function exp)', 'at ./index.rsh:74:17:application call to "runSchmuck_sell0_84" (defined at: ./index.rsh:108:7:function exp)', 'at ./index.rsh:74:17:application call to [unknown function] (defined at: ./index.rsh:74:17:function exp)'],
    msg: 'in',
    who: 'Schmuck_sell'
    });
  const v634 = v633[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v637 = stdlib.eq(v634, stdlib.checkedBigNumberify('./index.rsh:109:36:decimal', stdlib.UInt_max, '1'));
  const v638 = v604[stdlib.checkedBigNumberify('./index.rsh:109:48:application', stdlib.UInt_max, '0')];
  const v639 = v638[stdlib.checkedBigNumberify('./index.rsh:109:48:application', stdlib.UInt_max, '0')];
  const v640 = stdlib.gt(v639, stdlib.checkedBigNumberify('./index.rsh:109:63:decimal', stdlib.UInt_max, '0'));
  const v641 = v637 ? v640 : false;
  const v642 = stdlib.gt(v589, stdlib.checkedBigNumberify('./index.rsh:109:96:decimal', stdlib.UInt_max, '0'));
  const v643 = v641 ? v642 : false;
  const v645 = stdlib.gt(v605, v596);
  const v646 = v643 ? v645 : false;
  stdlib.assert(v646, {
    at: './index.rsh:109:25:application',
    fs: ['at ./index.rsh:109:14:application call to [unknown function] (defined at: ./index.rsh:109:14:function exp)', 'at ./index.rsh:109:14:application call to [unknown function] (defined at: ./index.rsh:109:14:function exp)', 'at ./index.rsh:74:17:application call to "runSchmuck_sell0_84" (defined at: ./index.rsh:108:7:function exp)', 'at ./index.rsh:74:17:application call to [unknown function] (defined at: ./index.rsh:74:17:function exp)'],
    msg: null,
    who: 'Schmuck_sell'
    });
  const v650 = ['Schmuck_sell0_84', v633];
  
  const txn1 = await (ctc.sendrecv({
    args: [v557, v558, v559, v560, v561, v589, v590, v591, v592, v593, v594, v595, v596, v597, v601, v604, v605, v650],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [v558, [[v634, v561]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v714], secs: v716, time: v715, didSend: v313, from: v713 } = txn1;
      
      switch (v714[0]) {
        case 'SchmecklerAPI_claimFees0_84': {
          const v717 = v714[1];
          
          break;
          }
        case 'Schmuck_buy0_84': {
          const v874 = v714[1];
          
          break;
          }
        case 'Schmuck_rebase0_84': {
          const v1031 = v714[1];
          
          break;
          }
        case 'Schmuck_sell0_84': {
          const v1188 = v714[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Schmuck_sell"
            });
          const v1214 = v1188[stdlib.checkedBigNumberify('./index.rsh:108:7:spread', stdlib.UInt_max, '0')];
          const v1229 = stdlib.add(v605, v558);
          sim_r.txns.push({
            amt: v558,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v1230 = v604[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '0')];
          const v1231 = v1230[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '0')];
          const v1232 = stdlib.add(v1231, v1214);
          const v1235 = v1230[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '1')];
          const v1236 = v1230[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '2')];
          const v1237 = [v1232, v1235, v1236];
          const v1238 = stdlib.Array_set(v604, stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '0'), v1237);
          sim_r.txns.push({
            amt: v1214,
            kind: 'to',
            tok: v561
            });
          const v1313 = stdlib.eq(v1214, stdlib.checkedBigNumberify('./index.rsh:112:26:decimal', stdlib.UInt_max, '1'));
          const v1314 = v1238[stdlib.checkedBigNumberify('./index.rsh:112:38:application', stdlib.UInt_max, '0')];
          const v1315 = v1314[stdlib.checkedBigNumberify('./index.rsh:112:38:application', stdlib.UInt_max, '0')];
          const v1316 = stdlib.gt(v1315, stdlib.checkedBigNumberify('./index.rsh:112:53:decimal', stdlib.UInt_max, '0'));
          const v1317 = v1313 ? v1316 : false;
          const v1318 = stdlib.gt(v589, stdlib.checkedBigNumberify('./index.rsh:112:86:decimal', stdlib.UInt_max, '0'));
          const v1319 = v1317 ? v1318 : false;
          const v1321 = stdlib.gt(v1229, v596);
          const v1322 = v1319 ? v1321 : false;
          ;
          const v1326 = stdlib.sub(v1229, v596);
          sim_r.txns.push({
            amt: v596,
            kind: 'from',
            to: v713,
            tok: undefined /* Nothing */
            });
          const v1327 = true;
          const v1328 = await txn1.getOutput('Schmuck_sell', 'v1327', ctc3, v1327);
          
          const v1334 = stdlib.sub(v589, stdlib.checkedBigNumberify('./index.rsh:117:73:decimal', stdlib.UInt_max, '1'));
          const v1335 = stdlib.eq(v1334, stdlib.checkedBigNumberify('./index.rsh:118:71:decimal', stdlib.UInt_max, '0'));
          const v1336 = v1335 ? stdlib.checkedBigNumberify('./index.rsh:118:75:decimal', stdlib.UInt_max, '0') : v593;
          const v1337 = stdlib.sub(v594, v596);
          const v1339 = v1335 ? v559 : v596;
          const v1340 = stdlib.add(v597, v558);
          const v1342 = stdlib.add(v601, v560);
          const v1343 = v592 ? v590 : v1342;
          const v2549 = v1334;
          const v2550 = v1343;
          const v2551 = true;
          const v2552 = true;
          const v2553 = v1336;
          const v2554 = v1337;
          const v2555 = v1339;
          const v2556 = v596;
          const v2557 = v1340;
          const v2559 = v716;
          const v2560 = v1238;
          const v2561 = v1326;
          if (v1316) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              amt: v1326,
              kind: 'from',
              to: v557,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              amt: v1315,
              kind: 'from',
              to: v557,
              tok: v561
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v561
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
  const {data: [v714], secs: v716, time: v715, didSend: v313, from: v713 } = txn1;
  switch (v714[0]) {
    case 'SchmecklerAPI_claimFees0_84': {
      const v717 = v714[1];
      return;
      break;
      }
    case 'Schmuck_buy0_84': {
      const v874 = v714[1];
      return;
      break;
      }
    case 'Schmuck_rebase0_84': {
      const v1031 = v714[1];
      return;
      break;
      }
    case 'Schmuck_sell0_84': {
      const v1188 = v714[1];
      undefined /* setApiDetails */;
      const v1214 = v1188[stdlib.checkedBigNumberify('./index.rsh:108:7:spread', stdlib.UInt_max, '0')];
      const v1229 = stdlib.add(v605, v558);
      ;
      const v1230 = v604[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '0')];
      const v1231 = v1230[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '0')];
      const v1232 = stdlib.add(v1231, v1214);
      const v1235 = v1230[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '1')];
      const v1236 = v1230[stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '2')];
      const v1237 = [v1232, v1235, v1236];
      const v1238 = stdlib.Array_set(v604, stdlib.checkedBigNumberify('./index.rsh:74:17:dot', stdlib.UInt_max, '0'), v1237);
      ;
      const v1313 = stdlib.eq(v1214, stdlib.checkedBigNumberify('./index.rsh:112:26:decimal', stdlib.UInt_max, '1'));
      const v1314 = v1238[stdlib.checkedBigNumberify('./index.rsh:112:38:application', stdlib.UInt_max, '0')];
      const v1315 = v1314[stdlib.checkedBigNumberify('./index.rsh:112:38:application', stdlib.UInt_max, '0')];
      const v1316 = stdlib.gt(v1315, stdlib.checkedBigNumberify('./index.rsh:112:53:decimal', stdlib.UInt_max, '0'));
      const v1317 = v1313 ? v1316 : false;
      const v1318 = stdlib.gt(v589, stdlib.checkedBigNumberify('./index.rsh:112:86:decimal', stdlib.UInt_max, '0'));
      const v1319 = v1317 ? v1318 : false;
      const v1321 = stdlib.gt(v1229, v596);
      const v1322 = v1319 ? v1321 : false;
      stdlib.assert(v1322, {
        at: './index.rsh:112:14:application',
        fs: ['at ./index.rsh:111:17:application call to [unknown function] (defined at: ./index.rsh:111:17:function exp)'],
        msg: null,
        who: 'Schmuck_sell'
        });
      const v1326 = stdlib.sub(v1229, v596);
      ;
      const v1327 = true;
      const v1328 = await txn1.getOutput('Schmuck_sell', 'v1327', ctc3, v1327);
      if (v313) {
        stdlib.protect(ctc9, await interact.out(v1188, v1328), {
          at: './index.rsh:108:8:application',
          fs: ['at ./index.rsh:108:8:application call to [unknown function] (defined at: ./index.rsh:108:8:function exp)', 'at ./index.rsh:115:8:application call to "k" (defined at: ./index.rsh:111:17:function exp)', 'at ./index.rsh:111:17:application call to [unknown function] (defined at: ./index.rsh:111:17:function exp)'],
          msg: 'out',
          who: 'Schmuck_sell'
          });
        }
      else {
        }
      
      const v1334 = stdlib.sub(v589, stdlib.checkedBigNumberify('./index.rsh:117:73:decimal', stdlib.UInt_max, '1'));
      const v1335 = stdlib.eq(v1334, stdlib.checkedBigNumberify('./index.rsh:118:71:decimal', stdlib.UInt_max, '0'));
      const v1336 = v1335 ? stdlib.checkedBigNumberify('./index.rsh:118:75:decimal', stdlib.UInt_max, '0') : v593;
      const v1337 = stdlib.sub(v594, v596);
      const v1339 = v1335 ? v559 : v596;
      const v1340 = stdlib.add(v597, v558);
      const v1342 = stdlib.add(v601, v560);
      const v1343 = v592 ? v590 : v1342;
      const v2549 = v1334;
      const v2550 = v1343;
      const v2551 = true;
      const v2552 = true;
      const v2553 = v1336;
      const v2554 = v1337;
      const v2555 = v1339;
      const v2556 = v596;
      const v2557 = v1340;
      const v2559 = v716;
      const v2560 = v1238;
      const v2561 = v1326;
      if (v1316) {
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
  appApproval: `BiARAAEECAMg2KiU7w3W8J+8DpCF5b0Pjaf77QEoMDhASAKgjQYmAwEBAQAAIjUAMRhBBmIqZEkiWzUBJVs1AjYaABdJQQC0IjUEIzUGSSEGDEAAQ0khBwxAACpJIQgMQAATIQgSRCo1/4ABAjT/UCWvUEIApCEHEkQ2GgE1/yg0/1BCAJQhBhJENhoBNf+AAQM0/1BCAIJJIQkMQABJIQkSRDQBJBJEKWQoZFBJNQNXUAE0A1dRAVA0A1dSCFA0A1dACFA0A1daCFA0A1diCFA0A1dqCFA0A1dyCFA0A1dICFA1B0IFp4GqkZhkEkQqNf8pNP9QJa9QQgAeNhoCFzUENhoDNhoBF0kjDEADs0khBAxAAyMhBBJEJDQBEkQ0BEkiEkw0AhIRRClkKGRQSTUDSUpKSkpKSkpXACA1/yEFWzX+IQpbNf0hC1s1/CEMWzX7IQ1bNfohDls1+VdRARc1+IFSWzX3gVpbNfaBYls19YFqWzX0gXJbNfOBels18leCETXxgZMBWzXwSTUFNe+ABJHxp5o071CwNO8iVUkhDwxAAWNJIQQMQADCIQQSRDTvVwEINe407hc17TTwNP4INew0/ogE1zTxVwARSTXrIls07QgWNOtXCAhQNOtXEAFQNeo07TT7iATMNO0jEjTqVwARIlsiDRA0+iINEDTsNPQNEESxIrIBNPSyCCOyEDEAsgezgAkAAAAAAAAFLwGwKDUHNPojCUk16SISNeg0/zT+NP00/DT7NOk08jT8CDT5NPhNIyM09yI06E009jT0CTT0NP006E009DTzNP4IMgYyBzTqNOw09AlCAwNINP6IBCs08VcAETXuIzT7iAQ2NPI0+Q00+BBENPojCUk17UkjCAshDwo0/Qs17DT2NOwJNeuxIrIBNOuyCCOyEDEAsgezgAkAAAAAAAAEewGwKDUHNP80/jT9NPw0+zTtNPkjIjTtNOw07TT9CDTsNO0KNPM0/ggyBjIHNO4iWyMIFjTuVwgIUDTuVxABUDTwNP4INOsJQgJpSSMMQADMSDTvVwEINe40/jT1CDXtNO2IA3008VcAEUk17FcACDTsVwgIUDTsVxABUDXrNO4XSTXqIxJENOtXABE16bEisgE06rISJLIQMQCyFDT7shGzgAkAAAAAAAADuAGwKDUHNPojCDXoNPY09Qg15zToNPcPNeY0/zT+NP00/DT7NOg0+SM05hQ06DT3STToDU005zT0NOgjCDT9CzTmTTT0NOc06Ao05k008zT+CDIGMgc06SJbNOoJFjTpVwgIUDTpVxABUDTwNO0IQgGXSDTxVwARNe6xIrIBNPOyCCOyEDT/sgezgAkAAAAAAAADBQGwKDUHNP80/jT9NPw0+zT6NPkjNPg09zT2NPU09CIyBjIHNO5XAAg07lcICFA07lcQAVA08DTzCUIBOSMSRCM0ARJENARJIhJMNAISEUQpZEk1A0lKSVcAIDX/IQpbNf4hDFs1/SENWzX8V1ARNfuABJqLkXSwNPtXABE1+jT8NP2IAjY0/zEAEkQ0/zQDIQVbNP40AyELWzT9IjQDIQ5bIyIiIjT+IiIyBjIHNPoiWzT8CBY0+lcICFA0+lcQAVAiQgCwSCI0ARJENARJIhJMNAISEURJNQVJSkkiWzX/JVs1/oEQWzX9gRhbNfwhBVs1+4AETX4HJzT/FlA0/hZQNP0WUDT8FlA0+xZQsCEQiAGQgRGvSTX6VwARNfklrzT5VwgIUDT5VxABUDX4IRCIAXCxIrIBIrISJLIQMgqyFDT8shGzMQA0/xZQNP4WUDT9FlA0/BZQNPsWUDIHFlA0+FApSwFXAGFnSCM1ATIGNQJCAPE1/zX+Nf01/DX7Nfo1+TX4Nfc19jX1NfQ18zXyNfE18DXvNe40/lcAESJbNe009TTtIg0QQQBgNO407xZQNPAWUDTxFlA08hZQNPMWUDT0FlA09RZRBwhQNPYWUQcIUDT3FlA0+BZQNPkWUDT6FlA0+xZQNP0WUDT+UDT/FlApSwFXAH9nKEsBV38cZ0gkNQEyBjUCQgBasSKyATT/sggjshA07rIHs7EisgE07bISJLIQNO6yFDTyshGzsSKyASKyEiSyEDIJshUyCrIUNPKyEbNCAAAxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yI1ASI1AkL/wzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiTQASUpJIwg1ADgUMgoSRDgQJBJEOBFPAhJEOBISRIk=`,
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
