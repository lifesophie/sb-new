// src/components/CourseList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/CourseList.css';
import { Link, useParams } from "react-router-dom";

function CourseList() {
    const [type1Courses, setType1Courses] = useState([]);
    const [courses, setCourses] = useState([]);
    const [selectedCourseType, setSelectedCourseType] = useState(null);
    const { type } = useParams();

    useEffect(() => {
        const fetchType1Courses = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/type1_course`);
                setType1Courses(response.data);
            } catch (error) {
                console.error('Error fetching type1_course:', error);
            }
        };

        const fetchCourses = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/courses`);
                setCourses(response.data);
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };

        fetchType1Courses();
        fetchCourses();
    }, []);

    useEffect(() => {
        if (type) {
            const courseType = type1Courses.find(tc => tc.name.toLowerCase() === type.toLowerCase());
            if (courseType) {
                setSelectedCourseType(courseType.id);
            }
        }
    }, [type, type1Courses]);

    const handleCourseTypeClick = (courseTypeId) => {
        setSelectedCourseType(courseTypeId);
    };

    const handleResetFilter = () => {
        setSelectedCourseType(null);
    };

    const filteredCourses = selectedCourseType
        ? courses.filter((course) => course.id_type1_course === selectedCourseType)
        : courses;

    return (
        <div className='course-list'>
            <ul className="breadcrumb">
                <li><Link to="/">Главная</Link></li>
                <li className="red-text">Курсы</li>
            </ul>
            <h1>Список курсов</h1>
            <div className='all-course'>
                <div className='sidebar-left'>
                    <div className='type-of-course-left'>
                        <div
                            className={`header-course-one ${selectedCourseType === null ? 'selected' : ''}`}
                            onClick={handleResetFilter}
                        >
                            Повышение квалификации
                        </div>
                        {type1Courses.map((courseType) => (
                            <div
                                key={courseType.id}
                                className={`course-one ${selectedCourseType === courseType.id ? 'selected' : ''}`}
                                onClick={() => handleCourseTypeClick(courseType.id)}
                            >
                                {courseType.name}
                            </div>
                        ))}
                    </div>
                </div>
                <div className='catalog-of-courses'>
                    {filteredCourses.map((course) => (
                        <div key={course.id} className='one-course'>
                            <div className='header-of-card'>{course.name}</div>
                            <div className='type-education'>Форма обучения: {course.form_edu}</div>
                            <div className='long-education'>Срок обучения: {course.long_edu}</div>
                            <div className='needed-level'>Требуемый уровень: {course.needed_level}</div>
                            <div className='price'>Стоимость курса: {course.price}</div>
                            <Link to={`/onecourse/${course.id}`}>
                                <button className="button-more-courses">Подробнее</button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CourseList;
