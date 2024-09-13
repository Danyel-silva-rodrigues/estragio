let btn = document.querySelector('#versenha')
let btnConfimarsenha = document.querySelector('#vercomfimasenha')


let nome = document.querySelector('#nome')
let labelnome = document.querySelector('#labelnome')
let validNome = false


let usuario = document.querySelector('#usuario')
let labelusuario = document.querySelector('#labelusuario')
let validUsuario = false 


let senha = document.querySelector('#senha')
let labelsenha = document.querySelector('#labelsenha')
let validSenha = false 

let confisenha = document.querySelector('#confisenha')
let labelconfisenha = document.querySelector('#labelconfisenha')
let validComfirma = false

let msgerro = document.querySelector('#msgErrot')
let msgsucesso = document.querySelector('#msgSuccess')

nome.addEventListener('keyup',()=>{
    if (nome.value.length <= 2) {
        labelnome.setAttribute('style','color:red')
        labelnome.innerHTML = 'Nome *insira no minimo 3 caracteres' 
        nome.setAttribute('style','border-color:red')
        validNome = false
    }else{
        labelnome.setAttribute('style','color:green')
        labelnome.innerHTML = 'nome'
        nome.setAttribute('style','border-color:green')
        validNome = true
    }
})

usuario.addEventListener('keyup',()=>{
    if (usuario.value.length <= 10) {
        labelusuario.setAttribute('style','color:red')
        labelusuario.innerHTML = 'Matricula *Insira uma matricula valida' 
        usuario.setAttribute('style','border-color:red')
        validUsuario = false 
    }else{
        labelusuario.setAttribute('style','color:green')
        labelusuario.innerHTML = 'Usuario'
        usuario.setAttribute('style','border-color:green')
         validUsuario = true 
    }
})

senha.addEventListener('keyup',()=>{
    if (senha.value.length <= 7) {
        labelsenha.setAttribute('style','color:red')
        labelsenha.innerHTML = '<strong>Senha *insira no minimo 8 caracteres</strong>' 
        senha.setAttribute('style','border-color:red')
        validSenha = false 
    }else{
        labelsenha.setAttribute('style','color:green')
        labelsenha.innerHTML = 'senha'
        senha.setAttribute('style','border-color:green')
        validSenha = true 
    }
})

confisenha.addEventListener('keyup',()=>{
    if (senha.value != confisenha.value) {
        labelconfisenha.setAttribute('style','color:red')
        labelconfisenha.innerHTML = 'Confirma Senha *as senhas nao conferem' 
        confisenha.setAttribute('style','border-color:red')
        validComfirma = false
    }else{
        labelconfisenha.setAttribute('style','color:green')
        labelconfisenha.innerHTML = 'Confirma Senha'
        confisenha.setAttribute('style','border-color:green')
         validComfirma = true
    }
})

function cadastrar(){
 if(validNome && validUsuario && validSenha && validComfirma){
   let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

   listaUser.push(
    {
        nomeCad: nome.value,
        usercad: usuario.value,
        senhaCad: senha.value
    }
   )
   
   localStorage.setItem('listaUser',JSON.stringify(listaUser))
   
   
    msgsucesso.setAttribute('style','display:block')
    msgsucesso.innerHTML = '<strong> cadastrando usuario... ;)</strong>'
    msgerro.setAttribute('style','display:none')
    msgerro.innerHTML = ''

    setTimeout(()=>{
        window.location.href = 'login.html'
    },3000)
    


    
 } else {
    msgerro.setAttribute('style','display:block')
    msgerro.innerHTML = '<strong> preencha todos os campos  antes de cadrastrar</strong>'
    msgsucesso.setAttribute('style','display:none')
    msgsucesso.innerHTML = ''
 }
    
}











btn.addEventListener('click', ()=>{
let inputSenha = document.querySelector('#senha')

if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type','text')
}else{
    inputSenha.setAttribute('type','password')
}

})




btnConfimarsenha.addEventListener('click', ()=>{
let inputSenha = document.querySelector('#confisenha')

if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type','text')
}else{
    inputSenha.setAttribute('type','password')
}

})
