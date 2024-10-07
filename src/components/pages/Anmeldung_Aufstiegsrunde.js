import React, { Component, useState } from 'react';
import '../../App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Order_Form() {
    const [inputs, setInputs] = useState({});
    const navigate = useNavigate();

    const handleChange = (event) => {
        const targetname = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [targetname]: value }));
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(inputs);

        try {

            const response = await fetch('https://svs-tippspiel.de/api/anmeldenAufstieg.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(inputs),
            });

            if (!response.ok) {
                throw new Error('Fehler beim Speichern der Daten');
            }
            console.log("Speichern der Daten erfolgreich");
            const data = await response.json();
            console.log("data.id: " + data.id);
            const data_id = data.id
            navigate('/tippabgabeaufstiegsrunde', { state: { id: data.id, inputs } });


        } catch (error) {
            console.error('Fehler:', error);
        }
    }


    return (<>
        <Box sx={{ width: 1 }} textAlign='center' >
            <form onSubmit={handleSubmit}>
                <FormControl fullWidth sx={{ maxWidth: "400px", margin: '20px 0px 20px 0px' }} >
                    <h1>Anmeldung</h1>
                    <TextField required id="filled-basic" label="Vorname" variant="filled" onChange={handleChange} name='firstname' value={inputs.firstname} />
                    <TextField required id="filled-basic" label="Nachname" variant="filled" onChange={handleChange} name='lastname' value={inputs.lastname} />
                    <TextField required id="filled-basic" label="E-Mail" variant="filled" onChange={handleChange} name='mail' value={inputs.mail} type='email' />
                    <TextField required id="filled-basic" label="Tipppate" variant="filled" onChange={handleChange} name='tipp_pate' value={inputs.tipp_pate} />
                    <TextField id="filled-basic" label="Sonstiges" variant="filled" type='number' multiline rows={4} onChange={handleChange} name='miscellaneous' value={inputs.miscellaneous} />
                    <Button type="submit" variant="contained" >Bestätigen</Button>
                </FormControl >
            </form>
        </Box >

    </>);
}

class AnmeldungAufstiegsrunde extends Component {

    render() {
        window.scrollTo(0, 0)
        return (
            <Order_Form />
        );
    }
}

export default AnmeldungAufstiegsrunde;