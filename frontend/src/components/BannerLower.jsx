import React from "react";
import '../styles/BannerLower.css'; // Подключаем стили

const BannerLower = () => {
    return (
        <div className="banner-lower">
            <div className="text-upper-banner-lower">Готов развиваться?</div>
            <div className="text-lower-bl">Увидимся в нашем</div>
            <div className="text-color-bl">
                <span className="blue-text">Учебном</span><span className="red_text"> центре</span>
            </div>
        </div>
    )
}

export default BannerLower