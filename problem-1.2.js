//Create an array with some elements and use a for loop to print all the elements.
//************************************** */

var shobji = ["gajor", "mula", "shaak", "potol", "jhinga", "chichinga", "aloo", "borboti", "Dherosh"]

for(i=0; i<=shobji.length; i++){
    console.log(shobji[i]);
}
//Here, i <= shobji.length will run the loop one extra time, causing i to be equal to shobji.length at the last iteration. Since array indices start at 0 and go up to shobji.length - 1, when i equals shobji.length, there is no element at that index, and you get undefined.