import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
    return (
        <div className='cards'>
            <h1>Übersicht der Inhalte</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/Bestellung.jpg'
                            text='Bestellung hinzufügen'
                            label='Bestellung'
                            path='/order'
                        />
                        <CardItem
                            src='images/DriveIn.jpg'
                            text='Drive-In Übersicht'
                            label='Drive-In'
                            path='/driveIn'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/kitchen.jpg'
                            text='Küchenübersicht der Bestellungen'
                            label='Küche'
                            path='/kitchen'
                        />
                        <CardItem
                            src='images/cloud.jpg'
                            text='Flexibler Cloud-Speicher'
                            label='Cloud'
                            path='/cloud'
                        />
                        <CardItem
                            src='images/bibliothek.jpg'
                            text='Freie Enzyklopädie'
                            label='Wikiserver'
                            path='/wiki'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;