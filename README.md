# Уровень 1 Кейс 1
# Рассмотрение различных методов выборки
## Метод getRandomDocumentsV1:

Плюсы:
- Использует агрегационный пайплайн, что может быть полезным для более сложных запросов.
- Возвращает случайные документы из коллекции.

Минусы:
- Может быть медленным на больших коллекциях, так как требует сканирования всей коллекции.
- Не гарантирует уникальность выбранных документов.

## Метод getRandomDocumentsV2:

Плюсы:
- Простой и быстрый способ получения случайных документов.
- Гарантирует уникальность выбранных документов.

Минусы:
- Не подходит для более сложных запросов, так как не использует агрегационный пайплайн.


# Инструкция запуска :
## Локально :

```console
example@user:~/$ git clone https://github.com/AlekseiYuzhanin/radar_first_mongo_project
example@user:~/$ cd radar_first_mongo_project
example@user:~/radar_first_mongo_project$ npm install
example@user:~/radar_first_mongo_project$ npx webpack
example@user:~/radar_first_mongo_project$ npm start
```
Примечание: для использования локальной сборки, необходимо заменить данные в .env файле, на нужные вам для подключения.
## Docker :

```console
example@user:~/$ git clone https://github.com/AlekseiYuzhanin/radar_first_mongo_project
example@user:~/$ cd radar_first_mongo_project
example@user:~/radar_first_mongo_project$ docker-compose up --build
```
