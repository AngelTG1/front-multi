import React from 'react'
import grafica from '../assets/grafica.svg'
import left from '../assets/left.svg'
import { useNavigate } from 'react-router-dom'

function Infrared() {

    const navigate = useNavigate();

  return (
    <>
        <section className='w-[90%] mx-auto  max-w-screen-xl pb-14'>
            <div onClick={() => navigate("/")}  className='flex mt-4 items-center justify-start'>
                <img className='w-8' src={left} alt="" />
                <p className='text-base text-white font-semibold'>Regresar</p>
            </div>
            <h1 className='mt-6 text-white font-bold text-xl'>Infrared Temperature</h1>
            <article className="w-full flex flex-col gap-3 items-center justify-center mt-5 mb-4">
                <div className='flex flex-row gap-6'>
                    <p className='text-[#fff] text-base font-bold'>Dia</p>
                    <p className='text-[#666666] text-base font-bold'>Semana</p>
                    <p className='text-[#666666] text-base font-bold'>Historial</p>
                </div>

                <div>
                    <p className='text-[#666666] text-base font-bold'>vie, 5 julio</p>
                </div>

                <div>
                    <h1 className='text-white font-bold text-5xl'>96 ppm</h1>
                </div>
            </article>

            <img className="w-full" src={grafica} alt="" />

            <button className='p-3 px-5 text-white font-bold bg-[#7471D9] block w-full mb-2 rounded-lg mt-5'>Medir</button>
        </section>
    </>
  )
}

export default Infrared