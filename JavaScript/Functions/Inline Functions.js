/*
 * Programming Quiz: Inline Functions 
 */

// don't change this code
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

// your code goes here
// call the emotions function here and pass in an
// inline function expression
emotions("happy",function laugh(num){
    ans = "";
    for(var i = 0; i < num; i++){
      ans = ans + "ha";
    }
    return ans + "!";
});