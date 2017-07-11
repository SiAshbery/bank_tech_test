describe("Transactions", function() {
  var transactions;
  var transaction;

  beforeEach(function() {
    transactions = new Transactions();
    transaction = new Transaction()
  });

  it("Can make a deposit", function() {
    spyOn(transaction, "makeRecord");
    transactions.recordDepositTransaction(100, "date", transaction);
    expect(transaction.makeRecord).toHaveBeenCalledWith(100, "date");
  });

});
