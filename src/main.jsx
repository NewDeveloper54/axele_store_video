import React from "react";
import { createRoot } from "react-dom/client"; // Importation correcte de createRoot
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App"; // Composant principal de ton application
import Infos from './Main/infos'; // Importation du composant Infos

// Sélectionner l'élément racine du DOM
const rootElement = document.getElementById("root");
const root = createRoot(rootElement); // Créer la racine

// Rendu de l'application avec React Router
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} /> {/* Page d'accueil */}
      <Route path="/infos" element={<Infos />} /> {/* Page Infos */}
    </Routes>
  </BrowserRouter>
);
