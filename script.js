// !javascript bank management app


// *deposit button function
function depositAdd() {

    // deposit input value
    const depositAm = document.getElementById('depositAmount');
    const depositNum = depositAm.value.trim();

    if (depositNum === '' || depositNum === NaN || depositNum < 0) {
        alert('Please Enter A Valid Amount');
        return;
    }

    const currentDeposit = document.getElementById('currentDeposit');

    // update deposit amount 
    currentDeposit.innerText = depositNum;

    const currentBalance = document.getElementById('balanceAmount');

    // update balance after adding the new deposit to it
    currentBalance.innerText = Number(currentBalance.innerText) + Number(depositNum);
    depositAm.value = '';
}

// *withdraw button function
function withdrawAdd() {

    // withdraw input value
    const withdrawAm = document.getElementById('withdrawAmount');

    const withdrawNum = withdrawAm.value.trim();

    if (withdrawNum === '' || withdrawNum === NaN || withdrawNum < 0 ) {

       
        alert('Please Enter A Valid Amount');
        return;
    }

    const currentWithdraw = document.getElementById('withdraw');

    // update withdraw amount
    currentWithdraw.innerText = withdrawNum;

    
    const currentBalance = document.getElementById('balanceAmount');

    // update balance after adding the new withdraw to it
    
   
    if (currentBalance.innerText > 0 || withdrawNum < currentBalance.innerText) {
       
        currentBalance.innerText = Number(currentBalance.innerText) - Number(withdrawNum);
    
      
    } else {
        currentBalance.innerText = 0;
        currentWithdraw.innerText=0;
       

        alert('Insufficient Balance');
    }
    if(currentBalance.innerText < withdrawNum){
        alert('Insufficient Balance');
      currentBalance.innerText =Number(currentBalance.innerText) + Number(withdrawNum);
      currentWithdraw.innerText=0;
    }
    
    withdrawAm.value = '';
}

