var threeNames = ["JAMES", "KEVIN", "JAKEE"];
var threeNumbers = [2,5,6];

var number = 1;
var letter = "J";

try {

    document.write("    This the list with the full names on them      \n " + threeNames);
    document.write("\b");
for (var i = 0; i < 3; i++) {
   document.write(threeNames[i].slice(-5,1) + "\b");
   
   
} 

} catch (err) {
    console.log ("SOMETHING WENT WRONG!");

}