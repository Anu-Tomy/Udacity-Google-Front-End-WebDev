/*Write a nested for loop to print out all of the different seat combinations in the theater.
 * The first row-seat combination should be 0-0 
 * The last row-seat combination will be 25-99
*/

for(var x = 0; x <= 25; x++){
    for(var y = 0; y < 100; y++){
        console.log(x+"-"+y);
    }
}
 