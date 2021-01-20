document.getElementById("pageTitle").innerHTML="<div id='title'>Welcome to Bryce's Quality Calculator</div>";



function theAnswer(){
    numOne=parseInt ( document.getElementById("numberOne").value)
    numTwo=parseInt ( document.getElementById("numberTwo").value)
    document.getElementById("correctAnswer").innerHTML="The answer is:" + parseFloat(numOne+numTwo)
};

function subAnswer(){
    numOne=parseInt ( document.getElementById("numberOne").value)
    numTwo=parseInt ( document.getElementById("numberTwo").value)
    document.getElementById("correctAnswer").innerHTML="The answer is:" + parseFloat(numOne-numTwo)
};

function divAnswer(){
    numOne=parseInt ( document.getElementById("numberOne").value)
    numTwo=parseInt ( document.getElementById("numberTwo").value)
    document.getElementById("correctAnswer").innerHTML="The answer is: " + parseFloat(numOne/numTwo)
}

function mulAnswer(){
    numOne=parseInt ( document.getElementById("numberOne").value)
    numTwo=parseInt ( document.getElementById("numberTwo").value)
    document.getElementById("correctAnswer").innerHTML="The answer is: " + parseFloat(numOne*numTwo)
};