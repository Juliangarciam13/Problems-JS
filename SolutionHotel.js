const maxCheckInTime = 12; 
const totalRooms = 20;
let availableRooms = totalRooms;

const checkIn = (roomNumber, checkInTime) => {
/*define a checkIn function that takes two parameters: roomNumber and checkInTime.
The function first checks if the checkInTime is greater than the maxCheckInTime. */
    if (checkInTime > maxCheckInTime) {
        console.log("Sorry, check-in time has expired.");
    } else if (availableRooms === 0) {
        console.log("Sorry, there are no available rooms.");
    } else {
/*If there are availableRooms, the function logs a message saying that roomNumber is 
checked in and decreases the value of availableRooms by one.*/ 
        console.log(`Room ${roomNumber} is checked in.`);
        availableRooms--;
        console.log(`There are ${availableRooms} rooms available.`);
    }
}

checkIn(10, 11);
checkIn(11, 10);

