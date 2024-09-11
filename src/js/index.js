let btn = document.querySelector('#versenha')


btn.addEventListener('click', ()=>{
let inputSenha = document.querySelector('#senha')

if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type','text')
}else{
    inputSenha.setAttribute('type','password')
}

})

let btnConfimarsenha = document.querySelector('#vercomfimasenha')


btnConfimarsenha.addEventListener('click', ()=>{
let inputSenha = document.querySelector('#confisenha')

if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type','text')
}else{
    inputSenha.setAttribute('type','password')
}

})



function logar() {

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;
    
    if (login == "admin" && senha == "admin") {
        alert('sucesso'); 
        location.href = "home.html"
        
    }else{
        alert('usuario ou senha incorretas')
    }
    
}

function cadrastor() {

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if (login == "admin" && senha == "admin") {
        alert('sucesso'); 
        location.href = "home.html"
        
    }else{
        alert('usuario ou senha incorretas')
    }
     
    
}