"use client"
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Timeline = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // durée de l'animation en millisecondes
    });
  }, []);

  const timelineItems = [
    { title: "Master II", description: "Master II (ou M2) est la deuxième année d'un programme de Master, visant à fournir une formation avancée et spécialisée dans un domaine d'étude particulier." },
    { title: "Master I", description: "Master I (ou M1) est la première année d'un programme de Master, visant à fournir une formation avancée et spécialisée qui prépare les étudiants à poursuivre en deuxième année de Master (M2)." },
    { title: "Licence III", description: "une Licence III (ou L3) est la troisième et dernière année d'un programme de Licence, visant à fournir une formation complète et spécialisée dans un domaine d'étude, tout en préparant les étudiants soit à entrer sur le marché du travail, soit à poursuivre des études supérieures (comme un Master)." },
    { title: "Licence II", description: "First Macintosh computer" },
    { title: "Licence I", description: "First Macintosh computer" }
  ];

  return (
    <div className="relative flex flex-col items-center space-y-8">
      <div className="absolute w-1 bg-gray-300 h-full left-1/2 transform -translate-x-1/2"></div>
      <ul className="space-y-14">
        {timelineItems.map((item, index) => (
          <li
            key={index}
            className={`relative flex items-center ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
            data-aos="fade-up"
          >
            <div className={`bg-gray-200 w-100 rounded-lg ${index % 2 === 0 ? "ml-100" : "mr-100"}`}>
              <div className="bg-Es_primary w-full rounded-t-lg p-4 text-white font-bold">{item.title}</div>
              <div className="p-4">{item.description}</div>
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
              <div className="w-5 h-5 bg-Es_primary rounded-full"></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Timeline;
