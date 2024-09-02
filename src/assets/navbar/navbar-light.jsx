import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faYoutube, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';



const İkon = () => (
    <>
        <div className="iletisim">
            <FontAwesomeIcon icon={faPhone} />
            <FontAwesomeIcon icon={faEnvelope}/>
        </div>

        <div className="icon">
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faYoutube} />
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faTwitter} />
        </div>
    </>
);

export default İkon