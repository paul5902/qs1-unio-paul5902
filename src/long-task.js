const heavyDo = times => {
    let numb = 0;
    for (let i = 0; i < times; i++) {
        if (Math.round(Math.log(Math.sqrt(Math.abs(Math.round(Math.random() * 1e10))))) === 1) {
            numb++;
        }
    }
    return numb;
};

let nb = 0;
let pile = [];
let callback;
const add = function (task) {
    pile.push(task);
};

const next = function () {
    const task = pile.shift();
    if (!task) return;

    setImmediate(() => {
        nb = nb + task();
        pile.length === 0 ? callback(nb) : next();
    });
};

const doIt = function (cb) {
    callback = cb;
    next();
};

let tot = 100000000,
    c = 100;
for (let i = 0; i < c; i++) {
    add(() => heavyDo(tot / c));
}

const interval = setInterval(() => console.log('I am not blocked'), 1000);
setTimeout(() => clearInterval(interval), 10000);

doIt(nb => console.log(nb));