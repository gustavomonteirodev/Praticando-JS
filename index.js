let navName = prompt("Qual o nome da nave espacial?")
let dobraEspacial = prompt("Deseja entrar na dobra espacial?\n1- Sim\n2- Não")
//se a resposta for sim, contabilizaremos uma dobra
let countDobra = 0 
while (dobraEspacial == "1") {
    countDobra += 1
    dobraEspacial = prompt("Deseja entrar na dobra espacial? \n1- Sim \n2- Não")
}
alert("Nave: " + navName + "\nQuantidade de dobras: " + countDobra)