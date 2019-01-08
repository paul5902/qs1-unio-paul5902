const john = 'John';  
     const arya = 'Arya';  
     const sensa = 'Sensa';  
     const say = hero => sentence => console.log(`${hero} says : ${sentence}`);  
     const johnSay = say(john); // may be used this way setTimeout(johnSay, 1000, 'hello');  
     const aryaSay = say(arya);  
     const sensaSay = say(sensa);


const EventEmitter = require('events');  
const myEmitter = new EventEmitter();    

myEmitter.on('north', () => {  
    const sensaInterval = setInterval(function() {
        sensaSay("For the north");
    } , 1000);
    johnSay('Winter is coming');
  });  
myEmitter.emit('north');


setTimeout(() => clearInterval(sensaInterval), 10000);


setTimeout(() => {
        johnSay("hello Ladies Stark")
        setImmediate(() => aryaSay("thank you for needle"));
    }
    , 2000
);