import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faYoutube, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

const İkon = () => (
    <div style={styles.container}>
        <div style={styles.contact}>
            <FontAwesomeIcon icon={faPhone} style={styles.icon} />
            <span style={styles.text}>(225) 555-0118</span>
            <FontAwesomeIcon icon={faEnvelope} style={styles.icon} />
            <span style={styles.text}>michelle.rivera@example.com</span>
        </div>

        <div style={styles.followUs}>
            <span style={styles.text}>Follow Us and get a chance to win 80% off</span>
        </div>

        <div style={styles.socialIcons}>
            <span style={styles.text}>Follow Us:</span>
            <FontAwesomeIcon icon={faInstagram} style={styles.icon} />
            <FontAwesomeIcon icon={faYoutube} style={styles.icon} />
            <FontAwesomeIcon icon={faFacebook} style={styles.icon} />
            <FontAwesomeIcon icon={faTwitter} style={styles.icon} />
        </div>
    </div>
);

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#252B42', // Arka plan rengi
        padding: '10px 20px',
    },
    contact: {
        display: 'flex',
        alignItems: 'center',
    },
    followUs: {
        display: 'flex',
        justifyContent: 'center',
        flex: '1',
    },
    socialIcons: {
        display: 'flex',
        alignItems: 'center',
    },
    icon: {
        color: '#FFFFFF', // İkon rengi
        marginLeft: '10px',
        fontSize: '18px',
    },
    text: {
        color: '#FFFFFF', // Yazı rengi
        marginLeft: '5px',
        fontSize: '14px',
    }
};

export default İkon;
