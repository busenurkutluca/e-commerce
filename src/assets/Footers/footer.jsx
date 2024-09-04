import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  const sections = [
    {
      title: 'Company Info',
      links: ['About Us', 'Carrier', 'We are hiring', 'Blog'],
    },
    {
      title: 'Legal',
      links: ['About Us', 'Carrier', 'We are hiring', 'Blog'],
    },
    {
      title: 'Features',
      links: ['Business Marketing', "User Analytic", 'Live Chat', 'Unlimited Support'],
    },
    {
      title: 'Resources',
      links: ["IOS & Android",'Watch a Demo','Customers', 'API'],
    },
    {
      title: 'Get In Touch',
      links: [
        <div key="email-subscribe" style={styles.subscribeContainer}>
          <input
            type="email"
            placeholder="Your Email"
            style={styles.emailInput}
          />
          <button style={styles.subscribeButton}>Subscribe</button>
        </div>,
      ],
    },
  ];

  return (
    <footer style={styles.footer}>
      <div style={styles.topBar}>
        <div style={styles.bandage}>Bandage</div>
        <div style={styles.iconContainer}>
          <FontAwesomeIcon icon={faInstagram} style={styles.icon} />
          <FontAwesomeIcon icon={faFacebook} style={styles.icon} />
          <FontAwesomeIcon icon={faTwitter} style={styles.icon} />
        </div>
      </div>
      <div style={styles.footerContainer}>
        {sections.map((section, index) => (
          <div key={index} style={styles.footerSection}>
            <h3>{section.title}</h3>
            <ul style={styles.footerList}>
              {section.links.map((link, index) => (
                <li key={index} style={styles.footerItem}>
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#FFFFFF', // Footer arka plan rengi
    color: '#333',
    padding: '20px 0',
  },
  topBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#f7f7f7',
  },
  bandage: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  iconContainer: {
    display: 'flex',
    gap: '15px',
  },
  icon: {
    color: '#23A6F0', // İkon rengi
    fontSize: '20px',
    cursor: 'pointer',
  },
  footerContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  footerSection: {
    flex: '1',
    padding: '10px',
  },
  footerList: {
    listStyle: 'none',
    padding: '0',
  },
  footerItem: {
    margin: '5px 0',
  },
  subscribeContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  emailInput: {
    padding: '5px',
    marginRight: '10px',
    flex: '1',
  },
  subscribeButton: {
    padding: '5px 10px',
    backgroundColor: '#23A6F0', // Buton arka plan rengi
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    fontFamily: 'Montserrat, sans-serif', // Font Montserrat
  },
};

export default Footer;


