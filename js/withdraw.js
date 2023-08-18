document.getElementById("btn-withdraw").addEventListener("click", function () {
  // getting the input field value
  const withdrawField = document.getElementById("withdraw-field");
  const newWithdrawAmount = parseFloat(withdrawField.value);
  // getting withdraw previous total
  const withdrawTotalElement = document.getElementById("withdraw-total");
  const previousWithdrawTotal = parseFloat(withdrawTotalElement.innerText);

  // set balance
  // get previous balance
  const totalBalanceElement = document.getElementById("balance-total");
  // getting previous balance
  const previousBalanceTotal = parseFloat(totalBalanceElement.innerText);

  if (newWithdrawAmount > previousBalanceTotal) {
    alert("Baap er bank a ato taka nai");
    return;
  }

  // set the withdraw total
  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  withdrawTotalElement.innerText = currentWithdrawTotal;
  
  const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  totalBalanceElement.innerText = currentBalanceTotal;

  // set empty string in input field
  withdrawField.value = "";
});
