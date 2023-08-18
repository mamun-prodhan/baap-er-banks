document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositAmount = parseFloat(depositField.value);
    // deposit total calculation
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotal = parseFloat(depositTotalElement.innerText);
    const currentDepositTotal = newDepositAmount + previousDepositTotal;
    depositTotalElement.innerText = currentDepositTotal;

    // Balance calculation
    const totalBalanceElement = document.getElementById('balance-total');
    const previousTotalBalance = parseFloat(totalBalanceElement.innerText);
    const currentTotalBalance = previousTotalBalance + newDepositAmount;
    totalBalanceElement.innerText = currentTotalBalance;

    depositField.value = '';
})