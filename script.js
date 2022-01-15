let ans=""

function getDigit(id,val){
    if(val==1){
        ans+=document.getElementById(id).textContent
    }else{
        ans+=document.getElementById(id).value
    }
    
    console.log(ans)
}

function displayResult(){
    let display = document.getElementById("input")
    display.innerHTML = checkAnswer()
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
    let display = document.getElementById("input")
    display.innerHTML = "0"
    console.log("this is it: "+ans)
}
