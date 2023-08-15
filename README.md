# TODO APP


## Фичи:
 - возможность добавить новую тудушку
 - отрисовать список всех тудушек
 - переключить тудушку в состояние “завершена” и обратно в “активна”
 
 - фильтр-панель:
     - показать все тудушки
     - показать только активные
     - показывать только завершенные
 
 - Изначально список тудушек не должен быть пустым. Должно отображаться 5 штук, загруженных отсюда (https://jsonplaceholder.typicode.com/users/1/todos)
 - Обработать 4 состояния fetch-запросов (Idle (до начала запроса), Loading, Error, Success https://learn.javascript.ru/promise-basics). То есть обработать каждую ситуацию. Как именно обрабатывать - на твое усмотрение. Например, при Loading - показать лоадер, при ошибке - вывести ошибку, Success - отрисовывать данные
 - В проекте обязательно должен быть 1 запрос данных (изначальная подгрузка тудушек). 
 
 ## Стек:
    - React 18
    - TypeScript
    - CSS Modules или Tailwind CSS
    - Стейт-менеджер - любой. Можно Redux, можно Jotai, можно любой другой
    - Для запросов - fetch или axios
 ## Обязательные требования к окружению проекта:
    - проект должен запускаться без ошибок командой `npm i && npm run start`
 
 ## Дополнительно:
    - добавить фичу редактирования текста добавленной тудушки
    - добавить фичу удаления всех выполненных
    - написать юнит-тесты

