document.getElementById('add-money-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const addAmount = getInputValueById('add-money-amount');
        const pass = getPassById('add-money-password')
        console.log(addAmount, pass)

        if (pass === 1234) {
            const actualBalance = getBalanceById('actual-balance');
            const newBalance = actualBalance + addAmount;

            document.getElementById('actual-balance').innerText = newBalance;
        }
        else {
            alert('incorrect input.')
            return;
        }
    })