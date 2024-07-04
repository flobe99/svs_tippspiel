import React, { Component } from 'react';
import './Imagetext.css';
import { Grid, Typography } from '@material-ui/core/';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
//import { material } from 'react-native-typography'



class Imagetext extends Component {
    render() {
        return (
            <>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    className="img-container"
                    justify="space-evenly"
                    style={{ background: this.props.bgcolor }}
                >

                    <div className="img-container-text">
                        <h2>{this.props.title}</h2>



                        <p>{this.props.children}</p>



                        <h3><strong>{this.props.subtitle}</strong></h3>
                        {/*<Typography variant="h4">Spiel & Spaß</Typography>*/}
                        {/*<span style={material.display1}>Hello Typography!</span>*/}
                    </div>



                    <div className="img-container-img" >
                        {/*<img loading="lazy" src="images/dicegame-homescreen.jpeg" alt="" width="400" />*/}

                        <ImageGallery
                            items={this.props.images}
                            autoPlay={true}
                            showPlayButton={false}
                            showFullscreenButton={false}
                            showThumbnails={false}
                            showBullets={true}
                            slideInterval={this.props.interval} />
                    </div>
                </Grid>
            </>
        );
    }
}

export default Imagetext;
