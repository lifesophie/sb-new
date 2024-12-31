const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('./db'); // Импортируем файл конфигурации базы данных
const { saveApplication } = require('./queries'); // Импортируем функцию для сохранения заявок
const { sendNotification } = require('./bot'); // Импортируем функцию для отправки уведомлений в Telegram

const app = express();
const port = process.env.PORT || 5175; // Используем переменную окружения для порта

app.use(express.json());
app.use(cors());

// Отдача статических файлов
app.use(express.static(path.join(__dirname, 'build')));

// Отдача статического HTML-контента для корневого URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/api/type_course', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM type_course');
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching courses:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/api/courses', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM courses');
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching courses:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/api/type1_course', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM type1_course');
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching type1_course:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/api/courses/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await db.query('SELECT * FROM courses WHERE id = $1', [id]);
        if (result.rows.length > 0) {
            res.json(result.rows[0]);
        } else {
            res.status(404).json({ error: 'Course not found' });
        }
    } catch (error) {
        console.error('Error fetching course:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/api/submit-application', async (req, res) => {
    const { name, email, phone, courseId, courseName } = req.body;

    try {
        console.log('Received application data:', { name, email, phone, courseId, courseName });

        // Сохранение заявки в базе данных
        const newApplication = await saveApplication(name, email, phone, courseId, courseName);
        console.log('Application saved:', newApplication);

        // Отправка уведомления в Telegram
        await sendNotification(name, email, phone, courseName);
        console.log('Notification sent');

        res.status(200).send('Заявка успешно отправлена');
    } catch (error) {
        console.error('Error saving application or sending notification:', error);
        res.status(500).send('Ошибка при отправке заявки');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
