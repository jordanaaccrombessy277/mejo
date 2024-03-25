'use client'
import Image from 'next/image'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { FiMail } from "react-icons/fi";
import { FaPhone, FaFacebook,FaLinkedin,FaWhatsapp } from "react-icons/fa6";
import { useForm } from "react-hook-form"

const Contact = () => {

    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm()
    const onSubmit = (data) => console.log(data)


  return (
    <section className='text-white bg-[#0099FF] h-auto flex flex-wrap justify-center items-center p-8 md:p-16'>
           <div  className={`w-full md:w-1/2 h-auto pb-4 md:pb-0`}>
                <h2 className={`text-lg md:text-2xl font-bold py-4`}>
                    Contactez-nous
                </h2>
                <form onSubmit={handleSubmit(onSubmit)} className={`py-4 flex flex-col gap-8 text-black`}>
                   <p className="h-auto md:h-[50px] flex flex-col gap-8">
                      <input type="text" className='h-full p-4 rounded-lg' placeholder="Nom et Prénom" name="nom" id="nom"
                      {...register('nom', 
                      {required: 'Le nom est requis !',
                      minLength:{
                          value:3,
                          message: 'Le nom doit avoir au moins 3 caractères !'
                      }})}
                      
                      />
                   </p>
                   {errors.nom?.message && ( <p className="text-sm text-red-500">{errors.nom.message}</p> )}
                   <p className="h-auto md:h-[50px] flex flex-col gap-8">
                      <input type="email" className='h-full p-4 rounded-lg' placeholder="Email" name="email" id="email"
                      {...register('email', {required: 'Email is required'})}  
                      />
                   </p>
                   {errors.email?.message && ( <p className="text-sm text-red-500">{errors.email.message}</p> )}
                   <p className="h-[200px] flex flex-col gap-8">
                      <textarea className='h-full p-4 rounded-lg' placeholder="Message" name="message" id="message"
                       {...register('message', {required: 'The message is required'})}> </textarea> 
                   </p>
                   {errors.message?.message && ( <p className="text-sm text-red-500">{errors.message.message}</p> )}
                   <p className="h-auto w-[140px] md:h-[50px] flex flex-col gap-8">
                     <input type="submit" value="Envoyer" className='px-4 text-white py-2 border border-white rounded-lg' />
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