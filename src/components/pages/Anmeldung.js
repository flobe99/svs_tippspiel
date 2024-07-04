import React, { Component, useState } from 'react';
import '../../App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Box, FormControl } from '@mui/material';

function Order_Form() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (<>
        <Box sx={{ width: 1 }} textAlign='center' >
            <form onSubmit={handleSubmit}>
                <FormControl fullWidth sx={{ maxWidth: "400px", margin: '20px 0px 20px 0px' }} >
                    <h1>Anmeldung</h1>
                    <TextField required id="filled-basic" label="Vorname" variant="filled" onChange={handleChange} name='firstname' value={inputs.firstname} />
                    <TextField required id="filled-basic" label="Nachname" variant="filled" onChange={handleChange} name='lastname' value={inputs.lastname} />
                    <TextField required id="filled-basic" label="E-Mail" variant="filled" onChange={handleChange} name='mail' value={inputs.lastname} />
                    <TextField required id="filled-basic" label="Tipppate" variant="filled" onChange={handleChange} name='tipp_pate' value={inputs.lastname} />
                    <TextField id="filled-basic" label="Sonstiges" variant="filled" type='number' multiline rows={4} onChange={handleChange} name='miscellaneous' value={inputs.miscellaneous} />
                    <Button type="submit" variant="contained" >Bestätigen</Button>
                </FormControl >
            </form>
        </Box >

    </>);
}

class Anmeldung extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chicken_count: 0,
            fries_count: 0,
            nuggets_count: 0
        };
    }

    render() {
        window.scrollTo(0, 0)
        return (
            <Order_Form />
        );
    }
}

export default Anmeldung;