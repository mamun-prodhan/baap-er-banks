document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;


    if(email === 'mamun@gmail.com' && password === 'mamun'){
        console.log('valid user');
        window.location.href = 'bank.html';
    }
    else{
        alert('invalid user');
    }
})