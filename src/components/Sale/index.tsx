import Button from "../Button";
import SectionTitle from "../SectionTitle";
import style from "./style.module.css";
import img from "../../assets/img/sale.jpg";

const Sale = () => {
  return (
    <section className="section">
      <div className={`${style.sale} container`}>
        <div className={style.l_col}>
          <SectionTitle text="акционные предложения" type="left" />
          <div className="section_description">
            При заказе свадебного предоставляется скидка на букет невесты и
            бутоньерку в размере 30%
          </div>
          <Button text="заказать оформление" type="secondary" />
        </div>
        <div className={style.r_col}>
          <picture className={style.sale_pic}>
            <img src={img} alt="sale" className={style.sale_img} />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default Sale;
