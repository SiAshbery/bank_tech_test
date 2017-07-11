describe("Transactions", function() {
  var transactions;
  var transaction;
  var secondTransaction;

  beforeEach(function() {
    transactions = new Transactions();
    transaction = new Transaction();
    secondTransaction = new Transaction();
  });

  describe("Transaction History", function(){

    it("Can record a deposit Transaction", function() {
      spyOn(transaction, "writeRecord");
      transactions.recordTransaction(100, "date", transaction);
      expect(transaction.writeRecord).toHaveBeenCalledWith(100, "date");
    });

    it("Can record a withdrawal Transaction", function() {
      spyOn(transaction, "writeRecord");
      transactions.recordTransaction(-100, "date", transaction);
      expect(transaction.writeRecord).toHaveBeenCalledWith(-100, "date");
    });

    it("Returns transaction history", function() {
      transactions.recordTransaction(100, "date", transaction)
      expect(transactions.getTransactionHistory()).toEqual([ transaction ])
    });
  });

  describe("Balance", function(){

    it("returns a balance", function() {
      expect(transactions.getBalance()).toEqual(0)
    });

    it("returns a balance based on transaction history", function() {
      transactions.recordTransaction(100, "date", transaction);
      transactions.recordTransaction(-50, "date", secondTransaction);
      expect(transactions.getBalance()).toEqual(50)
    });
  });
});
