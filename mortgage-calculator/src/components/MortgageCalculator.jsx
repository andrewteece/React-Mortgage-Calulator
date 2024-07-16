import { useState } from 'react';
import './MortgageCalculator.css';

const initialState = {
  amount: '',
  downPayment: '',
  interestRate: '',
  loanTerm: '',
};

function MortgageCalculator() {
  const [formData, setFormData] = useState(initialState);
  const [payment, setPayment] = useState(null);
  const [total, setTotal] = useState(null);
  const [interes, setInterest] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    calculateMonthlyPayment();
  };

  const calculateMonthlyPayment = () => {
    const { amount, downPayment, interestRate, loanTerm } = formData;

    const loanAmount =
      parseFloat(amount) - (downPayment ? parseFloat(downPayment) : 0);

    const r = parseFloat(interestRate) / 100 / 12;
    const n = parseFloat(loanTerm) * 12;

    const numerator = loanAmount * r * Math.pow(1 + r, n);
    const denumerator = Math.pow(1 + r, n) - 1;

    const monthlyPayment = (numerator / denumerator).toFixed(2);
    setPayment(monthlyPayment);
    const totalPayable = (monthlyPayment * n).toFixed(2);
    setTotal(totalPayable);
    const totalInterest = (totalPayable - loanAmount).toFixed(2);
    setInterest(totalInterest);
  };

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
