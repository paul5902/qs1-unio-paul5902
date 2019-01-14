const john = 'John';
const arya = 'Arya';
const sensa = 'Sensa';
const say = hero => sentence => Promise.resolve(`${hero} says : ${sentence}`);
const johnSay = say(john);
const aryaSay = say(arya);
const sensaSay = say(sensa);


let first = true;


const sensaInterval = setInterval(() => {
    sensaSay("For the North").then(value1 => {
        console.log(value1);
        aryaSay("The king in the North").then(value3 => {
            console.log(value3);
        });
        if (first) {
            first = false;
            johnSay("Winter is coming").then(value2 => {
                console.log(value2);
            });
        }
    });
}, 1000);
setTimeout(() => clearInterval(sensaInterval), 11000);