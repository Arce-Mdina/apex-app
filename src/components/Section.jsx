import React from 'react';

const Section = ({ id, backgroundColor, title, content }) => {
  return (
    <section id={id} style={{ backgroundColor, padding: '4rem 0', textAlign: 'center' }}>
      <div style={{ width: '100%', margin: '0 auto', padding: '0 1rem' }}>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </section>
  );
};

export default Section;
