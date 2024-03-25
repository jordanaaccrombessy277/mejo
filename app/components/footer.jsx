import React from 'react'

const Footer = () => {
  return (
    <section className='text-white bg-[#0099FF] h-auto flex flex-wrap justify-between items-center p-8'>
       <div className="">
          <img
              src="méjo-logo.png"
              className="block w-[50px] h-[50px]"
              alt="Méjo"
            />
       </div>
       <div className="">
          <p className="">Copyright  2024. Tous droits réservés.</p>
       </div>
    </section>
  )
}

export default Footer