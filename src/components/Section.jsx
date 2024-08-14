import React from 'react';

const Section = ({ id, backgroundColor, title, content, fontSize, titleTwo, footer }) => {
  return (
    <section id={id} style={{ backgroundColor, padding: '4rem 0', textAlign: 'center' }}>
      <div className="section-container">
        <div style={{ fontSize, fontFamily: "Optimistic Display,-apple-system,ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji" }}><span style={{ fontWeight: "bold" }}>{title}</span> {titleTwo}</div>
        <p style={{ fontSize: "1.2rem" }}>{content}</p>
      </div>
      <footer>{footer}</footer>
    </section>
  );
};

export default Section;
