//Criar um conversor de distâncias espaciais
//O objetivo é colocar distância em anos-luz (l.y)
// converter esse (l.y na unidade desejada)
//O ano-luz é uma unidade de distância utilizada na astronomia.
//1 l.y = 0,3066601pc
//1 l.y = 63241,1 AU
//1 l.y = 9,5*10¹² KM
let distanceLY = prompt("Qual distância você gostaria de saber em anos-luz?")

let measureDistance = prompt("Escolha a unidade de medidas que gostaria de exibir a distância em anos-luz:\n1- Parsec(pc)\n2- Unidade Astronomica(AU)\n3- Quilometros(km) ")

let chosenUnity
let convertedDistance

//fazer a função para que a escolha dele funcione
switch (measureDistance ) {
    case "1":
        chosenUnity = "Parsec"
        convertedDistance = distanceLY * 0.066601
        break
    case "2":
        chosenUnity = "Unidade Astronomica"
        convertedDistance = distanceLY * 63241.1
        break
    case "3":
        chosenUnity = "Quilometros"
        convertedDistance = distanceLY * 9.5 * Math.pow(10,12)
        break
    default:
        chosenUnity = "Unidade não identificada"
        convertedDistance = "conversão fora do escopo"
}

alert("Distância em Anos-luz: " + distanceLY + "\n" + chosenUnity + ": " + convertedDistance)
