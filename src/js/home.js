let userLogado = JSON.parse(localStorage.getItem('userLogado'))

let logado = document.querySelector('#logado')

logado.innerHTML= `ola ${userLogado.Nome}`

if (localStorage.getItem('token') == null){
    alert('voce precisa estar logado para acessar essa pagina')
    window.location.href ='login.html'
}


function sair() {
    localStorage.removeItem('token')
    localStorage.removeItem('userLogado')
    window.location.href ='login.html'
    
}
