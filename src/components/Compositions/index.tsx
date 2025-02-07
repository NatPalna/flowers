import React, { useState, useEffect, useRef } from "react";
import style from "./style.module.css";
import SectionTitle from "../SectionTitle";
import Button from "../Button";

// Определяем типы
type SliderProps = {
  images: string[]; // Массив URL изображений
  interval?: number; // Интервал автоматической прокрутки (в миллисекундах)
};

const Slider: React.FC<SliderProps> = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false); // Состояние паузы
  const timerRef = useRef<Timeout | null>(null); // Реф для хранения таймера

  // Переход к следующему слайду
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Запуск автоматической прокрутки
  const startAutoPlay = () => {
    if (!isPaused) {
      timerRef.current = setInterval(nextSlide, interval);
    }
  };

  // Остановка автоматической прокрутки
  const stopAutoPlay = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  // Эффект для запуска и остановки автоматической прокрутки
  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay(); // Очистка при размонтировании
  }, [currentIndex, isPaused]); // Зависимости: currentIndex и isPaused

  // Переход к выбранному слайду
  const goToSlide = (index: number): void => {
    setCurrentIndex(index);
  };

  return (
    <section className="section">
      <div
        className={`${style.slider} container`}
        onMouseEnter={() => setIsPaused(true)} // Пауза при наведении
        onMouseLeave={() => setIsPaused(false)} // Возобновление при уходе
      >
        {/* Основной слайд */}
        <div className={style.slider__main}>
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className={style.slider__image}
          />
        </div>

        <div className={style.r_col}>
          <SectionTitle text="композиции и шляпные&nbsp;коробки" type="left" />
          <div className="section_description">
            Композиции могут собираться в любой таре: корзинке, шляпной коробке,
            вазочке или декоративных ящиках. Их нет необходимости ставить в
            вазу, как букеты, потому что цветы питаются при помощи специальной
            флористической губки под названием оазис. Композиции очень удобные
            для подарка, или оформления мероприятия.
          </div>
          <Button text="заказать" type="secondary" />
          {/* Превью слайдов */}
          <div className={style.slider__preview}>
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Preview ${index + 1}`}
                className={`${style.slider__preview__image} ${
                  index === currentIndex ? "active" : ""
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
