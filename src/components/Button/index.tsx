import style from "./style.module.css";

type ButtonT = {
  text: string;
  className?: string;
  type?: "primary" | "secondary";
  onClick?: () => void;
};

const Button = ({ text, className, type, onClick }: ButtonT) => {
  const cssClass = [style.button, className];

  switch (type) {
    case "primary":
      cssClass.push(style.button_primary);
      break;
    case "secondary":
      cssClass.push(style.button_secondary);
      break;
  }

  return (
    <button className={cssClass.join(" ")} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
