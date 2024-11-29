import style from "./style.module.css";
import img from "../../assets/img/service 1.jpg";

export const CatalogItem = () => {
  return (
    <div className={style.catalog__item}>
      <div className={style.catalog__item_number}>01 ______</div>
      <img src={img} alt="" className={style.catalog__item_img} />
      <div className={style.catalog__item_title}>Название услуги</div>
      <a href="" className={style.catalog__item_link}>
        смотреть работы
      </a>
    </div>
  );
};
