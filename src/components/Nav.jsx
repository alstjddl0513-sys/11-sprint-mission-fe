// import styles from './Nav.module.css';
import logo from '../assets/판다 얼굴.svg';

function Nav() {
  return (
    <div>
      <div>
        <div>
          <a href="/">
            <img src={logo} alt="판다마켓 로고" />
            판다마켓
          </a>
        </div>
        <ul>
          <li>
            <a href="/">자유게시판</a>
          </li>
          <li>
            <a href="/">중고마켓</a>
          </li>
        </ul>
      </div>
      <button>로그인</button>
    </div>
  );
}

export default Nav;
