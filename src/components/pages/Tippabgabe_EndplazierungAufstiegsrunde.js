import React, { Component, useEffect, useState } from 'react';
import '../../App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Box, FormControl, Table, TableBody, TableHead, TableRow } from '@mui/material';
import { Card, CardContent, Grid, Typography, Snackbar } from '@mui/material';
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import TextContainer from '../TextContainer';

function formatDate(dateString) {
    const [year, month, day] = dateString.split('-');
    return `${day}.${month}.${year}`;
}

function formatClock(clockString) {
    const [hour, minutes, seconds] = clockString.split(':');
    return `${hour}:${minutes}`;
}

function Order_Form_Endplazierung({ person_data, spiel_tipps }) {
    console.log("Tippabgabe Endplazierung person id: ", person_data);
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [inputs, setInputs] = useState({ person_id: person_data.id });

    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    const handleSubmitEndplazierung = async (event) => {
        event.preventDefault();

        console.log(inputs);
        navigate('/tippabgabe_feedback', { state: { inputs, person_data } });

        try {
            const response = await fetch('https://svs-tippspiel.de/api/saveEndplazierungAufstieg.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(inputs),
            });

            const data = await response.json();

            if (!response.ok) {
                setError(data.message);
                setSuccessMessage(null);
            } else {
                setSuccessMessage(`Endplazierung Tipp erfolgreich gespeichert. Tipp ID: ${data.id}`);
                setError(null);
                console.log("Endplazierung Tipp erfolgreich gespeichert.");


                try {
                    console.log("Mail:");

                    const mail_data = {
                        "person_data": {
                            "person_id": person_data.id,
                            "firstname": person_data.inputs.firstname,
                            "lastname": person_data.inputs.lastname,
                            "mail": person_data.inputs.mail,
                            "tipp_pate": person_data.inputs.tipp_pate
                        },
                        "tipps": spiel_tipps,
                        "endplazierung": {
                            "Endplazierung_1_Aufstieg": inputs.Endplazierung_1,
                        }
                    }

                    console.log(mail_data);

                    const response = await fetch('https://svs-tippspiel.de/api/mailAufstieg.php', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(mail_data),
                    });
                } catch (error) {

                }
                navigate('/tippabgabe_feedback', { state: { inputs, person_data } });
            }

        } catch (error) {
            setError('Fehler: ' + error.message);
            setSuccessMessage(null);
        }


    };

    const handleChange = (event) => {
        const targetname = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [targetname]: value }));
    }

    return (<>
        <Box sx={{ width: 1 }} textAlign='center' justifyContent="center" alignContent={"center"}>
            <form onSubmit={handleSubmitEndplazierung}>
                <FormControl fullWidth sx={{ maxWidth: "500px", margin: '20px 0px 20px 0px' }}>
                    <h1 textAlign="center">Tippabgabe: {person_data.inputs.lastname}, {person_data.inputs.firstname} ({person_data.inputs.mail})</h1>

                    <Card style={{ margin: '10px' }} >
                        <strong>Endplatzierung </strong>
                        <CardContent alignItems='center'>
                            <Grid container alignItems="center" >
                                <Grid item sx={{ width: 250 }}>
                                    <Typography> Endplatzierung 1. Mannschaft</Typography>
                                </Grid>
                                <TextField sx={{ width: 50 }} keyboardType="numeric" onChange={(event) => handleChange(event)} name='Endplazierung_1' value={inputs.Endplazierung_1} pattern="[0-9]*" required />.
                            </Grid>
                        </CardContent>
                        <strong>Bezirksliga Aufstiegsrunde</strong>
                    </Card>
                    <Button type="submit" variant="contained" >Bestätigen</Button>
                </FormControl>
            </form>
        </Box>
    </>);
}

const Tippabgabe_EndplazierungAufstiegsrunde = () => {

    const location = useLocation();
    const data = location.state;
    console.log(data)

    const navigate = useNavigate();

    const handleClick_Anmeldung = () => navigate('/anmeldung');

    if (data != null) {
        console.log("location.id: " + data.person_data.id);
        return (
            <>
                <Order_Form_Endplazierung person_data={data.person_data} spiel_tipps={data.inputs} />
            </>
        );
    }

    else {
        return (
            <>
                <TextContainer title="Bitte zuerst anmelden" children={
                    <>
                        <Button type="submit" variant="contained" onClick={handleClick_Anmeldung}>Anmelden</Button >
                    </>
                } />
            </>);
    }
    console.log(location);

}

export default Tippabgabe_EndplazierungAufstiegsrunde;