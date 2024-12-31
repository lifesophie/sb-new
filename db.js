const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.DB_USER, // Имя пользователя базы данных
    host: process.env.DB_HOST,
    database: process.env.DB_NAME, // Имя базы данных
    password: process.env.DB_PASSWORD, // Пароль пользователя базы данных
    port: process.env.DB_PORT, // Порт базы данных (по умолчанию 5432)
});

module.exports = pool;
