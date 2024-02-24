// Базовый:
//     1. Написать ответ - почему массивы в JS являются "неправильными" и совмещают в себе несколько
// структур данных? Какие ?

// Массивы в JavaScript называют "неправильными" потому, что они могут
// совмещать в себе несколько структур данных одновременно.

// 1) Индексированный список: Массивы могут использоваться
// как обычные индексированные списки, где каждый элемент имеет индекс.

// 2)Ассоциативный массив: JavaScript позволяет использовать массивы
// для создания ассоциативных массивов, где в качестве ключей могут
// выступать не только числа, но и строки. Таким образом, массивы могут
// служить как хэш-таблицы для быстрого доступа к данным по ключу.

// 3)Динамическое увеличение размера: Массивы в JavaScript динамически
// изменяют свой размер при добавлении или удалении элементов.

// 4)Методы массива: JavaScript предоставляет ряд методов для работы
// с массивами. Эти методы позволяют легко добавлять, удалять и изменять элементы массива,
// делая их более функциональными.

// 4)Гетерогенные элементы: Массивы в JavaScript могут содержать
// элементы различных типов данных, таких как числа, строки, объекты,
// другие массивы и даже функции.


//     2. Привязать контекст объекта:
//     const obj = { item: 'some value' }
// к функции logger:function logger() {
//     console.log(`I output only external context: ${this.item}`);
// }
// так, чтобы при вызове функции ${this.item} имело значение - 'some value'
// (Привязать через bind, call, apply)

const obj = { item: 'some value' };

function logger() {
    console.log(`I output only external context: ${this.item}`);
}

logger.call(obj);
logger.apply(obj); // сразу вызываются в отличие от bind


const boundLogger = logger.bind(obj);
boundLogger()


// Продвинутый:
//     1. Реализовать полифил (собственную функцию реализующую встроенную в js) метода bind()

if (!Function.prototype.bind) {
    Function.prototype.bind = function(context) {
        const fn = this;
        const args = Array.prototype.slice.call(arguments, 1);

        return function() {
            return fn.apply(context, args.concat(Array.prototype.slice.call(arguments)));
        };
    };
}
