let ourYogurts = [
    { flavor: "Natural", price: 14000, stock: 5 },
    { flavor: "Coconut", price: 14000, stock: 5 },
    { flavor: "Almond", price: 16000, stock: 2 },
    { flavor: "Vanilla", price: 16000, stock: 0 }
];

/*In this example, we first define an array of yogurts, each with a name, quantity, and price. 
We then define a buyIceCream function that takes two parameters: flavor and amount.*/
const buyIceCream = (flavor, amount) => {
    const selectedFlavor = ourYogurts.find((f) => f.flavor === flavor);
    /*The function first uses the find method to find the selectedFlavor object in the yogurts 
    array that has the same name as the flavor parameter.  */
    if (!selectedFlavor) {
        console.log("Sorry, we don't have that flavor.");
        return;
    }
    if (selectedFlavor.stock < amount) {
        console.log(
            `Sorry, we only have ${selectedFlavor.stock} scoops of ${flavor} left.`
        );
        return;
    }
    /*If both conditions are met, the function calculates the totalPrice by multiplying the price of 
    the selectedFlavor by the amount parameter. It then logs a message to the console with the total price. */
    const totalPrice = selectedFlavor.price * amount;
    console.log(`The total price for ${amount} scoops of ${flavor} is $${totalPrice}.`);
    selectedFlavor.stock -= amount;
    console.log(`We now have ${selectedFlavor.stock} scoops of ${flavor} left.`);
}

buyIceCream("Almond", 3);
buyIceCream("Natural", 3);
buyIceCream("Natural", 3);