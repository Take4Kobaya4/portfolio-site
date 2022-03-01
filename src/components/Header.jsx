import CoverImage from './images/cover-image.jpg';
import ProfileImage from './images/profile-image.jpeg';
import { FaTwitter, FaGithub } from 'react-icons/fa';

export const Header = () =>{
  return(
    <header className="main-cover" style={{backgroundImage: `url(${CoverImage})`}}>
    <div className="overlay"></div>
    <div className="container">
      <div className="display-table">
        <div className="display-table-contents">
        <div className="profile-thumb" style={{backgroundImage: `url(${ProfileImage})`}}></div>
        <h1 className="title-text">Takeshi Kobayashi</h1>
        <h3 className="title-text">Web Engineer</h3>
        <ul className="social-icons">
        <li className="icon-link">
          <a href="https://twitter.com/TakeshiKobaya16">
            <FaTwitter color="white" size="2rem" />
          </a>
        </li>
        <li className="icon-link">
          <a href="https://github.com/Take4Kobaya4">
            <FaGithub color="white" size="2rem" />
          </a>
        </li>
        <li className="icon-link">
          <a href="https://github.com/Takeshi3727">
            <FaGithub color="white" size="2rem" />
          </a>
        </li>
        </ul>
        </div>
      </div>
    </div>
    </header>
  );
};
