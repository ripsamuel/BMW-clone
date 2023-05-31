import { createContext } from "react";
import PropTypes from 'prop-types';


export const BWMcontext = createContext();

export const BWMcontextProvider = ({children}) => {

// CARDS SECTION
    const infoCard = [
        {
            id : 1,
            imgUrl :'https://www.todocircuito.com/ckfinder/userfiles/images/bmw-s1000rr-s1000r.jpg',
            title :'Garantia de 2 años en todos los cascos*',
            subTitle :' Ahora ampliada para más placer en cada viaje.',
            buttonText :'MAS INFORMACION',
            content: '*Solo disponible en las distribuidoras participantes de BMW Motorrad. Cascos comprados a partir del primero de enero de 2020'
        },
        {
            id : 2,
            imgUrl :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRspxFXcTrlLqphWtf47_XXYryF0L3faW83yAb2IU0LsDtaklBVAOWJdZzPCZ6WrHiEqAE&usqp=CAU',
            title :'3 Años de garantia',
            subTitle :'Para tu nueva moto en todos los modelos 2019 en adelante.*',
            buttonText :'Ver detalles',
            content: 'BMW MOTORRAD representa la pasión, el dinamismo, el diseño, la tecnología, la innovación y, sobre todo, la calidad. Basándose en esta convicción, BMW MOTORRAD es el primer fabricante Premium que amplía la garantía legal de sus motos de 24 meses a 36 meses. Disfruta de la tranquilidad que obtendrás al saber que dispones de reparaciones gratuitas. Aprovéchate de estos tres años llenos de beneficios. ¿Qué estás esperando? *Excluida HP4 Race',
        },
        {
            id : 3,
            imgUrl :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6o2XwwGxrQtg-lMMRI-sw2-DN03oS_r3wlw&usqp=CAU',
            title :'LEGO® Technic™ M 1000 RR',
            subTitle :'Building like no other..',
            buttonText :'MÀS INFORMACIÓN',
            content: 'You are driven by the fascinating original. It’s a passion that dominates you. For you, every detail, every millimetre, every technical feature counts. You love this feeling and bring it to life on the street, on the racetrack and now finally also at home: the first M LEGO® model ever and the largest LEGO® Technic motorcycle model to date has been created in close cooperation with LEGO® Technic designers The LEGO® Technic M RR at a scale of 1:5. The specifications were clear – maximum precision to make what had previously been impossible possible. Parts were designed from scratch if they did not meet the strict requirements, something that was also done with the original. That’s exactly what “Born on the Racetrack. Build at home.” represents.',
        },
    ]
  

  return (
    <BWMcontext.Provider value={{
        infoCard,
    }}>
        {children}
    </BWMcontext.Provider>
  );
};


BWMcontextProvider.propTypes = {
  children: PropTypes.node.isRequired, // Validación de la propiedad 'children'
};
