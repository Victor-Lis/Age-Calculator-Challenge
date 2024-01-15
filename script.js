const inputDay = document.querySelector("#day")
const inputMonth = document.querySelector("#month")
const inputYear = document.querySelector("#year")

const years = document.querySelector("#years")
const months = document.querySelector("#months")
const days = document.querySelector("#days")

const dayError = document.querySelector("#day-error")
const monthError = document.querySelector("#month-error")
const yearError = document.querySelector("#year-error")

function calcularIdade() {

    if(!inputDay.value){
        dayError.innerText = "Field Required"
        return
    }
    if(!parseInt(inputDay.value) || parseInt(inputDay.value) < 1){
        dayError.innerText = "Invalid num"
        return
    }

    if(!inputMonth.value){
        monthError.innerText = "Field Required"
        return
    }
    if(!parseInt(inputMonth.value) || parseInt(inputMonth.value) < 1){
        monthError.innerText = "Invalid num"
        return
    }

    if(!inputYear.value){
        yearError.innerText = "Field Required"
        return
    }
    console.log(parseInt(inputYear.value) < 1)
    if(!parseInt(inputYear.value) || parseInt(inputYear.value) < 1000){
        yearError.innerText = "Invalid num"
        return
    }

    dayError.innerText = ''
    monthError.innerText = ''
    yearError.innerText = ''

    let monthsNames = {
        1: "January",
        2: "February",
        3: "March",
        4: "April",
        5: "May",
        6: "June",
        7: "July",
        8: "August",
        9: "September",
        10: "October",
        11: "November",
        12: "December"
    }

    var dataNascimento = new Date(`${inputDay.value} ${monthsNames[parseInt(inputMonth.value)]} ${inputYear.value}`);
    var dataAtual = new Date();

    console.log(dataNascimento)

    var idadeAnos = (dataAtual.getFullYear() - dataNascimento.getFullYear())

    var idadeMeses = ((dataAtual.getMonth()) - (dataNascimento.getMonth()))

    if(idadeMeses < 0){

        idadeMeses = 12 + idadeMeses
        idadeAnos-=1;

    }

    if(idadeMeses > 12){

        idadeMeses = idadeMeses - 12;

    }

    var idadeDias = (dataAtual.getDate() - dataNascimento.getDate())

    if(idadeDias < 0){

        let variacao = ((7*31 + 4*30 + 1*28.25) / 12)
        idadeDias = Math.floor(variacao + idadeDias)

        if(idadeMeses > 0){

            idadeMeses-=1;

        }

    }

    years.innerText = idadeAnos
    months.innerText = idadeMeses
    days.innerText = idadeDias

}