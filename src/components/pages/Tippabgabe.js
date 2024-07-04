import React, { Component, useEffect, useState } from 'react';
import '../../App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Box, FormControl, Table, TableBody, TableHead, TableRow } from '@mui/material';
import { Card, CardContent, Grid, Typography, Snackbar } from '@mui/material';


function Order_Form() {
    const [data, setData] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const getData = () => {
        fetch('data/partien.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                console.log(response)
                return response.json();
            })
            .then(function (myJson) {
                console.log(myJson);
                setData(myJson)
            });
    }


    useEffect(() => {
        getData()
    }, [])

    return (<>
        <Box sx={{ width: 1 }} textAlign='center' justifyContent="center" alignContent={"center"}>
            <form onSubmit={handleSubmit}>
                <FormControl fullWidth sx={{ maxWidth: "500px", margin: '20px 0px 20px 0px' }}>
                    {data.map((dataObj, index) => {
                        return (
                            <Card style={{ margin: '10px' }} >
                                Spieltag {index + 1}: {dataObj.Datum}
                                <CardContent alignItems='center'>
                                    <Grid container alignItems="center" >
                                        <Grid item sx={{ width: 140 }}>
                                            <Typography>{dataObj.Heim}</Typography>
                                        </Grid>
                                        <TextField sx={{ width: 40 }} keyboardType="numeric" required />
                                        <Grid item>
                                            <Typography>:</Typography>
                                        </Grid>
                                        <TextField sx={{ width: 40 }} keyboardType="numeric" required />
                                        <Grid item sx={{ width: 140 }}>
                                            <Typography>{dataObj.Gast}</Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        );
                    })}
                    <Button type="submit" variant="contained" >Bestätigen</Button>
                </FormControl>
            </form>
            {/*<Table aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <TableCell> Spieltag</TableCell>
                        <TableCell align="left">Datum</TableCell>
                        <TableCell align="center">Heim</TableCell>
                        <TableCell align="left"></TableCell>
                        <TableCell align="center">Gast</TableCell>
                        <TableCell align="left">Tipp</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((dataObj, index) => {
                        return (
                            <>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {index + 1}
                                    </TableCell>
                                    <TableCell align="left">{dataObj.Datum}</TableCell>
                                    <TableCell align="center">{dataObj.Heim}</TableCell>
                                    <TableCell align="center">:</TableCell>
                                    <TableCell align="center">{dataObj.Gast} </TableCell>
                                    <TableCell align="left">
                                        <TextField sx={{ width: 50 }} /> : <TextField sx={{ width: 50 }} />
                                    </TableCell>
                                </TableRow>
                            </>
                        );
                    })}
                </TableBody>
            </Table >*/}

        </Box>
    </>);
}

class Tippabgabe extends Component {

    render() {
        window.scrollTo(0, 0)
        return (
            <Order_Form />
        );
    }
}

export default Tippabgabe;