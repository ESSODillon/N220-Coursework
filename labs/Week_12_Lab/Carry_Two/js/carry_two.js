// N220 Section 28238
// Dillon Polley
// Week 12 Lab
// Don't Forget to Carry the Two
// 11/10/2020

// Doesn't allow global variables, only local
'use strict';
// Constant Controls that can't be altered or messed up
const Controls = {
    // Constant to store the array in
    highScores : null,
    // Output to store the sum in
    output : null,
    // Output to store the average in
    output2 : null,
}
// Fires up when the webpage loads
function start() {
    // The array of numbers that we're going to be calculating sum and average with
    Controls.highScores = new Array(12, 23, 42, 52, 67, 81, 92);
    // Creates the paragraph element for the first output
    Controls.output = document.createElement("p");
    // Writes out what the paragraph tag will say on the webpage
    Controls.output.innerHTML = document.write("The sum is " + sum() + "<br>");
    // Creates the paragraph element for the second output
    Controls.output2 = document.createElement("p");
    // Writes out what the paragraph tag will say on the webpage
    Controls.output2.innerHTML = document.write("The average is " + average()+"%");
}
// Function we call on to calculate the sum
function sum() {
    // Initialize the sum
    let sum =  0;
    // Call on where we're accessing the array from
    let arr = Controls.highScores;
    // Run through this loop for as long as the array is
    for (let i=0; i < arr.length; i++) {
        // Add every number together in the array
        sum += arr[i];
    }
    // Return the sum
    return sum; 
}
// Function to calculate the average
function average() {
    // Initialize the sum
    let sum =  0;
    // Call on where we're accessing the array from
    let arr = Controls.highScores;
    // Run through this loop for as long as the array is
    for (let i=0; i < arr.length; i++) {
        // Add every number together in the array
        sum += arr[i];

    }
    // Initialize average as the sum divided by the number in the array
    let average = sum / arr.length;
    // Return the average
    return average;
    }