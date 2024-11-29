import style from "./style.module.css";

type Title = {
  text: string;
  className?: string;
  type?: "center" | "left";
};

const SectionTitle = ({ text, className, type }: Title) => {
  const cssClass = [style.section_title_container, className];

  switch (type) {
    case "center":
      cssClass.push(style.section_title_center);
      break;
    case "left":
      cssClass.push(style.section_title_left);
      break;
  }

  return (
    <div className={cssClass.join(" ")}>
      <h2 className={style.section_title}>{text}</h2>
      <hr className={style.section_title_hr} />
    </div>
  );
};

export default SectionTitle;
