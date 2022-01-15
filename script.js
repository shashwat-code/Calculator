let ans=""

function getDigit(id,val){
    if(val==1){
        ans+=document.getElementById(id).textContent
    }else{
        ans+=document.getElementById(id).value
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
    displayResult(checkAnswer())
}

function clearInput(){
    ans=""
    displayResult("0")
}