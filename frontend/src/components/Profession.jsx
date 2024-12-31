import React from "react";
import '../styles/Profession.css'; // Подключаем стили

const Profession = () => {
    return (
        <div className="profession">
            <h1>Узнай о профессии кабельщика-спайщика</h1>
            <div className="upper-container">
                <div className="heading-container">Если ты:</div>
                <div className="markers">
                    <ul>
                        <li>амбициозный и целеустремленный</li>
                        <li>впервые слышишь о такой профессии</li>
                        <li>хочешь узнать новое</li>
                    </ul>
                </div> 
            </div>
            <div className="lower-container">
                <div className="heading-container-1">Или наоборот:</div>
                <div className="markers-1">
                    <ul>
                        <li>амбициозный и целеустремленный</li>
                        <li>впервые слышишь о такой профессии</li>
                        <li>хочешь узнать новое</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Profession