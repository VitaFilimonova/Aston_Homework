// Базовый:
//     1. Перечислить какие бывают алгоритмы сортировок?

// а) пузырьковая
// b) быстрая
// c) сортировка выбором
// d) соритровка слиянием
// e) сортировка вставками


//     2. Создать объект Person несколькими способами, после создать объект AnotherPerson, чтобы в нём были
// доступны методы объекта Person. Добавить метод logInfo чтоб он был доступен всем объектам.

const person1 = {
    name: 'Alice',
    age: 25
};

const anotherPerson = Object.create(person1);
person1.logInfo = function() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
};

function Person(name, age) {
    this.name = name;
    this.age = age;
}
const person2 = new Person('Dobby', 30);
Person.prototype.logInfo = function() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
};
class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    logInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}
const person3 = new PersonClass('Stepan', 35);


function AnotherPerson(name, age) {
    Person.call(this, name, age);
}
AnotherPerson.prototype = Object.create(Person.prototype);
AnotherPerson.prototype.constructor = AnotherPerson;

// 3. Создать класс SuperPerson c get и set для поля name и конструктором , сделать класс наследник от
// класса SuperPerson.

class SuperPerson {
    #name; // Приватное поле

    constructor(name) {
        this.#name = name;
    }

    getName() {
        return this.#name;
    }

    setName(newName) {
        this.#name = newName;
    }
}

class SuperPersonTwo extends SuperPerson {
    constructor(name) {
        super(name);
    }
}

const superPerson = new SuperPerson('Sasha');
console.log(superPerson.getName());
const superPersonTwo = new SuperPersonTwo('Masha');
console.log(superPersonTwo.getName());
superPersonTwo.setName("Katya");
console.log(superPersonTwo.getName());

//     Продвинутый:
// 1. Написать функцию
function firstSum(array, total) {

    if (array.length <= 1) {
        return "array is too small"
    }

    if (array.length === 2) {
        const arrayTotal = array[0] + array[1]
        return arrayTotal === total ? [...array] : "not matches"
    }

    for (let i = 0; i < array.length; i++) {
        let current = arr[i];
        let complement = total - current;

        if (array.includes(complement)) {
            return [current, complement]
        }
    }
    return "not matches"
}

// которая вернет массив с первой парой чисел, сумма которых равна total :const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const total = 13;
// firstSum(arr, total) //result = [4, 9]
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const total = 13;
const total2 = 22;
console.log(firstSum(arr, total));
console.log(firstSum(arr, total2));
// 2. Оценить сложность вашего алгоритма для функции firstSum (хотя бы пару строк в качестве объяснения).

// Сложность моего алгоритма - это O(n^2), т.к. я использую только перебор массива include
// в цикле for и сам цикл for, а условия это О(1)
