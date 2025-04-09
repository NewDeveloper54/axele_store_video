import React from "react";
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
          <input type="text" placeholder="type here" />
          <button className="btn">
            <span className="text">Recherche</span> 
            <img className="loop" src={rechercheImg} alt="nothing yet"  height="30" width="30" />
            </button>
        </div>
      </section>

      <section id="sectionTwo" className="sectionTwo">
        <h1>Toutes vos démarches en un clic :</h1>
        <div className="cards">
        <a href="https://www.moncontroletechnique.fr/" target="_blank">
          <div className="items one">
         
            <div className="littleCard">
              <img src={rendezVousImg} height="80" width="80" alt="nothing yet" />
              <h2>RENDEZ-VOUS</h2>
            </div>
            <p>prenez rendez vous pour effectuer vôtre controle technique</p>
          </div>
          </a>


          <a href="https://www.moncontroletechnique.fr/" target="_blank">
          <div className="items two">
            <div className="littleCard">
              <img src={rechercheImg}  alt="nothing yet" />
              <h2>RECHERCHE</h2>
            </div>
            <p>recherchez des centres partenaires en fonction de vôtre localisation</p>
          </div>
        </a>

        <a href="https://www.moncontroletechnique.fr/#block-informationssurlecontroletechnique " target="_blank">
          <div className="items three">
            <div className="littleCard">
              <img src={info} height="70" width="70" alt="nothing yet" />
              <h2>INFOS</h2>
            </div>
            <p>Vous trouverez le processus, les points de contrôle, et les conseils pour préparer vôtre véhicule</p>
          </div>
        </a>


        <a href="https://www.moncontroletechnique.fr/annulation_rdv" target="_blank">
          <div className="items four">
            <div className="littleCard">
              <img src={gerer} height="80" width="80" alt="nothing yet" />
              <h2>GERER MES RENDEZ-VOUS</h2>
            </div>
            <p>modifiez ou annulez vôtre rendez-vous existant</p>
          </div>
        </a>

        <a href="https://www.moncontroletechnique.fr/contactez-nous" target="_blank">
          <div className="items five">
            <div className="littleCard">
              <img src={contactImg} height="80" width="80" alt="nothing yet" />
              <h2>CONTACT</h2>
            </div>
            <p>obtenez de l'aide ou des informations supplémentaires</p>
          </div>
        </a>

        <a href="https://www.protechnologies.fr/devenir-controleur-technique" target="_blank">
          <div className="items six">
            <div className="littleCard">
              <img src={partenaire} height="80" width="80" alt="nothing yet" />
              <h2>DEVENIR PARTENAIRE</h2>
            </div>
            <p>prenez rendez vous et on vous aidera</p>
          </div>
        </a>

        </div>
      </section>
    </div>
  );
};

export default Main;
