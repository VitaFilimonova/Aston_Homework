// Базовый:
//     Написать функцию pattern, принимающую на вход число n и возвращающую в консоли паттерн:
//     pattern(5):
// 1
// 121
// 12321
// 1234321
// 123454321
// 1234321
// 12321
// 121
// 1

function pattern (num) {
    if (num < 1) {
        return "Число должно быть больше или равно 1"
    }
    let result = "";

    for (let i = 1; i <= 2 * num - 1; i++) {
        let line = "";
        let length = i <= num ? i : 2 * num - i;

        for (let j = 1; j <= length; j++) {
            line += j;
        }
        for (let j = length - 1; j >= 1; j--) {
            line += j;
        }

        result += line + "\n";
    }

    return result;
}

console.log(pattern(5))
console.log(pattern(3))
console.log(pattern(1))
console.log(pattern(0))



// Продвинутый:
//     Написать класс PaginationUtil. Класс принимает массив значений (типы не имеют значения)
//     и число, отображающее количество элементов на странице.
//     Пример реализации:
//     const helper = new PaginationUtil['a','b','c','d','e','f'], 4);
// helper.pageCount(); // 2
// helper.itemCount(); // 6
// helper.pageItemCount(0); // 4
// helper.pageItemCount(1); // на последней странице - 2
// helper.pageItemCount(2); // -1, так как такой страницы нет
// pageIndex - принимает индекс элемента в массиве значений и возвращает его страницу, иначе -1
// helper.pageIndex(5); // 1
// helper.pageIndex(2); // 0
// helper.pageIndex(20); // -1
// helper.pageIndex(-10); //-1


class PaginationUtil {
    constructor(array, pageSize) {
        this.array = array;
        this.pageSize = pageSize;
    }

    pageCount() {
        return Math.ceil(this.array.length / this.pageSize);
    }

    itemCount() {
        return this.array.length;
    }

    pageItemCount(pageIndex) {
        if (pageIndex < 0 || pageIndex >= this.pageCount()) {
            return -1;
        }
        if (pageIndex === this.pageCount() - 1) {
            return this.array.length % this.pageSize;
        }
        return this.pageSize;
    }

    pageIndex(index) {
        if (index < 0 || index >= this.itemCount()) {
            return -1;
        }
        return Math.floor(index / this.pageSize);
    }
}

const helper = new PaginationUtil(['a', 'b', 'c', 'd', 'e', 'f'], 4);

console.log(helper.pageCount()); // 2
console.log(helper.itemCount()); // 6
console.log(helper.pageItemCount(0)); // 4
console.log(helper.pageItemCount(1)); // 2
console.log(helper.pageItemCount(2)); // -1
console.log(helper.pageIndex(5)); // 1
console.log(helper.pageIndex(2)); // 0
console.log(helper.pageIndex(20)); // -1
console.log(helper.pageIndex(-10)); //-1