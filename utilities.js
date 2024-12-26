function getInputValueById(id) {
    const inputId = document.getElementById(id).value;
    const inputValue = parseFloat(inputId);
    return inputValue;
}

function getPassById(id) {
    const pass = document.getElementById(id).value;
    const passNumber = parseFloat(pass);
    return passNumber;
}

function getBalanceById(id) {
    const balance = document.getElementById(id).innerText;
    const actualBalance = parseFloat(balance);
    return actualBalance;
}

// function setActualBalance() {

// }

function transactionHistory(amount, balance) {

    const newDiv = document.createElement('div');
    newDiv.classList.add('bg-amber-50', 'px-5', 'py-2', 'm-2', 'rounded-xl')
    newDiv.innerHTML = `    
        <span class = "text-xl font-semibold"> Amount : ${amount}</span>
        <span  class = "text-xl font-semibold"> , </span>
        <span class = "text-xl font-semibold">Balance : ${balance}
    `
    document.getElementById('transaction-container').appendChild(newDiv);

}