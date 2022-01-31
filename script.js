function display(val){
    document.getElementById("input").value+=val;
}
function solve(){
    let x = document.getElementById("input").value;
    let y =eval(x);
    document.getElementById("input").value=y;
}
function inputClr(){
    document.getElementById("input").value="";
}