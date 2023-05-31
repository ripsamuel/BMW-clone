
import "./Styles.css";
import { useContext, useState } from "react";
import { BWMcontext } from "../../Context";
import { Card }   from '../Card/index'
import Carousel from "../Carousel";

const Section = () => {
  const context = useContext(BWMcontext);

  
  // TEST MODAL
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

      <Carousel/>

      {/* reserve section  */}
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
              className={`${
                openModal2 ? " " : ""
              }  py-10 text-medium font-medium `}
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
      
      <section className="bg-black">
     {
        context.infoCard.map(info => (
                <Card
                key={info.id}
                title={info.title}
                imgUrl={info.imgUrl}
                subTitle={info.subTitle}
                content={info.content}
                buttonText={info.buttonText}
                />
        ))
      }
      </section>
    </section>
  );
};

export default Section;
