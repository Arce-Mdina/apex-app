import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.column}>
        <h3 style={styles.heading}>Source Code</h3>
        <p>
          <a
            href="https://github.com/Arce-Mdina/apex-app"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            GitHub Repository
            (Last updated: 9th October 2024)
          </a>
        </p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    display: 'flex',
    justifyContent: 'space-around',
    // backgroundColor: '#f8f9fa',
    padding: '20px 0',
    // borderTop: '1px solid #eaeaea',
    marginTop: '20px',
  },
  column: {
    flex: 1,
    textAlign: 'center',
  },
  heading: {
    marginBottom: '10px',
    fontSize: '18px',
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
    fontWeight: "bold",
  },
};

export default Footer;
