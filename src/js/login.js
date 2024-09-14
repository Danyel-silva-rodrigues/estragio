let btn = document.querySelector('.fa-eye')


btn.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#senha')
    
    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type','text')
    }else{
        inputSenha.setAttribute('type','password')
    }
    
    })


    function Entra() {
        let usuario = document.querySelector('#usuario')
        let labelusuario = document.querySelector('#userlabel')

        let senha = document.querySelector('#senha')
        let senhalabel = document.querySelector('#senhalabel')


        let msgerro = document.querySelector('#msgErrot')
        let msgsucesso = document.querySelector('#msgSuccess')
        let listaUser = []

        let userValid = {
            Nome:'',
            User: '',
            Senha: ''
        }
        
        listaUser = JSON.parse(localStorage.getItem('listaUser'))
        listaUser.forEach((item) => {
            if (usuario.value == item.usercad && senha.value == item.senhaCad) {

                userValid ={
                    Nome:item.nomeCad,
                    User: item.usercad,
                    Senha: item.senhaCad
                }
                

               
            }
            
        })
         if (usuario.value == userValid.User && senha.value == userValid.Senha) {
            window.location.href ='home.html'
            let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2)
             localStorage.setItem('token',token)

           localStorage.setItem('userLogado',JSON.stringify(userValid))
            
         } else {
            labelusuario.setAttribute('style', 'color:red')
            usuario.setAttribute('style', 'border-color:red')
            senhalabel.setAttribute('style', 'color:red')
            senha.setAttribute('style', 'border-color:red')
            msgerro.setAttribute('style','display:block')
            msgerro.innerHTML=('usuário ou senha incorretos')
            usuario.focus()
         } 
     
    }
    
        
  