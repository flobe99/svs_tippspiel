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
                    <Typography>
                        Bitte bezahle 30€ bei deinem Tipppaten {data.person_data.inputs.tipp_pate} oder per Paypal <strong>sv-sulmetingen@web.de</strong> und gebe deinen Vornamen, Nachnamen und E-Mail als Verwendungszweck an.
                    </Typography>
                    <img src="images/paypal_qr.png" max-width="0.5vw" width="50%" />

                    <Typography>
                        Dein Tipppate {data.person_data.inputs.tipp_pate} wird sich bei dir melden.
                    </Typography>
                    <Button type="submit" variant="contained" onClick={handleClick_Home}>Startseite</Button >
                </>
            } />

        </>
    );

}

export default Tippabgabe_Feedback;