document.addEventListener('DOMContentLoaded', () => {
    let userLogado = JSON.parse(localStorage.getItem('userLogado'));

    let logado = document.querySelector('#logado');
    if (userLogado) {
        logado.innerHTML = `Olá ${userLogado.Nome}`;
    } else {
        logado.innerHTML = 'Usuário não encontrado';
    }

    // if (localStorage.getItem('token') == null) {
    //     alert('Você precisa estar logado para acessar essa página');
    //     window.location.href = 'login.html';
    // }

    let hamburger = document.querySelector('.hamburger');
    let navBar = document.querySelector('.nav-bar');

   
        hamburger.addEventListener('click', () => {
            navBar.classList.toggle('active');
            
        });
   

    window.sair = function() {
        localStorage.removeItem('token');
        localStorage.removeItem('userLogado');
        window.location.href = 'login.html';
    };
});



