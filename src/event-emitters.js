const john = 'John';  
     const arya = 'Arya';  
     const sensa = 'Sensa';  
     const say = hero => sentence => console.log(`${hero} says : ${sentence}`);  
     const johnSay = say(john); // may be used this way setTimeout(johnSay, 1000, 'hello');  
     const aryaSay = say(arya);  
     const sensaSay = say(sensa);


const EventEmitter = require('events');  
const northEmitter = new EventEmitter();
const sensaInterval = setInterval(function() {
    sensaSay("For the North");
    northEmitter.emit('For the North');
    northEmitter.emit('arya');
}, 1000); 

northEmitter.once('For the North', () => johnSay('Winter is coming'));
northEmitter.on('arya', () => aryaSay('The king in the North') );
northEmitter.on('north', () => sensaInterval);
northEmitter.emit('north');

  setTimeout(() => clearInterval(sensaInterval), 5000);
