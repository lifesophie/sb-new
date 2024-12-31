// src/components/OneCourse.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import '../styles/OneCourse.css'; // Подключаем стили
import { Link, useParams } from "react-router-dom";
import Modal from 'react-modal';

// Настройка стилей для модального окна
Modal.setAppElement('#root'); // Убедись, что у тебя есть элемент с id="root" в твоем HTML

const OneCourse = () => {
    const [course, setCourse] = useState(null);
    const [type1Courses, setType1Courses] = useState([]);
    const { id } = useParams();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });

    useEffect(() => {
        const fetchCourse = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/courses/${id}`);
                console.log('Fetched course:', response.data); // Проверяем данные курса
                setCourse(response.data);
            } catch (error) {
                console.error('Error fetching course:', error);
            }
        };

        const fetchType1Courses = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/type1_course`);
                console.log('Fetched type1 courses:', response.data); // Проверяем данные типов курсов
                setType1Courses(response.data);
            } catch (error) {
                console.error('Error fetching type1_course:', error);
            }
        };

        fetchCourse();
        fetchType1Courses();
    }, [id]);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/submit-application`, {
                ...formData,
                courseId: id,
                courseName: course.name
            });
            closeModal();
            alert('Заявка успешно отправлена');
        } catch (error) {
            console.error(error);
            alert('Ошибка при отправке заявки');
        }
    };

    if (!course) {
        return <div>Загрузка данных...</div>;
    }

    return (
        <div className="onecourse">
            <ul className="breadcrumb">
                <li><Link to="/">Главная</Link></li>
                <li><Link to="/courselist">Курсы</Link></li>
                <li className="red-text">{course.name}</li>
            </ul>
            <div className="main-container-one-course">
                <div className="main-one-course">
                    <div className="contain-of-main">
                        <div className="heading-of-one-course">{course.name}</div>
                        <div className='type-education-1'>Форма обучения: {course.form_edu}</div>
                        <div className='long-education-1'>Срок обучения: {course.long_edu}</div>
                        <div className='needed-level-1'>Требуемый уровень: {course.needed_level}</div>
                        <div className='price-1'>Стоимость курса: {course.price}</div>
                        <div className="heading-container-content">Содержание курса</div>
                        <div className="content-container">
                            <ul className="content-list">
                                {course.description.split('\n').map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="form-container-content">
                            <button onClick={openModal}>Оставить заявку</button>
                            <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
                                <div className="h2">Оставить заявку</div>
                                <div className="disc-h1">Время ответа на заявку может составить от 2 до 4 часов. <p></p>Просим извинения за столь долгое ожидание.</div>
                                <form className="modal-form" onSubmit={handleSubmit}>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Как к вам обращаться"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Номер телефона"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                    <button type="submit">Свяжитесь со мной</button>
                                    <div className="disc-h1">Оставляя заявку, я настоящим соглашаюсь с Политикой оператора в отношении обработки персональных данных и Пользовательским соглашением
                                    </div>
                                </form>
                                <button className="modal-close-button" onClick={closeModal}>Закрыть</button>
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OneCourse;
