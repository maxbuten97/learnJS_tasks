/*
Создайте новый объект с помощью уже существующего
Представьте, что у нас имеется некий объект obj, созданный функцией-конструктором
 – мы не знаем какой именно, но хотелось бы создать ещё один объект такого же типа.

Можем ли мы сделать так?

let obj2 = new obj.constructor();
Приведите пример функции-конструктора для объекта obj, с которой такой вызов 
корректно сработает. И пример функции-конструктора, с которой такой код поведёт
 себя неправильно.
 Ответ: Можем, если конструктор не переопределялся, и не менялся prototype
 */

/*
function Rabbit(name) {
    this.name = name;
}
let rabbit = new Rabbit('White');
let rabbit2 = new rabbit.constructor('black');
console.log(rabbit2.name) // black
*/

//если изменить Rabbit.prototype то ничего не получится и мы получим undefined
function Rabbit(name) {
    this.name = name;
}
Rabbit.prototype = {};
let rabbit = new Rabbit('White');
let rabbit2 = new rabbit.constructor('black');
console.log(rabbit2.name) //undefined