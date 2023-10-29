# Рассмотрение различных методов выборки
## Метод getRandomDocumentsV1:

Плюсы:
- Использует агрегационный пайплайн, что может быть полезным для более сложных запросов.
- Возвращает случайные документы из коллекции.

Минусы:
- Может быть медленным на больших коллекциях, так как требует сканирования всей коллекции.
- Не гарантирует уникальность выбранных документов.

Метод getRandomDocumentsV2:

Плюсы:
- Простой и быстрый способ получения случайных документов.
- Гарантирует уникальность выбранных документов.

Минусы:
- Не подходит для более сложных запросов, так как не использует агрегационный пайплайн.
