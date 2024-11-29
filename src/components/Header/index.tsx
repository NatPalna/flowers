import Logo from "../Logo";
import style from "./style.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={`container ${style.header__container}`}>
        <Logo />
        <nav className={style.nav}>
          <ul className={style.nav__list}>
            <li className={style.nav__item}>
              <a href="#" className={style.nav__link}>
                УСЛУГИ
              </a>
            </li>
            <li className={style.nav__item}>
              <a href="#" className={style.nav__link}>
                АКЦИИ
              </a>
            </li>
            <li className={style.nav__item}>
              <a href="#" className={style.nav__link}>
                КОМПОЗИЦИИ
              </a>
            </li>
            <li className={style.nav__item}>
              <a href="#" className={style.nav__link}>
                ПОДАРОЧНЫЕ КАРТЫ
              </a>
            </li>
            <li className={style.nav__item}>
              <a href="#" className={style.nav__link}>
                НАШИ ПАРТНЁРЫ
              </a>
            </li>
          </ul>
        </nav>
        <div>+7 (916) 392 17 77</div>
      </div>
    </header>
  );
};

export default Header;
