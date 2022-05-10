// Automatically generated with Reach 0.1.10 (84dc282c)
/* eslint-disable */
export const _version = '0.1.10';
export const _versionHash = '0.1.10 (84dc282c)';
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
              const [v565, v566, v567, v568, v569, v570, v578] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
              const [v565, v566, v567, v568, v569, v598, v599, v600, v601, v602, v603, v604, v605, v606, v610, v613, v614] = svs;
              return (await ((async () => {
                
                const v627 = [v600, v601, v602, v598, v603, v604, v605, v606, v599];
                
                return v627;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc6
          }
        }
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1, ctc2, ctc1, ctc5],
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
    SchmecklerAPI_claimFees0_88: ctc4,
    Schmuck_buy0_88: ctc5,
    Schmuck_rebase0_88: ctc4,
    Schmuck_sell0_88: ctc5
    });
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Address;
  const ctc9 = stdlib.T_Tuple([ctc0, ctc0, ctc7]);
  const ctc10 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  
  const v547 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v548 = [v547];
  const v554 = stdlib.protect(ctc2, await interact.setUpShop(), {
    at: './index.rsh:49:37:application',
    fs: ['at ./index.rsh:42:18:application call to [unknown function] (defined at: ./index.rsh:42:22:function exp)'],
    msg: 'setUpShop',
    who: 'Schmeckler'
    });
  const v555 = v554.fee;
  const v556 = v554.initialPrice;
  const v557 = v554.rebaseTime;
  const v558 = v554.schmeckleAmount;
  const v559 = v554.schmeckles;
  
  const txn1 = await (ctc.sendrecv({
    args: [v555, v556, v557, v559, v558],
    evt_cnt: 5,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:51:14:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0, ctc0, ctc1, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:51:14:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v566, v567, v568, v569, v570], secs: v572, time: v571, didSend: v41, from: v565 } = txn1;
      
      const v573 = v548[stdlib.checkedBigNumberify('./index.rsh:51:14:dot', stdlib.UInt_max, '0')];
      const v575 = v573[stdlib.checkedBigNumberify('./index.rsh:51:14:dot', stdlib.UInt_max, '1')];
      const v576 = v573[stdlib.checkedBigNumberify('./index.rsh:51:14:dot', stdlib.UInt_max, '2')];
      const v577 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v575, v576];
      const v578 = stdlib.Array_set(v548, stdlib.checkedBigNumberify('./index.rsh:51:14:dot', stdlib.UInt_max, '0'), v577);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v569
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
  const {data: [v566, v567, v568, v569, v570], secs: v572, time: v571, didSend: v41, from: v565 } = txn1;
  const v573 = v548[stdlib.checkedBigNumberify('./index.rsh:51:14:dot', stdlib.UInt_max, '0')];
  const v575 = v573[stdlib.checkedBigNumberify('./index.rsh:51:14:dot', stdlib.UInt_max, '1')];
  const v576 = v573[stdlib.checkedBigNumberify('./index.rsh:51:14:dot', stdlib.UInt_max, '2')];
  const v577 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v575, v576];
  const v578 = stdlib.Array_set(v548, stdlib.checkedBigNumberify('./index.rsh:51:14:dot', stdlib.UInt_max, '0'), v577);
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v565, v566, v567, v568, v569, v570, v578],
    evt_cnt: 0,
    funcNum: 1,
    lct: v571,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:60:14:dot', stdlib.UInt_max, '0'), [[v570, v569]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v582, time: v581, didSend: v48, from: v580 } = txn2;
      
      ;
      const v583 = v578[stdlib.checkedBigNumberify('./index.rsh:60:14:dot', stdlib.UInt_max, '0')];
      const v584 = v583[stdlib.checkedBigNumberify('./index.rsh:60:14:dot', stdlib.UInt_max, '0')];
      const v585 = stdlib.add(v584, v570);
      const v588 = v583[stdlib.checkedBigNumberify('./index.rsh:60:14:dot', stdlib.UInt_max, '1')];
      const v589 = v583[stdlib.checkedBigNumberify('./index.rsh:60:14:dot', stdlib.UInt_max, '2')];
      const v590 = [v585, v588, v589];
      const v591 = stdlib.Array_set(v578, stdlib.checkedBigNumberify('./index.rsh:60:14:dot', stdlib.UInt_max, '0'), v590);
      sim_r.txns.push({
        amt: v570,
        kind: 'to',
        tok: v569
        });
      
      
      const v598 = stdlib.checkedBigNumberify('./index.rsh:69:35:decimal', stdlib.UInt_max, '0');
      const v599 = v582;
      const v600 = true;
      const v601 = false;
      const v602 = stdlib.checkedBigNumberify('./index.rsh:69:32:decimal', stdlib.UInt_max, '0');
      const v603 = stdlib.checkedBigNumberify('./index.rsh:69:39:decimal', stdlib.UInt_max, '0');
      const v604 = v567;
      const v605 = stdlib.checkedBigNumberify('./index.rsh:69:57:decimal', stdlib.UInt_max, '0');
      const v606 = stdlib.checkedBigNumberify('./index.rsh:69:60:decimal', stdlib.UInt_max, '0');
      const v607 = v581;
      const v610 = v582;
      const v613 = v591;
      const v614 = stdlib.checkedBigNumberify('./index.rsh:40:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v623 = v613[stdlib.checkedBigNumberify('./index.rsh:75:30:application', stdlib.UInt_max, '0')];
        const v624 = v623[stdlib.checkedBigNumberify('./index.rsh:75:30:application', stdlib.UInt_max, '0')];
        const v625 = stdlib.gt(v624, stdlib.checkedBigNumberify('./index.rsh:75:45:decimal', stdlib.UInt_max, '0'));
        const v626 = v600 ? v625 : false;
        
        return v626;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v1372 = v613[stdlib.checkedBigNumberify('./index.rsh:169:32:application', stdlib.UInt_max, '0')];
        const v1373 = v1372[stdlib.checkedBigNumberify('./index.rsh:169:32:application', stdlib.UInt_max, '0')];
        sim_r.txns.push({
          amt: v614,
          kind: 'from',
          to: v565,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          amt: v1373,
          kind: 'from',
          to: v565,
          tok: v569
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v569
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
    tys: [ctc8, ctc0, ctc0, ctc0, ctc1, ctc0, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v582, time: v581, didSend: v48, from: v580 } = txn2;
  ;
  const v583 = v578[stdlib.checkedBigNumberify('./index.rsh:60:14:dot', stdlib.UInt_max, '0')];
  const v584 = v583[stdlib.checkedBigNumberify('./index.rsh:60:14:dot', stdlib.UInt_max, '0')];
  const v585 = stdlib.add(v584, v570);
  const v588 = v583[stdlib.checkedBigNumberify('./index.rsh:60:14:dot', stdlib.UInt_max, '1')];
  const v589 = v583[stdlib.checkedBigNumberify('./index.rsh:60:14:dot', stdlib.UInt_max, '2')];
  const v590 = [v585, v588, v589];
  const v591 = stdlib.Array_set(v578, stdlib.checkedBigNumberify('./index.rsh:60:14:dot', stdlib.UInt_max, '0'), v590);
  ;
  const v592 = stdlib.addressEq(v565, v580);
  stdlib.assert(v592, {
    at: './index.rsh:60:14:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Schmeckler'
    });
  stdlib.protect(ctc3, await interact.ready(), {
    at: './index.rsh:61:28:application',
    fs: ['at ./index.rsh:61:28:application call to [unknown function] (defined at: ./index.rsh:61:28:function exp)', 'at ./index.rsh:61:28:application call to "liftedInteract" (defined at: ./index.rsh:61:28:application)'],
    msg: 'ready',
    who: 'Schmeckler'
    });
  
  stdlib.protect(ctc3, await interact.log(v582), {
    at: './index.rsh:66:26:application',
    fs: ['at ./index.rsh:66:26:application call to [unknown function] (defined at: ./index.rsh:66:26:function exp)', 'at ./index.rsh:66:26:application call to "liftedInteract" (defined at: ./index.rsh:66:26:application)'],
    msg: 'log',
    who: 'Schmeckler'
    });
  
  let v598 = stdlib.checkedBigNumberify('./index.rsh:69:35:decimal', stdlib.UInt_max, '0');
  let v599 = v582;
  let v600 = true;
  let v601 = false;
  let v602 = stdlib.checkedBigNumberify('./index.rsh:69:32:decimal', stdlib.UInt_max, '0');
  let v603 = stdlib.checkedBigNumberify('./index.rsh:69:39:decimal', stdlib.UInt_max, '0');
  let v604 = v567;
  let v605 = stdlib.checkedBigNumberify('./index.rsh:69:57:decimal', stdlib.UInt_max, '0');
  let v606 = stdlib.checkedBigNumberify('./index.rsh:69:60:decimal', stdlib.UInt_max, '0');
  let v607 = v581;
  let v610 = v582;
  let v613 = v591;
  let v614 = stdlib.checkedBigNumberify('./index.rsh:40:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v623 = v613[stdlib.checkedBigNumberify('./index.rsh:75:30:application', stdlib.UInt_max, '0')];
    const v624 = v623[stdlib.checkedBigNumberify('./index.rsh:75:30:application', stdlib.UInt_max, '0')];
    const v625 = stdlib.gt(v624, stdlib.checkedBigNumberify('./index.rsh:75:45:decimal', stdlib.UInt_max, '0'));
    const v626 = v600 ? v625 : false;
    
    return v626;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc6],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v723], secs: v725, time: v724, didSend: v317, from: v722 } = txn3;
    switch (v723[0]) {
      case 'SchmecklerAPI_claimFees0_88': {
        const v726 = v723[1];
        undefined /* setApiDetails */;
        ;
        const v768 = v613[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '0')];
        const v769 = v768[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '0')];
        const v773 = v768[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '1')];
        const v774 = v768[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '2')];
        const v775 = [v769, v773, v774];
        const v776 = stdlib.Array_set(v613, stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '0'), v775);
        ;
        const v781 = stdlib.sub(v614, v606);
        ;
        const v782 = true;
        await txn3.getOutput('SchmecklerAPI_claimFees', 'v782', ctc7, v782);
        const cv598 = v598;
        const cv599 = v599;
        const cv600 = true;
        const cv601 = v601;
        const cv602 = v602;
        const cv603 = v603;
        const cv604 = v604;
        const cv605 = v605;
        const cv606 = stdlib.checkedBigNumberify('./index.rsh:166:9:decimal', stdlib.UInt_max, '0');
        const cv607 = v724;
        const cv610 = v725;
        const cv613 = v776;
        const cv614 = v781;
        
        v598 = cv598;
        v599 = cv599;
        v600 = cv600;
        v601 = cv601;
        v602 = cv602;
        v603 = cv603;
        v604 = cv604;
        v605 = cv605;
        v606 = cv606;
        v607 = cv607;
        v610 = cv610;
        v613 = cv613;
        v614 = cv614;
        
        continue;
        break;
        }
      case 'Schmuck_buy0_88': {
        const v887 = v723[1];
        undefined /* setApiDetails */;
        const v898 = stdlib.add(v566, v604);
        const v928 = stdlib.add(v614, v898);
        ;
        const v929 = v613[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '0')];
        const v930 = v929[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '0')];
        const v934 = v929[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '1')];
        const v935 = v929[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '2')];
        const v936 = [v930, v934, v935];
        const v937 = stdlib.Array_set(v613, stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '0'), v936);
        ;
        const v951 = v887[stdlib.checkedBigNumberify('./index.rsh:77:7:spread', stdlib.UInt_max, '0')];
        const v952 = stdlib.eq(v951, stdlib.checkedBigNumberify('./index.rsh:81:26:decimal', stdlib.UInt_max, '1'));
        stdlib.assert(v952, {
          at: './index.rsh:81:15:application',
          fs: ['at ./index.rsh:80:17:application call to [unknown function] (defined at: ./index.rsh:80:17:function exp)'],
          msg: null,
          who: 'Schmeckler'
          });
        const v953 = v937[stdlib.checkedBigNumberify('./index.rsh:82:42:application', stdlib.UInt_max, '0')];
        const v954 = v953[stdlib.checkedBigNumberify('./index.rsh:82:42:application', stdlib.UInt_max, '0')];
        const v958 = stdlib.sub(v954, v951);
        const v961 = v953[stdlib.checkedBigNumberify('./index.rsh:82:42:application', stdlib.UInt_max, '1')];
        const v962 = v953[stdlib.checkedBigNumberify('./index.rsh:82:42:application', stdlib.UInt_max, '2')];
        const v963 = [v958, v961, v962];
        const v964 = stdlib.Array_set(v937, stdlib.checkedBigNumberify('./index.rsh:82:42:application', stdlib.UInt_max, '0'), v963);
        ;
        const v965 = true;
        await txn3.getOutput('Schmuck_buy', 'v965', ctc7, v965);
        const v972 = stdlib.add(v598, stdlib.checkedBigNumberify('./index.rsh:84:73:decimal', stdlib.UInt_max, '1'));
        const v973 = stdlib.gt(v602, v972);
        const v974 = v973 ? v602 : v972;
        const v975 = stdlib.add(v603, v604);
        const v976 = stdlib.ge(v972, v602);
        const v977 = v976 ? false : true;
        const v978 = stdlib.add(v972, stdlib.checkedBigNumberify('./index.rsh:88:110:decimal', stdlib.UInt_max, '1'));
        const v979 = stdlib.mul(v978, v567);
        const v980 = v976 ? v979 : v605;
        const v981 = stdlib.div(v975, v972);
        const v982 = v976 ? v981 : v605;
        const v983 = stdlib.add(v606, v566);
        const v985 = stdlib.add(v725, v568);
        const v986 = v601 ? v985 : v599;
        const cv598 = v972;
        const cv599 = v986;
        const cv600 = true;
        const cv601 = v977;
        const cv602 = v974;
        const cv603 = v975;
        const cv604 = v980;
        const cv605 = v982;
        const cv606 = v983;
        const cv607 = v724;
        const cv610 = v725;
        const cv613 = v964;
        const cv614 = v928;
        
        v598 = cv598;
        v599 = cv599;
        v600 = cv600;
        v601 = cv601;
        v602 = cv602;
        v603 = cv603;
        v604 = cv604;
        v605 = cv605;
        v606 = cv606;
        v607 = cv607;
        v610 = cv610;
        v613 = cv613;
        v614 = cv614;
        
        continue;
        break;
        }
      case 'Schmuck_rebase0_88': {
        const v1048 = v723[1];
        undefined /* setApiDetails */;
        const v1089 = stdlib.add(v614, v566);
        ;
        const v1090 = v613[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '0')];
        const v1091 = v1090[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '0')];
        const v1092 = stdlib.add(v1091, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
        const v1095 = v1090[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '1')];
        const v1096 = v1090[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '2')];
        const v1097 = [v1092, v1095, v1096];
        const v1098 = stdlib.Array_set(v613, stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '0'), v1097);
        ;
        const v1151 = stdlib.gt(v610, v599);
        const v1153 = v1151 ? v601 : false;
        stdlib.assert(v1153, {
          at: './index.rsh:134:12:application',
          fs: ['at ./index.rsh:132:9:application call to [unknown function] (defined at: ./index.rsh:132:9:function exp)'],
          msg: null,
          who: 'Schmeckler'
          });
        const v1154 = stdlib.sub(v598, stdlib.checkedBigNumberify('./index.rsh:135:73:decimal', stdlib.UInt_max, '1'));
        const v1155 = stdlib.add(v1154, stdlib.checkedBigNumberify('./index.rsh:137:93:decimal', stdlib.UInt_max, '1'));
        const v1156 = stdlib.mul(v1154, v1155);
        const v1157 = stdlib.div(v1156, stdlib.checkedBigNumberify('./index.rsh:137:98:decimal', stdlib.UInt_max, '2'));
        const v1158 = stdlib.mul(v1157, v567);
        const v1160 = stdlib.mul(v1155, v567);
        const v1161 = stdlib.div(v1158, v1154);
        const v1162 = stdlib.add(v606, v566);
        const v1163 = stdlib.sub(v603, v1158);
        const v1167 = stdlib.sub(v1089, v1163);
        ;
        const v1168 = true;
        await txn3.getOutput('Schmuck_rebase', 'v1168', ctc7, v1168);
        const cv598 = v1154;
        const cv599 = v599;
        const cv600 = true;
        const cv601 = false;
        const cv602 = v1154;
        const cv603 = v1158;
        const cv604 = v1160;
        const cv605 = v1161;
        const cv606 = v1162;
        const cv607 = v724;
        const cv610 = v725;
        const cv613 = v1098;
        const cv614 = v1167;
        
        v598 = cv598;
        v599 = cv599;
        v600 = cv600;
        v601 = cv601;
        v602 = cv602;
        v603 = cv603;
        v604 = cv604;
        v605 = cv605;
        v606 = cv606;
        v607 = cv607;
        v610 = cv610;
        v613 = cv613;
        v614 = cv614;
        
        continue;
        break;
        }
      case 'Schmuck_sell0_88': {
        const v1209 = v723[1];
        undefined /* setApiDetails */;
        const v1235 = v1209[stdlib.checkedBigNumberify('./index.rsh:103:7:spread', stdlib.UInt_max, '0')];
        const v1250 = stdlib.add(v614, v566);
        ;
        const v1251 = v613[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '0')];
        const v1252 = v1251[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '0')];
        const v1253 = stdlib.add(v1252, v1235);
        const v1256 = v1251[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '1')];
        const v1257 = v1251[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '2')];
        const v1258 = [v1253, v1256, v1257];
        const v1259 = stdlib.Array_set(v613, stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '0'), v1258);
        ;
        const v1338 = stdlib.eq(v1235, stdlib.checkedBigNumberify('./index.rsh:107:26:decimal', stdlib.UInt_max, '1'));
        const v1339 = v1259[stdlib.checkedBigNumberify('./index.rsh:107:38:application', stdlib.UInt_max, '0')];
        const v1340 = v1339[stdlib.checkedBigNumberify('./index.rsh:107:38:application', stdlib.UInt_max, '0')];
        const v1341 = stdlib.gt(v1340, stdlib.checkedBigNumberify('./index.rsh:107:53:decimal', stdlib.UInt_max, '0'));
        const v1342 = v1338 ? v1341 : false;
        const v1343 = stdlib.gt(v598, stdlib.checkedBigNumberify('./index.rsh:107:86:decimal', stdlib.UInt_max, '0'));
        const v1344 = v1342 ? v1343 : false;
        const v1346 = stdlib.gt(v1250, v605);
        const v1347 = v1344 ? v1346 : false;
        stdlib.assert(v1347, {
          at: './index.rsh:107:14:application',
          fs: ['at ./index.rsh:106:17:application call to [unknown function] (defined at: ./index.rsh:106:17:function exp)'],
          msg: null,
          who: 'Schmeckler'
          });
        const v1351 = stdlib.sub(v1250, v605);
        ;
        const v1352 = true;
        await txn3.getOutput('Schmuck_sell', 'v1352', ctc7, v1352);
        const v1359 = stdlib.sub(v598, stdlib.checkedBigNumberify('./index.rsh:111:73:decimal', stdlib.UInt_max, '1'));
        const v1360 = stdlib.eq(v1359, stdlib.checkedBigNumberify('./index.rsh:112:71:decimal', stdlib.UInt_max, '0'));
        const v1361 = v1360 ? stdlib.checkedBigNumberify('./index.rsh:112:75:decimal', stdlib.UInt_max, '0') : v602;
        const v1362 = stdlib.sub(v603, v605);
        const v1364 = v1360 ? v567 : v605;
        const v1365 = stdlib.add(v606, v566);
        const v1367 = stdlib.add(v725, v568);
        const v1368 = v601 ? v599 : v1367;
        const cv598 = v1359;
        const cv599 = v1368;
        const cv600 = true;
        const cv601 = true;
        const cv602 = v1361;
        const cv603 = v1362;
        const cv604 = v1364;
        const cv605 = v605;
        const cv606 = v1365;
        const cv607 = v724;
        const cv610 = v725;
        const cv613 = v1259;
        const cv614 = v1351;
        
        v598 = cv598;
        v599 = cv599;
        v600 = cv600;
        v601 = cv601;
        v602 = cv602;
        v603 = cv603;
        v604 = cv604;
        v605 = cv605;
        v606 = cv606;
        v607 = cv607;
        v610 = cv610;
        v613 = cv613;
        v614 = cv614;
        
        continue;
        break;
        }
      }
    
    }
  const v1372 = v613[stdlib.checkedBigNumberify('./index.rsh:169:32:application', stdlib.UInt_max, '0')];
  const v1373 = v1372[stdlib.checkedBigNumberify('./index.rsh:169:32:application', stdlib.UInt_max, '0')];
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
    SchmecklerAPI_claimFees0_88: ctc6,
    Schmuck_buy0_88: ctc7,
    Schmuck_rebase0_88: ctc6,
    Schmuck_sell0_88: ctc7
    });
  const ctc9 = stdlib.T_Null;
  
  
  const [v565, v566, v567, v568, v569, v598, v599, v600, v601, v602, v603, v604, v605, v606, v610, v613, v614] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc1, ctc1, ctc2, ctc1, ctc1, ctc3, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1]);
  const v675 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:154:7:application call to [unknown function] (defined at: ./index.rsh:154:7:function exp)', 'at ./index.rsh:69:17:application call to "runSchmecklerAPI_claimFees0_88" (defined at: ./index.rsh:154:7:function exp)', 'at ./index.rsh:69:17:application call to [unknown function] (defined at: ./index.rsh:69:17:function exp)'],
    msg: 'in',
    who: 'SchmecklerAPI_claimFees'
    });
  const v679 = ['SchmecklerAPI_claimFees0_88', v675];
  
  const txn1 = await (ctc.sendrecv({
    args: [v565, v566, v567, v568, v569, v598, v599, v600, v601, v602, v603, v604, v605, v606, v610, v613, v614, v679],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./index.rsh:154:7:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:76:12:decimal', stdlib.UInt_max, '0'), v569]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v723], secs: v725, time: v724, didSend: v317, from: v722 } = txn1;
      
      switch (v723[0]) {
        case 'SchmecklerAPI_claimFees0_88': {
          const v726 = v723[1];
          sim_r.txns.push({
            kind: 'api',
            who: "SchmecklerAPI_claimFees"
            });
          ;
          const v768 = v613[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '0')];
          const v769 = v768[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '0')];
          const v773 = v768[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '1')];
          const v774 = v768[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '2')];
          const v775 = [v769, v773, v774];
          const v776 = stdlib.Array_set(v613, stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '0'), v775);
          ;
          const v781 = stdlib.sub(v614, v606);
          sim_r.txns.push({
            amt: v606,
            kind: 'from',
            to: v565,
            tok: undefined /* Nothing */
            });
          const v782 = true;
          const v783 = await txn1.getOutput('SchmecklerAPI_claimFees', 'v782', ctc3, v782);
          
          const v2289 = v598;
          const v2290 = v599;
          const v2291 = true;
          const v2292 = v601;
          const v2293 = v602;
          const v2294 = v603;
          const v2295 = v604;
          const v2296 = v605;
          const v2297 = stdlib.checkedBigNumberify('./index.rsh:166:9:decimal', stdlib.UInt_max, '0');
          const v2299 = v725;
          const v2300 = v776;
          const v2301 = v781;
          const v2302 = v776[stdlib.checkedBigNumberify('./index.rsh:75:30:application', stdlib.UInt_max, '0')];
          const v2303 = v2302[stdlib.checkedBigNumberify('./index.rsh:75:30:application', stdlib.UInt_max, '0')];
          const v2304 = stdlib.gt(v2303, stdlib.checkedBigNumberify('./index.rsh:75:45:decimal', stdlib.UInt_max, '0'));
          if (v2304) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              amt: v781,
              kind: 'from',
              to: v565,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              amt: v2303,
              kind: 'from',
              to: v565,
              tok: v569
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v569
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'Schmuck_buy0_88': {
          const v887 = v723[1];
          
          break;
          }
        case 'Schmuck_rebase0_88': {
          const v1048 = v723[1];
          
          break;
          }
        case 'Schmuck_sell0_88': {
          const v1209 = v723[1];
          
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
  const {data: [v723], secs: v725, time: v724, didSend: v317, from: v722 } = txn1;
  switch (v723[0]) {
    case 'SchmecklerAPI_claimFees0_88': {
      const v726 = v723[1];
      undefined /* setApiDetails */;
      ;
      const v768 = v613[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '0')];
      const v769 = v768[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '0')];
      const v773 = v768[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '1')];
      const v774 = v768[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '2')];
      const v775 = [v769, v773, v774];
      const v776 = stdlib.Array_set(v613, stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '0'), v775);
      ;
      const v781 = stdlib.sub(v614, v606);
      ;
      const v782 = true;
      const v783 = await txn1.getOutput('SchmecklerAPI_claimFees', 'v782', ctc3, v782);
      if (v317) {
        stdlib.protect(ctc9, await interact.out(v726, v783), {
          at: './index.rsh:154:8:application',
          fs: ['at ./index.rsh:154:8:application call to [unknown function] (defined at: ./index.rsh:154:8:function exp)', 'at ./index.rsh:157:8:application call to "k" (defined at: ./index.rsh:155:9:function exp)', 'at ./index.rsh:155:9:application call to [unknown function] (defined at: ./index.rsh:155:9:function exp)'],
          msg: 'out',
          who: 'SchmecklerAPI_claimFees'
          });
        }
      else {
        }
      
      const v2289 = v598;
      const v2290 = v599;
      const v2291 = true;
      const v2292 = v601;
      const v2293 = v602;
      const v2294 = v603;
      const v2295 = v604;
      const v2296 = v605;
      const v2297 = stdlib.checkedBigNumberify('./index.rsh:166:9:decimal', stdlib.UInt_max, '0');
      const v2299 = v725;
      const v2300 = v776;
      const v2301 = v781;
      const v2302 = v776[stdlib.checkedBigNumberify('./index.rsh:75:30:application', stdlib.UInt_max, '0')];
      const v2303 = v2302[stdlib.checkedBigNumberify('./index.rsh:75:30:application', stdlib.UInt_max, '0')];
      const v2304 = stdlib.gt(v2303, stdlib.checkedBigNumberify('./index.rsh:75:45:decimal', stdlib.UInt_max, '0'));
      if (v2304) {
        return;
        }
      else {
        ;
        ;
        return;
        }
      break;
      }
    case 'Schmuck_buy0_88': {
      const v887 = v723[1];
      return;
      break;
      }
    case 'Schmuck_rebase0_88': {
      const v1048 = v723[1];
      return;
      break;
      }
    case 'Schmuck_sell0_88': {
      const v1209 = v723[1];
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
    SchmecklerAPI_claimFees0_88: ctc7,
    Schmuck_buy0_88: ctc6,
    Schmuck_rebase0_88: ctc7,
    Schmuck_sell0_88: ctc6
    });
  const ctc9 = stdlib.T_Null;
  
  
  const [v565, v566, v567, v568, v569, v598, v599, v600, v601, v602, v603, v604, v605, v606, v610, v613, v614] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc1, ctc1, ctc2, ctc1, ctc1, ctc3, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1]);
  const v630 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:78:14:application call to [unknown function] (defined at: ./index.rsh:78:14:function exp)', 'at ./index.rsh:69:17:application call to "runSchmuck_buy0_88" (defined at: ./index.rsh:77:7:function exp)', 'at ./index.rsh:69:17:application call to [unknown function] (defined at: ./index.rsh:69:17:function exp)'],
    msg: 'in',
    who: 'Schmuck_buy'
    });
  const v631 = v630[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v634 = stdlib.eq(v631, stdlib.checkedBigNumberify('./index.rsh:78:35:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v634, {
    at: './index.rsh:78:24:application',
    fs: ['at ./index.rsh:78:14:application call to [unknown function] (defined at: ./index.rsh:78:14:function exp)', 'at ./index.rsh:78:14:application call to [unknown function] (defined at: ./index.rsh:78:14:function exp)', 'at ./index.rsh:69:17:application call to "runSchmuck_buy0_88" (defined at: ./index.rsh:77:7:function exp)', 'at ./index.rsh:69:17:application call to [unknown function] (defined at: ./index.rsh:69:17:function exp)'],
    msg: null,
    who: 'Schmuck_buy'
    });
  const v638 = ['Schmuck_buy0_88', v630];
  
  const v691 = stdlib.add(v566, v604);
  
  const txn1 = await (ctc.sendrecv({
    args: [v565, v566, v567, v568, v569, v598, v599, v600, v601, v602, v603, v604, v605, v606, v610, v613, v614, v638],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [v691, [[stdlib.checkedBigNumberify('./index.rsh:79:41:decimal', stdlib.UInt_max, '0'), v569]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v723], secs: v725, time: v724, didSend: v317, from: v722 } = txn1;
      
      switch (v723[0]) {
        case 'SchmecklerAPI_claimFees0_88': {
          const v726 = v723[1];
          
          break;
          }
        case 'Schmuck_buy0_88': {
          const v887 = v723[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Schmuck_buy"
            });
          const v898 = stdlib.add(v566, v604);
          const v928 = stdlib.add(v614, v898);
          sim_r.txns.push({
            amt: v898,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v929 = v613[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '0')];
          const v930 = v929[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '0')];
          const v934 = v929[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '1')];
          const v935 = v929[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '2')];
          const v936 = [v930, v934, v935];
          const v937 = stdlib.Array_set(v613, stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '0'), v936);
          ;
          const v951 = v887[stdlib.checkedBigNumberify('./index.rsh:77:7:spread', stdlib.UInt_max, '0')];
          const v953 = v937[stdlib.checkedBigNumberify('./index.rsh:82:42:application', stdlib.UInt_max, '0')];
          const v954 = v953[stdlib.checkedBigNumberify('./index.rsh:82:42:application', stdlib.UInt_max, '0')];
          const v958 = stdlib.sub(v954, v951);
          const v961 = v953[stdlib.checkedBigNumberify('./index.rsh:82:42:application', stdlib.UInt_max, '1')];
          const v962 = v953[stdlib.checkedBigNumberify('./index.rsh:82:42:application', stdlib.UInt_max, '2')];
          const v963 = [v958, v961, v962];
          const v964 = stdlib.Array_set(v937, stdlib.checkedBigNumberify('./index.rsh:82:42:application', stdlib.UInt_max, '0'), v963);
          sim_r.txns.push({
            amt: v951,
            kind: 'from',
            to: v722,
            tok: v569
            });
          const v965 = true;
          const v966 = await txn1.getOutput('Schmuck_buy', 'v965', ctc3, v965);
          
          const v972 = stdlib.add(v598, stdlib.checkedBigNumberify('./index.rsh:84:73:decimal', stdlib.UInt_max, '1'));
          const v973 = stdlib.gt(v602, v972);
          const v974 = v973 ? v602 : v972;
          const v975 = stdlib.add(v603, v604);
          const v976 = stdlib.ge(v972, v602);
          const v977 = v976 ? false : true;
          const v978 = stdlib.add(v972, stdlib.checkedBigNumberify('./index.rsh:88:110:decimal', stdlib.UInt_max, '1'));
          const v979 = stdlib.mul(v978, v567);
          const v980 = v976 ? v979 : v605;
          const v981 = stdlib.div(v975, v972);
          const v982 = v976 ? v981 : v605;
          const v983 = stdlib.add(v606, v566);
          const v985 = stdlib.add(v725, v568);
          const v986 = v601 ? v985 : v599;
          const v2384 = v972;
          const v2385 = v986;
          const v2386 = true;
          const v2387 = v977;
          const v2388 = v974;
          const v2389 = v975;
          const v2390 = v980;
          const v2391 = v982;
          const v2392 = v983;
          const v2394 = v725;
          const v2395 = v964;
          const v2396 = v928;
          const v2397 = v964[stdlib.checkedBigNumberify('./index.rsh:75:30:application', stdlib.UInt_max, '0')];
          const v2398 = v2397[stdlib.checkedBigNumberify('./index.rsh:75:30:application', stdlib.UInt_max, '0')];
          const v2399 = stdlib.gt(v2398, stdlib.checkedBigNumberify('./index.rsh:75:45:decimal', stdlib.UInt_max, '0'));
          if (v2399) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              amt: v928,
              kind: 'from',
              to: v565,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              amt: v2398,
              kind: 'from',
              to: v565,
              tok: v569
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v569
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'Schmuck_rebase0_88': {
          const v1048 = v723[1];
          
          break;
          }
        case 'Schmuck_sell0_88': {
          const v1209 = v723[1];
          
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
  const {data: [v723], secs: v725, time: v724, didSend: v317, from: v722 } = txn1;
  switch (v723[0]) {
    case 'SchmecklerAPI_claimFees0_88': {
      const v726 = v723[1];
      return;
      break;
      }
    case 'Schmuck_buy0_88': {
      const v887 = v723[1];
      undefined /* setApiDetails */;
      const v898 = stdlib.add(v566, v604);
      const v928 = stdlib.add(v614, v898);
      ;
      const v929 = v613[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '0')];
      const v930 = v929[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '0')];
      const v934 = v929[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '1')];
      const v935 = v929[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '2')];
      const v936 = [v930, v934, v935];
      const v937 = stdlib.Array_set(v613, stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '0'), v936);
      ;
      const v951 = v887[stdlib.checkedBigNumberify('./index.rsh:77:7:spread', stdlib.UInt_max, '0')];
      const v952 = stdlib.eq(v951, stdlib.checkedBigNumberify('./index.rsh:81:26:decimal', stdlib.UInt_max, '1'));
      stdlib.assert(v952, {
        at: './index.rsh:81:15:application',
        fs: ['at ./index.rsh:80:17:application call to [unknown function] (defined at: ./index.rsh:80:17:function exp)'],
        msg: null,
        who: 'Schmuck_buy'
        });
      const v953 = v937[stdlib.checkedBigNumberify('./index.rsh:82:42:application', stdlib.UInt_max, '0')];
      const v954 = v953[stdlib.checkedBigNumberify('./index.rsh:82:42:application', stdlib.UInt_max, '0')];
      const v958 = stdlib.sub(v954, v951);
      const v961 = v953[stdlib.checkedBigNumberify('./index.rsh:82:42:application', stdlib.UInt_max, '1')];
      const v962 = v953[stdlib.checkedBigNumberify('./index.rsh:82:42:application', stdlib.UInt_max, '2')];
      const v963 = [v958, v961, v962];
      const v964 = stdlib.Array_set(v937, stdlib.checkedBigNumberify('./index.rsh:82:42:application', stdlib.UInt_max, '0'), v963);
      ;
      const v965 = true;
      const v966 = await txn1.getOutput('Schmuck_buy', 'v965', ctc3, v965);
      if (v317) {
        stdlib.protect(ctc9, await interact.out(v887, v966), {
          at: './index.rsh:77:8:application',
          fs: ['at ./index.rsh:77:8:application call to [unknown function] (defined at: ./index.rsh:77:8:function exp)', 'at ./index.rsh:83:8:application call to "k" (defined at: ./index.rsh:80:17:function exp)', 'at ./index.rsh:80:17:application call to [unknown function] (defined at: ./index.rsh:80:17:function exp)'],
          msg: 'out',
          who: 'Schmuck_buy'
          });
        }
      else {
        }
      
      const v972 = stdlib.add(v598, stdlib.checkedBigNumberify('./index.rsh:84:73:decimal', stdlib.UInt_max, '1'));
      const v973 = stdlib.gt(v602, v972);
      const v974 = v973 ? v602 : v972;
      const v975 = stdlib.add(v603, v604);
      const v976 = stdlib.ge(v972, v602);
      const v977 = v976 ? false : true;
      const v978 = stdlib.add(v972, stdlib.checkedBigNumberify('./index.rsh:88:110:decimal', stdlib.UInt_max, '1'));
      const v979 = stdlib.mul(v978, v567);
      const v980 = v976 ? v979 : v605;
      const v981 = stdlib.div(v975, v972);
      const v982 = v976 ? v981 : v605;
      const v983 = stdlib.add(v606, v566);
      const v985 = stdlib.add(v725, v568);
      const v986 = v601 ? v985 : v599;
      const v2384 = v972;
      const v2385 = v986;
      const v2386 = true;
      const v2387 = v977;
      const v2388 = v974;
      const v2389 = v975;
      const v2390 = v980;
      const v2391 = v982;
      const v2392 = v983;
      const v2394 = v725;
      const v2395 = v964;
      const v2396 = v928;
      const v2397 = v964[stdlib.checkedBigNumberify('./index.rsh:75:30:application', stdlib.UInt_max, '0')];
      const v2398 = v2397[stdlib.checkedBigNumberify('./index.rsh:75:30:application', stdlib.UInt_max, '0')];
      const v2399 = stdlib.gt(v2398, stdlib.checkedBigNumberify('./index.rsh:75:45:decimal', stdlib.UInt_max, '0'));
      if (v2399) {
        return;
        }
      else {
        ;
        ;
        return;
        }
      break;
      }
    case 'Schmuck_rebase0_88': {
      const v1048 = v723[1];
      return;
      break;
      }
    case 'Schmuck_sell0_88': {
      const v1209 = v723[1];
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
    SchmecklerAPI_claimFees0_88: ctc6,
    Schmuck_buy0_88: ctc7,
    Schmuck_rebase0_88: ctc6,
    Schmuck_sell0_88: ctc7
    });
  const ctc9 = stdlib.T_Null;
  
  
  const [v565, v566, v567, v568, v569, v598, v599, v600, v601, v602, v603, v604, v605, v606, v610, v613, v614] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc1, ctc1, ctc2, ctc1, ctc1, ctc3, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1]);
  const v663 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:130:8:application call to [unknown function] (defined at: ./index.rsh:130:8:function exp)', 'at ./index.rsh:69:17:application call to "runSchmuck_rebase0_88" (defined at: ./index.rsh:129:7:function exp)', 'at ./index.rsh:69:17:application call to [unknown function] (defined at: ./index.rsh:69:17:function exp)'],
    msg: 'in',
    who: 'Schmuck_rebase'
    });
  const v666 = stdlib.gt(v610, v599);
  const v668 = v666 ? v601 : false;
  stdlib.assert(v668, {
    at: './index.rsh:130:17:application',
    fs: ['at ./index.rsh:130:8:application call to [unknown function] (defined at: ./index.rsh:130:8:function exp)', 'at ./index.rsh:130:8:application call to [unknown function] (defined at: ./index.rsh:130:8:function exp)', 'at ./index.rsh:69:17:application call to "runSchmuck_rebase0_88" (defined at: ./index.rsh:129:7:function exp)', 'at ./index.rsh:69:17:application call to [unknown function] (defined at: ./index.rsh:69:17:function exp)'],
    msg: 'does this work?',
    who: 'Schmuck_rebase'
    });
  const v671 = ['Schmuck_rebase0_88', v663];
  
  const txn1 = await (ctc.sendrecv({
    args: [v565, v566, v567, v568, v569, v598, v599, v600, v601, v602, v603, v604, v605, v606, v610, v613, v614, v671],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [v566, [[stdlib.checkedBigNumberify('./index.rsh:131:18:decimal', stdlib.UInt_max, '1'), v569]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v723], secs: v725, time: v724, didSend: v317, from: v722 } = txn1;
      
      switch (v723[0]) {
        case 'SchmecklerAPI_claimFees0_88': {
          const v726 = v723[1];
          
          break;
          }
        case 'Schmuck_buy0_88': {
          const v887 = v723[1];
          
          break;
          }
        case 'Schmuck_rebase0_88': {
          const v1048 = v723[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Schmuck_rebase"
            });
          const v1089 = stdlib.add(v614, v566);
          sim_r.txns.push({
            amt: v566,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v1090 = v613[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '0')];
          const v1091 = v1090[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '0')];
          const v1092 = stdlib.add(v1091, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
          const v1095 = v1090[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '1')];
          const v1096 = v1090[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '2')];
          const v1097 = [v1092, v1095, v1096];
          const v1098 = stdlib.Array_set(v613, stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '0'), v1097);
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'),
            kind: 'to',
            tok: v569
            });
          const v1154 = stdlib.sub(v598, stdlib.checkedBigNumberify('./index.rsh:135:73:decimal', stdlib.UInt_max, '1'));
          const v1155 = stdlib.add(v1154, stdlib.checkedBigNumberify('./index.rsh:137:93:decimal', stdlib.UInt_max, '1'));
          const v1156 = stdlib.mul(v1154, v1155);
          const v1157 = stdlib.div(v1156, stdlib.checkedBigNumberify('./index.rsh:137:98:decimal', stdlib.UInt_max, '2'));
          const v1158 = stdlib.mul(v1157, v567);
          const v1160 = stdlib.mul(v1155, v567);
          const v1161 = stdlib.div(v1158, v1154);
          const v1162 = stdlib.add(v606, v566);
          const v1163 = stdlib.sub(v603, v1158);
          const v1167 = stdlib.sub(v1089, v1163);
          sim_r.txns.push({
            amt: v1163,
            kind: 'from',
            to: v722,
            tok: undefined /* Nothing */
            });
          const v1168 = true;
          const v1169 = await txn1.getOutput('Schmuck_rebase', 'v1168', ctc3, v1168);
          
          const v2479 = v1154;
          const v2480 = v599;
          const v2481 = true;
          const v2482 = false;
          const v2483 = v1154;
          const v2484 = v1158;
          const v2485 = v1160;
          const v2486 = v1161;
          const v2487 = v1162;
          const v2489 = v725;
          const v2490 = v1098;
          const v2491 = v1167;
          const v2492 = v1098[stdlib.checkedBigNumberify('./index.rsh:75:30:application', stdlib.UInt_max, '0')];
          const v2493 = v2492[stdlib.checkedBigNumberify('./index.rsh:75:30:application', stdlib.UInt_max, '0')];
          const v2494 = stdlib.gt(v2493, stdlib.checkedBigNumberify('./index.rsh:75:45:decimal', stdlib.UInt_max, '0'));
          if (v2494) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              amt: v1167,
              kind: 'from',
              to: v565,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              amt: v2493,
              kind: 'from',
              to: v565,
              tok: v569
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v569
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'Schmuck_sell0_88': {
          const v1209 = v723[1];
          
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
  const {data: [v723], secs: v725, time: v724, didSend: v317, from: v722 } = txn1;
  switch (v723[0]) {
    case 'SchmecklerAPI_claimFees0_88': {
      const v726 = v723[1];
      return;
      break;
      }
    case 'Schmuck_buy0_88': {
      const v887 = v723[1];
      return;
      break;
      }
    case 'Schmuck_rebase0_88': {
      const v1048 = v723[1];
      undefined /* setApiDetails */;
      const v1089 = stdlib.add(v614, v566);
      ;
      const v1090 = v613[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '0')];
      const v1091 = v1090[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '0')];
      const v1092 = stdlib.add(v1091, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
      const v1095 = v1090[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '1')];
      const v1096 = v1090[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '2')];
      const v1097 = [v1092, v1095, v1096];
      const v1098 = stdlib.Array_set(v613, stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '0'), v1097);
      ;
      const v1151 = stdlib.gt(v610, v599);
      const v1153 = v1151 ? v601 : false;
      stdlib.assert(v1153, {
        at: './index.rsh:134:12:application',
        fs: ['at ./index.rsh:132:9:application call to [unknown function] (defined at: ./index.rsh:132:9:function exp)'],
        msg: null,
        who: 'Schmuck_rebase'
        });
      const v1154 = stdlib.sub(v598, stdlib.checkedBigNumberify('./index.rsh:135:73:decimal', stdlib.UInt_max, '1'));
      const v1155 = stdlib.add(v1154, stdlib.checkedBigNumberify('./index.rsh:137:93:decimal', stdlib.UInt_max, '1'));
      const v1156 = stdlib.mul(v1154, v1155);
      const v1157 = stdlib.div(v1156, stdlib.checkedBigNumberify('./index.rsh:137:98:decimal', stdlib.UInt_max, '2'));
      const v1158 = stdlib.mul(v1157, v567);
      const v1160 = stdlib.mul(v1155, v567);
      const v1161 = stdlib.div(v1158, v1154);
      const v1162 = stdlib.add(v606, v566);
      const v1163 = stdlib.sub(v603, v1158);
      const v1167 = stdlib.sub(v1089, v1163);
      ;
      const v1168 = true;
      const v1169 = await txn1.getOutput('Schmuck_rebase', 'v1168', ctc3, v1168);
      if (v317) {
        stdlib.protect(ctc9, await interact.out(v1048, v1169), {
          at: './index.rsh:129:8:application',
          fs: ['at ./index.rsh:129:8:application call to [unknown function] (defined at: ./index.rsh:129:8:function exp)', 'at ./index.rsh:143:8:application call to "k" (defined at: ./index.rsh:132:9:function exp)', 'at ./index.rsh:132:9:application call to [unknown function] (defined at: ./index.rsh:132:9:function exp)'],
          msg: 'out',
          who: 'Schmuck_rebase'
          });
        }
      else {
        }
      
      const v2479 = v1154;
      const v2480 = v599;
      const v2481 = true;
      const v2482 = false;
      const v2483 = v1154;
      const v2484 = v1158;
      const v2485 = v1160;
      const v2486 = v1161;
      const v2487 = v1162;
      const v2489 = v725;
      const v2490 = v1098;
      const v2491 = v1167;
      const v2492 = v1098[stdlib.checkedBigNumberify('./index.rsh:75:30:application', stdlib.UInt_max, '0')];
      const v2493 = v2492[stdlib.checkedBigNumberify('./index.rsh:75:30:application', stdlib.UInt_max, '0')];
      const v2494 = stdlib.gt(v2493, stdlib.checkedBigNumberify('./index.rsh:75:45:decimal', stdlib.UInt_max, '0'));
      if (v2494) {
        return;
        }
      else {
        ;
        ;
        return;
        }
      break;
      }
    case 'Schmuck_sell0_88': {
      const v1209 = v723[1];
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
    SchmecklerAPI_claimFees0_88: ctc7,
    Schmuck_buy0_88: ctc6,
    Schmuck_rebase0_88: ctc7,
    Schmuck_sell0_88: ctc6
    });
  const ctc9 = stdlib.T_Null;
  
  
  const [v565, v566, v567, v568, v569, v598, v599, v600, v601, v602, v603, v604, v605, v606, v610, v613, v614] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc1, ctc1, ctc2, ctc1, ctc1, ctc3, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1]);
  const v642 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:104:14:application call to [unknown function] (defined at: ./index.rsh:104:14:function exp)', 'at ./index.rsh:69:17:application call to "runSchmuck_sell0_88" (defined at: ./index.rsh:103:7:function exp)', 'at ./index.rsh:69:17:application call to [unknown function] (defined at: ./index.rsh:69:17:function exp)'],
    msg: 'in',
    who: 'Schmuck_sell'
    });
  const v643 = v642[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v646 = stdlib.eq(v643, stdlib.checkedBigNumberify('./index.rsh:104:36:decimal', stdlib.UInt_max, '1'));
  const v647 = v613[stdlib.checkedBigNumberify('./index.rsh:104:48:application', stdlib.UInt_max, '0')];
  const v648 = v647[stdlib.checkedBigNumberify('./index.rsh:104:48:application', stdlib.UInt_max, '0')];
  const v649 = stdlib.gt(v648, stdlib.checkedBigNumberify('./index.rsh:104:63:decimal', stdlib.UInt_max, '0'));
  const v650 = v646 ? v649 : false;
  const v651 = stdlib.gt(v598, stdlib.checkedBigNumberify('./index.rsh:104:96:decimal', stdlib.UInt_max, '0'));
  const v652 = v650 ? v651 : false;
  const v654 = stdlib.gt(v614, v605);
  const v655 = v652 ? v654 : false;
  stdlib.assert(v655, {
    at: './index.rsh:104:25:application',
    fs: ['at ./index.rsh:104:14:application call to [unknown function] (defined at: ./index.rsh:104:14:function exp)', 'at ./index.rsh:104:14:application call to [unknown function] (defined at: ./index.rsh:104:14:function exp)', 'at ./index.rsh:69:17:application call to "runSchmuck_sell0_88" (defined at: ./index.rsh:103:7:function exp)', 'at ./index.rsh:69:17:application call to [unknown function] (defined at: ./index.rsh:69:17:function exp)'],
    msg: null,
    who: 'Schmuck_sell'
    });
  const v659 = ['Schmuck_sell0_88', v642];
  
  const txn1 = await (ctc.sendrecv({
    args: [v565, v566, v567, v568, v569, v598, v599, v600, v601, v602, v603, v604, v605, v606, v610, v613, v614, v659],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [v566, [[v643, v569]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v723], secs: v725, time: v724, didSend: v317, from: v722 } = txn1;
      
      switch (v723[0]) {
        case 'SchmecklerAPI_claimFees0_88': {
          const v726 = v723[1];
          
          break;
          }
        case 'Schmuck_buy0_88': {
          const v887 = v723[1];
          
          break;
          }
        case 'Schmuck_rebase0_88': {
          const v1048 = v723[1];
          
          break;
          }
        case 'Schmuck_sell0_88': {
          const v1209 = v723[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Schmuck_sell"
            });
          const v1235 = v1209[stdlib.checkedBigNumberify('./index.rsh:103:7:spread', stdlib.UInt_max, '0')];
          const v1250 = stdlib.add(v614, v566);
          sim_r.txns.push({
            amt: v566,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v1251 = v613[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '0')];
          const v1252 = v1251[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '0')];
          const v1253 = stdlib.add(v1252, v1235);
          const v1256 = v1251[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '1')];
          const v1257 = v1251[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '2')];
          const v1258 = [v1253, v1256, v1257];
          const v1259 = stdlib.Array_set(v613, stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '0'), v1258);
          sim_r.txns.push({
            amt: v1235,
            kind: 'to',
            tok: v569
            });
          const v1339 = v1259[stdlib.checkedBigNumberify('./index.rsh:107:38:application', stdlib.UInt_max, '0')];
          const v1340 = v1339[stdlib.checkedBigNumberify('./index.rsh:107:38:application', stdlib.UInt_max, '0')];
          const v1341 = stdlib.gt(v1340, stdlib.checkedBigNumberify('./index.rsh:107:53:decimal', stdlib.UInt_max, '0'));
          const v1351 = stdlib.sub(v1250, v605);
          sim_r.txns.push({
            amt: v605,
            kind: 'from',
            to: v722,
            tok: undefined /* Nothing */
            });
          const v1352 = true;
          const v1353 = await txn1.getOutput('Schmuck_sell', 'v1352', ctc3, v1352);
          
          const v1359 = stdlib.sub(v598, stdlib.checkedBigNumberify('./index.rsh:111:73:decimal', stdlib.UInt_max, '1'));
          const v1360 = stdlib.eq(v1359, stdlib.checkedBigNumberify('./index.rsh:112:71:decimal', stdlib.UInt_max, '0'));
          const v1361 = v1360 ? stdlib.checkedBigNumberify('./index.rsh:112:75:decimal', stdlib.UInt_max, '0') : v602;
          const v1362 = stdlib.sub(v603, v605);
          const v1364 = v1360 ? v567 : v605;
          const v1365 = stdlib.add(v606, v566);
          const v1367 = stdlib.add(v725, v568);
          const v1368 = v601 ? v599 : v1367;
          const v2574 = v1359;
          const v2575 = v1368;
          const v2576 = true;
          const v2577 = true;
          const v2578 = v1361;
          const v2579 = v1362;
          const v2580 = v1364;
          const v2581 = v605;
          const v2582 = v1365;
          const v2584 = v725;
          const v2585 = v1259;
          const v2586 = v1351;
          if (v1341) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              amt: v1351,
              kind: 'from',
              to: v565,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              amt: v1340,
              kind: 'from',
              to: v565,
              tok: v569
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v569
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
  const {data: [v723], secs: v725, time: v724, didSend: v317, from: v722 } = txn1;
  switch (v723[0]) {
    case 'SchmecklerAPI_claimFees0_88': {
      const v726 = v723[1];
      return;
      break;
      }
    case 'Schmuck_buy0_88': {
      const v887 = v723[1];
      return;
      break;
      }
    case 'Schmuck_rebase0_88': {
      const v1048 = v723[1];
      return;
      break;
      }
    case 'Schmuck_sell0_88': {
      const v1209 = v723[1];
      undefined /* setApiDetails */;
      const v1235 = v1209[stdlib.checkedBigNumberify('./index.rsh:103:7:spread', stdlib.UInt_max, '0')];
      const v1250 = stdlib.add(v614, v566);
      ;
      const v1251 = v613[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '0')];
      const v1252 = v1251[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '0')];
      const v1253 = stdlib.add(v1252, v1235);
      const v1256 = v1251[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '1')];
      const v1257 = v1251[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '2')];
      const v1258 = [v1253, v1256, v1257];
      const v1259 = stdlib.Array_set(v613, stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '0'), v1258);
      ;
      const v1338 = stdlib.eq(v1235, stdlib.checkedBigNumberify('./index.rsh:107:26:decimal', stdlib.UInt_max, '1'));
      const v1339 = v1259[stdlib.checkedBigNumberify('./index.rsh:107:38:application', stdlib.UInt_max, '0')];
      const v1340 = v1339[stdlib.checkedBigNumberify('./index.rsh:107:38:application', stdlib.UInt_max, '0')];
      const v1341 = stdlib.gt(v1340, stdlib.checkedBigNumberify('./index.rsh:107:53:decimal', stdlib.UInt_max, '0'));
      const v1342 = v1338 ? v1341 : false;
      const v1343 = stdlib.gt(v598, stdlib.checkedBigNumberify('./index.rsh:107:86:decimal', stdlib.UInt_max, '0'));
      const v1344 = v1342 ? v1343 : false;
      const v1346 = stdlib.gt(v1250, v605);
      const v1347 = v1344 ? v1346 : false;
      stdlib.assert(v1347, {
        at: './index.rsh:107:14:application',
        fs: ['at ./index.rsh:106:17:application call to [unknown function] (defined at: ./index.rsh:106:17:function exp)'],
        msg: null,
        who: 'Schmuck_sell'
        });
      const v1351 = stdlib.sub(v1250, v605);
      ;
      const v1352 = true;
      const v1353 = await txn1.getOutput('Schmuck_sell', 'v1352', ctc3, v1352);
      if (v317) {
        stdlib.protect(ctc9, await interact.out(v1209, v1353), {
          at: './index.rsh:103:8:application',
          fs: ['at ./index.rsh:103:8:application call to [unknown function] (defined at: ./index.rsh:103:8:function exp)', 'at ./index.rsh:110:8:application call to "k" (defined at: ./index.rsh:106:17:function exp)', 'at ./index.rsh:106:17:application call to [unknown function] (defined at: ./index.rsh:106:17:function exp)'],
          msg: 'out',
          who: 'Schmuck_sell'
          });
        }
      else {
        }
      
      const v1359 = stdlib.sub(v598, stdlib.checkedBigNumberify('./index.rsh:111:73:decimal', stdlib.UInt_max, '1'));
      const v1360 = stdlib.eq(v1359, stdlib.checkedBigNumberify('./index.rsh:112:71:decimal', stdlib.UInt_max, '0'));
      const v1361 = v1360 ? stdlib.checkedBigNumberify('./index.rsh:112:75:decimal', stdlib.UInt_max, '0') : v602;
      const v1362 = stdlib.sub(v603, v605);
      const v1364 = v1360 ? v567 : v605;
      const v1365 = stdlib.add(v606, v566);
      const v1367 = stdlib.add(v725, v568);
      const v1368 = v601 ? v599 : v1367;
      const v2574 = v1359;
      const v2575 = v1368;
      const v2576 = true;
      const v2577 = true;
      const v2578 = v1361;
      const v2579 = v1362;
      const v2580 = v1364;
      const v2581 = v605;
      const v2582 = v1365;
      const v2584 = v725;
      const v2585 = v1259;
      const v2586 = v1351;
      if (v1341) {
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
  appApproval: `BiAQAAEECAMg2KiU7w3W8J+8DpCF5b0Pjaf77QEoMDhAAqCNBiYDAQEBAAAiNQAxGEEGZipkSSJbNQElWzUCNhoAF0lBALQiNQQjNQZJIQYMQABDSSEHDEAAKkkhCAxAABMhCBJEKjX/gAECNP9QJa9QQgCkIQcSRDYaATX/KDT/UEIAlCEGEkQ2GgE1/4ABAzT/UEIAgkkhCQxAAEkhCRJENAEkEkQpZChkUEk1A1dQATQDV1EBUDQDV1IIUDQDV0AIUDQDV1oIUDQDV2IIUDQDV2oIUDQDV3IIUDQDV0gIUDUHQgWrgaqRmGQSRCo1/yk0/1Alr1BCAB42GgIXNQQ2GgM2GgEXSSMMQAO7SSEEDEADLiEEEkQkNAESRDQESSISTDQCEhFEKWQoZFBJNQNJSkpKSkpKSVcAIDX/IQVbNf4hCls1/SELWzX8IQxbNfshDVs1+oFIWzX5V1EBFzX4gVJbNfeBWls19oFiWzX1gWpbNfSBcls181eCETXygZMBWzXxSTUFNfCABJHxp5o08FCwNPAiVUkhDgxAAWtJIQQMQADCIQQSRDTwVwEINe807xc17jTxNP4INe00/ogE4DTyVwARSTXsIls07ggWNOxXCAhQNOxXEAFQNes07jT7iATVNO4jEjTrVwARIlsiDRA0+iINEDTtNPQNEESxIrIBNPSyCCOyEDEAsgezgAkAAAAAAAAFSAGwKDUHNPojCUk16iISNek0/zT+NP00/DT7NOoyBzT8CDT5NPhNIyM09yI06U009jT0CTT0NP006U009DTzNP4IMgYyBzTrNO009AlCAwxINP6IBDQ08lcAETXvIzT7iAQ/NAOBels0+Q00+BBENPojCUk17iMINe007jTtCyEOCjT9CzXsNPY07Ak167EisgE067III7IQMQCyB7OACQAAAAAAAASQAbAoNQc0/zT+NP00/DT7NO40+SMiNO407DTtNP0LNOw07go08zT+CDIGMgc07yJbIwgWNO9XCAhQNO9XEAFQNPE0/gg06wlCAmpJIwxAANRINPBXAQg17zT+NPUINe407ogDfjTyVwARSTXtVwAINO1XCAhQNO1XEAFQNew07xdJNesjEkQ07FcAETXqsSKyATTrshIkshAxALIUNPuyEbOACQAAAAAAAAPFAbAoNQc0+iMINek09jT1CDXoNOk09w815zT/NP40/TT8NPs06TT5Mgc0/Ag0+E0jNOcUNOk090k06Q1NNOg09DTpIwg0/Qs050009DToNOkKNOdNNPM0/ggyBjIHNOoiWzTrCRY06lcICFA06lcQAVA08TTuCEIBkEg08lcAETXvsSKyATTzsggjshA0/7IHs4AJAAAAAAAAAw4BsCg1BzT/NP40/TT8NPs0+jT5IzT4NPc09jT1NPQiMgYyBzTvVwAINO9XCAhQNO9XEAFQNPE08wlCATIjEkQjNAESRDQESSISTDQCEhFEKWRJNQNJSklXACA1/yEKWzX+IQxbNf0hDVs1/FdIETX7gASai5F0sDT7VwARNfo0/DT9iAIvNP8xABJENP80AyEFWzT+NAMhC1s0/SIyByMiIiI0/iIiMgYyBzT6Ils0/AgWNPpXCAhQNPpXEAFQIkIArEgiNAESRDQESSISTDQCEhFESTUFSUpJIls1/yVbNf6BEFs1/YEYWzX8IQVbNfuABE1+Byc0/xZQNP4WUDT9FlA0/BZQNPsWULAhD4gBjIERr0k1+lcAETX5Ja80+VcICFA0+VcQAVA1+CEPiAFssSKyASKyEiSyEDIKshQ0/LIRszEANP8WUDT+FlA0/RZQNPwWUDT7FlA0+FApSwFXAFlnSCM1ATIGNQJCAPE1/zX+Nf01/DX7Nfo1+TX4Nfc19jX1NfQ18zXyNfE18DXvNe40/lcAESJbNe009TTtIg0QQQBgNO407xZQNPAWUDTxFlA08hZQNPMWUDT0FlA09RZRBwhQNPYWUQcIUDT3FlA0+BZQNPkWUDT6FlA0+xZQNP0WUDT+UDT/FlApSwFXAH9nKEsBV38cZ0gkNQEyBjUCQgBasSKyATT/sggjshA07rIHs7EisgE07bISJLIQNO6yFDTyshGzsSKyASKyEiSyEDIJshUyCrIUNPKyEbNCAAAxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yI1ASI1AkL/wzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiTQASUpJIwg1ADgUMgoSRDgQJBJEOBFPAhJEOBISRIk=`,
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
    at: './index.rsh:58:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:170:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:69:17:after expr stmt semicolon',
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
