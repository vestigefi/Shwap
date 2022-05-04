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
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc2, ctc1, ctc5],
      4: [ctc0, ctc1, ctc1, ctc2, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1]
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
    schmeckleAmount: ctc0,
    schmeckles: ctc1
    });
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Tuple([]);
  const ctc5 = stdlib.T_Tuple([ctc0]);
  const ctc6 = stdlib.T_Data({
    SchmecklerAPI_claimFees0_75: ctc4,
    Schmuck_buy0_75: ctc5,
    Schmuck_sell0_75: ctc5
    });
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Address;
  const ctc9 = stdlib.T_Tuple([ctc0, ctc0, ctc7]);
  const ctc10 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  
  const v428 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v429 = [v428];
  const v435 = stdlib.protect(ctc2, await interact.setUpShop(), {
    at: './index.rsh:38:37:application',
    fs: ['at ./index.rsh:32:18:application call to [unknown function] (defined at: ./index.rsh:32:22:function exp)'],
    msg: 'setUpShop',
    who: 'Schmeckler'
    });
  const v436 = v435.fee;
  const v437 = v435.initialPrice;
  const v438 = v435.schmeckleAmount;
  const v439 = v435.schmeckles;
  
  const txn1 = await (ctc.sendrecv({
    args: [v436, v437, v439, v438],
    evt_cnt: 4,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:41:14:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0, ctc1, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:41:14:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v445, v446, v447, v448], secs: v450, time: v449, didSend: v38, from: v444 } = txn1;
      
      const v451 = v429[stdlib.checkedBigNumberify('./index.rsh:41:14:dot', stdlib.UInt_max, '0')];
      const v453 = v451[stdlib.checkedBigNumberify('./index.rsh:41:14:dot', stdlib.UInt_max, '1')];
      const v454 = v451[stdlib.checkedBigNumberify('./index.rsh:41:14:dot', stdlib.UInt_max, '2')];
      const v455 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v453, v454];
      const v456 = stdlib.Array_set(v429, stdlib.checkedBigNumberify('./index.rsh:41:14:dot', stdlib.UInt_max, '0'), v455);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v447
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc1, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v445, v446, v447, v448], secs: v450, time: v449, didSend: v38, from: v444 } = txn1;
  const v451 = v429[stdlib.checkedBigNumberify('./index.rsh:41:14:dot', stdlib.UInt_max, '0')];
  const v453 = v451[stdlib.checkedBigNumberify('./index.rsh:41:14:dot', stdlib.UInt_max, '1')];
  const v454 = v451[stdlib.checkedBigNumberify('./index.rsh:41:14:dot', stdlib.UInt_max, '2')];
  const v455 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v453, v454];
  const v456 = stdlib.Array_set(v429, stdlib.checkedBigNumberify('./index.rsh:41:14:dot', stdlib.UInt_max, '0'), v455);
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v444, v445, v446, v447, v448, v456],
    evt_cnt: 0,
    funcNum: 1,
    lct: v449,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:51:14:dot', stdlib.UInt_max, '0'), [[v448, v447]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v460, time: v459, didSend: v45, from: v458 } = txn2;
      
      ;
      const v461 = v456[stdlib.checkedBigNumberify('./index.rsh:51:14:dot', stdlib.UInt_max, '0')];
      const v462 = v461[stdlib.checkedBigNumberify('./index.rsh:51:14:dot', stdlib.UInt_max, '0')];
      const v463 = stdlib.add(v462, v448);
      const v466 = v461[stdlib.checkedBigNumberify('./index.rsh:51:14:dot', stdlib.UInt_max, '1')];
      const v467 = v461[stdlib.checkedBigNumberify('./index.rsh:51:14:dot', stdlib.UInt_max, '2')];
      const v468 = [v463, v466, v467];
      const v469 = stdlib.Array_set(v456, stdlib.checkedBigNumberify('./index.rsh:51:14:dot', stdlib.UInt_max, '0'), v468);
      sim_r.txns.push({
        amt: v448,
        kind: 'to',
        tok: v447
        });
      const v470 = stdlib.addressEq(v444, v458);
      ;
      
      const v474 = stdlib.checkedBigNumberify('./index.rsh:69:35:decimal', stdlib.UInt_max, '0');
      const v475 = true;
      const v477 = stdlib.checkedBigNumberify('./index.rsh:69:32:decimal', stdlib.UInt_max, '0');
      const v478 = stdlib.checkedBigNumberify('./index.rsh:69:39:decimal', stdlib.UInt_max, '0');
      const v479 = v446;
      const v480 = stdlib.checkedBigNumberify('./index.rsh:69:57:decimal', stdlib.UInt_max, '0');
      const v481 = stdlib.checkedBigNumberify('./index.rsh:69:60:decimal', stdlib.UInt_max, '0');
      const v482 = v459;
      const v488 = v469;
      const v489 = stdlib.checkedBigNumberify('./index.rsh:30:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v498 = v488[stdlib.checkedBigNumberify('./index.rsh:72:30:application', stdlib.UInt_max, '0')];
        const v499 = v498[stdlib.checkedBigNumberify('./index.rsh:72:30:application', stdlib.UInt_max, '0')];
        const v500 = stdlib.gt(v499, stdlib.checkedBigNumberify('./index.rsh:72:45:decimal', stdlib.UInt_max, '0'));
        const v501 = v475 ? v500 : false;
        
        return v501;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v933 = v488[stdlib.checkedBigNumberify('./index.rsh:138:32:application', stdlib.UInt_max, '0')];
        const v934 = v933[stdlib.checkedBigNumberify('./index.rsh:138:32:application', stdlib.UInt_max, '0')];
        sim_r.txns.push({
          amt: v489,
          kind: 'from',
          to: v444,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          amt: v934,
          kind: 'from',
          to: v444,
          tok: v447
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v447
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
    tys: [ctc8, ctc0, ctc0, ctc1, ctc0, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v460, time: v459, didSend: v45, from: v458 } = txn2;
  ;
  const v461 = v456[stdlib.checkedBigNumberify('./index.rsh:51:14:dot', stdlib.UInt_max, '0')];
  const v462 = v461[stdlib.checkedBigNumberify('./index.rsh:51:14:dot', stdlib.UInt_max, '0')];
  const v463 = stdlib.add(v462, v448);
  const v466 = v461[stdlib.checkedBigNumberify('./index.rsh:51:14:dot', stdlib.UInt_max, '1')];
  const v467 = v461[stdlib.checkedBigNumberify('./index.rsh:51:14:dot', stdlib.UInt_max, '2')];
  const v468 = [v463, v466, v467];
  const v469 = stdlib.Array_set(v456, stdlib.checkedBigNumberify('./index.rsh:51:14:dot', stdlib.UInt_max, '0'), v468);
  ;
  const v470 = stdlib.addressEq(v444, v458);
  stdlib.assert(v470, {
    at: './index.rsh:51:14:dot',
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
  
  let v474 = stdlib.checkedBigNumberify('./index.rsh:69:35:decimal', stdlib.UInt_max, '0');
  let v475 = true;
  let v477 = stdlib.checkedBigNumberify('./index.rsh:69:32:decimal', stdlib.UInt_max, '0');
  let v478 = stdlib.checkedBigNumberify('./index.rsh:69:39:decimal', stdlib.UInt_max, '0');
  let v479 = v446;
  let v480 = stdlib.checkedBigNumberify('./index.rsh:69:57:decimal', stdlib.UInt_max, '0');
  let v481 = stdlib.checkedBigNumberify('./index.rsh:69:60:decimal', stdlib.UInt_max, '0');
  let v482 = v459;
  let v488 = v469;
  let v489 = stdlib.checkedBigNumberify('./index.rsh:30:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v498 = v488[stdlib.checkedBigNumberify('./index.rsh:72:30:application', stdlib.UInt_max, '0')];
    const v499 = v498[stdlib.checkedBigNumberify('./index.rsh:72:30:application', stdlib.UInt_max, '0')];
    const v500 = stdlib.gt(v499, stdlib.checkedBigNumberify('./index.rsh:72:45:decimal', stdlib.UInt_max, '0'));
    const v501 = v475 ? v500 : false;
    
    return v501;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc6],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v575], secs: v577, time: v576, didSend: v254, from: v574 } = txn3;
    switch (v575[0]) {
      case 'SchmecklerAPI_claimFees0_75': {
        const v578 = v575[1];
        undefined /* setApiDetails */;
        ;
        const v613 = v488[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '0')];
        const v614 = v613[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '0')];
        const v618 = v613[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '1')];
        const v619 = v613[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '2')];
        const v620 = [v614, v618, v619];
        const v621 = stdlib.Array_set(v488, stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '0'), v620);
        ;
        const v626 = stdlib.sub(v489, v481);
        ;
        const v627 = true;
        await txn3.getOutput('SchmecklerAPI_claimFees', 'v627', ctc7, v627);
        const cv474 = v474;
        const cv475 = true;
        const cv477 = v477;
        const cv478 = v478;
        const cv479 = v479;
        const cv480 = v480;
        const cv481 = stdlib.checkedBigNumberify('./index.rsh:135:9:decimal', stdlib.UInt_max, '0');
        const cv482 = v576;
        const cv488 = v621;
        const cv489 = v626;
        
        v474 = cv474;
        v475 = cv475;
        v477 = cv477;
        v478 = cv478;
        v479 = cv479;
        v480 = cv480;
        v481 = cv481;
        v482 = cv482;
        v488 = cv488;
        v489 = cv489;
        
        continue;
        break;
        }
      case 'Schmuck_buy0_75': {
        const v696 = v575[1];
        undefined /* setApiDetails */;
        const v707 = stdlib.add(v445, v479);
        const v730 = stdlib.add(v489, v707);
        ;
        const v731 = v488[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '0')];
        const v732 = v731[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '0')];
        const v736 = v731[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '1')];
        const v737 = v731[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '2')];
        const v738 = [v732, v736, v737];
        const v739 = stdlib.Array_set(v488, stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '0'), v738);
        ;
        const v753 = v696[stdlib.checkedBigNumberify('./index.rsh:74:7:spread', stdlib.UInt_max, '0')];
        const v754 = stdlib.eq(v753, stdlib.checkedBigNumberify('./index.rsh:78:26:decimal', stdlib.UInt_max, '1'));
        stdlib.assert(v754, {
          at: './index.rsh:78:15:application',
          fs: ['at ./index.rsh:77:17:application call to [unknown function] (defined at: ./index.rsh:77:17:function exp)'],
          msg: null,
          who: 'Schmeckler'
          });
        const v755 = v739[stdlib.checkedBigNumberify('./index.rsh:79:42:application', stdlib.UInt_max, '0')];
        const v756 = v755[stdlib.checkedBigNumberify('./index.rsh:79:42:application', stdlib.UInt_max, '0')];
        const v760 = stdlib.sub(v756, v753);
        const v763 = v755[stdlib.checkedBigNumberify('./index.rsh:79:42:application', stdlib.UInt_max, '1')];
        const v764 = v755[stdlib.checkedBigNumberify('./index.rsh:79:42:application', stdlib.UInt_max, '2')];
        const v765 = [v760, v763, v764];
        const v766 = stdlib.Array_set(v739, stdlib.checkedBigNumberify('./index.rsh:79:42:application', stdlib.UInt_max, '0'), v765);
        ;
        const v767 = true;
        await txn3.getOutput('Schmuck_buy', 'v767', ctc7, v767);
        const v774 = stdlib.add(v474, stdlib.checkedBigNumberify('./index.rsh:82:72:decimal', stdlib.UInt_max, '1'));
        const v775 = stdlib.gt(v477, v774);
        const v776 = v775 ? v477 : v774;
        const v777 = stdlib.add(v478, v479);
        const v778 = stdlib.add(v479, stdlib.checkedBigNumberify('./index.rsh:86:97:decimal', stdlib.UInt_max, '1'));
        const v779 = v775 ? v480 : v778;
        const v780 = stdlib.div(v777, v774);
        const v781 = v775 ? v480 : v780;
        const v782 = stdlib.add(v481, v445);
        const cv474 = v774;
        const cv475 = true;
        const cv477 = v776;
        const cv478 = v777;
        const cv479 = v779;
        const cv480 = v781;
        const cv481 = v782;
        const cv482 = v576;
        const cv488 = v766;
        const cv489 = v730;
        
        v474 = cv474;
        v475 = cv475;
        v477 = cv477;
        v478 = cv478;
        v479 = cv479;
        v480 = cv480;
        v481 = cv481;
        v482 = cv482;
        v488 = cv488;
        v489 = cv489;
        
        continue;
        break;
        }
      case 'Schmuck_sell0_75': {
        const v814 = v575[1];
        undefined /* setApiDetails */;
        const v833 = v814[stdlib.checkedBigNumberify('./index.rsh:99:7:spread', stdlib.UInt_max, '0')];
        const v848 = stdlib.add(v489, v445);
        ;
        const v849 = v488[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '0')];
        const v850 = v849[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '0')];
        const v851 = stdlib.add(v850, v833);
        const v854 = v849[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '1')];
        const v855 = v849[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '2')];
        const v856 = [v851, v854, v855];
        const v857 = stdlib.Array_set(v488, stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '0'), v856);
        ;
        const v905 = stdlib.eq(v833, stdlib.checkedBigNumberify('./index.rsh:103:26:decimal', stdlib.UInt_max, '1'));
        const v906 = v857[stdlib.checkedBigNumberify('./index.rsh:103:38:application', stdlib.UInt_max, '0')];
        const v907 = v906[stdlib.checkedBigNumberify('./index.rsh:103:38:application', stdlib.UInt_max, '0')];
        const v908 = stdlib.gt(v907, stdlib.checkedBigNumberify('./index.rsh:103:53:decimal', stdlib.UInt_max, '0'));
        const v909 = v905 ? v908 : false;
        const v910 = stdlib.gt(v474, stdlib.checkedBigNumberify('./index.rsh:103:86:decimal', stdlib.UInt_max, '0'));
        const v911 = v909 ? v910 : false;
        const v913 = stdlib.gt(v848, v480);
        const v914 = v911 ? v913 : false;
        stdlib.assert(v914, {
          at: './index.rsh:103:14:application',
          fs: ['at ./index.rsh:102:17:application call to [unknown function] (defined at: ./index.rsh:102:17:function exp)'],
          msg: null,
          who: 'Schmeckler'
          });
        const v918 = stdlib.sub(v848, v480);
        ;
        const v919 = true;
        await txn3.getOutput('Schmuck_sell', 'v919', ctc7, v919);
        const v926 = stdlib.sub(v474, stdlib.checkedBigNumberify('./index.rsh:108:72:decimal', stdlib.UInt_max, '1'));
        const v927 = stdlib.sub(v478, v480);
        const v928 = stdlib.eq(v926, stdlib.checkedBigNumberify('./index.rsh:110:68:decimal', stdlib.UInt_max, '0'));
        const v929 = v928 ? v446 : v480;
        const v930 = stdlib.add(v481, v445);
        const cv474 = v926;
        const cv475 = true;
        const cv477 = v477;
        const cv478 = v927;
        const cv479 = v929;
        const cv480 = v480;
        const cv481 = v930;
        const cv482 = v576;
        const cv488 = v857;
        const cv489 = v918;
        
        v474 = cv474;
        v475 = cv475;
        v477 = cv477;
        v478 = cv478;
        v479 = cv479;
        v480 = cv480;
        v481 = cv481;
        v482 = cv482;
        v488 = cv488;
        v489 = cv489;
        
        continue;
        break;
        }
      }
    
    }
  const v933 = v488[stdlib.checkedBigNumberify('./index.rsh:138:32:application', stdlib.UInt_max, '0')];
  const v934 = v933[stdlib.checkedBigNumberify('./index.rsh:138:32:application', stdlib.UInt_max, '0')];
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
    SchmecklerAPI_claimFees0_75: ctc6,
    Schmuck_buy0_75: ctc7,
    Schmuck_sell0_75: ctc7
    });
  const ctc9 = stdlib.T_Null;
  
  
  const [v444, v445, v446, v447, v474, v477, v478, v479, v480, v481, v488, v489] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc1, ctc2, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1]);
  const v537 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:123:7:application call to [unknown function] (defined at: ./index.rsh:123:7:function exp)', 'at ./index.rsh:69:17:application call to "runSchmecklerAPI_claimFees0_75" (defined at: ./index.rsh:123:7:function exp)', 'at ./index.rsh:69:17:application call to [unknown function] (defined at: ./index.rsh:69:17:function exp)'],
    msg: 'in',
    who: 'SchmecklerAPI_claimFees'
    });
  const v541 = ['SchmecklerAPI_claimFees0_75', v537];
  
  const txn1 = await (ctc.sendrecv({
    args: [v444, v445, v446, v447, v474, v477, v478, v479, v480, v481, v488, v489, v541],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./index.rsh:123:7:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:73:12:decimal', stdlib.UInt_max, '0'), v447]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v575], secs: v577, time: v576, didSend: v254, from: v574 } = txn1;
      
      switch (v575[0]) {
        case 'SchmecklerAPI_claimFees0_75': {
          const v578 = v575[1];
          sim_r.txns.push({
            kind: 'api',
            who: "SchmecklerAPI_claimFees"
            });
          ;
          const v613 = v488[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '0')];
          const v614 = v613[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '0')];
          const v618 = v613[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '1')];
          const v619 = v613[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '2')];
          const v620 = [v614, v618, v619];
          const v621 = stdlib.Array_set(v488, stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '0'), v620);
          ;
          const v626 = stdlib.sub(v489, v481);
          sim_r.txns.push({
            amt: v481,
            kind: 'from',
            to: v444,
            tok: undefined /* Nothing */
            });
          const v627 = true;
          const v628 = await txn1.getOutput('SchmecklerAPI_claimFees', 'v627', ctc3, v627);
          
          const v1448 = v474;
          const v1450 = v477;
          const v1451 = v478;
          const v1452 = v479;
          const v1453 = v480;
          const v1454 = stdlib.checkedBigNumberify('./index.rsh:135:9:decimal', stdlib.UInt_max, '0');
          const v1456 = v621;
          const v1457 = v626;
          const v1458 = v621[stdlib.checkedBigNumberify('./index.rsh:72:30:application', stdlib.UInt_max, '0')];
          const v1459 = v1458[stdlib.checkedBigNumberify('./index.rsh:72:30:application', stdlib.UInt_max, '0')];
          const v1460 = stdlib.gt(v1459, stdlib.checkedBigNumberify('./index.rsh:72:45:decimal', stdlib.UInt_max, '0'));
          if (v1460) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              amt: v626,
              kind: 'from',
              to: v444,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              amt: v1459,
              kind: 'from',
              to: v444,
              tok: v447
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v447
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'Schmuck_buy0_75': {
          const v696 = v575[1];
          
          break;
          }
        case 'Schmuck_sell0_75': {
          const v814 = v575[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc2, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v575], secs: v577, time: v576, didSend: v254, from: v574 } = txn1;
  switch (v575[0]) {
    case 'SchmecklerAPI_claimFees0_75': {
      const v578 = v575[1];
      undefined /* setApiDetails */;
      ;
      const v613 = v488[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '0')];
      const v614 = v613[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '0')];
      const v618 = v613[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '1')];
      const v619 = v613[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '2')];
      const v620 = [v614, v618, v619];
      const v621 = stdlib.Array_set(v488, stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '0'), v620);
      ;
      const v626 = stdlib.sub(v489, v481);
      ;
      const v627 = true;
      const v628 = await txn1.getOutput('SchmecklerAPI_claimFees', 'v627', ctc3, v627);
      if (v254) {
        stdlib.protect(ctc9, await interact.out(v578, v628), {
          at: './index.rsh:123:8:application',
          fs: ['at ./index.rsh:123:8:application call to [unknown function] (defined at: ./index.rsh:123:8:function exp)', 'at ./index.rsh:126:8:application call to "k" (defined at: ./index.rsh:124:9:function exp)', 'at ./index.rsh:124:9:application call to [unknown function] (defined at: ./index.rsh:124:9:function exp)'],
          msg: 'out',
          who: 'SchmecklerAPI_claimFees'
          });
        }
      else {
        }
      
      const v1448 = v474;
      const v1450 = v477;
      const v1451 = v478;
      const v1452 = v479;
      const v1453 = v480;
      const v1454 = stdlib.checkedBigNumberify('./index.rsh:135:9:decimal', stdlib.UInt_max, '0');
      const v1456 = v621;
      const v1457 = v626;
      const v1458 = v621[stdlib.checkedBigNumberify('./index.rsh:72:30:application', stdlib.UInt_max, '0')];
      const v1459 = v1458[stdlib.checkedBigNumberify('./index.rsh:72:30:application', stdlib.UInt_max, '0')];
      const v1460 = stdlib.gt(v1459, stdlib.checkedBigNumberify('./index.rsh:72:45:decimal', stdlib.UInt_max, '0'));
      if (v1460) {
        return;
        }
      else {
        ;
        ;
        return;
        }
      break;
      }
    case 'Schmuck_buy0_75': {
      const v696 = v575[1];
      return;
      break;
      }
    case 'Schmuck_sell0_75': {
      const v814 = v575[1];
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
    SchmecklerAPI_claimFees0_75: ctc7,
    Schmuck_buy0_75: ctc6,
    Schmuck_sell0_75: ctc6
    });
  const ctc9 = stdlib.T_Null;
  
  
  const [v444, v445, v446, v447, v474, v477, v478, v479, v480, v481, v488, v489] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc1, ctc2, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1]);
  const v504 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:75:14:application call to [unknown function] (defined at: ./index.rsh:75:14:function exp)', 'at ./index.rsh:69:17:application call to "runSchmuck_buy0_75" (defined at: ./index.rsh:74:7:function exp)', 'at ./index.rsh:69:17:application call to [unknown function] (defined at: ./index.rsh:69:17:function exp)'],
    msg: 'in',
    who: 'Schmuck_buy'
    });
  const v505 = v504[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v508 = stdlib.eq(v505, stdlib.checkedBigNumberify('./index.rsh:75:35:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v508, {
    at: './index.rsh:75:24:application',
    fs: ['at ./index.rsh:75:14:application call to [unknown function] (defined at: ./index.rsh:75:14:function exp)', 'at ./index.rsh:75:14:application call to [unknown function] (defined at: ./index.rsh:75:14:function exp)', 'at ./index.rsh:69:17:application call to "runSchmuck_buy0_75" (defined at: ./index.rsh:74:7:function exp)', 'at ./index.rsh:69:17:application call to [unknown function] (defined at: ./index.rsh:69:17:function exp)'],
    msg: null,
    who: 'Schmuck_buy'
    });
  const v512 = ['Schmuck_buy0_75', v504];
  
  const v553 = stdlib.add(v445, v479);
  
  const txn1 = await (ctc.sendrecv({
    args: [v444, v445, v446, v447, v474, v477, v478, v479, v480, v481, v488, v489, v512],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [v553, [[stdlib.checkedBigNumberify('./index.rsh:76:41:decimal', stdlib.UInt_max, '0'), v447]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v575], secs: v577, time: v576, didSend: v254, from: v574 } = txn1;
      
      switch (v575[0]) {
        case 'SchmecklerAPI_claimFees0_75': {
          const v578 = v575[1];
          
          break;
          }
        case 'Schmuck_buy0_75': {
          const v696 = v575[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Schmuck_buy"
            });
          const v707 = stdlib.add(v445, v479);
          const v730 = stdlib.add(v489, v707);
          sim_r.txns.push({
            amt: v707,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v731 = v488[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '0')];
          const v732 = v731[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '0')];
          const v736 = v731[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '1')];
          const v737 = v731[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '2')];
          const v738 = [v732, v736, v737];
          const v739 = stdlib.Array_set(v488, stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '0'), v738);
          ;
          const v753 = v696[stdlib.checkedBigNumberify('./index.rsh:74:7:spread', stdlib.UInt_max, '0')];
          const v754 = stdlib.eq(v753, stdlib.checkedBigNumberify('./index.rsh:78:26:decimal', stdlib.UInt_max, '1'));
          ;
          const v755 = v739[stdlib.checkedBigNumberify('./index.rsh:79:42:application', stdlib.UInt_max, '0')];
          const v756 = v755[stdlib.checkedBigNumberify('./index.rsh:79:42:application', stdlib.UInt_max, '0')];
          const v760 = stdlib.sub(v756, v753);
          const v763 = v755[stdlib.checkedBigNumberify('./index.rsh:79:42:application', stdlib.UInt_max, '1')];
          const v764 = v755[stdlib.checkedBigNumberify('./index.rsh:79:42:application', stdlib.UInt_max, '2')];
          const v765 = [v760, v763, v764];
          const v766 = stdlib.Array_set(v739, stdlib.checkedBigNumberify('./index.rsh:79:42:application', stdlib.UInt_max, '0'), v765);
          sim_r.txns.push({
            amt: v753,
            kind: 'from',
            to: v574,
            tok: v447
            });
          const v767 = true;
          const v768 = await txn1.getOutput('Schmuck_buy', 'v767', ctc3, v767);
          
          const v774 = stdlib.add(v474, stdlib.checkedBigNumberify('./index.rsh:82:72:decimal', stdlib.UInt_max, '1'));
          const v775 = stdlib.gt(v477, v774);
          const v776 = v775 ? v477 : v774;
          const v777 = stdlib.add(v478, v479);
          const v778 = stdlib.add(v479, stdlib.checkedBigNumberify('./index.rsh:86:97:decimal', stdlib.UInt_max, '1'));
          const v779 = v775 ? v480 : v778;
          const v780 = stdlib.div(v777, v774);
          const v781 = v775 ? v480 : v780;
          const v782 = stdlib.add(v481, v445);
          const v1512 = v774;
          const v1514 = v776;
          const v1515 = v777;
          const v1516 = v779;
          const v1517 = v781;
          const v1518 = v782;
          const v1520 = v766;
          const v1521 = v730;
          const v1522 = v766[stdlib.checkedBigNumberify('./index.rsh:72:30:application', stdlib.UInt_max, '0')];
          const v1523 = v1522[stdlib.checkedBigNumberify('./index.rsh:72:30:application', stdlib.UInt_max, '0')];
          const v1524 = stdlib.gt(v1523, stdlib.checkedBigNumberify('./index.rsh:72:45:decimal', stdlib.UInt_max, '0'));
          if (v1524) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              amt: v730,
              kind: 'from',
              to: v444,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              amt: v1523,
              kind: 'from',
              to: v444,
              tok: v447
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v447
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'Schmuck_sell0_75': {
          const v814 = v575[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc2, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v575], secs: v577, time: v576, didSend: v254, from: v574 } = txn1;
  switch (v575[0]) {
    case 'SchmecklerAPI_claimFees0_75': {
      const v578 = v575[1];
      return;
      break;
      }
    case 'Schmuck_buy0_75': {
      const v696 = v575[1];
      undefined /* setApiDetails */;
      const v707 = stdlib.add(v445, v479);
      const v730 = stdlib.add(v489, v707);
      ;
      const v731 = v488[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '0')];
      const v732 = v731[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '0')];
      const v736 = v731[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '1')];
      const v737 = v731[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '2')];
      const v738 = [v732, v736, v737];
      const v739 = stdlib.Array_set(v488, stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '0'), v738);
      ;
      const v753 = v696[stdlib.checkedBigNumberify('./index.rsh:74:7:spread', stdlib.UInt_max, '0')];
      const v754 = stdlib.eq(v753, stdlib.checkedBigNumberify('./index.rsh:78:26:decimal', stdlib.UInt_max, '1'));
      stdlib.assert(v754, {
        at: './index.rsh:78:15:application',
        fs: ['at ./index.rsh:77:17:application call to [unknown function] (defined at: ./index.rsh:77:17:function exp)'],
        msg: null,
        who: 'Schmuck_buy'
        });
      const v755 = v739[stdlib.checkedBigNumberify('./index.rsh:79:42:application', stdlib.UInt_max, '0')];
      const v756 = v755[stdlib.checkedBigNumberify('./index.rsh:79:42:application', stdlib.UInt_max, '0')];
      const v760 = stdlib.sub(v756, v753);
      const v763 = v755[stdlib.checkedBigNumberify('./index.rsh:79:42:application', stdlib.UInt_max, '1')];
      const v764 = v755[stdlib.checkedBigNumberify('./index.rsh:79:42:application', stdlib.UInt_max, '2')];
      const v765 = [v760, v763, v764];
      const v766 = stdlib.Array_set(v739, stdlib.checkedBigNumberify('./index.rsh:79:42:application', stdlib.UInt_max, '0'), v765);
      ;
      const v767 = true;
      const v768 = await txn1.getOutput('Schmuck_buy', 'v767', ctc3, v767);
      if (v254) {
        stdlib.protect(ctc9, await interact.out(v696, v768), {
          at: './index.rsh:74:8:application',
          fs: ['at ./index.rsh:74:8:application call to [unknown function] (defined at: ./index.rsh:74:8:function exp)', 'at ./index.rsh:80:8:application call to "k" (defined at: ./index.rsh:77:17:function exp)', 'at ./index.rsh:77:17:application call to [unknown function] (defined at: ./index.rsh:77:17:function exp)'],
          msg: 'out',
          who: 'Schmuck_buy'
          });
        }
      else {
        }
      
      const v774 = stdlib.add(v474, stdlib.checkedBigNumberify('./index.rsh:82:72:decimal', stdlib.UInt_max, '1'));
      const v775 = stdlib.gt(v477, v774);
      const v776 = v775 ? v477 : v774;
      const v777 = stdlib.add(v478, v479);
      const v778 = stdlib.add(v479, stdlib.checkedBigNumberify('./index.rsh:86:97:decimal', stdlib.UInt_max, '1'));
      const v779 = v775 ? v480 : v778;
      const v780 = stdlib.div(v777, v774);
      const v781 = v775 ? v480 : v780;
      const v782 = stdlib.add(v481, v445);
      const v1512 = v774;
      const v1514 = v776;
      const v1515 = v777;
      const v1516 = v779;
      const v1517 = v781;
      const v1518 = v782;
      const v1520 = v766;
      const v1521 = v730;
      const v1522 = v766[stdlib.checkedBigNumberify('./index.rsh:72:30:application', stdlib.UInt_max, '0')];
      const v1523 = v1522[stdlib.checkedBigNumberify('./index.rsh:72:30:application', stdlib.UInt_max, '0')];
      const v1524 = stdlib.gt(v1523, stdlib.checkedBigNumberify('./index.rsh:72:45:decimal', stdlib.UInt_max, '0'));
      if (v1524) {
        return;
        }
      else {
        ;
        ;
        return;
        }
      break;
      }
    case 'Schmuck_sell0_75': {
      const v814 = v575[1];
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
    SchmecklerAPI_claimFees0_75: ctc7,
    Schmuck_buy0_75: ctc6,
    Schmuck_sell0_75: ctc6
    });
  const ctc9 = stdlib.T_Null;
  
  
  const [v444, v445, v446, v447, v474, v477, v478, v479, v480, v481, v488, v489] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc1, ctc2, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1]);
  const v516 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:100:14:application call to [unknown function] (defined at: ./index.rsh:100:14:function exp)', 'at ./index.rsh:69:17:application call to "runSchmuck_sell0_75" (defined at: ./index.rsh:99:7:function exp)', 'at ./index.rsh:69:17:application call to [unknown function] (defined at: ./index.rsh:69:17:function exp)'],
    msg: 'in',
    who: 'Schmuck_sell'
    });
  const v517 = v516[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v520 = stdlib.eq(v517, stdlib.checkedBigNumberify('./index.rsh:100:36:decimal', stdlib.UInt_max, '1'));
  const v521 = v488[stdlib.checkedBigNumberify('./index.rsh:100:48:application', stdlib.UInt_max, '0')];
  const v522 = v521[stdlib.checkedBigNumberify('./index.rsh:100:48:application', stdlib.UInt_max, '0')];
  const v523 = stdlib.gt(v522, stdlib.checkedBigNumberify('./index.rsh:100:63:decimal', stdlib.UInt_max, '0'));
  const v524 = v520 ? v523 : false;
  const v525 = stdlib.gt(v474, stdlib.checkedBigNumberify('./index.rsh:100:96:decimal', stdlib.UInt_max, '0'));
  const v526 = v524 ? v525 : false;
  const v528 = stdlib.gt(v489, v480);
  const v529 = v526 ? v528 : false;
  stdlib.assert(v529, {
    at: './index.rsh:100:25:application',
    fs: ['at ./index.rsh:100:14:application call to [unknown function] (defined at: ./index.rsh:100:14:function exp)', 'at ./index.rsh:100:14:application call to [unknown function] (defined at: ./index.rsh:100:14:function exp)', 'at ./index.rsh:69:17:application call to "runSchmuck_sell0_75" (defined at: ./index.rsh:99:7:function exp)', 'at ./index.rsh:69:17:application call to [unknown function] (defined at: ./index.rsh:69:17:function exp)'],
    msg: null,
    who: 'Schmuck_sell'
    });
  const v533 = ['Schmuck_sell0_75', v516];
  
  const txn1 = await (ctc.sendrecv({
    args: [v444, v445, v446, v447, v474, v477, v478, v479, v480, v481, v488, v489, v533],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [v445, [[v517, v447]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v575], secs: v577, time: v576, didSend: v254, from: v574 } = txn1;
      
      switch (v575[0]) {
        case 'SchmecklerAPI_claimFees0_75': {
          const v578 = v575[1];
          
          break;
          }
        case 'Schmuck_buy0_75': {
          const v696 = v575[1];
          
          break;
          }
        case 'Schmuck_sell0_75': {
          const v814 = v575[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Schmuck_sell"
            });
          const v833 = v814[stdlib.checkedBigNumberify('./index.rsh:99:7:spread', stdlib.UInt_max, '0')];
          const v848 = stdlib.add(v489, v445);
          sim_r.txns.push({
            amt: v445,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v849 = v488[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '0')];
          const v850 = v849[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '0')];
          const v851 = stdlib.add(v850, v833);
          const v854 = v849[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '1')];
          const v855 = v849[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '2')];
          const v856 = [v851, v854, v855];
          const v857 = stdlib.Array_set(v488, stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '0'), v856);
          sim_r.txns.push({
            amt: v833,
            kind: 'to',
            tok: v447
            });
          const v905 = stdlib.eq(v833, stdlib.checkedBigNumberify('./index.rsh:103:26:decimal', stdlib.UInt_max, '1'));
          const v906 = v857[stdlib.checkedBigNumberify('./index.rsh:103:38:application', stdlib.UInt_max, '0')];
          const v907 = v906[stdlib.checkedBigNumberify('./index.rsh:103:38:application', stdlib.UInt_max, '0')];
          const v908 = stdlib.gt(v907, stdlib.checkedBigNumberify('./index.rsh:103:53:decimal', stdlib.UInt_max, '0'));
          const v909 = v905 ? v908 : false;
          const v910 = stdlib.gt(v474, stdlib.checkedBigNumberify('./index.rsh:103:86:decimal', stdlib.UInt_max, '0'));
          const v911 = v909 ? v910 : false;
          const v913 = stdlib.gt(v848, v480);
          const v914 = v911 ? v913 : false;
          ;
          const v918 = stdlib.sub(v848, v480);
          sim_r.txns.push({
            amt: v480,
            kind: 'from',
            to: v574,
            tok: undefined /* Nothing */
            });
          const v919 = true;
          const v920 = await txn1.getOutput('Schmuck_sell', 'v919', ctc3, v919);
          
          const v926 = stdlib.sub(v474, stdlib.checkedBigNumberify('./index.rsh:108:72:decimal', stdlib.UInt_max, '1'));
          const v927 = stdlib.sub(v478, v480);
          const v928 = stdlib.eq(v926, stdlib.checkedBigNumberify('./index.rsh:110:68:decimal', stdlib.UInt_max, '0'));
          const v929 = v928 ? v446 : v480;
          const v930 = stdlib.add(v481, v445);
          const v1576 = v926;
          const v1578 = v477;
          const v1579 = v927;
          const v1580 = v929;
          const v1581 = v480;
          const v1582 = v930;
          const v1584 = v857;
          const v1585 = v918;
          if (v908) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              amt: v918,
              kind: 'from',
              to: v444,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              amt: v907,
              kind: 'from',
              to: v444,
              tok: v447
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v447
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
    tys: [ctc0, ctc1, ctc1, ctc2, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v575], secs: v577, time: v576, didSend: v254, from: v574 } = txn1;
  switch (v575[0]) {
    case 'SchmecklerAPI_claimFees0_75': {
      const v578 = v575[1];
      return;
      break;
      }
    case 'Schmuck_buy0_75': {
      const v696 = v575[1];
      return;
      break;
      }
    case 'Schmuck_sell0_75': {
      const v814 = v575[1];
      undefined /* setApiDetails */;
      const v833 = v814[stdlib.checkedBigNumberify('./index.rsh:99:7:spread', stdlib.UInt_max, '0')];
      const v848 = stdlib.add(v489, v445);
      ;
      const v849 = v488[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '0')];
      const v850 = v849[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '0')];
      const v851 = stdlib.add(v850, v833);
      const v854 = v849[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '1')];
      const v855 = v849[stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '2')];
      const v856 = [v851, v854, v855];
      const v857 = stdlib.Array_set(v488, stdlib.checkedBigNumberify('./index.rsh:69:17:dot', stdlib.UInt_max, '0'), v856);
      ;
      const v905 = stdlib.eq(v833, stdlib.checkedBigNumberify('./index.rsh:103:26:decimal', stdlib.UInt_max, '1'));
      const v906 = v857[stdlib.checkedBigNumberify('./index.rsh:103:38:application', stdlib.UInt_max, '0')];
      const v907 = v906[stdlib.checkedBigNumberify('./index.rsh:103:38:application', stdlib.UInt_max, '0')];
      const v908 = stdlib.gt(v907, stdlib.checkedBigNumberify('./index.rsh:103:53:decimal', stdlib.UInt_max, '0'));
      const v909 = v905 ? v908 : false;
      const v910 = stdlib.gt(v474, stdlib.checkedBigNumberify('./index.rsh:103:86:decimal', stdlib.UInt_max, '0'));
      const v911 = v909 ? v910 : false;
      const v913 = stdlib.gt(v848, v480);
      const v914 = v911 ? v913 : false;
      stdlib.assert(v914, {
        at: './index.rsh:103:14:application',
        fs: ['at ./index.rsh:102:17:application call to [unknown function] (defined at: ./index.rsh:102:17:function exp)'],
        msg: null,
        who: 'Schmuck_sell'
        });
      const v918 = stdlib.sub(v848, v480);
      ;
      const v919 = true;
      const v920 = await txn1.getOutput('Schmuck_sell', 'v919', ctc3, v919);
      if (v254) {
        stdlib.protect(ctc9, await interact.out(v814, v920), {
          at: './index.rsh:99:8:application',
          fs: ['at ./index.rsh:99:8:application call to [unknown function] (defined at: ./index.rsh:99:8:function exp)', 'at ./index.rsh:106:8:application call to "k" (defined at: ./index.rsh:102:17:function exp)', 'at ./index.rsh:102:17:application call to [unknown function] (defined at: ./index.rsh:102:17:function exp)'],
          msg: 'out',
          who: 'Schmuck_sell'
          });
        }
      else {
        }
      
      const v926 = stdlib.sub(v474, stdlib.checkedBigNumberify('./index.rsh:108:72:decimal', stdlib.UInt_max, '1'));
      const v927 = stdlib.sub(v478, v480);
      const v928 = stdlib.eq(v926, stdlib.checkedBigNumberify('./index.rsh:110:68:decimal', stdlib.UInt_max, '0'));
      const v929 = v928 ? v446 : v480;
      const v930 = stdlib.add(v481, v445);
      const v1576 = v926;
      const v1578 = v477;
      const v1579 = v927;
      const v1580 = v929;
      const v1581 = v480;
      const v1582 = v930;
      const v1584 = v857;
      const v1585 = v918;
      if (v908) {
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
    impure: [`SchmecklerAPI_claimFees()byte`, `Schmuck_buy(uint64)byte`, `Schmuck_sell(uint64)byte`],
    pure: [],
    sigs: [`SchmecklerAPI_claimFees()byte`, `Schmuck_buy(uint64)byte`, `Schmuck_sell(uint64)byte`]
    },
  appApproval: `BiANAAEECNiolO8N1vCfvA4DICgwOAKgjQYmAwEBAQAAIjUAMRhBBNIqZEkiWzUBJVs1AjYaABdJQQBKIjUEIzUGSSEEDEAAKUkhBQxAABAhBRJENhoBNf8oNP9QQgBEIQQSRDYaATX/gAECNP9QQgAygaqRmGQSRCo1/yk0/1Alr1BCAB42GgIXNQQ2GgM2GgEXSSMMQALBSSEGDEACPiEGEkQkNAESRDQESSISTDQCEhFEKWQoZFBJNQNJSkpKSkpXACA1/yEHWzX+IQhbNf0hCVs1/CEKWzX7gUBbNfqBSFs1+YFQWzX4gVhbNfeBYFs19ldoETX1gXlbNfRJNQU184AEkfGnmjTzULA08yJVSSMMQAFxSSELDEAArCELEkQ081cBCDXyNPIXNfE09DT+CDXwNP6IA8o09VcAEUk17yJbNPEIFjTvVwgIUDTvVxABUDXuNPE0/IgDvzTxIxI07lcAESJbIg0QNPsiDRA08DT3DRBEsSKyATT3sggjshAxALIHs4AJAAAAAAAAA5cBsCg1BzT7Iwk17TT/NP40/TT8NO0jNPo0+TT3CTT3NP007SISTTT3NPY0/ggyBjTuNPA09wlCAi5INPNXAQg18jT+NPgINfE08YgDJjT1VwARSTXwVwAINPBXCAhQNPBXEAFQNe808hdJNe4jEkQ071cAETXtsSKyATTushIkshAxALIUNPyyEbOACQAAAAAAAAL/AbAoNQc0+yMINew0+jTsDTXrNPk0+Ag16jT/NP40/TT8NOwjNOw0+jTrTTTqNPgjCDT3NOtNNOo07Ao09zTrTTT2NP4IMgY07SJbNO4JFjTtVwgIUDTtVxABUDT0NPEIQgFwSDT1VwARNfKxIrIBNPayCCOyEDT/sgezgAkAAAAAAAACcwGwKDUHNP80/jT9NPw0+yM0+jT5NPg09yIyBjTyVwAINPJXCAhQNPJXEAFQNPQ09glCARojEkQjNAESRDQESSISTDQCEhFEKWRJNQNJSklXACA1/yEIWzX+IQlbNf0hCls1/FdAETX7gASai5F0sDT7VwARNfo0/DT9iAH1NP8xABJENP80AyEHWzT+NP0iIyIiNP4iIjIGNPoiWzT8CBY0+lcICFA0+lcQAVAiQgCeSCI0ARJENARJIhJMNAISEURJNQVJSiJbNf8lWzX+gRBbNf2BGFs1/IAE9u2r0jT/FlA0/hZQNP0WUDT8FlCwIQyIAWaBEa9JNftXABE1+iWvNPpXCAhQNPpXEAFQNfkhDIgBRrEisgEishIkshAyCrIUNP2yEbMxADT/FlA0/hZQNP0WUDT8FlA0+VApSwFXAFFnSCM1ATIGNQJCAM81/zX+Nf01/DX7Nfo1+TX4Nfc19jX1NfQ18zXyNP5XABEiWzXxNPc08SINEEEARjTyNPMWUDT0FlA09RZQNPYWUDT4FlA0+RZQNPoWUDT7FlA0/BZQNP5QNP8WUClLAVcAf2coSwFXfwJnSCQ1ATIGNQJCAFqxIrIBNP+yCCOyEDTysgezsSKyATTxshIkshA08rIUNPWyEbOxIrIBIrISJLIQMgmyFTIKshQ09bIRs0IAADEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjUBIjUCQv/DNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBAkEkQ4EU8CEkQ4EhJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 129,
  unsupported: [],
  version: 10,
  warnings: []
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:50:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:139:11:after expr stmt semicolon',
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
  "Schmuck_sell": Schmuck_sell
  };
export const _APIs = {
  SchmecklerAPI: {
    claimFees: SchmecklerAPI_claimFees
    },
  Schmuck: {
    buy: Schmuck_buy,
    sell: Schmuck_sell
    }
  };
