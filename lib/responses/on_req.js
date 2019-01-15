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
const OnReq = (trade) => [
  // MARKET
  [ 0,
    'n',
    [ Date.now(),
      'on-req',
      null,
      null,
      [ trade.id,                 // ID
        null,                     // GID
        trade.cid,                // CID
        trade.symbol,             // SYMBOL
        trade.created,            // MTS_CREATE
        trade.updated,            // MTS_UPDATE
        trade.amount,              // AMOUNT
        trade.amount,              // AMOUNT_ORIG
        trade.type,             // TYPE
        null,               //
        null,
        null,
        trade.flags,               // FLAGS
        'ACTIVE',           // ORDER_STATUS
        null,
        null,
        trade.price,
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
      `Submitting ${trade.type.toLowerCase()} ${trade.amount > 0 ? 'buy' : 'sell'} order for ${trade.amount} ${trade.symbol.substring(1, 4)}.` ] ]
]

// Order Cancelled
const Oc = (trade, filled = false) => [
  [ 0,
    'oc',
    [ trade.id,
      null,
      trade.cid,
      trade.symbol,
      trade.created,
      Date.now() + 1,
      0,
      trade.amount,
      trade.type,
      null,
      null,
      null,
      0,
      `EXECUTED @ ${trade.price}(${trade.amount})`,
      null,
      null,
      trade.price,
      trade.price,
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
const Pn = (trade) => [
  [ 0,
    'pn',
    [ trade.symbol, 'ACTIVE', trade.amount, trade.price, 0, 0, null, null, null, null ] ]
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
const Te = (trade) => [
  [ 0,
    'te',
    [ trade.tradeId,
      trade.symbol,
      Date.now(),
      trade.id,
      trade.amount,
      trade.price,
      trade.type,
      trade.price,
      -1,
      null,
      null,
      trade.cid ] ]
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
const Tu = (trade) => [
  [ 0,
    'tu',
    [ trade.tradeId,
      trade.symbol,
      Date.now(),
      trade.id,
      trade.amount,
      trade.price,
      trade.type,
      trade.price,
      -1,
      trade.amount * trade.price * 0.002,
      'USD'
    ] ]
]

const On = (trade) => [
  [ 0,
    'on',
    [ trade.id,
      null,
      trade.cid,
      trade.symbol,
      trade.created,
      Date.now(),
      trade.amount,
      trade.amount,
      trade.type,
      null,
      null,
      null,
      trade.flags,
      'ACTIVE',
      null,
      null,
      trade.price,
      0,
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

module.exports = {
  OnReq,
  Oc,
  Pn,
  Te,
  Tu,
  On
}
