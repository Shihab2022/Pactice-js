//module 26-7 update deposite and balence 

// handle deposit button event

document.getElementById('deposit-button').addEventListener('click', function() {

    //get amount of deposit

    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);

    // update deposite total amount

    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;

    // update account balence
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceAmount + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;
    // clear the deposit input field
    depositInput.value = '';
})


// handel withdraw event

document.getElementById('withdraw-button').addEventListener('click', function() {


    const withDrawInput = document.getElementById('withdraw-input');
    // const withDrawAmount = parseFloat(withDrawInput.value);
    const withDrawAmountText = withDrawInput.value;
    const newWithdrawAmount = parseFloat(withDrawAmountText);
    // console.log(newWithdrawAmount);
    // set withdroe total
    const withdrawTotal = document.getElementById('withdraw-total');
    // console.log(withdrawTotal);
    const previousWithdrowtext = withdrawTotal.innerText;
    const previousWithdrowTotal = parseFloat(previousWithdrowtext);

    const newWithdrowTotal = previousWithdrowTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrowTotal;


    // update balenseAmount

    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceAmount + previousWithdrowTotal;
    balanceTotal.innerText = newBalanceTotal;
    //clear withrow input
    withDrawInput.value = '';
})