function Transaction() {
  this.record = {}
};

Transaction.prototype.getRecord = function() {
  return this.record
};

Transaction.prototype.makeRecord = function(amount, date) {
  this.record = { amount: amount, date: date }

}
