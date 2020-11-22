senha = document.querySelector('#senha')
mostrar = document.querySelector('#mostra-senha')
senhaOculta = ''
senhaUser = ''
conteudo = ''

senha.addEventListener('input', ()=>{
    conteudo += senha.value
    mostrar.style.visibility = 'visible'
    return esconder()
})

function esconder(){
    senhaOculta += '*'
    senha.value = senhaOculta
}

mostrar.addEventListener('click', ()=>{
    for (letra in conteudo){
        if (conteudo[letra] != '*'){
            senhaUser += conteudo[letra]
        }
    }
    senha.value = senhaUser
})