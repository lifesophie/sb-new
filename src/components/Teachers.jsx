import React from "react";
import '../styles/Teachers.css'; // Подключаем стили

const Teachers = () => {
    return (
        <div className="teachers">
            <div className="heading-teachers">
                <h1>Лучшие преподаватели-наставники</h1>
                <div className="disc-teachers">Преподаватели SkillsBattles - опытные эксперты, специалисты, а также победители соревнований по профессиональному мастерству прошлых лет</div>
                <div className="techers-photo">
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
    )
}

export default Teachers