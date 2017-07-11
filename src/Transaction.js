function Transaction() {
  this.errors = {recordNotWritten: new Error("Record has yet to been written"),
                  recordAlreadyWritten: new Error("Cannot overwrite a transaction once recorded") }
};

Transaction.prototype.getAmount = function() {
  if(this.record) {
    return this.record.amount
  } else {
    throw this.errors.recordNotWritten
  };
};

Transaction.prototype.getDate = function() {
  if(this.record) {
    return this.record.date
  } else {
    throw this.errors.recordNotWritten
  };
};

Transaction.prototype.writeRecord = function(amount, date) {
  if(this.record) {
    throw this.errors.recordAlreadyWritten
  } else {
    this.record = { amount: amount, date: date }
  };
};
