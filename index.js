var frase = prompt("Digite uma frase")
var palavra = prompt("Digite uma palavra para ser procurada na frase(Diferencia letra maiúscula de minúscula)")
var busca = (frase.indexOf(palavra))
if (busca != -1) {

  alert("palavra encontrada na frase")

}
else{

  alert("Palavra não encontrada na frase")

}
