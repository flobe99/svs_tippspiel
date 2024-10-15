import React, { Component, useEffect, useState } from 'react';
import '../../App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Box, FormControl, InputLabel, MenuItem, Select, Table, TableBody, TableHead, TableRow } from '@mui/material';
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

function Is_SVS(props) {
    const obj = props.vereinname;
    if (obj == "SV Sulmetingen") {
        return <strong>{obj}</strong>;
    }
    else {
        return obj;
    }
}

function Order_Form({ person_data }) {
    console.log("Tippabgabe person id: ", person_data);
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [inputs, setInputs] = useState(data.map((value) => ({ spiel_id: value._id, person_id: person_data.id, heim: 0, gast: 0 })));

    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        console.log(inputs);
        navigate('/tippabgabe_endplazierungaufstiegsrunde', { state: { inputs, person_data } });

        try {
            const response = await fetch('https://svs-tippspiel.de/api/saveTippsAufstieg.php', {
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
                setSuccessMessage(`Tipp erfolgreich gespeichert. Tipp ID: ${data.id}`);
                setError(null);
                console.log("Tipp erfolgreich gespeichert.");
                navigate('/tippabgabe_endplazierungaufstiegsrunde', { state: { inputs, person_data } });
            }

        } catch (error) {
            setError('Fehler: ' + error.message);
            setSuccessMessage(null);
        }
    };

    const handleChange = (event, index) => {

        console.log(event.target)
        const targetname = event.target.name;
        const value = event.target.value;
        console.log("targetname: " + targetname);
        console.log("value: " + value);
        console.log("index: " + index);
        setInputs(values => {
            const newInputs = [...values];
            newInputs[index] = { ...newInputs[index], [targetname]: value };
            return newInputs;
        });
    }

    const getData = () => {
        fetch('https://svs-tippspiel.de/api/getSpieleAufstieg.php'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                setData(myJson)
                setInputs(myJson.map((value) => ({ spiel_id: value._id, person_id: person_data.id, heim: 0, gast: 0 })));
                console.log("inputs" + inputs)
            });
    }


    useEffect(() => {
        getData()
    }, [])

    return (<>
        <Box sx={{ width: 1 }} textAlign='center' justifyContent="center" alignContent={"center"}>
            <form onSubmit={handleSubmit}>
                <FormControl fullWidth sx={{ maxWidth: "500px", margin: '20px 0px 20px 0px' }}>
                    <h1 textAlign="center">Tippabgabe: {person_data.inputs.lastname}, {person_data.inputs.firstname} ({person_data.inputs.mail})</h1>
                    {data.map((dataObj, index) => {
                        return (
                            <Card style={{ margin: '10px' }} >
                                <strong>Spieltag {index + 1}:  {formatDate(dataObj.Datum)}</strong>
                                <CardContent alignItems='center'>
                                    <Grid container alignItems="center" >
                                        <Grid item sx={{ width: 140 }}>
                                            <Typography><Is_SVS vereinname={dataObj.Heim} /></Typography>
                                        </Grid>
                                        <TextField sx={{ width: 50 }} keyboardType="numeric" onChange={(event) => handleChange(event, index)} name='heim' value={inputs.heim} pattern="[0-9]*" required />
                                        <Grid item>
                                            <Typography>:</Typography>
                                        </Grid>
                                        <TextField sx={{ width: 50 }} keyboardType="numeric" onChange={(event) => handleChange(event, index)} name='gast' value={inputs.gast} pattern="[0-9]*" required />
                                        <Grid item sx={{ width: 140 }} alignItems="center">
                                            <Typography><Is_SVS vereinname={dataObj.Gast} /></Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                                <strong>Anpfiff: {formatClock(dataObj.Anpfiff)}</strong>
                            </Card>
                        );
                    })}
                    <Button type="submit" variant="contained" >Bestätigen</Button>
                </FormControl>
            </form>
        </Box>
    </>);
}

const Tippabgabe_Aufstiegsrunde = () => {

    const location = useLocation();
    const data = location.state;

    const navigate = useNavigate();

    const handleClick_Anmeldung = () => navigate('/anmeldungaufstiegsrunde');

    if (data != null) {
        console.log("location.id: " + data.id);
        return (
            <>
                <Order_Form person_data={data} />
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
}

export default Tippabgabe_Aufstiegsrunde;