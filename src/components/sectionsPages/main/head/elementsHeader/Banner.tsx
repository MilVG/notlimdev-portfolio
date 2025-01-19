import Image from 'next/image';
import BannerBackground from './BannerBackground';
import Presentation from './Presentation';
import AccessDownloadCv from './AccessDownloadCv';

export default function Banner() {
  return (
    <div className='relative z-0 max-sm:absolute max-sm:h-4/5 max-sm:w-[95%] max-sm:top-8 h-1/3 lg:mt-0 sm:w-[95%] sm:h-1/2 md:w-[95%] md:h-3/5 lg:h-3/4  xl:h-4/5 2xl:h-[85%] 2xl:w-[90%] xl:w-[95%] lg:w-[95%]'>
      <div
        className="clip_path_desktop z-0 bg-slate-800 absolute h-full w-full left-0 top-0"
        style={{
          clipPath: 'url(#my-clip-path-desktop)',
          filter: 'blur(100px)'
        }}
      >
        <BannerBackground />
        <div className="absolute top-0 xl:top-40 right-10 bg-green-600 w-5/12 h-1/3 rounded 2xl:h-3/5"></div>
        <div className="absolute top-20 left-0 bg-cyan-600 w-1/3 h-1/4 lg:top-40 xl:top-40 rounded"></div>
        <div className="absolute bottom-0 left-0 bg-purple-600 w-2/3 h-1/3 rounded "></div>
      </div>
      <div className='absolute w-full h-full'>
        <div>
          <Presentation />
        </div>
        <div
          className='absolute w-[400px] h-[400px] rounded-3xl shadow-2xl right-20 top-48 
          max-sm:w-28 max-sm:h-28 max-sm:top-24 max-sm:right-5  
          sm:w-40 sm:h-40 sm:top-28 sm:right-8 
          md:w-56 md:h-56 md:top-40 
          lg:w-72 lg:h-72 lg:top-52
          xl:w-96 xl:h-96 xl:top-44 xl:right-10 
          2xl:w-[400px] 2xl:h-[400px] 2xl:right-28 2xl:top-48'>
          <Image
            className='bg-cover w-full h-full mix-blend-overlay rounded-full'
            src={"/perfilmilton.jpg"}
            width={400}
            height={400}
            alt='image_profile'
          />
        </div>
      </div>

      <div className='absolute  w-[96%] h-full z-10 flex flex-row justify-center items-center md:justify-start'>
        <AccessDownloadCv />
      </div>
    </div>
  )
}

