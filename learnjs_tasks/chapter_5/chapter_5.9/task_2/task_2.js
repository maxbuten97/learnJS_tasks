/*
Подсчёт количества свойств объекта
Напишите функцию count(obj), которая возвращает количество свойств объекта:

let user = {
  name: 'John',
  age: 30
};

alert( count(user) ); // 2
Постарайтесь сделать код как можно короче. */

let count = (obj) => {
  return Object.keys(obj).length;
};
let user = {
  name: "John",
  age: 30,
};

console.log(count(user));
