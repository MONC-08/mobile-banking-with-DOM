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

function setActualBalance() {

}