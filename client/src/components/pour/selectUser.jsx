import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

class SelectUser extends Component {

    constructor(props) {
        super(props);
        this.state = { isLoading: false, apiResponse: null };
        this.handleChange = this.handleChange.bind(this);
    }
    
    callAPI() {
        fetch("http://localhost:9000/users", {
            credentials: 'include',
            method: 'GET',
            headers: {
                Accept: 'application/json',
              }
        })
        .then(res => res.json())
        .then(res => this.setState({ apiResponse: res }));
    }
    
    componentWillMount() {
        this.setState({isLoading: true});
        this.callAPI();
    }

    handleChange(event, value) {
        this.props.onChange(event.target.name, value);
    };

    render() {
        const { value , onChangeValue } = this.props;

        if (this.state.apiResponse === null){
            return (
                <div>loading...</div>
            )
        }
        return (
            <Autocomplete
                required
                id="user"
                value={value}
                onChange={this.handleChange}
                options={this.state.apiResponse}
                getOptionLabel={option => option.name}
                renderInput={params => (
                <TextField {...params} label="User" variant="outlined" fullWidth />
              )}
            />
          );
    }
}

export default SelectUser;