/*
Create an array with numerical values and use a for loop to calculate and print the sum of all the elements.
 */

var numbers = [25,65,45,87,9874,6241,8574,2564,424,65687,54,547,41,25,78,6554];

var sum = 0; // Initialize a variable to hold the sum


for(i=0; i<numbers.length; i++){
    sum += numbers[i]; // Add each element to the sum
    console.log(sum); // Print the total sum
}