const totalSeats = 224;

//round trip
let econSeats = 122;
let plusSeats = 40;
let bizSeats = 48;
let firstClassSeats = 14;

let economyPrice = 876;
let plusPrice = 2633;
let bizPrice = 6723;
let firstClassPrice = 8715;


let totalEcon = econSeats * economyPrice;
let totalplus = plusSeats * plusPrice;
let totalbiz = bizSeats * bizPrice;
let totalFirstClass = firstClassSeats * firstClassPrice;

let totalTrip = totalEcon + totalplus + totalbiz + totalFirstClass;

console.log("Total revenue: $" + totalEcon);
console.log("Total plus seats: $" + totalplus);
console.log("Total biz seats: $" + totalbiz);
console.log("Total first class seats: $" + totalFirstClass);
console.log("Total price of trip: $" + totalTrip);


for (let i = 0; i < econSeats; i++) {
    let econ = document.createElement("div");
    econ.classList.add('seat', 'econ');
    let econClass = document.querySelector(".airplane");
    econClass.appendChild(econ);
}

// for (let i = 0; i < plusSeats; i++) {
//     let plus = document.createElement("div");
//     plus.classList.add('seat', 'plus');
//     let econClass = document.querySelector(".airplane");
//     econClass.appendChild(plus);
// }