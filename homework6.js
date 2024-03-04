// Базовое:
// Решить (без использования IDE, естественно) типовые задачи - написать порядок и вывод в консоли:
//     1)
console.log('1');
setTimeout(() => console.log('2'), 1);
let promiseNew = new Promise((resolve) => {
    console.log('3');
    resolve();
});
promiseNew.then(() => console.log('4'));
setTimeout(() => console.log('5'));
console.log('6');

// Выведет 136425 т.к. создание промиса - синхронная операция, а  setTimeout в последнюю очередь


// 2)
let promiseTree = new Promise((resolve, reject) => {
    resolve("a");
    console.log("1");
    setTimeout(() => {
        console.log("2");
    }, 0);
    console.log("3");
});

// Выведет 132 т.к. консоли - синхронные операции, макрозадача - setTimeout, а не выводится т.к это просто результат промиса



// 3)
let promiseTwo = new Promise((resolve, reject) => {
    resolve("a");
});
promiseTwo
    .then((res) => {
        return res + "b";
    })
    .then((res) => {
        return res + "с";
    })
    .finally((res) => {
        return res + "!!!!!!!";
    })
    .catch((res) => {
        return res + "d";
    })
    .then((res) => {
        console.log(res);
    });

// Выведет abc т.к. catch отлавливает ошибки, тут этого нет, finally не выполнится,
// а последний then выведет результат


// 4)
function doSmth() {
    return Promise.resolve("123");
}
doSmth()
    .then(function (a) {
        console.log("1", a); //
        return a;
    })
    .then(function (b) {
        console.log("2", b);

        return Promise.reject("321");
    })
    .catch(function (err) {
        console.log("3", err);
    })
    .then(function (c) {
        console.log("4", c);
        return c;
    });


// Выведет:
// 1 123
// 2 123
// 3 321, т.к до этого промис был отклонен
// 4 undefined, т.к последний then не выполнится т.к. ошибка уже отловлена


// 5)
console.log("1");
setTimeout(function () {
    console.log("2");
}, 0);
Promise.resolve().then(() => console.log("3"));
console.log("4");

// Выведет 1432 т.к. консоли - синхронные операции, микрозадача - промис и потом макрозадача - setTimeout





// Продвинутое:
//     Напишите функцию, которая будет проходить через массив целых чисел
//     и выводить индекс каждого элемента с задержкой в 3 секунды.

function writeIndex (arr) {
    arr.forEach((el,index)=> {
      setTimeout(()=> {
          console.log(index)
      }, (index+1) * 3000)
    })
}

const arr = [8, 9, 67, 55, 34, 9, 11, 32, 7, 9]
writeIndex(arr)