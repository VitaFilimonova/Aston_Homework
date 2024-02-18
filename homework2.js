// Написать функцию getLength, принимающую на вход валидное JS
// значение любого типа. Функция должна вывести в консоль длину (length)
// этого значения, если это возможно, иначе вывести в консоль 0.
function getLength(value) {
    if (value instanceof Map || value instanceof Set) {
        return console.log(value.size);
    }
    if (typeof value === 'number' && !isNaN(value)) {
        return console.log(value.toString().length);
    } else if (value !== null && value !== undefined && typeof value.length === 'number') {
        return console.log(value.length);
    } else {
        return console.log(0);
    }
}


getLength(555);
getLength('Hello, world');
getLength(false);
getLength(null);
getLength(undefined);
getLength(new Map([['key1', 'value1'], ['key2', 'value2']]));

// Дан объект Node со структурой ’Tree’

// Node:
//     value: <number>,
//     left: <Node> | undefined,
//     right: <Node> | undefined
// Структура объекта может быть очень большой (условно содержать миллион Node).
// Напишите функцию compare, принимающую на вход два объекта Node,
// и возвращающую true, если они имеют одинаковую структуру и значения и false в ином случае.

function compare(node1, node2) {
    if (node1 === undefined && node2 === undefined) {
        return true;
    }
    if (node1 === undefined || node2 === undefined) {
        return false;
    }
    if (node1.value !== node2.value) {
        return false;
    }
    return compare(node1.left, node2.left) && compare(node1.right, node2.right);
}

const node1a = { value: 1, left: { value: 2, left: undefined, right: undefined }, right: { value: 3, left: undefined, right: undefined } };
const node1b = { value: 1, left: { value: 2, left: undefined, right: undefined }, right: { value: 3, left: undefined, right: undefined } };

const node2a = { value: 1, left: { value: 3, left: undefined, right: undefined }, right: { value: 3, left: undefined, right: undefined } };
const node2b = { value: 1, left: { value: 2, left: undefined, right: undefined }, right: { value: 3, left: undefined, right: undefined } };

console.log(compare(node1a, node1b));
console.log(compare(node2a, node2b));
