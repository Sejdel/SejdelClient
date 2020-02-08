import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import './highscoreTable.css';

class HighscoreTable extends Component {

    constructor(props) {
        super(props);
        this.state = { isLoading: false, apiResponse: null };
    }
    
    callAPI() {
        fetch("http://localhost:9000/views/highscore", {
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

    render() {
        if (this.state.apiResponse === null){
            return (
                <div>loading...</div>
            )
        }
        console.log(this.state.apiResponse)
        return (
        
        <Container component="main" maxWidth="sm">
            <Typography color='primary' align='center'>
                <h1>Highscore</h1>
            </Typography>
        <TableContainer component={Paper} fullWidth>
            <Table aria-label="simple table" >
                <TableHead>
                <TableRow>
                    <TableCell align="center" > <h2>Name</h2></TableCell>
                    <TableCell align="right"><h2>Total beer (ml)</h2></TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {this.state.apiResponse.map(row => (
                    <TableRow key={row.name}>
                    <TableCell align="center">{row.name}</TableCell>
                    <TableCell align="right">{row.total_volume}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>

        </Container>
        );
    }
}

export default HighscoreTable;