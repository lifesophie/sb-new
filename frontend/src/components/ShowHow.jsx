import React from "react";
import GalkaBlue from "../assets/img/galka-blue.png"
import GalkaRed from "../assets/img/galka-red.png"
import Arrow1 from "../assets/img/arrow-1.png"
import '../styles/ShowHow.css'; // Подключаем стили

const ShowHow = () => {
    return (
        <div className="showhow">
            <h1>Приходи к нам</h1>
            <div className="heading-showhow-lower">
                <h1>Мы покажем, как:</h1>
            </div>
            <div className="cable">
                <img src={GalkaBlue} alt='пункт' />
                <span className="cable-1">Правильно и быстро разделывать разные виды кабелей</span>
            </div>
            <div className="arrow-1"><img src={Arrow1} alt='пункт' /></div>
            <div className="equipment">
                <span className="galka-red"><img src={GalkaRed} alt='пункт' /></span>
                <span className="equipment-1">Правильно производить монтаж пассивного оборудования</span>
            </div>
            <div className="arrow-2"><img src={Arrow1} alt='пункт' /></div>
            <div className="ref">
                <span className="galka-blue"><img src={GalkaBlue} alt='пункт' /></span>
                <span className="ref-1">Работать с измерительными приборами различных видов кабельных трасс</span>
            </div>
            <div className="arrow-3"><img src={Arrow1} alt='пункт' /></div>
            <div className="certificate">
                <span className="galka-red"><img src={GalkaRed} alt='пункт' /></span>
                <span className="certificate-1">Проводить сертификационные тестирования созданной СКС</span>
            </div>
        </div>
    )
}

export default ShowHow