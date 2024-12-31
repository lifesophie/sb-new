const pool = require('./db');

const saveApplication = async (name, email, phone, courseId, courseName) => {
    const query = 'INSERT INTO applications (name, email, phone, course_id, course_name) VALUES ($1, $2, $3, $4, $5) RETURNING *';
    const values = [name, email, phone, courseId, courseName];

    try {
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        console.error('Error saving application:', error);
        throw error;
    }
};

module.exports = { saveApplication };
