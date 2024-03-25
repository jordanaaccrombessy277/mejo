'use client'
import Image from 'next/image'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { FiMail } from "react-icons/fi";
import { FaPhone, FaFacebook,FaLinkedin,FaWhatsapp } from "react-icons/fa6";

const Contact = () => {
  return (
    <section className='text-white bg-[#0099FF] h-auto flex flex-wrap justify-center items-center p-8 md:p-16'>
           <div  className={`w-full md:w-1/2 h-auto pb-4 md:pb-0`}>
                <h2 className={`text-lg md:text-2xl font-bold py-4`}>
                    Contactez-nous
                </h2>
                <form className={`py-4 flex flex-col gap-8`}>
                   <p className="h-auto md:h-[50px] flex flex-col gap-8">
                      <input type="text" className='h-full p-4 rounded-lg' value="" placeholder="Nom et Prénom" name="nom" id="nom" />
                   </p>
                   <p className="h-auto md:h-[50px] flex flex-col gap-8">
                      <input type="email" className='h-full p-4 rounded-lg' value="" placeholder="Email" name="email" id="email" />
                   </p>
                   <p className="h-[200px] flex flex-col gap-8">
                      <textarea type="message" className='h-full p-4 rounded-lg' value="" placeholder="Message" name="email" id="message"> </textarea>
                   </p>
                   <p className="h-auto w-[140px] md:h-[50px] flex flex-col gap-8">
                     <input type="submit" value="Envoyer" className='px-4 py-2 border border-white rounded-lg' />
                   </p>

                 
                </form>
               
            </div>
           <div  className={`md:pl-16 w-full relative md:w-1/2 flex flex-wrap justify-center h-auto md:h-full`}>    
                  <Image className={`w-full h-full rounded-2xl object-cover`} src={'/contact.jpg'} width="300" height="300" alt="portfolio"  /> 
           </div>
        </section>
  )
}

export default Contact