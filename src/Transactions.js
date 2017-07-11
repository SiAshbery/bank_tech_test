function Transactions() {
  this.transactionHistory = []
}

Transactions.prototype.recordDepositTransaction = function(amount,
                                                  date = new Date(),
                                                  transaction = new Transaction()) {

  transaction.makeRecord(amount, date)
  this.transactionHistory.push(transaction)

};

Transactions.prototype.getTransactionHistory = function() {
  return this.transactionHistory
}
