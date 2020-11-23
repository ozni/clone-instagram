senha = document.querySelector('#senha')
mostrar = document.querySelector('#mostra-senha')

senha.addEventListener('input', ()=>{
    mostrar.style.visibility = 'visible'
    if (senha.value.length == 0){
        mostrar.style.visibility = 'hidden'
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