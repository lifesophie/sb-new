// src/components/Course.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import '../styles/Course.css'; // Подключаем стили
import { Link } from "react-router-dom";

const Course = () => {
    const [typeCourses, setTypeCourses] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/type_course`);
                console.log('response.data', response.data); // <--- Проверяем response.data

                if (Array.isArray(response.data)) {
                    setTypeCourses(response.data);
                } else {
                    console.error('Data is not an array', response.data);
                }
            } catch (error) {
                console.error('Error fetching courses:', error);
                setError('Error fetching courses');
            }
        };

        fetchCourses();
    }, []);

    if (error) {
        return <div>Ошибка: {error}</div>;
    }

    return (
        <div className="type-of-course">
            <ul className="breadcrumb">
                <li><Link to="/">Главная</Link></li>
                <li className="red-text">Курсы</li>
            </ul>
            <div className="container-type-of-course">
                {typeCourses.length > 0 ? (
                    typeCourses.map((course) => (
                        <div key={course.id} className="block-1-blue">
                            <div className="desc">{course.name}</div>
                            <Link to={`/course/${course.name.toLowerCase()}`}><button className="button-more">Подробнее</button></Link>
                        </div>
                    ))
                ) : (
                    <div>Загрузка данных...</div>
                )}
            </div>
        </div>
    );
};

export default Course;
