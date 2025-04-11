// Infos.jsx
import React from "react";
// Assurez-vous que les chemins sont corrects pour ces fichiers
import { Links } from "../Header/NavBar";
import "./infos.css";

import MCT from "../assets/logo-MCT.svg";
import foxy from "../assets/foxy.svg";
import rendezVousImg from "../assets/rdv.png";
import annuler from "../assets/annule.png";
import info from "../assets/information.png";

import Footer from "../Footer/Footer"; // Le fichier du Footer

function Infos() {
  return (
    <div>
      {/* Inclus ta Navbar */}
      <Links />

      {/* Ici, tu peux inclure le contenu de la page Infos que tu veux, ou conserver le Main si c'est similaire */}
      <div id="infoMain">
        <section id="infosectionOne" className="infosectionOne">
          <div className="infotitle">
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

        <section id="infosectionTwo" className="infosectionTwo">

          <h1>Informations sur le controle technique :</h1>
          <button className="btn" onClick={() => window.history.back()}>Retour</button>

          <div className="infocards">

            <div className="troispremieres">
            <a
              href="https://www.moncontroletechnique.fr/le-controle-technique-en-bref"
              target="_blank"
            >
              <div className="infoitems infoone">
                <img
                  src={rendezVousImg}
                  height="90"
                  width="90"
                  alt="nothing yet"
                />
                <h2 className="rdv">RENDEZ-VOUS</h2>
              </div>
              <p>Contrôle technique véhicules particuliers</p>
            </a>

            <a
              href="https://www.moncontroletechnique.fr/le-controle-technique-auto "
              target="_blank"
            >
              <div className="infoitems infotwo">
                <img src={annuler} height="80" width="80" alt="nothing yet" />
                <h2 className="infos">MODIFIER / ANNULER RENDEZ-VOUS</h2>
              </div>
              <p>
              En quoi consiste le contrôle technique ?
              </p>
            </a>



            <a
              href="https://www.moncontroletechnique.fr/preparer-votre-controle-technique"
              target="_blank"
            >
              <div className="infoitems infoone">
                <img
                  src={rendezVousImg}
                  height="90"
                  width="90"
                  alt="nothing yet"
                />
                <h2 className="rdv">RENDEZ-VOUS</h2>
              </div>
              <p>Préparez votre contrôle</p>
            </a>

            </div>


            <div className="deuxdernieres">

            <a
              href="https://www.moncontroletechnique.fr/recherche/ville/54357/Max%C3%A9ville"
              target="_blank"
            >
              <div className="infoitems infoone">
                <img
                  src={rendezVousImg}
                  height="90"
                  width="90"
                  alt="nothing yet"
                />
                <h2 className="rdv">FAQ</h2>
              </div>
              <p>FAQ</p>
            </a>

            <a
              href="https://www.moncontroletechnique.fr/recherche/ville/54357/Max%C3%A9ville"
              target="_blank"
            >

            <div className="infoitems infothree">
              <img src={info} height="80" width="80" alt="nothing yet" />
              <h2 className="contact">INFOS</h2>
            </div>
            <p>
            Ce qui a changé sur le contrôle technique
            </p>
            </a>

            </div>

          </div>
          
        </section>
      </div>

      {/* Inclus ton Footer */}
      <Footer />
    </div>
  );
}

export default Infos;
