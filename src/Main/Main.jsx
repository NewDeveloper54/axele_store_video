import React from "react";
import "./Main.css";
import { Link } from "react-router-dom";





import { useTheme } from "../ThemeContext";

import rendezVousImg from "../assets/rdv.png";
import contactImg from "../assets/contact-us.png";
import foxy from "../assets/foxy.svg";
import MCT from "../assets/logo-MCT.svg";
import rechercheImg from "../assets/symbole-de-linterface-de-recherche.png";
import info from "../assets/information.png";
import partenaire from "../assets/traiter.png";
import gerer from "../assets/gerer.png";
import annuler from "../assets/annule.png";
import Infos from "./infos";

const Main = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={isDarkMode ? "mBlack" : "m"} id="main">
      <section id="sectionOne" className="sectionOne">
        <div className="title">
          <a
            href="https://www.moncontroletechnique.fr/"
            className="text-xl font-bold flex items-center"
          >
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
      </section>

      <section id="sectionTwo" className="sectionTwo">
        <h1>Toutes vos démarches en un clic :</h1>
        <div className="cards">
            <a
              href="https://www.moncontroletechnique.fr/recherche/ville/54357/Max%C3%A9ville"
              target="_blank"
            >
              <div className="items one">
                <img
                  src={rendezVousImg}
                  height="90"
                  width="90"
                  alt="nothing yet"
                />
                <h2 className="rdv">RENDEZ-VOUS</h2>
              </div>
              <p>prenez rendez vous pour effectuer vôtre controle technique</p>
            </a>

            <a
              href="https://www.moncontroletechnique.fr/#block-informationssurlecontroletechnique "
              target="_blank"
            >
              <div className="items two">
                <img src={annuler} height="80" width="80" alt="nothing yet" />
                <h2 className="infos">MODIFIER / ANNULER RENDEZ-VOUS</h2>
                
              </div>
              <p>
                  processus, points de contrôle et conseils pour préparer vôtre
                  véhicule
                </p>
            </a>


            <Link to="/infos">
  <div className="items three">
    <img
      src={info}
      height="80"
      width="80"
      alt="nothing yet"
    />
    <h2 className="contact">INFOS</h2>
    
  </div>
  <p>
      processus, points de contrôle et conseils pour préparer votre véhicule
    </p>
</Link>


            
        </div>
      </section>
    </div>
  );
};

export default Main;
