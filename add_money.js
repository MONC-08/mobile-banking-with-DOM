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

            //add to transaction logs

            // const newDiv = document.createElement('div');
            // newDiv.classList.add('bg-white-500')
            // newDiv.innerHTML = `    
            //     <p> Added amount : ${addAmount}, Balance : ${newBalance}</p>
            // `
            // document.getElementById('transaction-container').appendChild(newDiv);

        }
        else {
            alert('incorrect input.')
            return;
        }
    })

// toggle section
document.getElementById('show-add-money-btn')
    .addEventListener('click', function () {
        showMySection('add-money-section');
    })