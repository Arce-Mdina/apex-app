import React from 'react';

const Section = ({ id, backgroundColor, title, content, fontSize, titleTwo, footer, color }) => {
  return (
    <section id={id} style={{ backgroundColor, padding: '4rem 0', textAlign: 'center' }}>
      <div className="section-container">
        <div style={{ fontSize, color, fontFamily: "Optimistic Display,-apple-system,ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji" }}><span style={{ fontWeight: "bold" }}>{title}</span> {titleTwo}</div>
        <div style={{ color, fontSize: "1.2rem" }}>{content}</div>
      </div>
      <footer>{footer}</footer>
    </section>
  );
};

export default Section;
