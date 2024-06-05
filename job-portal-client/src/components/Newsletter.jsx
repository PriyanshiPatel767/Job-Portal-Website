import React from 'react'
import { FaEnvelopeOpenText, FaRocket } from "react-icons/fa6"

const Newsletter = () => {
    return (
        <div>
            <div>
                <h3 className='text-lg font-bold mb-2 flex it gap-2'><FaEnvelopeOpenText />Email me for Jobs</h3>
                <div className='w-full space-y-4'>
                    <input type='email' name='email' id='email' placeholder='name@mail.com' className='w-full block py-2 pl-3 border focus:outline-none'></input>
                    <input type='submit' value={"Subscribe"} className='w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold'></input>
                </div>


            </div>


            <div className='mb-24'>
                <h3 className='text-lg font-bold mb-2 flex it gap-2'><FaRocket />Get Noticed faster</h3>
                <div className='w-full space-y-4'>
                    <input type='submit' value={"Upload your resume"} className='w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold'></input>
                </div>


            </div>

        </div>
    )
}

export default Newsletter
