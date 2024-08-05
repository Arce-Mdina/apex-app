import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.column}>
        <h3 style={styles.heading}>Developer's Name</h3>
        <p>Bill</p>
      </div>
      <div style={styles.column}>
        <h3 style={styles.heading}>Contact Email</h3>
        <p>
          <a href="mailto:william@redhill.space" style={styles.link}>
            william@redhill.space
          </a>
        </p>
      </div>
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
  },
};

export default Footer;
