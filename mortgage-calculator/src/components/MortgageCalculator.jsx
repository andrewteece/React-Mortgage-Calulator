function MortgageCalculator() {
  return (
    <div className="mortgage-wrapper">
      <h2>Mortgage Calculator</h2>
      <form>
        <div className="form-group">
          <label>Home Price ($):</label>
          <input type="number" name="amount" required />
        </div>
        <div className="form-group">
          <label>Down Payment ($):</label>
          <input type="number" name="downPayment" required />
        </div>
        <div className="form-group">
          <label>Interest Rate (%):</label>
          <input type="number" name="interestRate" required />
        </div>
        <div className="form-group">
          <label>Loan Term (years):</label>
          <input type="number" name="loanTerm" required />
        </div>
        <button type="submit">Calculate</button>
      </form>
    </div>
  );
}

export default MortgageCalculator;
