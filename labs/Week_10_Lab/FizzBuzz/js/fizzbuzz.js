// N220 Section 28238
// Dillon Polley
// Week 10 Lab
// FizzBuzz
// 10/26/2020

// Disables global variables
"use strict";

// This function activates when the HTML document loads
function start() {
// Calls on the fizzbuzz function written below
fizzbuzz();
}
// This function contains all the code needed to produce a solution to fizzbuzz
function fizzbuzz() {
    // This for loop runs through it's contents 100 times, and starts at 1
    for(let i = 1; i <= 100; i++){
        // Each time a new loop begins, create a line break. This helps organize the project. 
        document.write("</br>");
        // If the number is divisible by both 3 and 5, print FizzBuzz. We're putting this before the other if statements because the control flow likes to test both numbers before testing individual numbers.
        if(i % 3 == 0 && i % 5 == 0){
        document.write("FizzBuzz");
        }
        // If the number is divisible by 3, print Fizz.  
        else if (i % 3 == 0){
        document.write("Fizz");
        }
        // If the number is divisible by 5, print Buzz.
        else if (i % 5 == 0){
        document.write("Buzz");
        }
        // If all the other statements have proved to be false, print the number and go back to the start.  
        else {
        document.write(i);
        }
    }


}