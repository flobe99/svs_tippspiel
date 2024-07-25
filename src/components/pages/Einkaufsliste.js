import React, { Component, useState, useEffect } from 'react';
import '../../App.css';
import Tippabgabe from './Tippabgabe';
import { Box, Collapse, Container, Grid, TableCell, TableRow, Typography, Checkbox } from '@mui/material';
import TextContainer from '../TextContainer';
import Papa from 'papaparse';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const ERow = (props) => {
    const { row, rowIndex } = props;
    const [openCollapse, setOpenCollapse] = useState(false);
    const [data, setData] = useState([]);
    const [headers, setHeaders] = useState([]);
    const [filters, setFilters] = useState({});

    const handleFilterChange = (event, header) => {
        const value = event.target.value;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [header]: value,
        }));
    };

    const handleCheckboxChange = (rowIndex) => {
        setData((prevData) =>
            prevData.map((row, index) =>
                index === rowIndex ? { ...row, Eingekauft: !row.Eingekauft } : row
            )
        );
    };

    const saveCsvFile = () => {
        const csv = Papa.unparse(data, { header: true });
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.setAttribute('download', 'EssensplanCalc2024.csv');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const filteredData = data.filter((row) => {
        return headers.every((header) => {
            const filterValue = filters[header];
            if (!filterValue) return true;
            return row[header].toString().toLowerCase().includes(filterValue.toLowerCase());
        });
    });

    return (
        <>
            <React.Fragment key={row.Artikel}>
                <TableRow >
                    <TableCell>
                        <Checkbox onChange={() => handleCheckboxChange(rowIndex)} />
                    </TableCell>
                    <TableCell component="th" scope="row">
                        {row.Artikel}
                    </TableCell>
                    <TableCell align="right">{row.Menge} {row.Einheit}</TableCell>
                    <TableCell>
                        <IconButton
                            aria-label="expand row"
                            size="small"
                            onClick={() => setOpenCollapse(!openCollapse)}
                        >
                            {openCollapse ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        </IconButton>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                        <Collapse in={openCollapse} timeout="auto" unmountOnExit>
                            <Box sx={{ margin: 1 }}>
                                <Typography>Tage: {row.Tage}</Typography>
                                <Typography>Sonstiges: {row.Sonstiges}</Typography>
                                <Typography>Kategorie: {row.Kategorie}</Typography>
                            </Box>
                        </Collapse>
                    </TableCell>
                </TableRow>
            </React.Fragment>
        </>
    );
}

const CsvReader = () => {
    const [data, setData] = useState([]);
    const [headers, setHeaders] = useState([]);
    const [filters, setFilters] = useState({});



    useEffect(() => {
        // CSV-Datei aus dem public-Ordner laden
        fetch('/data/EssensplanCalc2024.csv')
            .then((response) => response.text())
            .then((csvText) => {
                Papa.parse(csvText, {
                    header: true,
                    dynamicTyping: true,
                    complete: (result) => {
                        setHeaders(result.meta.fields);
                        setData(result.data);
                    }
                });
            });
    }, []);



    return (



        data.map((row, rowIndex) => (
            <ERow key={row.id} row={row} rowIndex={rowIndex} />
        ))



    );
};

class Einkaufsliste extends Component {


    render() {
        window.scrollTo(0, 0)
        return (
            <div>
                <TableRow >
                    <TableCell></TableCell>
                    <TableCell component="th" scope="row">
                        Artikel
                    </TableCell>
                    <TableCell align="right">Menge</TableCell>
                    <TableCell></TableCell>
                </TableRow>
                <CsvReader />
            </div>
        );
    }
}

export default Einkaufsliste;