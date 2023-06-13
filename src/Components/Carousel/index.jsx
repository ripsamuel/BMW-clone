import { useState } from "react";
import {} from "../../Context";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";
import { RxDotFilled } from "react-icons/rx";
import {
  GiAmericanFootballHelmet,
  GiBookCover,
  GiAbstract031,
  GiClaws,
  GiClover,
} from "react-icons/gi";

export const Carousel = () => {
  Carousel.propTypes = {};

  const infoSlides = [
    {
      url: "https://motos.espirituracer.com/archivos/2019/08/bmw-s1000rr.jpg",
      name: " BMW S100RR",
      description: "LA SUPERBIKE DE LOS SUPERLATIVOS.",
    },
    {
      url: "https://motorradco.vteximg.com.br/arquivos/ids/156303-1280-840/BMW-Motorrad---R-NineT-Scrambler---Enduro-HP---Gris-Granito-Metalizado---2023.jpg?v=638054481988100000",
      name: " BMW C 400 X",
      description: "DESCUBRE TU CIUDAD CURVA A CURVA.",
    },
    {
      url: "https://cosy.bmwgroup.com/us3/cosySec?COSY-EU-100-7331LQAISFqIbe1KnRUQvmEO30jJxaWQFzN89Rxq680UrO5eqKL1PNn6swTxx9%25UnFn65eOoub6TI8nTNm1eFe0Wf6BmKVZUYA89R7hekuM3D%25upyVAfke3x8NHC4wdHg0KE3Jz0ROhAustzL3hTxVN0JeiStC3juzHhQIeMT63D%25JVO0GwgY3hyapRBmS836",
      name: " ENCUENTRA LO MEJOR DE TU CIUDAD.",
    },
    {
      url: "https://www.motor.com.co/__export/1650169202588/sites/motor/img/2022/04/16/20220416_102002207_5d30c40bd63d9_r_1563485766784_277-0-1429-576.png_759710130.png",
      name: " BMW F 900 R. ",
      description: "DINAMICA PROGRESIVA, INTUITIVA.",
    },
    {
      url: "https://motorradco.vteximg.com.br/arquivos/ids/156303-1280-840/BMW-Motorrad---R-NineT-Scrambler---Enduro-HP---Gris-Granito-Metalizado---2023.jpg?v=638054481988100000",
      name: " BMW R 18 ",
      description: "DESCUBRE LA LIBERTAD A CADA KILOMETRO.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? infoSlides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === infoSlides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="carousel-item">
    {/* carousel slides */}
      <section className="carousel m-auto px-4 relative group">
        <div
          style={{ backgroundImage: `url(${infoSlides[currentIndex].url})` }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        >
          {/* left arrow */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text2xl rounded-full p-2 bg-black text-white cursor-pointer">
            <VscChevronLeft onClick={prevSlide} size={30} />
          </div>
          {/* rigth icon  */}
          <div className=" hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text2xl rounded-full p-2 bg-black text-white cursor-pointer">
            <VscChevronRight onClick={nextSlide} size={30} />
          </div>
          <div className="flex top-4 justify-center py-2">
            {infoSlides.map((infoSlides, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className="text-2xl cursor-pointer text-white"
              >
                <RxDotFilled />
              </div>
            ))}
          </div>
        </div>
      </section>
    {/* carousel services - container */}
      <section className=" bg-black opacity-90 text-white ">
        <div className="grid rows-8 items-center grid-col gap-10 p-12">
          <div>
            <div className="grid flex-row gap-6 ">
              <span className=" text-3xl font-extrabold ">
                {infoSlides[currentIndex].name}
              </span>
              <p className="text-2xl font-bold">
                {infoSlides[currentIndex].description}
              </p>
              <button className="bg-white py-3 h-20 text-black mt-6 w-full font-extrabold text-2xl">
                MÁS INFORMACION
              </button>

              <div className="mt-14 w-24 h-10 items-center bg-white rounded-lg font-extrabold text-md text-black justify-center flex">
                {currentIndex + 1} / 5
              </div>
            </div>
          </div>

          <div className="grid text-md gap-16 items-center mb-12">
            <a href="" className="mt-8 hover:text-blue-700">
              <span className="flex items-center">
                <GiClaws className="mr-4 h-10 w-10 " />
                Crea la tuya{" "}
              </span>
            </a>
            <a href="" className=" hover:text-blue-700">
              <span className="flex items-center ">
                <GiAmericanFootballHelmet className="mr-4 h-10 w-10" />
                Test Ride
              </span>
            </a>
            <a href="" className="hover:text-blue-700">
              <span className="flex items-center">
                <GiBookCover className="mr-4 h-10 w-10" />
                Noticias
              </span>
            </a>
            <a href="" className="hover:text-blue-700">
              <span className="flex items-center">
                <GiAbstract031 className="mr-4 h-10 w-10" />
                Vista General de Modelos
              </span>
            </a>
            <a href="" className="hover:text-blue-700">
              <span className="flex items-center">
                <GiClover className="mr-4 h-10 w-10" />
                Encuentra tu concesionario
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Carousel;
