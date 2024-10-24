import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

const HeroLeft = ({ icon, title, text, fontSize, svg, color }) => {
    return (
      <div className="card card-grid-double flex">
        <div className="content">
          <h2 className="card-title">{title}</h2>
          <p className="card-text">{text}</p>
        </div>

        <div className="hero-icon">
          <Icon icon={icon} style={{ fontSize, color }}/>
          {svg}
        </div>
      </div>
    );
  };
  
  export default HeroLeft;
  