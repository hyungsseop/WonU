import React from 'react';
import './css/Footer.css';


function Footer() {
    return(
    <div className="footer-container">
        <div className="content-wrap">
          © {new Date().getFullYear()} WONU. All Rights Reserved.
          <br />
          Tel. 000-0000-0000. 대표자명: 김현지
        </div>
    </div>
    );
}

export default Footer;

