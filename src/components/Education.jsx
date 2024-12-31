// src/components/Education.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import '../styles/Education.css'; // Подключаем стили
import { Link } from "react-router-dom";

const Education = () => {
    const [courses, setCourses] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/courses`);
                if (Array.isArray(response.data)) {
                    setCourses(response.data.slice(0, 4)); // Получаем первые 4 курса
                } else {
                    console.error('Data is not an array', response.data);
                }
            } catch (error) {
                console.error('Error fetching courses:', error);
                setError('Ошибка при загрузке курсов');
            }
        };

        fetchCourses();
    }, []);

    if (error) {
        return <div>Ошибка: {error}</div>;
    }

    return (
        <div className="education">
            <div className="heading-education">
                <h1>Наши образовательные программы</h1>
            </div>
            <div className="more-education"><a href="/courselist">Посмотреть все курсы</a></div>
            <div className="all-courses">
                {courses.map((course) => (
                    <div key={course.id} className="one-course">
                        <div className="header-of-card">{course.name}</div>
                        <div className="type-education">Форма обучения: {course.form_edu}</div>
                        <div className="long-education">Срок обучения: {course.long_edu}</div>
                        <div className="needed-level">Требуемый уровень: {course.needed_level}</div>
                        <div className="price">Стоимость курса: {course.price}</div>
                        <Link to={`/courselist/${course.id_type_course ? course.id_type_course.toLowerCase() : ''}`}>
                            <button className="button-more-courses">Подробнее</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Education;
