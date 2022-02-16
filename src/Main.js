import React from "react";
import "./style.css"

const Main = () => {
    return (
        <>
            <div className="namelist position-absolute">
                <ul>
                    <li>Иванов Иван Иванович</li>
                    <li>Петров Петр Петрович</li>
                    <li>Сидоров Сидор Сидорович</li>
                </ul>
            </div>
            <button className="button border-black position-abs">Добавить</button>
            <div className="output border-black position-abs">Выберите сертификат для просмотра информации</div>
        </>
    );
};

export default Main;