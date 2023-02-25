/*
Функция pow(x,n)
важность: 4
Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.

pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1
Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).
*/

function pow(x, n) {
  let result;

  if (n >= 1 && n % 1 == 0) {
    result = x ** n;
  } else {
    return `Степень ${n} не поддерживается`;
  }

  return result;
}
console.log(pow(3, 0.1));
