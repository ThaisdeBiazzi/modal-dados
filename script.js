const btn = document.querySelector('.btnAbrir')
btn.addEventListener('click', abrirModal)

const btnFechar = document.querySelector('.btnFechar')
btnFechar.addEventListener('click', abrirModal)

function abrirModal(){
    const modal = document.querySelector('.modal')
    const estiloAtual = modal.style.display

    if(estiloAtual == 'block'){
        modal.style.display = 'none'
    } else {
        modal.style.display = 'block'
    }
}