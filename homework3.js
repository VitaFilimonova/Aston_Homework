// Базовое:
// Задание 1 – Создать объект counter всеми возможными способами;
const counter1 = new Object()
const counter2 = {}
const counter3 = Object.create({})
function MyObject(key, value) {
    this.key = key;
    this.value = value;
}

const counter4 = new MyObject('key', 'value');

class MyClass {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
const counter5 = new MyClass('key', 'value');


// Задание 2 – Скопировать объект counter всеми возможными способами;

const copyCounter1 = { ...counter1 };

const copyCounter2 = Object.assign({}, counter2);

const copyCounter3 = JSON.parse(JSON.stringify(counter3));

const copyCounter4 = Object.create(Object.getPrototypeOf(counter4), Object.getOwnPropertyDescriptors(counter4));

const copyCounter5 = {};
for (const key in counter5) {
    if (counter5.hasOwnProperty(key)) {
        Object.defineProperty(copyCounter5, key, {
            value: counter5[key],
            enumerable: true,
            writable: true,
            configurable: true
        });
    }
}


// Задание 3 – Создать функцию makeCounter всеми описанными и возможными способами;
function makeCounter1 () {
    console.log(counter1)
}

const makeCounter2 = () => {
    console.log(counter2)
}

const makeCounter3 = function () {
    console.log(counter3)
}

const makeCounter = function makeCounter4() {
    console.log(counter4)
};

const makeCounter5 = new Function('a', 'b', 'return a + b');

(function makeCounter6() {
    console.log(counter5)
})()

function MakeCounter(counter) {
    this.counter = counter

    this.getCounter = function () {
        console.log(this.counter)
    }
}

class MakeCounter7 {
    constructor() {
        this.count = 0;
    }
}

const counter8 = new MakeCounter7();


// Продвинутое:
//     Задание 1 – Развернуть строку в обратном направлении при помощи методов массивов:
//     function reverseStr(str) {
//         return …
//     }
function reverseStr(str) {
    return str.split('').reverse().join('')
}

console.log(reverseStr('hello'))
console.log(reverseStr('How are you today?'))

// Задание 2– Написать функцию глубокого сравнения двух объектов:
//
//     const obj1 = { here: { is: "on", other: "3" }, object: Z };
//
// const obj2 = { here: { is: "on", other: "2" }, object: Z };
//
// const deepEqual = (obj1, obj2) => {};

const deepEqual = (obj1, obj2) => {

    if (obj1 === obj2) {
        return true;
    }

    if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) {
        return false;
    }

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (const key of keys1) {
        if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
            return false;
        }
    }

    return true;
};

// Пример использования
const obj1 = { here: { is: "on", other: "3" }, object: "Z" };
const obj2 = { here: { is: "on", other: "3" }, object: "Z" };
const obj3 = { here: { is: "on", other: "2" }, object: "Z" };

console.log(deepEqual(obj1, obj2)); // true
console.log(deepEqual(obj1, obj3)); // false