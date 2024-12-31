import React from "react";
import '../styles/Contacts.css'; // Подключаем стили
import Teachers from "./Teachers";
import Form from "./Form";



const Contacts = () => {
    return (
        <div className="contacts-1">
            <ul class="breadcrumb">
                <li><a href="/">Главная</a></li>
                <li className="red-text">Контакты</li>
            </ul>
            <div className="contacts-container">
                <div className="contacts-container-in">
                    <div className="heading-contacts">Контакты</div>
                    <div className="heading-teachers-1">
                        <div className="techers-photo-1">
                            <div className="egor">
                                <div className="egor-photo"></div>
                                <div className="name">Егор Журавлев</div>
                                <div className="disc-name">Победитель чемпионатного цикла 2023, мастер производственного обучения, эксперт СКС</div>
                            </div>
                            <div className="vladimir">
                                <div className="vladimir-photo"></div>
                                <div className="name">Владимир Андреев</div>
                                <div className="disc-name">Международный эксперт, основатель и руководитель проф.сообщества СКС в РФ</div>
                            </div>
                            <div className="sophia">
                                <div className="sophia-photo"></div>
                                <div className="name">София Федорова</div>
                                <div className="disc-name">Победитель чемпионатного цикла 2024, тренер-эксперт СКС Профессионалы</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="form-feedback">
                <div className="heading-form-feedback"><h1>Форма обратной связи</h1></div>
                <Form />
            </div> */}
        </div>
    )
}

export default Contacts