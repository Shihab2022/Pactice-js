document.getElementById('login-submit').addEventListener('click', function() {
    // grt usre email();
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    console.log(userEmail);

    // get email user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    //cheak email and password

    if (userEmail == 'sontan@gmail.com' && userPassword == 'secret') {
        window.location.href = 'banking.html'
    }

    // console.log('button is clicked');
})