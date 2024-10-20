const HeroRight = ({ icon, title, text, fontSize }) => {
  return (
    <div className="card card-grid-double">
      <div className="hero-icon">
        <i style={{ fontSize }} className={icon}/> {/* Replace img with an Icon */}
      </div>
        
      <div className="content">
        <h2 className="card-title">{title}</h2>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
};

export default HeroRight;
