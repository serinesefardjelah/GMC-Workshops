
const r1 = 0.7;
const r2 = 0.4;
const r3 = 0.2;
const p_d = 100;
const ins = 0.3;
const VAT = 0.18;


function rentalBydays(days){
    return ((days * p_d)+ ins)*(1+VAT);
}


function rentalBykm(km, days){
    let price = 0
    restKm = km

    // Calculate cost for the first 100 kilometers
    if (restKm > 0) {
        let kmSegment = Math.min(restKm, 100);
        price += kmSegment * r1;
        restKm -= kmSegment;
    }

    // Calculate cost for the kilometers from 101 to 1000
    if (restKm > 0) {
        let kmSegment = Math.min(restKm, 900);
        price += kmSegment * r2;
        restKm -= kmSegment;
    }

    // Calculate cost for kilometers beyond 1000
    if (restKm > 0) {
        price += restKm * r3;
    }


    // Add the insurance cost
    price += days * ins;

    // Calculate and add VAT
    let totalPrice = price * (1 + VAT);

    return totalPrice;
}



function bestOffer(km, days){
    
    return Math.min(rentalBydays(days), rentalBykm(km, days));
}


let km = 80;
let days = 3;
console.log(`using offer 1: ${rentalBydays(days)} and using offer 2: ${rentalBykm(km, days)}`)


console.log(`The best offer for ${km} km and ${days} days is ${bestOffer(km, days)}`);