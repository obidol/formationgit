var email=document.getElementById('email');
var password=document.getElementById('password');
var submit=document.getElementById('submit');

submit.addEventListener('click',validation);

function validation(){
    alert('l\'email est:'+ email.value + ' le mot de passe est :'+ password.value);
}
