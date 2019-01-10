// Notification, New Order Request
// [
//   CHAN_ID,
//   'os',
//   [
//     [
//       ID,
//       GID,
//       CID,
//       SYMBOL,
//       MTS_CREATE,
//       MTS_UPDATE,
//       AMOUNT,
//       AMOUNT_ORIG,
//       TYPE,
//       TYPE_PREV,
//       MTS_TIF,
//       _PLACEHOLDER,
//       FLAGS,
//       STATUS,
//       _PLACEHOLDER,
//       _PLACEHOLDER,
//       PRICE,
//       PRICE_AVG,
//       PRICE_TRAILING,
//       PRICE_AUX_LIMIT,
//       _PLACEHOLDER,
//       _PLACEHOLDER,
//       _PLACEHOLDER,
//       NOTIFY,
//       _PLACEHOLDER,
//       PLACED_ID,
//       ...
//     ],
//     ...
//   ]
const OnReq = (msg) => [
  [ 0,
    'n',
    [ Date.now(),
      'on-req',
      null,
      null,
      [ 1,                // ID
        null,               // GID
        msg[3].cid,      // CID
        msg[3].symbol,          // SYMBOL
        Date.now(),      // MTS_CREATE
        Date.now(),      // MTS_UPDATE
        msg[3].amount,              // AMOUNT
        msg[3].amount,              // AMOUNT_ORIG
        msg[3].type,             // TYPE
        null,               //
        null,
        null,
        msg[3].flags,               // FLAGS
        'ACTIVE',           // ORDER_STATUS
        null,
        null,
        1000,
        0,
        0,
        0,
        null,
        null,
        null,
        0,
        null,
        null,
        null,
        null,
        'API>BFX',
        null,
        null,
        null ],
      null,
      'SUCCESS',
      `Submitting ${msg[3].type.toLowerCase()} ${msg[3].amount > 0 ? 'buy' : 'sell'} order for ${msg[3].amount} ${msg[3].symbol.substring(1, 4)}.` ] ]
]

// Order Cancelled
const Oc = (msg, filled = false) => [
  [ 0,
    'oc',
    [ 1,
      null,
      msg[3].cid,
      msg[3].symbol,
      Date.now(),
      Date.now(),
      0,
      msg[3].amount,
      msg[3].type,
      null,
      null,
      null,
      0,
      `EXECUTED @ 1000(${msg[3].amount})`,
      null,
      null,
      1000,
      1000,
      0,
      0,
      null,
      null,
      null,
      0,
      0,
      null,
      null,
      null,
      'API>BFX',
      null,
      null,
      null ] ]
]

// New Position
const Pn = (msg) => [
  [ 0,
    'pn',
    [ msg[3].symbol, 'ACTIVE', msg[3].amount, 1000, 0, 0, null, null, null, null ] ]
]

// Trade Executed
// [
// CHAN_ID,
//   'te',
//   [
//     ID,
//     SYMBOL,
//     MTS_CREATE,
//     ORDER_ID,
//     EXEC_AMOUNT,
//     EXEC_PRICE,
//     ORDER_TYPE,
//     ORDER_PRICE,
//     MAKER,
//     ...
//   ]
// ]
const Te = (msg) => [
  [ 0,
    'te',
    [ 1,
      msg[3].symbol,
      Date.now(),
      1,
      msg[3].amount,
      1000,
      'MARKET',
      1000,
      -1,
      null,
      null,
      msg[3].cid ] ]
]

// Trade Update
//   [
//   CHAN_ID,
//     'tu',
//     [
//       ID,
//       SYMBOL,
//       MTS_CREATE,
//       ORDER_ID,
//       EXEC_AMOUNT,
//       EXEC_PRICE,
//       ORDER_TYPE,
//       ORDER_PRICE,
//       MAKER,
//       FEE,
//       FEE_CURRENCY,
//       ...
//     ]
//   ]
const Tu = (msg) => [
  [ 0,
    'tu',
    [ 1,
      msg[3].symbol,
      Date.now(),
      1,
      msg[3].amount,
      1000,
      'MARKET',
      1000,
      -1,
      null,
      null,
      Date.now() ] ]
]

module.exports = {
  OnReq,
  Oc,
  Pn,
  Te,
  Tu
}
