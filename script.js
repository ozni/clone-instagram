email = document.querySelector('#email')
senha = document.querySelector('#password')
mostrar = document.querySelector('.show-password')
entrar = document.querySelector('#login')

senha.addEventListener('input', ()=>{
    mostrar.style.visibility = 'visible'
    if (senha.value.length == 0){
        mostrar.style.visibility = 'hidden'
    }

    if (senha.value.length >= 6 && email.value.length){
        entrar.style.opacity = '1'
        entrar.style.pointerEvents = 'visible'
    } else {
        entrar.style.opacity = '0.5'
        entrar.style.pointerEvents = 'none'
    }
})

email.addEventListener('input', ()=>{
    if (senha.value.length >= 6 && email.value.length){
        entrar.style.opacity = '1'
        entrar.style.pointerEvents = 'visible'
    } else {
        entrar.style.opacity = '0.5'
        entrar.style.pointerEvents = 'none'
    }
})

mostrar.addEventListener('click', ()=>{
    if (mostrar.textContent == 'Mostrar'){
        mostrar.textContent = 'Ocultar'
        senha.type = 'text'
    } else {
        mostrar.textContent = 'Mostrar'
        senha.type = 'password'
    }
})