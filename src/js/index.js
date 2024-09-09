


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