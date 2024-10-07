import React, { Component, useEffect, useState } from 'react';
import '../../App.css';
import { Box, Button, FormControl, Table, TableBody, TableHead, TableRow } from '@mui/material';
import { Card, CardContent, Grid, Typography, Snackbar } from '@mui/material';
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import TextContainer from '../TextContainer';

const Tippabgabe_Feedback = () => {

    const location = useLocation();
    const data = location.state;
    console.log(data)

    const navigate = useNavigate();

    const handleClick_Home = () => navigate('/');

    return (
        <>
            <TextContainer title="Tipp erfolgreich gespeichert" children={
                <>
                    <Typography>
                        Danke {data.person_data.inputs.firstname + " " + data.person_data.inputs.lastname + " für die Teilnahme am Tippspiel. Deine Tipps wurden erfolgreich gespeichert."}
                    </Typography>
                    <Button type="submit" variant="contained" onClick={handleClick_Home}>Startseite</Button >
                </>
            } />

        </>
    );

}

export default Tippabgabe_Feedback;