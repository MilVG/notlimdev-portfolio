import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';

export default function AccessDownloadCv() {
  return (
    <div className="flex flex-row justify-center gap-2 items-center w-1/5 h-20 rounded-2xl absolute bottom-0 left-56 bg-gradient-to-r from-cyan-500 to-green-600">
      <button className=" text-black font-bold text-xl">
        Get in Touch
      </button>
      <ArrowRightCircleIcon className=" text-black size-8" />
    </div>
  )
}

