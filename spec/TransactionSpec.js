describe("Transaction", function(){
  var transaction;
  var currentDate;

  beforeEach(function(){
    transaction = new Transaction()
    currentDate = new Date()
  });

  it("Makes a new transaction with amount and date", function(){
    transaction.makeRecord(100, currentDate)
    expect(transaction.getRecord()).toEqual({ amount: 100, date: currentDate })
  });

  it("Can't overwrite a record once recorded", function(){
    transaction.makeRecord(100, currentDate)
    expect(function(){transaction.makeRecord(100, currentDate)}).toThrowError("Cannot overwrite a transaction once recorded");
  })

});
