import React, { useState, useEffect, useRef } from 'react';
import '../styles/Founder.css'; // Подключаем стили
import Found from "../assets/img/andreev.png"
import Youtube from "../assets/img/youtube.png"

const Founder = () => {
    return (
        <div className='founder'>
            <div className='founder-container'>
                <div className='photo'>
                    <img src={Found} alt='Фото основателя' className="photo" />
                </div>
                <div className='desc-photo'>
                    <h3>Владимир Андреев</h3>
                    <div className='expert'>
                        Международный эксперт
                    </div>
                    <div className='sb-founder'>
                        Основатель SkillsBattles
                    </div>
                    <div className='youtube'>
                        <div className='icon-youtube'>
                            <a href="https://www.youtube.com/@SkillsBattles">
                                <img src={Youtube} alt='стрелка выпадающего меню' />
                            </a>
                        </div>
                        <div className='link-youtube'>
                                @SkillsBattles
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Founder