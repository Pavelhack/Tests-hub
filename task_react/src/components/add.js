import React from 'react';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";


class Addblock extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            fun: props.fun,
            value: ""
        }
        this.textName = React.createRef();
        this.textLastName = React.createRef();
        this.textEmail = React.createRef();

    }

    state ={
       fun: function(){},
       people: {}
    };

    funClearVaule = () => {
        this.textName.current.value = "";
        this.textLastName.current.value = "";
        this.textEmail.current.value = "";
    }


    render()
    {
        return <Router>
                    <div className="addBlock">
                        <input type="text" ref={this.textName} className="formItem" placeholder="first_name"/>
                        <input type="text" ref={this.textLastName} className="formItem" placeholder="last_name"/>
                        <input type="text" ref={this.textEmail} className="formItem" placeholder="email"/>
                        <button className = "add"
                            onClick={() => {
                                this.state.fun(this.textName.current.value, this.textLastName.current.value, this.textEmail.current.value);
                                this.funClearVaule()
                                } } >Add
                        </button>
                    </div>
                </Router>     
    }
}

export default Addblock;