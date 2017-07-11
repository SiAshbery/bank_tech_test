function Transactions() {
  this.transactionHistory = []
}

Transactions.prototype.recordTransaction = function(amount,
                                                  date = new Date(),
                                                  transaction = new Transaction()) {

  transaction.writeRecord(amount, date)
  this.transactionHistory.push(transaction)

};

Transactions.prototype.getTransactionHistory = function() {
  return this.transactionHistory
}
