import React, { Component } from 'react';

const loadUsers = () =>
    fetch('http://localhost:9000/testAPI')
        .then(res => res.json())


class ApiTest extends Component {

    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }
    
    callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));
    }
    
    componentWillMount() {
        this.callAPI();
    }

    render() {
        return (
        
        <div>
            <p>Response</p>
            <p className="App-intro">{this.state.apiResponse}</p>
        </div>
        );
    }
}

export default ApiTest;