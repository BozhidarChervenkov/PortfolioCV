import React from 'react'

const Contact = () => {
  return (
    <div id='contact' name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      <div className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8 flex flex-col justify-center w-full h-full items-center'>
          <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-gray-300'>Contact</p>

          <div className='text-center mt-20 font-bold text-3xl '>
            <img className='w-40 ml-40 rounded-3xl' src="/contactImages/phoneImage.png" alt="Phone" />
            <p className='text-gray-300 py-4'>Phone: +359 884408814</p>
            <hr />
            <img className='w-40 ml-40 mt-10 rounded-3xl' src="/contactImages/emailImage.png" alt="Email" />
            <p className='text-gray-300 py-4'>Email: bojidar.chervenkov@abv.bg</p>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;