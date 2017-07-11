function Transaction() {
  this.record = {}
};

Transaction.prototype.getRecord = function() {
  return this.record
};

Transaction.prototype.makeRecord = function(amount, date) {
  if(this.record.hasOwnProperty("amount")) {
    throw new Error("Cannot overwrite a transaction once recorded")
  } else {
    this.record = { amount: amount, date: date }
  };
};
