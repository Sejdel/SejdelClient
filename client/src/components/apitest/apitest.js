import React, { Component } from 'react';
import Sejdel from "../../images/sejdel.jpg"

class ApiTest extends Component {

    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }
    
    callAPI() {
        fetch("http://localhost:9000/testAPI", {
            credentials: 'include',
        })
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));
    }
    
    componentWillMount() {
        this.callAPI();
    }

    render() {
        return (
        
        <div>
            <h1> Response1</h1>
            <p className="App-intro">{this.state.apiResponse}</p>
        </div>
        );
    }
}

export default ApiTest;