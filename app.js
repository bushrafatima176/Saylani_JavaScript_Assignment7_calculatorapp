function getNumber(num)
{
    var result = document.getElementById("result"); 
    result.value += num;
}

function clearResult(){
    var result = document.getElementById("result");  
    result.value = " " 
}

function getResult(){
    var result = document.getElementById("result"); 
    result.value = eval(result.value);
}

function back(){
    var value = document.getElementById("result").value;
    document.getElementById("result").value = value.substr(0,value.length-1);
}


function power() {
    var x = document.getElementById("result").value;
    result.value = Math.pow(x, 2);
}

function cube() {
    var x = document.getElementById("result").value;
    result.value = Math.pow(x, 3);
}
