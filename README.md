# [TODO APP](https://todo-h33f.vercel.app/)
Уникальное приложение, где можно сделать список дел.

## Запуск и команды
Проект запускается командой  `npm i && npm run start`

[Ссылка на деплой](https://todo-h33f.vercel.app/)

Тесты запускаются командой `npm run test`

Проверить линтинг можно командой `npm run lint`

Отформатировать проект можно командой `npm run format`

## Фичи:
 - возможность добавить новую тудушку
 - отрисовать список всех тудушек
 - переключить тудушку в состояние “завершена” и обратно в “активна”
 
 - фильтр-панель:
     - показать все тудушки
     - показать только активные
     - показывать только завершенные
 
 - Изначально список тудушек не пустой. Отображаться 5 штук, загруженных отсюда (https://jsonplaceholder.typicode.com/users/1/todos)
 - Обработаны 4 состояния fetch-запросов (Idle (до начала запроса), Loading, Error, Success https://learn.javascript.ru/promise-basics).
 - В проекте 1 запрос данных (изначальная подгрузка тудушек). 

 ### Дополнительно:
   - добавлена фича редактирования текста добавленной тудушки
   - добавлена фичa удаления всех выполненных
   - добавлена фича удаления вообще всех
   - написаны юнит тесты на базовый CRUD-функциоанaл
 
 ## Стек:
   - React 18
   - TypeScript
   - Tailwind CSS
   - Jotai
   - Для запросов - fetch
   - Vite
   - ESLint
   - Prettier
   - vitest
   - pnpm
