// components/NosStat.tsx
"use client"
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Counter from './Counter';  // Assurez-vous que le chemin est correct

const NosStat = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="p-5 mb-30">
      <div><h2 className="text-Es_primary text-4xl font-bold text-center mb-14">Nos Statistique</h2></div>
      <div className="flex flex-wrap justify-around p-5">
        <div className="stat-item flex flex-col justify-center align-center" data-aos="fade-up">
          <h3 className="text-6xl flex font-bold text-Es_primary text-center">
            <Counter start={0} end={90} duration={2} className="purecounter-students" increment={true} />%
          </h3>
          <p className="text-2xl text-Es_primary text-center">Taux de reussite</p>
        </div>
        <div className="stat-item flex flex-col justify-center align-center" data-aos="fade-up">
          <h3 className="text-6xl font-bold text-Es_primary text-center">
            <Counter start={0} end={950} duration={2} className="purecounter-students" increment={true} />
          </h3>
          <p className="text-2xl text-Es_primary text-center">Étudiants</p>
        </div>
        <div className="stat-item flex flex-col justify-center align-center" data-aos="fade-up">
          <h3 className="text-6xl font-bold text-Es_primary text-center">
            <Counter start={0} end={65} duration={2} className="purecounter-certificates" increment={true} />
          </h3>
          <p className="text-2xl text-Es_primary text-center">Taux d'insertion</p>
        </div>
        {/* <div className="stat-item flex flex-col justify-center align-center" data-aos="fade-up">
          <h3 className="text-6xl font-bold text-Es_primary">
            <Counter start={0} end={25} duration={2} className="purecounter-teachers" increment={true} />
          </h3>
          <p className="text-2xl text-Es_primary text-center">Professeurs</p>
        </div> */}
        <div className="stat-item flex flex-col justify-center align-center" data-aos="fade-up">
          <h3 className="text-6xl font-bold text-Es_primary text-center">
            <Counter start={0} end={15} duration={2} className="purecounter-partners" increment={true} />
          </h3>
          <p className="text-2xl text-Es_primary text-center">Partenaires</p>
        </div>
      </div>
    </div>
  );
};

export default NosStat;
