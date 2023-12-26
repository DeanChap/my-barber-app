import React from 'react';
import images from '../constants/images';
import Button from './Button';

const Home = () => {
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 flex justify-center items-center">
        <div className="absolute inset-0">
          <img
            src={images.img01}
            alt='background'
            className="w-full h-full object-cover max-w-full filter "
          />
        </div>

        <div className="sticky z-10">
          <img
            src={images.logo}
            alt='logo'
            className="mx-auto max-w-xs md:max-w-md mb-4"
          />
        </div>

        <div className='absolute inset-x-0 bottom-[10%] font-extralight-200'>
          <Button
            heading="SCHEDULE AN APPOINTMENT"
          />
        </div>

      </div>
    </div>
  );
}

export default Home;
