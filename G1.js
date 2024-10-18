function calculateTax(income) {
    const taxRate = 0.15;
    const taxPayable = income * taxRate;
    return taxPayable;
  }
  
  calculateTax(500000);
  console.log("Tax payable: " + taxPayable+ " shillings.");