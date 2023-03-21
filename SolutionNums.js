const numbers = [2, 5, 7, 8, 12, 15, 17, 20, 23, 25];
const newNumber = 0; 
/*define a variable newNumber to store the number 
want to replace the odd numbers.*/

for (let i = 0; i < numbers.length; i++) {
/*then loop through the array using a for loop and use 
the modulo operator to check if the current element is even 
or odd and replace the current element with the value of newNumber. */
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i] + " is even");
    } else {
        console.log(numbers[i] + " is odd");
        numbers[i] = newNumber;
    }
}

console.log("Updated array: " + numbers);
