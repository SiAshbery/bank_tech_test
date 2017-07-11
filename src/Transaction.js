function Transaction() {
};

Transaction.prototype.getRecord = function() {
  if(this.record) {
    return this.record
  } else {
    throw new Error("Record has yet to been written")
  };
};

Transaction.prototype.getAmount = function() {
  if(this.record) {
    return this.record.amount
  } else {
    throw new Error("Record has yet to been written")
  };
};

Transaction.prototype.getDate = function() {
  if(this.record) {
    return this.record.date
  } else {
    throw new Error("Record has yet to been written")
  };
};

Transaction.prototype.writeRecord = function(amount, date) {
  if(this.record) {
    throw new Error("Cannot overwrite a transaction once recorded")
  } else {
    this.record = { amount: amount, date: date }
  };
};
