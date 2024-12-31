import React, { useState } from "react"
import '../styles/Header.css'
import Logosb from "../assets/img/logo_site-250.png"
import Logoktits from "../assets/img/logoktits.png"
import Arrow from "../assets/img/chevron-down.png"
import { motion } from 'framer-motion';

<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>

const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return ( 
        <motion.header>
            <header className="header">
                <div className="header-upper">
                    <div className="logo-sb">
                        <div className="header-logo-sb">
                            <a href="/">
                                <img src={Logosb} alt='Лого сайта' className="header-logosb-img" />
                            </a>
                        </div>
                        <div className="desc-of-logo">Центр технологических компетенций
                        в сфере IT и связи</div>
                        <div className="header-logo-ktits">
                            <a href="https://mck-ktits.ru/?ysclid=m4q1bwagt7996007328">
                                <img src={Logoktits} alt='Лого ктитс' className="header-logoktits-img" />
                            </a>
                        </div>
                    </div>

                    {/* <div className="contact-info-ktits-logo">
                        <div className="header-logo-ktits">
                            <a href="https://mck-ktits.ru/?ysclid=m4q1bwagt7996007328">
                                <img src={Logoktits} alt='Лого ктитс' className="header-logoktits-img" />
                            </a>
                        </div>
                    </div> */}
                </div>
                <div className="header-lower">
                    <div className="dropdown">
                        <span className="courses"><a href="/courselist">Курсы</a></span><span className="arrow"></span>
                        {/* <div className="dropdown-content">
                            <a href="#">Повышение квалификации</a>
                            <a href="#">Подготовка преподавателей</a>
                            <a href="#">Для учеников школ</a>
                            <a href="#">Дистанционное обучение</a>
                        </div> */}
                    </div>
                    
                    <div className="dropdown">
                        <span className="courses"><a href="/services">Услуги</a></span><span className="arrow"></span>
                        {/* <div className="dropdown-content">
                            <a href="#">В разработке</a>
                            <a href="#">В разработке</a>
                            <a href="#">В разработке</a>
                            <a href="#">В разработке</a>
                        </div> */}
                    </div>
                    <div className="school"><a href="/about">Об учебном центре</a></div>
                    <div className="contacts"><a href="/contacts">Контакты</a></div>
                </div>
            </header>
            </motion.header>
    ) 
};

export default Header;