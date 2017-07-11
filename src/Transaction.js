function Transaction() {
};

Transaction.prototype.getRecord = function() {
  if(this.record) {
    return this.record
  } else {
    throw new Error("Record has yet to been written")
  };
};

Transaction.prototype.makeRecord = function(amount, date) {
  if(this.record) {
    throw new Error("Cannot overwrite a transaction once recorded")
  } else {
    this.record = { amount: amount, date: date }
  };
};
