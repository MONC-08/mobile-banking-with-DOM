
// toggle section for transaction logs
document.getElementById('transaction-logs-btn')
    .addEventListener('click', function () {
        showMySection('transaction-logs-section');
    })


// shared toggle function
function showMySection(id) {
    document.getElementById('add-money-section').classList.add('hidden');
    document.getElementById('cash-out-section').classList.add('hidden');
    document.getElementById('transaction-logs-section').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}