describe("Transaction", function(){
  var transaction;
  var currentDate;

  beforeEach(function(){
    transaction = new Transaction()
    currentDate = new Date()
  });

  describe("Writing Record", function(){

    it("Writes a new transaction with amount and date", function(){
      transaction.writeRecord(100, currentDate)
      expect(transaction.record).toBeTruthy()
    });
  });

  describe("Accessing Atributes", function(){

    it("Can get an amount", function(){
      transaction.writeRecord(100, currentDate)
      expect(transaction.getAmount()).toEqual(100)
    });

    it("Can get Date", function(){
      transaction.writeRecord(100, currentDate)
      expect(transaction.getDate()).toEqual(currentDate)
    });
  });

  describe("Error Messages", function(){

    it("Throws error when attempting to overwrite record", function(){
      transaction.writeRecord(100, currentDate)
      expect(function(){ transaction.writeRecord(100, currentDate) }).toThrowError("Cannot overwrite a transaction once recorded");
    })

    it("Throws error when attempting to get amount attribute before record is written", function(){
      expect(function(){ transaction.getAmount() }).toThrowError("Record has yet to been written");
    })

    it("Throws error when attempting to get date attribute before record is written", function(){
      expect(function(){ transaction.getDate() }).toThrowError("Record has yet to been written");
    })

  });
});
