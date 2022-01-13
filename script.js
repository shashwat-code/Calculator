let ans=""
let num1=""
let num2=""

function getDigit(id){
    console.log(document.getElementById(id).textContent)
}

function displayResult(num){
    let display = document.getElementById("output")
    display.innerHTML = num
}
displayResult(23)