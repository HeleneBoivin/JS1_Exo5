function AfficheRésultat(){
var FirstNumber = document.getElementById("firstNumber").value;
var SecondNumber = document.getElementById("secondNumber").value;
var result = parseInt(FirstNumber) * SecondNumber;
if(isNaN(FirstNumber) || isNaN(SecondNumber)){
alert("Veuillez entrer des nombres");
}else{
alert(result);
}
}
