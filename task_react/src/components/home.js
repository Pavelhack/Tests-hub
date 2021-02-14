import React from 'react';
let instagram = require("../assets/img/instagram.png")
let telegram = require("../assets/img/telegram.png")
let viber = require("../assets/img/viber.png")
let vk = require("../assets/img/vk.png")

class Home extends React.Component {

    render ()
    { 
        return <div className="main-screen">

                    <div className="container">

                        <div className="main-screen__flex-container">
                    
                            <div className="main-screen__text">
                                <h1>Маркетинговые и IT-услуги<br></br>в Беларуси.</h1>
                                <p>Качественная разработка и доработка сайтов, уникальный дизайн,<br></br>настройка рекламы, привлечение ЦА и
                                круглосуточная техподдержка</p>
                                <div className="main-screen__text-buttons">
                                <button className="button-transparent btn-hover"><a href="#Promo-video">Посмотреть видео<i
                                        className="far fa-play-circle btn-hover"></i></a></button>
                                <button className="button-yellow"><a href="#Order-form">Сделать заказ</a></button>
                                </div>
                            </div>

                            <div className="main-screen__social">
                                <ul>
                                <li><img src = {viber} style = {{height:37 , width:37,  margin : 3}}></img><a title="Viber" href="viber://chat?number=+375293852508"><i className="fab fa-viber"></i></a></li>
                                <li><img src = {vk} style = {{height:30 , width:42, margin : 5}}></img><a href="https://vk.com/webscriptby" target="_blank"><i className="fab fa-vk"></i></a></li>
                                <li><img src = {instagram} style = {{height:45 , width:45}}></img><a href="https://www.instagram.com/webscript.by/" target="_blank"><i className="fab fa-instagram"></i></a>
                                </li>
                                <li><img src = {telegram} style = {{height : 35 , width : 35, margin : 3}}></img><a title="Telegram" href="tg://resolve?domain=Web_Script"><i className="fab fa-telegram-plane"></i></a>
                                </li>
                                </ul>
                            </div>
                            

                        </div>

                    </div>

                </div>  
    };
}

export default Home;
