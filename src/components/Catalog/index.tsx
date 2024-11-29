import SectionTitle from "../SectionTitle";
import { CatalogItem } from "./CatalogItem";
import style from "./style.module.css";

const Catalog = () => {
  return (
    <section className="section catalog">
      <div className="container">
        <SectionTitle text="каталог услуг" type="center" />

        <div className={style.catalog__items}>
          <CatalogItem />
        </div>
      </div>
    </section>
  );
};

export default Catalog;
