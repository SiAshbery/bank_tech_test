describe("Transactions", function() {
  var transactions;
  var transaction;

  beforeEach(function() {
    transactions = new Transactions();
    transaction = new Transaction()
  });

  it("Can record a Transaction", function() {
    spyOn(transaction, "writeRecord");
    transactions.recordTransaction(100, "date", transaction);
    expect(transaction.writeRecord).toHaveBeenCalledWith(100, "date");
  });

  it("Returns transaction history", function() {
    transactions.recordTransaction(100, "date", transaction)
    expect(transactions.getTransactionHistory()).toEqual([ transaction ])
  });

});
