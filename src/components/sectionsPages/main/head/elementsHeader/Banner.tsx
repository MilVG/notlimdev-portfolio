import BannerBackground from './BannerBackground';

export default function Banner() {
  return (
    <div className='relative max-sm:absolute max-sm:w-[95%] max-sm:top-8 h-1/3 lg:mt-0 sm:w-[95%] sm:h-1/2 md:w-[95%] md:h-3/5 lg:h-3/4  xl:h-4/5 2xl:h-[85%] 2xl:w-[90%] xl:w-[95%] lg:w-[95%]'>
      <div
        className="clip_path_desktop z-0 bg-slate-800 absolute h-full w-full left-0 top-0"
        style={{
          clipPath: 'url(#my-clip-path-desktop)',
          filter: 'blur(100px)'
        }}
      >
        <BannerBackground />
        <div className="absolute top-0 xl:top-40 right-10 bg-green-600 w-5/12 h-1/3 rounded "></div>
        <div className="absolute top-20 left-0 bg-cyan-600 w-1/3 h-1/4 lg:top-40 xl:top-40 rounded"></div>
        <div className="absolute bottom-0 left-0 bg-purple-600 w-2/3 h-1/3 rounded "></div>
      </div>
    </div>
  )
}

