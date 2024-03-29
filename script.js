// !javascript bank management app


// *deposit button function
function depositAdd() {

    // deposit input value
    const depositAm = document.getElementById('depositAmount');
    const depositNum = depositAm.value.trim();

    // check validity of deposit
    if (depositNum === '' || depositNum === NaN || depositNum < 0) {
        alert('Please Enter A Valid Amount');
        return;
    }

    // update deposit amount 
    const currentDeposit = document.getElementById('currentDeposit');
    currentDeposit.innerText = depositNum;

    // update balance after adding the new deposit to it
    const currentBalance = document.getElementById('balanceAmount');
    currentBalance.innerText = Number(currentBalance.innerText) + Number(depositNum);

    // updated deposit amount back to empty for next use
    depositAm.value = '';
}

// *withdraw button function
function withdrawAdd() {

    // withdraw input value
    const withdrawAm = document.getElementById('withdrawAmount');
    const withdrawNum = withdrawAm.value.trim();

    //! place currentBalance here for fix in case of insufficient balance
    const currentBalance = document.getElementById('balanceAmount');

    // check validity of withdraw
    if (withdrawNum === '' || withdrawNum === NaN || withdrawNum < 0) {
        alert('Please Enter A Valid Amount');
        return;
    }

    // updated withdraw amount
    const currentWithdraw = document.getElementById('withdraw');
    currentWithdraw.innerText = withdrawNum;

    //! check balance is sufficient or not for withdraw(if withdraw is greater than balance then show alert & do not update balance)
    if (Number(withdrawNum) > Number(currentBalance.innerText)) {

        alert('Insufficient Balance');

        // updated withdraw amount back to empty when insufficient balance
        currentWithdraw.innerText = 0;
        return;
    }

    //* updated balance if balance is sufficient for withdraw
    else {
        // update balance after adding the new withdraw to it
        currentBalance.innerText = Number(currentBalance.innerText) - Number(withdrawNum);
    }
    withdrawAm.value = '';
}

