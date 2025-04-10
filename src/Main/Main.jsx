import React,{useState} from "react";
import "./Main.css";

import { useTheme } from "../ThemeContext";

import rendezVousImg from "../assets/rendez-vous.png";
import contactImg from "../assets/courriel-de-contact.png";
import foxy from "../assets/foxy.svg";
import MCT from "../assets/logo-MCT.svg";
import rechercheImg from "../assets/symbole-de-linterface-de-recherche.png";
import info from "../assets/information.png";
import partenaire from "../assets/accord.png";
import gerer from "../assets/gerer.png";

const Main = () => {

  const [buttonC,setButtonC]=useState(false);
  const [searchTerm, setSearchTerm] = useState(""); 

  



  const itemsTab = [
    { title :"RENDEZ-VOUS", image:rendezVousImg ,description :"prenez rendez vous pour effectuer vôtre controle technique", link:"https://www.moncontroletechnique.fr/rechercher-un-centre-de-controle-technique", className: " items one"},
    { title :"RECHERCHE", image:rechercheImg,description :"recherchez des centres partenaires en fonction de vôtre localisation", link:"https://www.moncontroletechnique.fr/", className: "items two"},
    { title :"INFOS", image:info,description :"processus, points de contrôle et conseils pour préparer vôtre véhicule", link:"https://www.moncontroletechnique.fr/#block-informationssurlecontroletechnique", className: "items three"},
    { title :"GERER MES RENDEZ-VOUS", image:gerer,description :"modifiez ou annulez vôtre rendez-vous existant", link:"https://www.moncontroletechnique.fr/annulation_rdv", className: "items four"},
    { title :"CONTACT", image:contactImg,description :"obtenez de l'aide ou des informations supplémentaires", link:"https://www.moncontroletechnique.fr/contactez-nous", className: "items five"},
    { title :"DEVENIR PARTENAIRE", image:partenaire,description :"prenez rendez vous et on vous aidera", link:"https://www.protechnologies.fr/devenir-controleur-technique", className: "items six"}
  ];

  let itemsFiltre = itemsTab;

  const handleButtonC =()=>{
    setButtonC(true);
  };
   

  
if ( buttonC && searchTerm) {
   itemsFiltre = itemsTab.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
}





  const { isDarkMode } = useTheme();


  return (
    <div className={isDarkMode ? "mBlack" : "m"} id="main">

      <section id="sectionOne" className="sectionOne">
        <div className="title">
        
        <a href="https://www.moncontroletechnique.fr/" className="text-xl font-bold flex items-center">

<div className="imagesParagraphe">
  <img
    src={MCT}
    alt="Logo Moncontroletechnique.fr"
    width="100"
    height="22"
    className="mct"
  />
  <img
    src={foxy}
    alt="Foxy"
    width="66"
    height="50"
    className="foxy"
  />
  <p className="foxyPara">Sécurité et Environnement</p>
  </div>

</a>



        </div>
        <div className="searchBar">
          <input type="text" 
          placeholder="type here" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleButtonC}  className="btn">
            <span className="text">Recherche</span> 
            <img className="loop" src={rechercheImg} alt="nothing yet"  height="30" width="30" />
            </button>
        </div>
      </section>

      <section id="sectionTwo" className="sectionTwo">
        <div className="cards">
          {itemsFiltre.map((item) => (
            <a href={item.link} target="_blank">
              <div className={`${item.className}`}>
                <div className="littleCard">
                <img src={item.image} height="80" width="80" alt="nothing yet" />
                  <h2>{item.title}</h2>
                </div>
                <p>{item.description}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Main;
