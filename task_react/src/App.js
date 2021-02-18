import React from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import Employees from "./components/employees";
import Home from "./components/home";
let call = require("./assets/icons/call.png")
let logo = require("./assets/icons/header-logo.svg")
let logofooter = require("./assets/img/logo.png")

class App extends React.Component {

    state = {
        flag: false,
    };

    onBtnEmployees = () => {
        this.setState({flag : true});
    }

    onBtnMine = () => {
        this.setState({flag : false});
    }
render(){   
    if(this.state.flag){
        return <Router>
            <div className="App">
                <header className="header">
                    <div className="header__logo">
                        <a href="#"><img src= {logo}alt="webscript"></img></a>
                    </div>
                    <nav className="header__nav">
                        <ul className="header__nav-list">
                            <li><Link to="/employees" onClick ={() => this.onBtnEmployees() }>Наши сотрудники</Link></li>
                            <li><Link to="/" onClick ={() => this.onBtnMine() }>Главная</Link></li>
                        </ul>
                    </nav>
                    <div className="header__call">
                        <img src= {call} alt="call"></img>
                        <a href="tel:+375293852508">+375 (29) 385 25 08</a>
                    </div>
                </header>
                    <Route path="/employees" component={Employees}/>
                <footer className ="footer">
                    <div className="container">
                    <div className="footer__flex-container">
                        <div className="footer__logo">
                            <img src = {logofooter}></img>
                        </div>
                        <div className="footer__text">
                            <p>Данный контент содержит не коммерчесский характер !!!</p> 
                        </div>
                    </div>
                    </div>
                </footer>
            </div>
        </Router>
    } else {

        return <Router>
            <div className="App">
                <header className="header">
                    <div className="header__logo">
                        <a href="#"><img src= {logo}alt="webscript"></img></a>
                    </div>
                    <nav className="header__nav">
                        <ul className="header__nav-list">
                            <li><Link to="/employees" onClick ={() => this.onBtnEmployees() }>Наши сотрудники</Link></li>
                            <li><Link to="/" onClick ={() => this.onBtnMine() }>Главная</Link></li>
                        </ul>
                    </nav>
                    <div className="header__call">
                        <img src= {call} alt="call"></img>
                        <a href="tel:+375293852508">+375 (29) 385 25 08</a>
                    </div>
                </header>
                <Route path="/" component={Home}/>
                <footer className ="footer">
                    <div className="container">
                    <div className="footer__flex-container">
                        <div className="footer__logo">
                            <img src = {logofooter}></img>
                        </div>
                        <div className="footer__text">
                            <p>Данный контент содержит не коммерчесский характер !!!</p>
                        </div>
                    </div>
                    </div>
                </footer>
            </div>
        </Router>

    }
};
}

export default App;
