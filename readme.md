## Введение в js

основные понятия:

Объявление переменных:

`let, const, var` - эти слова используются для того чтобы сказать браузеру что мы хотим что-то сохранить.
После этих слов должно следовать название переменной состоящее из любых букв UTF-8. 

Пример:

`let test`

Присвоение в js происходит с помощью оператора `=`. Этот операто связывает ссылку на значение с самим значением, 
подобно тому как нитка связвает воздушный шарик с рукой человека который его держит. Чтобы сохранить результат 
вычисления чего либо нужно использовать такую запись:

`let sum = 22 + 11;`

Данные в js делятся на три типа: числовые, ссылочне и строковые.

В конце строк желательно ставить знак `;`. Js поддерживает все арифметические операторы:

`+`
`-`
`*`
`/`

за тем исключением что `+` можно систользовать для сложения строк:

`'Один' + 'Два'` - результатом такого действия будет строка 'ОдинДва'

Данные можно складывать в массивы, для этого массив необходимо объявить:

`const array = [];`

После этого в массив возможно добавить информацию с помощью метода `push`:

`array.push(1 + 1)`

Достать что-то из массива возможно с помощью такой записи:

`array[0]` 

так можно получить данные которые находятся в массиве по индексом 0;

Ключевой вещью в js являются функции. Объявление функции просходит с помощью такой записи:

```
function functionName(functionArgument){
    //do Something
}
```

Это задание созданно исключительно в целях базового ознакомления с механиками программирования а так же с целью
разжигания интереса к программированию.

### Что нужно сделать?

Сохрани этот репозиторй локально, а затем попробуй ничего не копируя переписать все своими руками.

Как сохранить? 

- Открой GitHub
-