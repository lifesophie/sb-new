// db.js
const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres', // Имя пользователя базы данных
    host: 'localhost',
    database: 'postgres', // Имя базы данных
    password: 'S74786719aPROFI2024', // Пароль пользователя базы данных
    port: 5433, // Порт базы данных (по умолчанию 5432)
});

module.exports = pool;
