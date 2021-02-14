import React from 'react';
import Addblock from "./add";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
let avatar = require("../assets/img/avatar.gif")

class Employees extends React.Component {
    
    constructor()
    {
        super();
        this.state = {
            people: [],
            value: ""
        }
        this.textInput = React.createRef();

    }

    state = {
        people: {},
        value: "",
        new: false
    }

    componentDidMount()
    {
        this.getPeopleList();
    }

    getPeopleList()
    {
        let promis = new Promise(function (resolve, reject)
        {
            resolve(
                fetch("https://reqres.in/api/users?per_page=12")
                .then(data => data.json())
                .then(data => (data))
                .catch(error => console.error(error))
            )
        }); 

        promis.then(result => {
            this.setState({people: result.data})
        })
    }

    deletePerson(index)
    {
        this.setState({
            people: [
                ...this.state.people.slice(0, index),
                ...this.state.people.slice(index + 1)
            ]
        });
    }


    addPerson()
    {
        this.setState({new: true})
    }

    addFun(name, soname, email)
    {
        this.setState({people: this.state.people.concat({"first_name": name, "last_name": soname,"email": email, "avatar" : avatar })});
        //this.textInput.current.value = ''
    }

    render()
    {
        let list = this.state.people.map((item, index) => {
            return <li key={index} className = "row">
                        <span className="textName">{`${item["first_name"]} ${item["last_name"]}`}</span>
                        <span className="text">{`email: ${item["email"]}`}</span>
                        <img className = "image" src = {item["avatar"]}/> 
                <button className = "delete"
                    onClick={this.deletePerson.bind(this, index)}>delete
                </button>
            </li>;
        });
        
        if (this.state.new)
        {
            return  <Router>
                        <div className = "order">
                        <Addblock path = "/add" fun = {this.addFun.bind(this)}/>
                            <ul className="list">
                                {list}
                            </ul>
                        </div>
                    </Router>
        }
        else
        {
            return  <Router>  
                        
                        <div className = "order">
                            <button className = "addBlock_button"
                                   onClick={ () => this.addPerson()}>Add New !
                            </button>

                            <ul className="list">
                                {list}
                            </ul>
                        </div>
                    </Router>
        }
        
    }
}

export default Employees;
