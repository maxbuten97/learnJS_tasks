/**Можно ли "перевыполнить" промис?
Что выведет код ниже?

let promise = new Promise(function(resolve, reject) {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});

promise.then(alert); 

Ответ: 1, промис нельзя перевыполнить
*/