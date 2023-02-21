'use strict';

/* 
Какие буквы (заглавные или строчные) использовать для имён констант?
Рассмотрим следующий код:

const birthday = '18.04.1982';

const age = someCode(birthday);

У нас есть константа birthday, а также age, которая вычисляется при помощи
 некоторого кода, используя значение из birthday.

Можно ли использовать заглавные буквы для имени birthday? А для age? Или одновременно для обеих переменных?
 
Ответ:
Можно использовать любые буквы в создании констант,
 однако для birtday имя заглавными буквами будет иметь
больше смысла, т.к. дата рождения не изменится, а age меняется используя вычисления
*/