const pwd01 = document.getElementById('password01');
const pwd02 = document.getElementById('password02');
const pwdCheck01 = document.getElementById('password_check01');
const pwdCheck02 = document.getElementById('password_check02');
pwdCheck01.addEventListener('change', function() {
    if(pwdCheck01.checked) {
        pwd01.setAttribute('type', 'text');
    } else {
        pwd01.setAttribute('type', 'password');
    }
}, false);

pwdCheck02.addEventListener('change', function() {
    if(pwdCheck02.checked) {
        pwd02.setAttribute('type', 'text');
    } else {
        pwd02.setAttribute('type', 'password');
    }
}, false);
