document.getElementById('cash-out-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const cashOutAmount = getInputValueById('cash-out-amount');
        const passNumber = getPassById('cash-out-password');

        if (passNumber === 1234) {
            const actualBalance = getBalanceById('actual-balance');
            const newBalance = actualBalance - cashOutAmount;
            document.getElementById('actual-balance').innerText = newBalance;

            // logs
            transactionHistory(cashOutAmount, newBalance)
        }
        else {
            alert('incorrect input.')
            return;
        }
    })

// toggle section
document.getElementById('show-cash-out-btn')
    .addEventListener('click', function () {
        showMySection('cash-out-section');
    })