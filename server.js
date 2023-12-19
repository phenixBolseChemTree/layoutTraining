const express = require('express');
const path = require('path');

const app = express();

// Установка директории, где находится файл index.html
app.use(express.static(path.join(__dirname, './', 'layout')));

// Обработка запроса к файлу index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './', 'layout', 'index.html'));
});

// Запуск сервера на порту 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту http://localhost:3000/ ${PORT}`);
});
