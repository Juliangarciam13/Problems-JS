const maxStudents = 25;
let admittedStudents = 0;
let availableQuotas = maxStudents;
/*first define the maximum number of students maxStudents and create a variable 
admittedStudents to keep track of how many students have been admitted.*/

const admitStudent= (name, age) => {
/*define a admitStudent function that takes two parameters: name and age. */
    if (admittedStudents === maxStudents) {
        console.log("Sorry, the school is full.");
    } else {
        admittedStudents++;
        availableQuotas--;
        if (age >= 18) {
        /*If the age of the student is greater than or equal to 18, the function logs a message saying 
        that the student is legal age, using a template literal to include their name in the message.*/
            console.log(`${name} you are of legal age.`);
        } else {
            console.log(`${name} you are underage.`)
        }
        console.log(`There are ${availableQuotas} quotas available.`);
    }
}

admitStudent("Lina", 18);
