describe("Transaction", function(){
  var transaction;
  var currentDate;

  beforeEach(function(){
    transaction = new Transaction()
    currentDate = new Date()
  });

  it("Makes a new transaction with amount and date", function(){
    transaction.writeRecord(100, currentDate)
    expect(transaction.record).toBeTruthy()
  });

  it("Can get an amount", function(){
    transaction.writeRecord(100, currentDate)
    expect(transaction.getAmount()).toEqual(100)
  });

  it("Can get Date", function(){
    transaction.writeRecord(100, currentDate)
    expect(transaction.getDate()).toEqual(currentDate)
  });

  it("Can't overwrite a record once recorded", function(){
    transaction.writeRecord(100, currentDate)
    expect(function(){ transaction.writeRecord(100, currentDate) }).toThrowError("Cannot overwrite a transaction once recorded");
  })

  it("Can't return a record until one is made", function(){
    expect(function(){ transaction.getRecord() }).toThrowError("Record has yet to been written");
  })

});
