import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";
import { RxDotFilled } from "react-icons/rx";
import {
  GiAmericanFootballHelmet,
  GiBookCover,
  GiAbstract031,
  GiClaws,
  GiClover,
} from "react-icons/gi";

import "./Styles.css";
import { useState } from "react";

const Section = () => {
  const slides = [
    {
      url: "https://motos.espirituracer.com/archivos/2019/08/bmw-s1000rr.jpg",
    },
    {
      url: "https://motorradco.vteximg.com.br/arquivos/ids/156303-1280-840/BMW-Motorrad---R-NineT-Scrambler---Enduro-HP---Gris-Granito-Metalizado---2023.jpg?v=638054481988100000",
    },
    {
      url: "https://cosy.bmwgroup.com/us3/cosySec?COSY-EU-100-7331LQAISFqIbe1KnRUQvmEO30jJxaWQFzN89Rxq680UrO5eqKL1PNn6swTxx9%25UnFn65eOoub6TI8nTNm1eFe0Wf6BmKVZUYA89R7hekuM3D%25upyVAfke3x8NHC4wdHg0KE3Jz0ROhAustzL3hTxVN0JeiStC3juzHhQIeMT63D%25JVO0GwgY3hyapRBmS836",
    },
    {
      url: "https://www.motor.com.co/__export/1650169202588/sites/motor/img/2022/04/16/20220416_102002207_5d30c40bd63d9_r_1563485766784_277-0-1429-576.png_759710130.png",
    },
    {
      url: "https://motorradco.vteximg.com.br/arquivos/ids/156303-1280-840/BMW-Motorrad---R-NineT-Scrambler---Enduro-HP---Gris-Granito-Metalizado---2023.jpg?v=638054481988100000",
    },
  ];
  const infoSlides = [
    { name: " BMW S100RR", description: "LA SUPERBIKE DE LOS SUPERLATIVOS." },
    { name: " BMW C 400 X", description: "DESCUBRE TU CIUDAD CURVA A CURVA." },
    { name: " ENCUENTRA LO MEJOR DE TU CIUDAD." },
    { name: " BMW F 900 R. ", description: "DINAMICA PROGRESIVA, INTUITIVA." },
    {
      name: " BMW R 18 ",
      description: "DESCUBRE LA LIBERTAD A CADA KILOMETRO.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const [openModal1, setOpenModal1] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);

  const onClickModal = (num) => {
    if (num === "1") {
      setOpenModal1((prevState) => !prevState);
      console.log("estado", openModal1);
    } else if (num === "2") {
      setOpenModal2((prevState) => !prevState);
    }
  };

  return (
    // wrapper
    <section className="wrapper">
      {/* carousel slides */}
      <section className="carousel m-auto px-4 relative group">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
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
            {slides.map((slide, slideIndex) => (
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
      {/* services  */}
      <section className="container bg-black opacity-90 text-white ">
        <div className="grid rows-8 items-center grid-col gap-10 p-12">
          <div>
            <div className="grid flex-row gap-6">
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
      {/* add section  */}
      <section className="grid bg-white w-full border border-violet-200">
        <div onClick={() => onClickModal("1")} className="border">
          <figure className="h-auto">
            <img
              className="object-fill w-full"
              src="https://img.remediosdigitales.com/fe7a8c/bmw-display-tft-2017-004/840_560.jpg"
            />
          </figure>
          <div
            className={`${
              openModal1 ? "h-46" : ""
            }  px-10 py-10 cursor-pointer`}
          >
            <h2 className=" font-extrabold text-2xl ">
              Elige y reserva tu nueva BMW MOTORRAD.{" "}
            </h2>

            <p
              className={`${
                openModal1 ? "hidden " : ""
              }  py-10 text-medium font-medium `}
            >
              Explora todas las versiones, equipamiento y colores disponibles
              para tu próxima aventura.
            </p>
            <button
              className={`${
                openModal1
                  ? "hidden"
                  : "bg-black py-3 h-12 text-white mt-6 w-full font-extrabold text-medium hover:bg-blue-700"
              }`}
            >
              CONOCE MAS{" "}
            </button>
          </div>
          <div className="flex justify-start items-center mb-10 ml-10 mt-6">
            <button className=" w-96 border bg-gray-400 h-4 "> </button>
          </div>
        </div>
        <div className="border" onClick={() => onClickModal("2")}>
          <figure>
            <img
              className="object-fill w-full "
              src="https://revistamoto.com/wp_rm/wp-content/uploads/2017/03/BMW-Motorrad.jpg"
            />
          </figure>
          <div
            className={`${
              openModal2 ? "h-32" : ""
            }  px-10 py-10 cursor-pointer`}
          >
            <h2 className="font-extrabold text-2xl">BMW Motorrad </h2>

            <p
              className={`${openModal2 ? " " : ""}  py-10 text-medium font-medium `}
            >
              Contactanos ahora.
            </p>
            <p
              className={`${openModal2 ? "hidden " : ""}  text-3xl font-light `}
            >
              Ponte en contacto con BMW Motorrad.
            </p>
            <button
              className={`${
                openModal2
                  ? "hidden"
                  : "bg-black py-3 h-12 text-white mt-6 w-full font-extrabold text-medium hover:bg-blue-700"
              }`}
            >
              CONTACTANOS{" "}
            </button>
          </div>
          <div className="flex justify-start items-center mb-10 ml-10 mt-14">
            <button className=" w-48 border bg-gray-400 h-2 "> </button>
          </div>
        </div>
      </section>
      {/* cards wrapper */}
      <section>
        {/* item 1*/}
        <div className="mt-4">
          <div
            onClick={() => onClickModal("1")}
            className={`${
              openModal1 ? " flex h-52 " : "grid h-80 px-4 py-10 cursor-pointer"
            } `}
          >
            <figure className=" h-52">
              <img
                className={`${openModal1 ? "w-44 h-full" : "w-full h-full"}`}
                src="https://img.remediosdigitales.com/fe7a8c/bmw-display-tft-2017-004/840_560.jpg"
              />
            </figure>
            <div className="grid ">
              <div
                className={`${
                  openModal1 ? "px-4 py-4 cursor-pointer w-72" : "px-4 py-4"
                } `}
              >
                <h2 className=" font-bold text-lg ">
                  Garantia de 2 años en todos los cascos*{" "}
                </h2>

                <p
                  className={`${
                    openModal1
                      ? " py-1  font-ligth text-sm"
                      : "py-1  font-ligth text-sm"
                  } `}
                >
                  Ahora ampliada para más placer en cada viaje.{" "}
                </p>
                <p
                  className={`${
                    openModal1 ? "hidden " : "py-6 text-sm font-ligth"
                  } `}
                >
                  *Solo disponible en las distribuidoras participantes de BMW
                  Motorrad. Cascos comprados a partir del primero de enero de
                  2020
                </p>
                <button
                  className={`${
                    openModal1
                      ? "hidden"
                      : "bg-black py-3 h-12 items-center  text-white mt-6 w-full font-extrabold text-medium hover:bg-blue-700"
                  }`}
                >
                  MÀS INFORMACIÓN{" "}
                </button>
              </div>
              <div className=" justify-start items-center ml-6 mt-6 ">
                <button className=" w-48 border bg-gray-400 h-2 "> </button>
              </div>
            </div>
          </div>
        </div>
        {/* item 2*/}
        <div className="mt-4">
          <div
            onClick={() => onClickModal("1")}
            className={`${
              openModal1 ? " flex h-52 " : "grid h-80 px-4 py-10 cursor-pointer"
            } `}
          >
            <figure className=" h-52">
              <img
                className={`${openModal1 ? "w-44 h-full" : "w-full h-full"}`}
                src="https://img.remediosdigitales.com/fe7a8c/bmw-display-tft-2017-004/840_560.jpg"
              />
            </figure>
            <div className="grid ">
              <div
                className={`${
                  openModal1 ? "px-4 py-4 cursor-pointer w-72" : "px-4 py-4"
                } `}
              >
                <h2 className=" font-bold text-lg ">
                  Garantia de 2 años en todos los cascos*{" "}
                </h2>

                <p
                  className={`${
                    openModal1
                      ? " py-1  font-ligth text-sm"
                      : "py-1  font-ligth text-sm"
                  } `}
                >
                  Ahora ampliada para más placer en cada viaje.{" "}
                </p>
                <p
                  className={`${
                    openModal1 ? "hidden " : "py-6 text-sm font-ligth"
                  } `}
                >
                  *Solo disponible en las distribuidoras participantes de BMW
                  Motorrad. Cascos comprados a partir del primero de enero de
                  2020
                </p>
                <button
                  className={`${
                    openModal1
                      ? "hidden"
                      : "bg-black py-3 h-12 items-center  text-white mt-6 w-full font-extrabold text-medium hover:bg-blue-700"
                  }`}
                >
                  MÀS INFORMACIÓN{" "}
                </button>
              </div>
              <div className=" justify-start items-center ml-6 mt-6 ">
                <button className=" w-48 border bg-gray-400 h-2 "> </button>
              </div>
            </div>
          </div>
          
        </div>
         {/* item 3*/}
         <div className="mt-4">
          <div
            onClick={() => onClickModal("1")}
            className={`${
              openModal1 ? " flex h-52 " : "grid h-80 px-4 py-10 cursor-pointer"
            } `}
          >
            <figure className=" h-52">
              <img
                className={`${openModal1 ? "w-44 h-full" : "w-full h-full"}`}
                src="https://img.remediosdigitales.com/fe7a8c/bmw-display-tft-2017-004/840_560.jpg"
              />
            </figure>
            <div className="grid ">
              <div
                className={`${
                  openModal1 ? "px-4 py-4 cursor-pointer w-72" : "px-4 py-4"
                } `}
              >
                <h2 className=" font-bold text-lg ">
                  Garantia de 2 años en todos los cascos*{" "}
                </h2>

                <p
                  className={`${
                    openModal1
                      ? " py-1  font-ligth text-sm"
                      : "py-1  font-ligth text-sm"
                  } `}
                >
                  Ahora ampliada para más placer en cada viaje.{" "}
                </p>
                <p
                  className={`${
                    openModal1 ? "hidden " : "py-6 text-sm font-ligth"
                  } `}
                >
                  *Solo disponible en las distribuidoras participantes de BMW
                  Motorrad. Cascos comprados a partir del primero de enero de
                  2020
                </p>
                <button
                  className={`${
                    openModal1
                      ? "hidden"
                      : "bg-black py-3 h-12 items-center  text-white mt-6 w-full font-extrabold text-medium hover:bg-blue-700"
                  }`}
                >
                  MÀS INFORMACIÓN{" "}
                </button>
              </div>
              <div className=" justify-start items-center ml-6 mt-6 ">
                <button className=" w-48 border bg-gray-400 h-2 "> </button>
              </div>
            </div>
          </div>
          
        </div>
         {/* item 4*/}
         <div className="mt-4">
          <div
            onClick={() => onClickModal("1")}
            className={`${
              openModal1 ? " flex h-52 " : "grid h-80 px-4 py-10 cursor-pointer"
            } `}
          >
            <figure className=" h-52">
              <img
                className={`${openModal1 ? "w-44 h-full" : "w-full h-full"}`}
                src="https://img.remediosdigitales.com/fe7a8c/bmw-display-tft-2017-004/840_560.jpg"
              />
            </figure>
            <div className="grid ">
              <div
                className={`${
                  openModal1 ? "px-4 py-4 cursor-pointer w-72" : "px-4 py-4"
                } `}
              >
                <h2 className=" font-bold text-lg ">
                  Garantia de 2 años en todos los cascos*{" "}
                </h2>

                <p
                  className={`${
                    openModal1
                      ? " py-1  font-ligth text-sm"
                      : "py-1  font-ligth text-sm"
                  } `}
                >
                  Ahora ampliada para más placer en cada viaje.{" "}
                </p>
                <p
                  className={`${
                    openModal1 ? "hidden " : "py-6 text-sm font-ligth"
                  } `}
                >
                  *Solo disponible en las distribuidoras participantes de BMW
                  Motorrad. Cascos comprados a partir del primero de enero de
                  2020
                </p>
                <button
                  className={`${
                    openModal1
                      ? "hidden"
                      : "bg-black py-3 h-12 items-center  text-white mt-6 w-full font-extrabold text-medium hover:bg-blue-700"
                  }`}
                >
                  MÀS INFORMACIÓN{" "}
                </button>
              </div>
              <div className=" justify-start items-center ml-6 mt-6 ">
                <button className=" w-48 border bg-gray-400 h-2 "> </button>
              </div>
            </div>
          </div>
          
        </div>
         {/* item 5*/}
         <div className="mt-4">
          <div
            onClick={() => onClickModal("1")}
            className={`${
              openModal1 ? " flex h-52 " : "grid h-80 px-4 py-10 cursor-pointer"
            } `}
          >
            <figure className=" h-52">
              <img
                className={`${openModal1 ? "w-44 h-full" : "w-full h-full"}`}
                src="https://img.remediosdigitales.com/fe7a8c/bmw-display-tft-2017-004/840_560.jpg"
              />
            </figure>
            <div className="grid ">
              <div
                className={`${
                  openModal1 ? "px-4 py-4 cursor-pointer w-72" : "px-4 py-4"
                } `}
              >
                <h2 className=" font-bold text-lg ">
                  Garantia de 2 años en todos los cascos*{" "}
                </h2>

                <p
                  className={`${
                    openModal1
                      ? " py-1  font-ligth text-sm"
                      : "py-1  font-ligth text-sm"
                  } `}
                >
                  Ahora ampliada para más placer en cada viaje.{" "}
                </p>
                <p
                  className={`${
                    openModal1 ? "hidden " : "py-6 text-sm font-ligth"
                  } `}
                >
                  *Solo disponible en las distribuidoras participantes de BMW
                  Motorrad. Cascos comprados a partir del primero de enero de
                  2020
                </p>
                <button
                  className={`${
                    openModal1
                      ? "hidden"
                      : "bg-black py-3 h-12 items-center  text-white mt-6 w-full font-extrabold text-medium hover:bg-blue-700"
                  }`}
                >
                  MÀS INFORMACIÓN{" "}
                </button>
              </div>
              <div className=" justify-start items-center ml-6 mt-6 ">
                <button className=" w-48 border bg-gray-400 h-2 "> </button>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </section>
  );
};

export default Section;
