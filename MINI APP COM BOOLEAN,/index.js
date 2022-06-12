let departureDateEntry = prompt ("digite a data de partida (formato DD/MM/YYYY)")
//Transformar dd/mm/yyyy em um dado que o moment consiga trabalhar

let departureDate = moment(departureDateEntry, "DD/MM/YYYY")
//chmar o moment de novo para que ele possa retornar na data atual 

let today = moment()
//o moment transforma o tempo em milisegundo - com isso conseguimos converter em segundos, minutos, horas e até dias 
//1 segundo tem 1000 milisegundos
//1 minuto tem 60segundos
//1 hora tem 3600 segundos 
//1 dia tem 3000 segundos x 24 segundos

let dateDiff = today-departureDate

let chosenOption = prompt("Escolha como gostaria de exibir o tempo de partida\n1- Segundos\n2- Minutos\n3- Horas\n4- Dias ")

//fazer a função para que a escolha dele funcione
//porém a divisão dá quebrada, para funcionar, utilizamos a biblioteca nativa do javascript Math.()
if(chosenOption == "1"){
    let secondsOfDeparture = Math.round(dateDiff / 1000)
    alert("Tempo de vôo: " + secondsOfDeparture + " segundos")
} else if (chosenOption == "2"){
    let minutesOfDeparture = Math.round(dateDiff / 1000 / 60)
    alert("Tempo de vôo: " + minutesOfDeparture + "minutos")
} else if (chosenOption == "3"){
    let hoursOfDeparture = Math.round(dateDiff / 1000 / 3600)
    alert("Tempo de vôo: " + hoursOfDeparture + "horas")
} else if (chosenOption == "4"){
    let daysOfDeparture = Math.round(dateDiff / 1000 / 3600 / 24)
    alert("Tempo de vôo: " + daysOfDeparture + "dias")
} else {
    alert("Opção invalida")
}