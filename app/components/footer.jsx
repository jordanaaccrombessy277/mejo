import React from 'react'

const Footer = () => {
  return (
    <section className='h-auto flex flex-wrap justify-between items-center px-8 py-4'>
       <div className="">
          <img
              src="méjo-logo.png"
              className="block w-[50px] h-[50px]"
              alt="Méjo"
            />
       </div>
       <div className="">
          <p className="">Copyright Méjo 2024. Tous droits réservés.</p>
       </div>
    </section>
  )
}

export default Footer