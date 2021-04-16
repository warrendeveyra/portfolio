import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


export class NavigationHeader extends Component {
    render() {
        return (
                <AppBar position="sticky" style={{ backgroundColor: "#FFF", color: "#000" }}>
                    <Toolbar style={{ height: "10vh" }}>
                        <Typography variant="h6" style={{ paddingLeft: "20px" }}>
                            <b>Warren.</b> 
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar> 
                </AppBar>
        );
    }
}

export default NavigationHeader
