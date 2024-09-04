import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faHeart, faCartPlus, faUser } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    return (
        <nav style={styles.navbar}>
            <div style={styles.brand}>Bandage</div>
            <ul style={styles.navLinks}>
                <li><Link to="/" style={styles.link}>Home</Link></li>
                <li><Link to="/shop" style={styles.link}>Shop</Link></li>
                <li><Link to="/about" style={styles.link}>About</Link></li>
                <li><Link to="/blog" style={styles.link}>Blog</Link></li>
                <li><Link to="/contact" style={styles.link}>Contact</Link></li>
                <li><Link to="/pages" style={styles.link}>Pages</Link></li>
            </ul>
            <div style={styles.icons}>
                <div style={styles.icon}><FontAwesomeIcon icon={faUser} /> Login/Register</div>
                <div style={styles.icon}><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
                <div style={styles.icon}><FontAwesomeIcon icon={faCartPlus} /></div>
                <div style={styles.icon}><FontAwesomeIcon icon={faHeart} /></div>
            </div>
        </nav>
    );
}

const styles = {
    navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#f7f7f7',
    },
    brand: {
        fontSize: '24px',
        fontWeight: 'bold',
    },
    navLinks: {
        display: 'flex',
        listStyle: 'none',
        padding: '0',
        margin: '0',
    },
    link: {
        margin: '0 15px',
        textDecoration: 'none',
        color: '#333',
        fontSize: '16px',
    },
    icons: {
        display: 'flex',
        alignItems: 'center',
    },
    icon: {
        marginLeft: '20px',
        color: '#23A6F0', // İkonların rengi
        fontSize: '20px',
        cursor: 'pointer',
    }
};

export default Navbar;
