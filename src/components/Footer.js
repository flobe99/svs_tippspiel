import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {

    var year = (new Date()).getFullYear();

    return (
        <div>
            <hr className="footer-line" />

            <div className='footer-container'>
                <section class='social-media'>
                    <div class='social-media-wrap'>
                        <ul class='social-icons'>
                            <li className="social-icons-box">
                                <Link
                                    class='social-icon-link impressum'
                                    to='/impressum'
                                >
                                    <i class="far fa-list-alt" />Impressum
                                </Link>
                            </li>
                            <li className="social-icons-box">
                                <Link
                                    class='social-icon-link datenschutz'
                                    to='/datenschutz'
                                >
                                    <i class="fas fa-user-lock" />Datenschutz
                                </Link>
                            </li>
                            <li className="social-icons-box">
                                <Link
                                    class='social-icon-link Kontakt'
                                    to='/kontakt'
                                >
                                    <i class="fas fa-user-friends"></i>Kontakt
                                </Link>
                            </li>
                        </ul>
                        <Link to='/' className="rights">
                            <small class='website-rights'>SV Sulmetingen © {year}</small>
                        </Link>
                    </div>
                </section>
            </div >
        </div >
    );
}

export default Footer;

/*
<div class='footer-link-items'>
                        <h2>Über uns</h2>
                        <Link to='/impressum'>Impressum</Link>
                        <Link to='/datenschutz'>Datenschutz</Link>
                        <Link to='/kontakt'>Kontakt</Link>
                    </div>
                    */