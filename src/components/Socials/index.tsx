import style from "./style.module.css";
import inst from "../../assets/img/inst.svg";
import vk from "../../assets/img/vk.svg";
import fb from "../../assets/img/fb.svg";
import wa from "../../assets/img/whatsapp.svg";

const Socials = () => {
  return (
    <div className={style.socials}>
      <a href="#">
        <img src={inst} alt="Instagram" />
      </a>

      <a href="#">
        <img src={fb} alt="Facebook" />
      </a>

      <a href="#">
        <img src={wa} alt="Whatsapp" />
      </a>

      <a href="#">
        <img src={vk} alt="VK" />
      </a>
    </div>
  );
};

export default Socials;
