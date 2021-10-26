// N220 Section 28238
// Dillon Polley
// Week 10 Lab
// Triangle Loop
// 10/26/2020

// Disables global variables
"use strict";

// This function activates when the HTML document loads
function start() {
// Calls on an instance of the function written below
tri_loop();
}

// This function will create our weird triangle of hashtags with for loops
function tri_loop() {
    // Pre define i 
    let i;
    // Pre define e
    let e;
    // For seven rows, write the code within this loop
    for (i = 0; i <= 7; i++ ){
        // Makes a line break to start another row
        document.write("</br>");
        // Counts what row number we're on, and decides how many hashtags to write based on that.
        for ( e = 6-i; e <= 5; e++ ){
        // Writes a hashtag
        document.write( "#" );
        }
    }
}