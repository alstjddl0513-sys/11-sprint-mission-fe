import facebook from '../assets/facebook.svg';
import instagram from '../assets/ic_instagram.svg';
import twitter from '../assets/ic_twitter.svg';
import youtube from '../assets/youtube.svg';
// import styles from './Footer.module.css';

function Footer() {
  return (
    <footer>
      <div>
        <div>@codeit-2024</div>
        <div>
          <a href="/">PrivacyPolicy</a>
          <a href="/">FAQ</a>
        </div>
        <div>
          <a href="https://www.facebook.com/">
            <img src={facebook} alt="페이스북" target="blank" />
          </a>
          <a href="https://www.twitter.com/">
            <img src={twitter} alt="트위터" target="blank" />
          </a>
          <a href="https://www.youtube.com/">
            <img src={youtube} alt="유튜브" target="blank" />
          </a>
          <a href="https://www.instagram.com/">
            <img src={instagram} alt="인스타그램" target="blank" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
