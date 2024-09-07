
import HomeAnimation from '../elements/HomeAnimation';
import './Theme.css';

import Star from '../components/StarCollaps';
const Home = () => {
  
  
  return (
    <div className="home-page">
     
     <Star/>
      <header className="home-header no-select">
        <h5>
          <span className="span">W</span>
          <span className="span">e</span>
          <span className="span">l</span>
          <span className="span">c</span>
          <span className="span">o</span>
          <span className="span">m</span>
          <span className="span">e</span>
        </h5>
        <h5>
          <span className="word-span">To</span>
          <span className="word-span">my</span>
          <span className="word-span">bio</span>
          <span className="word-span">Page</span>
        </h5>
      </header>
      <div className="home-animation-container no-select">
        <HomeAnimation />
      </div>
      
     
      
     
     
    </div>
  );
};

export default Home;














