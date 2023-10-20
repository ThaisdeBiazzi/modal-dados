

function salvar(){
    let area = document.querySelector('#area').value
    let numero = document.querySelector('#num').value
    let bairro = document.querySelector('#bairro').value
    let cidade = document.querySelector('#cidade').value

    let lista = document.createElement('li')
    lista.innerHTML = area + "m - número:  "+numero+" ("+bairro+" - "+cidade+ ")"

    let botao = document.createElement('button')

    botao.innerHTML = "remover"

    botao.setAttribute("onclick", "removerLista(this)")

    lista.appendChild(botao)

    document.getElementById("lista").appendChild(lista)

}

function removerLista(button){
    let removerLista = button.parentNode
    document.getElementById("lista").removeChild(removerLista)
}