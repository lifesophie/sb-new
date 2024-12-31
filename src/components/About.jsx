import React from "react";
import '../styles/About.css'; // Подключаем стили
import Slider from "./Slider";
import SliderCopy from "./SliderCopy";
import Teachers from "./Teachers";

const About = () => {
    return (
        <div className="about-us">
            <ul class="breadcrumb">
                <li><a href="/">Главная</a></li>
                <li className="red-text">Об учебном центре</li>
            </ul>
            <div className="heading-about">
                <h1>Об учебном центре</h1>
            </div>
            <Slider />
            <div className="disc-about">
                <div className="first-paragraph"><span className="red-text-first">Учебно-тренировочный полигон</span> - это лаборатория передовых образовательных технологий для совершенствования существующих, создания, апробации и внедрения новых образовательных технологий, качественного изменения образовательных услуг, создания научной, кадровой и методической базы для открытия <span className="blue-text-first">новых специальностей</span>, связанных с использованием информационных технологий, повышения уровня методического обеспечения традиционных форм образования и развития преемственности в обучении между учебными заведениями различных уровней (школа - <span className="red-text">техникум</span> - вуз).</div>
                <div className="second-paragraph">В крупнейшем <span className="red-text">Всероссийском, международном учебном центре</span> есть всё необходимое оборудование и расходные материалы для качественной организации учебного процесса. Преподаватели, эксперты и тренеры национальной сборной России с <span className="red-text">международным</span> опытом полностью адаптировали программы обучения под задачи работодателей России. Наши эксперты активно принимают участие в роли преподавателей <span className="blue-text-first">Академии Ворлдскиллс Россия</span> по программам повышения квалификации преподавателей и мастеров производственного обучения в рамках национального проекта <span className="red-text">«Образование».</span>
                </div>
            </div>
            <SliderCopy />
            <div className="license">
                <div className="heading-license">
                    <h1>Лицензия на осуществление образовательной деятельности</h1>
                </div>
                <div className="future-slider"></div>
            </div>
            <Teachers />
            <div className="achievements">
                <div className="heading-achievements">
                    <h1>Наши награды и достижения</h1>
                </div>
                <div className="future-slider"></div>
            </div>
            <div className="equipment">
                <div className="heading-equiipment">
                    <h1>Материально-техническое оснащение</h1>
                </div>
                <div className="list-of-equipment">
                    <ol>
                        <li>Активное сетевое оборудование: Cisco, Hikvision, Yealink, TP-Link, D-Link, ТЕКО, CMD, Dahua и др;</li>
                        <li>Измерительное оборудование: EXFO, Fluke Networks, Greenlee, NetAlly, Yokogawa и др.;</li>
                        <li>Аппараты для сварки оптических волокон:  Fujikura, Sumitomo Electric, Inno Instrument и др;</li>
                        <li>Волоконно-оптические муфты, кроссы: Тойма, Emilink, КСС-Контакт, Hyperline, Связьстройдеталь, ITK, 3M, Cabeus, Lanmaster, Nikomax, R&M, VCOM, НАГ и др;</li>
                        <li>Кабель "витая пара", патч-панели и т.д.: Hyperline, ITK, Cabeus, Lanmaster, Nikomax, R&M, VCOM, Eurolan, Legrand, DKC, Suprlan и др;</li>
                        <li>Волоконно-оптический кабель: Hyperline, Инкаб, Москабель-Фуджикура, Cabeus, VCOM, Белкабельоптика, Сарансккабель-Оптика, Teldor, Связьстройдеталь, Старлинк и др;</li>
                        <li>Специализированные инструменты: Kabifix, Miller, Greenlee, КВТ и др.</li>
                    </ol>
                </div>
                <div className="future-slider"></div>
            </div>
        </div>
    )
}

export default About