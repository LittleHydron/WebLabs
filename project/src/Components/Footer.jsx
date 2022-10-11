import React from 'react';
import no_logo from './images/no_logo.png';
import fb from './images/fb.png';
import tw from './images/tw.png';
import ln from './images/in.png';
import g from './images/g.png';

const Footer = () => {
    return (
        <footer className="wrap">
            <div className="inside_content">
                <div className="top_part">
                    <div className="left_part">
                        <div className="branding_stuff">
                            <strong>Branding stuff</strong>
                        </div>
                        <div className="lorem_ipsum">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis ante ac orci aliquet pellentesque.
                        </div>
                    </div>
                    <div className="logo_part">
                        <div className="no_logo">
                            <img src={no_logo} alt="no_logo..."/>
                        </div>
                    </div>
                    <div className="social_part">
                        <div className="no_logo_soc">
                            <div className="icon"><img src={fb} alt="Facebook"/></div>
                            <div className="icon"><img src={tw} alt="Twitter"/></div>
                            <div className="icon"><img src={ln} alt="Ln"/></div>
                            <div className="icon"><img src={g} alt="G+"/></div>
                        </div>
                    </div>
                </div>
                <div className="bottom_part">
                    2020 IoT (c) Copyright all rights reserved, blah blah
                </div>
            </div>
        </footer>
    );
};

export default Footer;