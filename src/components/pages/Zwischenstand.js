import React, { Component, useEffect, useState } from 'react';
import '../../App.css';
import { Box, Button, FormControl, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { Card, CardContent, Grid, Typography, Snackbar } from '@mui/material';
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import TextContainer from '../TextContainer';

class Zwischenstand extends Component {
    state = {
        data: [
            { platz: 1, vorname: 'Annika', name: 'Kramer', punkte: 10 },
            { platz: 1, vorname: 'Bruno', name: 'Merkel', punkte: 10 },
            { platz: 1, vorname: 'Kurt', name: 'Werz', punkte: 10 },
            { platz: 4, vorname: 'Dario', name: 'Micic', punkte: 9 },
            { platz: 4, vorname: 'Jessica', name: 'Plünske', punkte: 9 },
            { platz: 4, vorname: 'Franz', name: 'Stöferle', punkte: 9 },
            { platz: 7, vorname: 'Elmar', name: 'Dehler', punkte: 8 },
            { platz: 7, vorname: 'Gerhard', name: 'Bayer', punkte: 8 },
            { platz: 7, vorname: 'Martin', name: 'Huber', punkte: 8 },
            { platz: 7, vorname: 'Lena', name: 'Salamon', punkte: 8 },
            { platz: 7, vorname: 'Dorothee', name: 'Färber', punkte: 8 },
            { platz: 7, vorname: 'Niklas', name: 'Romer', punkte: 8 },
            { platz: 13, vorname: 'Stefan', name: 'Braunger', punkte: 7 },
            { platz: 13, vorname: 'Hartmut', name: 'Pohl', punkte: 7 },
            { platz: 13, vorname: 'Lea', name: 'Stöferle', punkte: 7 },
            { platz: 13, vorname: 'Andreas', name: 'Gapp', punkte: 7 },
            { platz: 13, vorname: 'Uli', name: 'Heim', punkte: 7 },
            { platz: 13, vorname: 'Markus', name: 'Beyerlin', punkte: 7 },
            { platz: 13, vorname: 'Tobias', name: 'Wilhelm', punkte: 7 },
            { platz: 13, vorname: 'Ralf', name: 'Scheck', punkte: 7 },
            { platz: 13, vorname: 'Herrmann', name: 'Werz', punkte: 7 }
        ]
    };

    render() {
        window.scrollTo(0, 0)
        return (
            <>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <h1>Zwischenstand Top 20</h1>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Table style={{ width: '80%', maxWidth: '600px' }}>
                        <TableHead>
                            <TableRow>
                                <TableCell> <strong>Platz</strong></TableCell>
                                <TableCell><strong>Vorname</strong></TableCell>
                                <TableCell><strong>Name</strong></TableCell>
                                <TableCell><strong>Punkte</strong></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.data.map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell>{row.platz}.</TableCell>
                                    <TableCell>{row.vorname}</TableCell>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell>{row.punkte}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div >
            </>
        );
    }
}

export default Zwischenstand;