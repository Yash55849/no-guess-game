let rNum = "17";

let num = prompt("enter the no: ");


while(num !== rNum){
    num = prompt("you have enter the wrong no. guess the no again ")
}

if(num === rNum){
    console.log("you have entered the right no :")
}