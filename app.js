const totalSeats = 224;

//round trip
let econSeats = 122;
let premiumSeats = 40; 
let businessSeats = 48;
let firstClassSeats = 14;

let economyPrice = 876;
let premiumPrice = 2633;
let businessPrice = 6723;
let firstClassPrice = 8715;


let totalEcon = econSeats * economyPrice;
let totalPremium = premiumSeats * premiumPrice;
let totalBusiness = businessSeats * businessPrice;
let totalFirstClass = firstClassSeats * firstClassPrice;

let totalTrip = totalEcon + totalPremium + totalBusiness + totalFirstClass;

console.log("Total revenue: $"+totalEcon);
console.log("Total Premium seats: $"+totalPremium);
console.log("Total business seats: $"+totalBusiness);
console.log("Total first class seats: $"+totalFirstClass);
console.log("Total price of trip: $"+totalTrip);