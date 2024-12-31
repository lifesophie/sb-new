import React from "react";
import '../styles/Banner.css'; // Подключаем стили

const Banner = () => {
    return (
        <div className="banner">
            <div className="text-banner">Усовершенствуем <span className="text-banner-red">практические</span> навыки специалистов в области телекоммуникационных сетей</div>
            <button className="button-profi"><a href="/courselist">Хочу быть профи</a></button>
        </div>
    )
}

export default Banner