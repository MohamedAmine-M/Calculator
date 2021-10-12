
// Input Function
function input(x){
    var screenValue= document.getElementById("screen").innerText;   
    screenValue = screenValue + x; 
    document.getElementById("screen").innerText= screenValue;
     
};

//Delete last digit Function
function backSpace(){
    var screenValue= document.getElementById("screen").innerText;
    screenValue = screenValue.slice(0,-1);
    document.getElementById("screen").innerText = screenValue;
}

//Clear Function
function clearScreen(){
    var screenValue= document.getElementById("screen").innerText;
    screenValue = "";
    document.getElementById("screen").innerText = screenValue;
};

//Operate Function
function operate(){
    var screenValue= document.getElementById("screen").innerText;
    screenValue=screenValue.replace("- -", "+");
    screenValue=screenValue.replace("÷", "/");
    screenValue=screenValue.replace("x", "*");
    var screenArray = Array.from(screenValue);
    screenArray = screenArray.reverse();
    function parse(str) {
        return Function(` return (${str})`)()
      };
    if ((screenArray[0]==="0")&&(screenArray[1]==="/")){
        screenValue = "E";
        document.getElementById("screen").innerText = screenValue;
    }else{
        if (screenArray[1]==="-" && screenArray[2]==="-") {
            
        };
        screenValue = Math.round(parse(screenValue)*100)/100;
        document.getElementById("screen").innerText = screenValue;
    };
};


//keyboardSupport
addEventListener("keydown", function(event){
    if (event.key == 0){
        document.getElementById('0').click();
    }if (event.key == 1){
        document.getElementById('1').click();
    }if (event.key == 2){
        document.getElementById('2').click();
    }if (event.key == 3){
        document.getElementById('3').click();
    }if (event.key == 4){
        document.getElementById('4').click();
    }if (event.key == 5){
        document.getElementById('5').click();
    }if (event.key == 6){
        document.getElementById('6').click();
    }if (event.key == 7){
        document.getElementById('7').click();
    }if (event.key == 8){
        document.getElementById('8').click();
    }if (event.key == 9){
        document.getElementById('9').click();
    }if (event.key == '+'){
        document.getElementById('+').click();
    }if (event.code == 'NumpadSubtract'){
        document.getElementById('-').click();
    }if (event.key == '*'){
        document.getElementById('*').click();
    }if (event.key == '/'){
        document.getElementById('/').click();
    }if (event.code == 'Minus'){
        document.getElementById('--').click();
    }if (event.key == 'Enter'){
        document.getElementById('=').click();
    }if (event.key == 'Backspace'){
        document.getElementById('del').click();
    }if (event.key == 'c'){
        document.getElementById('C').click();
    }if (event.key == '.'){
        document.getElementById(',').click();
    }
});    
    
