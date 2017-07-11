function Transactions() {
  this.transactionHistory = []
  this.INITIALBALANCE = 0
};

Transactions.prototype.recordTransaction = function(amount,
                                                  date = new Date(),
                                                  transaction = new Transaction()) {

  transaction.writeRecord(amount, date)
  this.transactionHistory.push(transaction)

};

Transactions.prototype.getTransactionHistory = function() {
  return this.transactionHistory
};

Transactions.prototype.getBalance = function() {
  if(this.getTransactionHistory().length > this.INITIALBALANCE ) {
    return this.calculateBalance()
  } else {
    return this.INITIALBALANCE
  }
};

Transactions.prototype.calculateBalance = function() {
  return this.getTransactionHistory().reduce(function(balance, transaction){
    return balance + transaction.getAmount()
  }, this.INITIALBALANCE );
};
