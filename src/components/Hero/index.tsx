import Button from "../Button";
import Socials from "../Socials";
import style from "./style.module.css";
import scroll from "../../assets/img/scroll.png";
import arrow from "../../assets/img/arrow.svg";

const Hero = () => {
  return (
    <section className={style.hero}>
      <div className={`container ${style.hero__container}`}>
        <div className={style.hero__inner}>
          <h1 className={style.hero__title}>Флористика с душой</h1>
          <Button text="смотреть работы" type="primary" />
        </div>
        <div className={style.hero__actions}>
          <Socials />
          <div className={style.hero__scroll}>
            <img src={scroll} alt="Перейти куда-то" />
          </div>
          <div className={style.hero__scroll_text}>
            <a href="" className={style.hero__scroll_link}>
              <span>смотреть каталог</span>
              <img src={arrow} alt="смотреть каталог" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
