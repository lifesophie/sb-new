const TelegramBot = require('node-telegram-bot-api');
const token = '7871190937:AAHn_Ad8G6eKyVUCOwDNKGqFywnA6T88pIg'; // Замени на токен, который ты получила от BotFather
const bot = new TelegramBot(token, { polling: true });

// Функция для отправки уведомлений
const sendNotification = (name, email, phone, courseName) => {
    const chatId = '318068904'; // Замени на ID чата, куда будет отправлено уведомление
    const message = `Новая заявка:\nИмя: ${name}\nEmail: ${email}\nТелефон: ${phone}\nКурс: ${courseName}`;
    try {
        bot.sendMessage(chatId, message);
    } catch (error) {
        console.error('Error sending notification:', error);
        throw error;
    }
};

module.exports = { sendNotification };
