var threeNames = ["JAMES", "KEVIN"];
var threeNumbers = [2,5];

var number = 1;
var letter = "J";


document.write(threeNames + "               ");

if (threeNames[0].slice(-5,1) == letter) {
    document.write("This is a list of the words that starts with letter 'J'");

    document.write("    :" +threeNames[0]);
    console.log("good job");

}  else {
    console.log("The first letter dosent match the variable letter");
}
if (threeNames[1].slice(-5, 1) == letter) {
    console.log("good job");

} else {
    console.log("The first letter dosen't match the variable letter");
}

document.write(threeNumbers + "         ");
if(threeNames[0] >= number) {
    console.log("The number is bigger than or equal to the variable number");

} else {
    console.log("false");
}
if(threeNumbers[1] >= number ) {
    document.write("These are the list of numbers that matches the variable one");
    document.write("   :"+ threeNumbers[1])
} else {
    console.log("false");
}


 