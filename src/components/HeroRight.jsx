const HeroRight = ({ icon, title, text, fontSize, svg, color }) => {
  return (
    <div className="card card-grid-double">
      <div className="hero-icon">
        <i style={{ fontSize, color }} className={icon}/> {/* Replace img with an Icon */}
        {svg}
      </div>
        
      <div className="content">
        <h2 className="card-title">{title}</h2>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
};

export default HeroRight;
