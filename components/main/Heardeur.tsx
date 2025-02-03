import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Reseaux from '@/components/main/Reseaux'


const Heardeur = () => {
  return (
    <>

     
      <div className="relative w-full h-screen">
          {/* Image */}
          <Image 
            alt="Ecole supérieur de Statistique et Informatique"
            className="w-full h-full object-cover"
            src="/affichEssi1.png"
            layout="fill" // Utiliser "fill" pour remplir toute la section
            objectFit="cover" // Pour bien ajuster l'image sans la déformer
            quality={100} // Qualité maximale de l'image
          />

          {/* Dégradé noir vers le bas */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90"></div>
          

          {/* Texte et boutons par-dessus l'image */}
          <div className="absolute inset-0 flex flex-col justify-center items-start text-center text-white px-4 pl-14">
            <h1 className="text-3xl md:text-5xl font-bold mb-8">
              L'École Supérieure de Statistique et Informatique
            </h1>
            <h3 className="text-xl md:text-2xl font-medium mb-6">
              Excellence académique et innovation technologique
            </h3>
            <p className="text-lg md:text-xl font-normal mb-8">
              Formez-vous aux métiers d'avenir et devenez un acteur clé du numérique.
            </p>
            {/* <p className="text-[18px] md:text-xl  mb-8">
              Des compétences pour demain, une carrière qui commence aujourd'hui.
            </p> */}

            {/* Boutons d'appel à l'action */}
            <div className="flex space-x-4">
              <button className="bg-Es_primary text-white py-2 px-6 rounded border border-Es_primary hover:bg-[#0a6b70a0] transition duration-300">
                Découvrir nos programmes
              </button>
              <button className="bg-black text-white py-2 px-6 rounded hover:bg-transparent border border-black hover:border-white transition duration-300">
                Rejoignez-nous dès aujourd'hui
              </button>
            </div>
          </div>
        </div>
        <Reseaux />

    </>
  )
}

export default Heardeur
