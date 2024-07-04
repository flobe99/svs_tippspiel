import React, { Component } from 'react';
import './Beatifulimage.css';
//import { View, Image, ImageBackground, Text } from 'react-native';
import { Link } from 'react-router-dom';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { TextField, Button, FormControl, FormControlLabel, FormHelperText, Checkbox, } from '@material-ui/core';


const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#757ce8',
            main: '#56B52A',
            dark: '#00B500',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
    },
});



class Beautifulimage extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <>
                {/*<View>
                    <ImageBackground source='images/img-1'>
                        <Text>Hey</Text>
                    </ImageBackground>
                </View>*/}
                <div className="beautifulimage">
                    <div className="beautifulimage-text">
                        <div>
                            <h1>Latest Apps</h1>
                            <h4>Download the new brand apps</h4>
                        </div>

                    </div>
                    <div className="beautifulimage-img">
                        <img src="images/notebook-with-smartphone.png" />
                    </div>
                </div >
            </>
        );
    }
}

export default Beautifulimage;




