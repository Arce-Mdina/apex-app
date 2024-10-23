import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

const HeroRight = ({ icon, title, text, fontSize, svg, color }) => {
  return (
    <div className="card card-grid-double">
      <div className="hero-icon">
        {/* <i style={{ fontSize, color }} className={icon}/> */}
        <Icon icon={icon} style={{ fontSize, color }} />
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
