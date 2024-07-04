import React, { Component } from 'react';
import '../../App.css';
import Tippabgabe from './Tippabgabe';
import { Box, Container, Grid } from '@mui/material';
import TextContainer from '../TextContainer';

class Home extends Component {


  render() {
    window.scrollTo(0, 0)
    return (
      <>
        <Container >
          <Box >
            <h1>Das SVS - Tippspiel 2023/2024</h1>

            <h2>Unterstütze die 1. und 2. Mannschaft des SVS und gewinne dabei 1 von 20 Sachpreisen!</h2>
          </Box >
          <hr
            style={{
              color: "#636363",
              backgroundColor: "#636363",
              height: 5
            }}
          />

          <TextContainer title="Und so funktioniert's!" children={
            <div><ul>
              <li>Alle Tipps kosten dich in Summe 30 € </li>
              <li>Vor dem ersten Spieltag unserer 1. Mannschaft, die gesamte Vor- und Rückrunde auf das richtige Ergebnis tippen </li>
              <li>Zusätzlich werden noch die Endplatzierungen der 1. und 2. Mannschaft getippt </li>
            </ul>
              Bei Punktgleichheit und gleicher Anzahl der richtigen Ergebnisse am Ende der Saison entscheidet das Los</div>
          } />


          <TextContainer title="Ein Dank an alle Sponsoren für die zahlreichen Preise, die es zu gewinnen gibt!" children={<ol>
            <li>2 VIP-Karten für ein Heimspiel des FC Bayern München</li>
            <li>Spanferkel für ca. 25 Personen vom Hofladen Henle</li>
            <li> 100 € Tankgutschein</li>
            <li> Rundflug für eine Person</li>
            <li> 100 € Gutschein für ein Fliegengitter der Firma Blersch</li>
            <li> 100 € Gutschein für Gartentechnik RADI</li>
            <li> 2x VIP-Karten für ein Heimspiel des SSV Ulm</li>
            <li> Dauerkarte SVS + 1x Getränk + 1x rote Wurst für jedes Heimspiel 2023/2024 9 50 € OsUs Gutschein</li>
            <li>	Dauerkarte für alle Heimspiele des SVS in der Saison 2023/2024</li>
            <li>	40€ Gutschein Harry‘s Sport Shop</li>
            <li>	40€ Gutschein Harry‘s Sport Shop</li>
            <li>	40 € Gutschein vom Früchtehandel Russ</li>
            <li>	2 Dauerkarten für die Heimspiele der Handballer vom HRW Laupheim</li>
            <li>	2x Eintritt Kletteranlage im Mobi-Park Laupheim</li>
            <li>	20-Liter Bier von der Kronenbrauerei Laupheim</li>
            <li>	20-Liter Bier von der Kronenbrauerei Laupheim</li>
            <li>	Bauernkorb mit regionalen Produkten der Familie Brehm</li>
            <li>	20€ Gutschein Bäckerei Mast</li>
            <li>	Wurstkorb von der Landschlächterei Angele</li>
          </ol>} />



          <div margin="0 auto" width="100%">
            <img src="images/sponsoren.png" />
          </div>

          <TextContainer title="Preisvergabe" children={<p>Wie jedes Jahr werden die Preise bei einem gemütlichen Weißwurstfrühstück, mit allen Teilnehmern und Sponsoren, am Ende der Saison übergeben. </p>} />



        </Container >
      </>
    );
  }
}

export default Home;