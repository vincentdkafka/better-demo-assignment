"use client"

import React, { useState } from "react";

const MortgageCalculator = () => {
  const [homePrice, setHomePrice] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [downPaymentPercent, setDownPaymentPercent] = useState("");
  const [loanLength, setLoanLength] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const principal = parseFloat(homePrice) - parseFloat(downPayment || 0);
    const monthlyInterest = parseFloat(interestRate) / 100 / 12;
    const numberOfPayments = parseFloat(loanLength) * 12;

    const monthly =
      (principal *
        monthlyInterest *
        Math.pow(1 + monthlyInterest, numberOfPayments)) /
      (Math.pow(1 + monthlyInterest, numberOfPayments) - 1);

    setMonthlyPayment(isFinite(monthly) ? monthly.toFixed(2) : 0);
  };

  const handleDownPaymentPercentChange = (percent) => {
    setDownPaymentPercent(percent);
    if (homePrice) {
      const dp = (parseFloat(percent) / 100) * parseFloat(homePrice);
      setDownPayment(dp.toFixed(2));
    }
  };

  const handleDownPaymentChange = (dp) => {
    setDownPayment(dp);
    if (homePrice) {
      const percent = (parseFloat(dp) / parseFloat(homePrice)) * 100;
      setDownPaymentPercent(percent.toFixed(2));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Mortgage Calculator
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block font-medium text-gray-700 mb-1">
                Home Price ($)
              </label>
              <input
                type="number"
                value={homePrice}
                onChange={(e) => setHomePrice(e.target.value)}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="500000"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block font-medium text-gray-700 mb-1">
                Down Payment ($)
              </label>
              <input
                type="number"
                value={downPayment}
                onChange={(e) => handleDownPaymentChange(e.target.value)}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="100000"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block font-medium text-gray-700 mb-1">
                Down Payment (%)
              </label>
              <input
                type="number"
                value={downPaymentPercent}
                onChange={(e) => handleDownPaymentPercentChange(e.target.value)}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="20"
                required
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block font-medium text-gray-700 mb-1">
                Length of Loan (years)
              </label>
              <input
                type="number"
                value={loanLength}
                onChange={(e) => setLoanLength(e.target.value)}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="30"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block font-medium text-gray-700 mb-1">
                Interest Rate (%)
              </label>
              <input
                type="number"
                step="0.01"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="6.5"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block font-medium text-gray-700 mb-1">
                ZIP Code
              </label>
              <input
                type="text"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="10001"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white font-bold p-4 rounded-md hover:bg-green-700 transition-colors duration-200"
          >
            Calculate
          </button>
        </form>

        {monthlyPayment !== null && (
          <div className="mt-8 p-6 bg-green-50 rounded-md text-center">
            <h2 className="text-xl font-semibold text-green-700 mb-2">
              Estimated Monthly Payment
            </h2>
            <p className="text-2xl font-bold text-green-900">
              ${parseFloat(monthlyPayment).toLocaleString()}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MortgageCalculator;
