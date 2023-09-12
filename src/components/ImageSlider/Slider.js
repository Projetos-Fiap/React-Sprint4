import { useState, useEffect } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Button } from "../Button/Button"
import "./Slider.css";

// Importando  e definindo Slides 
import HomeSlide1 from './images/HomeSlide1.jpg';
import HomeSlide2 from './images/HomeSlide2.jpg';
import HomeSlide3 from './images/HomeSlide3.jpg';
import HomeSlide4 from './images/HomeSlide4.jpg';

export const sliderData = [
    {
      image: HomeSlide1,
      heading: "Te ajudamos a cuidar de São Paulo",
      desc: "Vamos ajudar a cidade reciclando nosso lixo? Aprenda mais com a gente",
    },
    {
      image: HomeSlide2,
      heading: "Onde jogar meu lixo?",
      desc: "Veja onde tem um ponto de reciclagem próximo a você",
    },
    {
      image: HomeSlide3,
      heading: "Ganhe pontos",
      desc: "Sabia que você pode trocar seu lixo por benefícios?",
    },
    {
      image: HomeSlide4,
      heading: "Sobre nós",
      desc: "Conheça mais sobre o projeto ReciclaSP",
    },

  ];


const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 8000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <div className="slider">
      <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
      <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />
      {sliderData.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? "slide current" : "slide"}
            key={index}
          >
            {index === currentSlide && (
              <div>
                <img src={slide.image} alt="slide" className="image" />
                <div className="content">
                  <h2>{slide.heading}</h2>
                  <p>{slide.desc}</p>
                  <hr />
                  <Button $primary>Saiba mais</Button>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;