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

nome.addEventListener('keyup',()=>{
    if (nome.value.length <= 2) {
        labelnome.setAttribute('style','color:red')
        labelnome.innerHTML = 'Nome *insira no minimo 3 caracteres' 
        nome.setAttribute('style','border-color:red')
        let validNome = false
    }else{
        labelnome.setAttribute('style','color:green')
        labelnome.innerHTML = 'nome'
        nome.setAttribute('style','border-color:green')
        let validNome = true
    }
})

usuario.addEventListener('keyup',()=>{
    if (usuario.value.length <= 4) {
        labelusuario.setAttribute('style','color:red')
        labelusuario.innerHTML = 'Usuario *insira no minimo 5 caracteres' 
        usuario.setAttribute('style','border-color:red')
        let validUsuario = false 
    }else{
        labelusuario.setAttribute('style','color:green')
        labelusuario.innerHTML = 'Usuario'
        usuario.setAttribute('style','border-color:green')
        let validUsuario = true 
    }
})

senha.addEventListener('keyup',()=>{
    if (senha.value.length <= 7) {
        labelsenha.setAttribute('style','color:red')
        labelsenha.innerHTML = '<strong>Senha *insira no minimo 8 caracteres</strong>' 
        senha.setAttribute('style','border-color:red')
        let validSenha = false 
    }else{
        labelsenha.setAttribute('style','color:green')
        labelsenha.innerHTML = 'senha'
        senha.setAttribute('style','border-color:green')
        let validSenha = true 
    }
})

confisenha.addEventListener('keyup',()=>{
    if (senha.value != confisenha.value) {
        labelconfisenha.setAttribute('style','color:red')
        labelconfisenha.innerHTML = 'Confirma Senha *as senhas nao conferem' 
        confisenha.setAttribute('style','border-color:red')
        let validComfirma = false
    }else{
        labelconfisenha.setAttribute('style','color:green')
        labelconfisenha.innerHTML = 'Confirma Senha'
        confisenha.setAttribute('style','border-color:green')
        let validComfirma = true
    }
})

function cadastrar() {

 if (validComfirma && validNome && validSenha && validUsuario) {
    alert('Preencha todos os campos')
    
 } else {
    alert('bom')
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
