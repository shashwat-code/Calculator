let ans=""
let num=""
function getDigit(id,val){
    if(val==1){
        ans+=document.getElementById(id).textContent
        num+=document.getElementById(id).textContent
        displayResult(num)
    }else{
        ans+=document.getElementById(id).value
        num=""
    }
}

function displayResult(res){
    let display = document.getElementById("input")
    display.innerHTML = res

}

function checkAnswer(){
    let result = eval(ans);
    if(result==-Infinity){
        result=-1*result
    }
    return result.toString()
}

function getResult(){
    num=""
    displayResult(checkAnswer())
}

function clearInput(){
    ans=""
    num=""
    displayResult("0")
}

function print(){
    console.log(num+" "+ ans)
}