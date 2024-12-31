import React, { useState } from "react";
import '../styles/Footer.css';
import { motion } from 'framer-motion';
import Logoktits from "../assets/img/logoktits.png"; // Убедись, что путь к изображению указан правильно
import Logosb from "../assets/img/logo_site-250.png";

const Footer = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <motion.footer>
            <footer className="footer">
                <h1 className="footer-name">Найдите нас здесь</h1>
                <div className="footer-container">
                    <div className="footer-contacts">
                        <div className="address">РТ, г. Казань, ул. Бари Галеева, д. 3А</div>
                        <div className="buttons">
                            <div className="header-logo-ktits">
                                <a href="https://mck-ktits.ru/?ysclid=m4q1bwagt7996007328">
                                    <img src={Logoktits} alt='Лого КТИТС' className="header-logoktits-img" />
                                </a>
                            </div>
                            <div className="header-logo-sb">
                                <a href="/">
                                    <img src={Logosb} alt='Лого сайта' className="header-logosb-img" />
                                </a>
                            </div>
                        </div>
                        <div className="phone">+7 (000) 123-45-67</div>
                        <div className="worktime">на связи с 9:00 до 18:00</div>
                    </div>
                    <div className="footer-maps">
                        <iframe
                            src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa45a4e4182873b1366dfbbfa58cb995cdec8ed7fe0795043d010a6b771517a5c&amp;source=constructor"
                            width="750px"
                            height="330px"
                            frameborder="0"
                        ></iframe>
                    </div>
                </div>
            </footer>
        </motion.footer>
    );
};

export default Footer;
