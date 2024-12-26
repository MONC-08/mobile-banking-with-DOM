document.getElementById('login-confirm')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const pass = document.getElementById('password').value;
        console.log(pass)
        if (pass === '1234') {
            window.location.href = './banking.html'
        }
        else {
            alert("incorrect phone or password!");
        }
    })