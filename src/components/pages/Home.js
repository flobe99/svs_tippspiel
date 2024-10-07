import React, { Component } from 'react';
import '../../App.css';
import Tippabgabe from './Tippabgabe';
import { Box, Button, Container, Grid } from '@mui/material';
import TextContainer from '../TextContainer';
import { Link, NavLink, useNavigate } from 'react-router-dom';

function Home_Content() {

  const navigate = useNavigate();
  const handleClick_Anmeldung = () => navigate('/anmeldungaufstiegsrunde');
  const handleClick_Zwischenstand = () => navigate('/zwischenstand');

  return (<Container >
    <Box >
      <h1>Das SVS - Tippspiel 2024/2025</h1>

      <h2>Unterstütze die 1. und 2. Mannschaft des SVS und gewinne dabei 1 von 20 Sachpreisen!</h2>
    </Box >
    <hr
      style={{
        color: "#636363",
        backgroundColor: "#636363",
        height: 5
      }}
    />
    <br />

    <TextContainer title="Anmeldung" children={
      <div>
        <p>Hier geht es zur Anmeldung für die Aufstiegsrunde</p>
        <Button type="submit" variant="contained" onClick={handleClick_Anmeldung}>Anmelden</Button >
      </div>
    } />

    <TextContainer title="Zwischenstand" children={
      <>
        <p>Nach der Qualifikationsrunde der Bezirksliga Ost ergibt sich folgender Zwischenstand</p>
        <p>
          <Button type="submit" variant="contained" onClick={handleClick_Zwischenstand}>Zwischenstand</Button >
        </p>
      </>
    } />

    <TextContainer title="Die Teams des SVS bedanken sich bei allen Sponsoren für die zahlreichen Preise, die es zu gewinnen gibt!" />

    <img src="images/sponsoren.png" max-width="100vw" width="100%" />


    <TextContainer title="Tippspiel Preise!" children={
      <ol>
        <li> 2 VIP-Karten für ein Heimspiel des FC Bayern München</li>
        <li> Spanferkel für ca. 25 Personen vom Hofladen Henle</li>
        <li> 2x VIP-Karten für ein Heimspiel des SSV Ulm</li>
        <li> 100 € Tankgutschein</li>
        <li> 100 € Gutschein für ein Fliegengitter der Firma Blersch</li>
        <li> 100 € Gutschein für Gartentechnik RADI</li>
        <li> Gutschein für 8x Autowaschen</li>
        <li> Dauerkarte SVS + 1x Getränk + 1x rote Wurst für jedes Heimspiel 2024/2025</li>
        <li> 50 € OsUs Gutschein</li>
        <li> Dauerkarte für alle Heimspiele des SVS in der Saison 2024/2025</li>
        <li> 40€ Gutschein Harry‘s Sport Shop</li>
        <li> 40€ Gutschein Harry‘s Sport Shop</li>
        <li> 40 € Gutschein vom Früchtehandel Russ</li>
        <li> 2 Dauerkarten für die Heimspiele der Handballer vom HRW Laupheim</li>
        <li> 2x Eintritt Kletteranlage im Mobi-Park Laupheim</li>
        <li> 20-Liter Bier von der Kronenbrauerei Laupheim</li>
        <li> 20-Liter Bier von der Kronenbrauerei Laupheim</li>
        <li> Bauernkorb mit regionalen Produkten der Familie Brehm</li>
        <li> 20€ Gutschein Bäckerei Mast</li>
        <li> Wurstkorb von der Landschlächterei Angele</li>
      </ol>
    } />

    <TextContainer title="Preisvergabe" children={
      <p>
        Wie jedes Jahr werden die Preise bei einem gemütlichen Weißwurstfrühstück mit allen Teilnehmern und Sponsoren am Ende der Saison übergeben.
      </p>
    } />



  </Container >);
}

class Home extends Component {

  render() {
    window.scrollTo(0, 0)
    return (
      <>
        <Home_Content />
      </>
    );
  }
}

export default Home;