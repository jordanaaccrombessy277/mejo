'use client'
import Image from 'next/image'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { FiMail } from "react-icons/fi";
import { FaPhone, FaFacebook,FaLinkedin,FaWhatsapp } from "react-icons/fa6";


export default function Home() {


  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main className="">

        <section className={`h-auto md:h-[400px] flex flex-wrap items-center p-8 md:p-16`}>
            <div data-aos='fade-up' data-aos-duration="3000" className={`w-full md:w-1/2 h-auto pb-4 md:pb-0 md:pr-4`}>
                <h1 className={`text-2xl md:text-4xl font-bold py-4`}>
                    Ne manquez plus vos prises de médicaments !
                </h1>
                <p className={`py-4 text-lg`}>Méjo, l&apos;application mobile qui vous rappelle de prendre vos médicaments à temps, où que vous soyez.</p>
                <p className={`py-4 flex flex-row gap-4`}>
                      <a href="/contact" className={`inline-block px-4 text-lg text-white font-semibold rounded-lg py-4 bg-[#0099FF] hover:bg-white hover:text-[#0099FF] hover:border hover:border-[#0099FF]`}>Contactez-nous</a>
                </p>
            </div>
            <div data-aos='fade-up' data-aos-duration="3000" className={`w-full relative md:w-1/2 rounded-2xl overflow-hidden flex flex-wrap justify-center h-auto md:h-full`}>    
                    <Image className={`w-full h-full object-cover`} src={'/mejouse.png'} width="300" height="300" alt="portfolio"  /> 
            </div>
        </section>

        <section className={`h-auto bg-white rounded-lg my-7 relative z-10 px-8 py-4 w-full md:w-[800px] flex flex-wrap justify-center mx-auto items-center shadow-md`}>
             <div className={`w-full flex flex-col md:flex-row`}>
                   <div className={`w-full md:w-1/3 h-auto flex flex-wrap justify-center`}>  
                          <div className='w-[60px] h-[50px]'>
                            <Image className={`w-full h-full object-cover`} src={'/main.png'} width="50" height="50" alt="Valeur"  /> 
                          </div>
                          <p className="py-3 text-center">Gérez vos prise de médicaments en toute confiance</p>              
                   </div>
                   <div className={`w-full md:w-1/3 h-auto flex flex-wrap justify-center`}>
                          <div className='w-[50px] h-[50px]'>
                            <Image className={`w-full h-full object-cover`} src={'/manfusion.png'} width="50" height="50" alt="Valeur"  /> 
                          </div>
                          <p className="py-3 text-center">Suivez votre évolution et développez des habitudes saines</p>
                   </div>
                   <div className={`w-full md:w-1/3 h-auto flex flex-wrap justify-center`}>
                         <div className="">
                          <div className="w-full flex flex-wrap justify-center">
                            <div className='w-[50px] h-[50px]'>
                              <Image className={`w-full h-full object-cover`} src={'/donnee.png'} width="50" height="50" alt="Valeur"  /> 
                            </div>
                          </div>
                          <p className="py-3 text-center">Ayez un accès centralisé <br /> à vos informations <br /> médicales</p>
                         </div>
                   </div>
             </div>
        </section>

        <section id='méjo' className={`h-auto text-white mt-[-60px] md:mt-[-120px] bg-[#0099FF] md:h-[400px] flex flex-wrap items-center px-8 py-16 md:p-16 lg:p-32`}>
             <h2 data-aos='fade-down' data-aos-duration="3000" className='py-4 text-center text-lg md:text-2xl font-bold'>Qu&apos;est-ce que Méjo ?</h2>
             <p data-aos='fade-down' data-aos-duration="3000" className="py-4 md:text-lg">Mejo est une application mobile construite pour aider les patients à gérer  efficacement leur prise de médicaments.Elle  garantit une prise de médicaments régulière, en maintenant la conformité au traitement prescrit par les médecins. Méjo contribue à l’amélioration des  résultats de santé et à la réduction des risques de complications ou de rechutes.
Méjo offre des rappels personnalisés pour chaque médicament.</p>
        </section>

        <section id='mission' className={`h-auto bg-white flex flex-wrap items-center p-8 md:p-16`}>
            <div data-aos='fade-right' data-aos-duration="3000" className={`pb-4 md:pb-0 w-full relative md:w-1/3 flex flex-wrap justify-center h-auto md:h-full`}>    
                  <Image className={`w-full h-full rounded-2xl object-cover`} src={'/missionj.png'} width="300" height="300" alt="portfolio"  /> 
            </div>
            <div data-aos='fade-right' data-aos-duration="3000" className={`w-full md:w-2/3 h-auto md:pl-8`}>
                <h2 className={`text-lg md:text-2xl font-bold py-4`}>
                    Notre mission
                </h2>
                <p className={`py-4 md:text-lg`}>La mission de Méjo consiste à simplifier et à optimiser la gestion des traitements médicaux pour les utilisateurs en fournissant une solution aussi pratique et qu&apos;efficace pour la prise des médicaments. Méjo vise à aider les individus à suivre rigoureusement leur traitement, même en étant occupés par leurs activités quotidiennes. Avec ses fonctionnalités de rappels personnalisés, Méjo contribue à l&apos;amélioration de l&apos;adhérence au traitement et favorise de meilleurs résultats de santé pour ses utilisateurs.</p>
                <p className={`py-4 flex flex-row gap-4`}>
                      <a href="/#ensavoirplus" className={`inline-block px-4 text-lg text-[#0099FF] border border-[#0099FF] font-semibold rounded-lg py-4 bg-white hover:bg-[#0099FF] hover:text-white`}>En savoir plus</a>
                </p>
            </div>
        </section>

        <section className='flex bg-[#0099FF] text-white flex-wrap items-center p-8 md:p-16 h-auto'>
           <div data-aos='fade-up' data-aos-duration="3000" className={`w-full md:w-1/2 h-auto pb-4 md:pb-0`}>
                <h2 className={`text-lg md:text-2xl font-bold py-4`}>
                    Ne manquez plus une dose.
                </h2>
                <p className={`py-4 text-lg`}>Méjo vous facilite la gestion de vos médicaments grâce à sa fonction de rappel intuitive et personnalisable. Définissez les heures exactes de prise et la fréquence des rappels (quotidiens, hebdomadaires, etc.). Choisissez le type de notification qui vous convient (son, vibration, message personnalisé). Restez flexible en ajustant facilement les horaires et le dosage en fonction de vos besoins changeants. L&apos;application vous permet de gérer aussi bien les médicaments ponctuels que les traitements réguliers.</p>
                <p className={`py-4 flex flex-row gap-4`}>
                      <a href="/#ensavoirplus" className={`inline-block px-4 text-lg text-[#0099FF] font-semibold rounded-lg py-4 bg-white hover:bg-[#0099FF] hover:border hover:border-white hover:text-white`}>En savoir plus</a>
                </p>
            </div>
           <div data-aos='fade-up' data-aos-duration="3000" className={`md:pl-8 w-full relative md:w-1/2 flex flex-wrap justify-center h-auto md:h-full`}>    
                  <Image className={`w-full h-full rounded-2xl object-cover`} src={'/rappel.png'} width="300" height="300" alt="portfolio"  /> 
           </div>
        </section>

        <section className='flex flex-wrap items-center p-8 md:p-16 h-auto'>
           <div data-aos='fade-up' data-aos-duration="3000" className={`md:pl-8 w-full relative md:w-1/2 flex flex-wrap justify-center h-auto md:h-full`}>    
                  <Image className={`w-full h-full rounded-2xl object-cover`} src={'/control.png'} width="300" height="300" alt="portfolio"  /> 
           </div>
           <div data-aos='fade-up' data-aos-duration="3000" className={`w-full md:w-1/2 h-auto pb-4 md:pb-0`}>
                <h2 className={`text-lg md:text-2xl font-bold py-4`}>
                   Gardez le contrôle de votre traitement
                </h2>
                <p className={`py-4 text-lg`}>Méjo vous offre un suivi complet de votre traitement grâce à son historique de prise de médicaments. Retrouvez en un clin d&apos;œil les dates, heures, doses et médicaments que vous avez pris, ainsi que les jours où une dose a été oubliée. Analysez vos schémas de prise et identifiez les points d&apos;amélioration. Cette information précieuse vous permet de discuter de votre observance thérapeutique avec votre médecin et de prendre des décisions éclairées pour une meilleure gestion de votre santé.</p>
                <p className={`py-4 flex flex-row gap-4`}>
                      <a href="/#ensavoirplus" className={`inline-block px-4 text-lg text-[#0099FF] font-semibold rounded-lg py-4 border border-[#0099FF] bg-white hover:bg-[#0099FF] hover:text-white`}>En savoir plus</a>
                </p>
            </div>
        </section>

        <section className='text-white bg-[#0099FF] md:h-[200px] flex flex-wrap justify-center items-center p-8 md:p-16'>
              Comment ça marche ?
        </section>

        <section className="relative text-white bg-[#27272c] w-full h-[600px] flex flex-wrap items-center overflow-hidden">       
        <Image width={300} height={300} alt="dummy" src="/accroche.png" className="object-cover md:object-center absolute w-full mix-blend-overlay min-h-full" />
          <div className="absolute flex flex-col w-full md:w-1/2 mx-auto px-8 md:px-16 z-10">
              
                <h2 className={`text-lg md:text-2xl font-bold py-4`}>
                  Restez informé du lancement de l&apos;application mobile Méjo
                </h2>
                <p className="py-4">
                  Ne manquez pas cette occasion de prendre votre santé en main ! <br /> Soyez parmi les premiers à profiter de Méjo.
                </p>
                <p className={`py-4 flex flex-row gap-4`}>
                        <a href="/contact" className={`inline-block px-4 text-lg text-white font-semibold rounded-lg py-4 bg-[#0099FF] hover:bg-white hover:text-[#0099FF] hover:border hover:border-[#0099FF]`}>Contactez-nous</a>
                </p>
            
          </div>
        </section>
        
      
    </main>
  )
}
