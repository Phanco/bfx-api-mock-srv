class Trade {
  constructor (id, cid, price, symbol, amount, flags, type) {
    this.id = id
    this.cid = cid
    this.tradeId = Math.floor(Math.random() * 10000)
    this.price = Number(price)
    this.symbol = symbol
    this.amount = Number(amount)
    this.flags = flags
    this.type = type
    this.created = Date.now()
    this.updated = Date.now()
  }
}

module.exports = Trade
