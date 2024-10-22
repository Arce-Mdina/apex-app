import React from 'react';

const Footer = () => {
  return (
    <>
      <footer style={styles.footer}>
        <div style={styles.column}>
          <h3 style={styles.heading}>Helpful Links</h3>
          <p>
            <i 
              className="fa-brands fa-github foot-link" 
              href="https://github.com/Arce-Mdina/apex-app" 
              style={{ fontSize: 30 }}
            />
          </p>
        </div>
        <div style={styles.column}>
          <h3 style={styles.heading}>Copyright</h3>
          © 2024 Filfla.eu All rights Reserved.
        </div>
      </footer>
      
    </>
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
