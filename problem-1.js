//তোমার কাছে: ৮০০০০ টাকার বেশি হলে তুমি Mac কিনবে, ৬০ টাকার বেশি হলে Gaming ল্যাপটপ কিনবে, ৪০ হাজার টাকার বেশি হলে Lenovo Yoga কম্পিউটার কিনবে , ২০ হাজার টাকার বেশি হলে পুরান ল্যাপটপ কিনবে। না হয় তুমি মোবাইল দিয়ে কাজ চালাবে। 

// var myBudget = 61000;
// if(myBudget > 80000){
//     console.log("I will buy a Mac");
// }
// else if(myBudget > 60000){
//     console.log("I will buy a Gaming Laptop");
// }
// else if(myBudget > 40000){
//     console.log("I will buy a Lenovo Yoga");
// }
// else if(myBudget > 20000){
//     console.log("I will buy am old laptop");
// }
// else{
//     console.log("phone diye kaj chalabo");
// }

//Using a Function and Array of Conditions
// var myBudget = 61000;

// function decidePurchase(budget) {
//     var options = [
//         { limit: 80000, message: "I will buy a Mac" },
//         { limit: 60000, message: "I will buy a Gaming Laptop" },
//         { limit: 40000, message: "I will buy a Lenovo Yoga" },
//         { limit: 20000, message: "I will buy an old laptop" },
//         { limit: 0, message: "I will use a phone" }
//     ];

//     for (var i = 0; i < options.length; i++) {
//         if (budget > options[i].limit) {
//             console.log(options[i].message);
//             break;
//         }
//     }
// }

// decidePurchase(myBudget);


//Using a Ternary Operator (Nested)
var myBudget = 61000;

var decision = myBudget > 80000 ? "I will buy a Mac" :
               myBudget > 60000 ? "I will buy a Gaming Laptop" :
               myBudget > 40000 ? "I will buy a Lenovo Yoga" :
               myBudget > 20000 ? "I will buy an old laptop" :
               "I will use a phone";

console.log(decision);
