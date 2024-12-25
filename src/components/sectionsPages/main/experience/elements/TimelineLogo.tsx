import Image from 'next/image'
import { Card } from './Card'
type TimelineLogoProps = {
  date: {
    dateString: string
    dateObj: Date
  }
  index: number
}
export const TimelineLogo = ({ date, index }: TimelineLogoProps) => {

  return (
    <div className={`relative w-3/5 h-1/3 p-2 flex flex-row justify-center items-center`}>
      <Card index={index} />
      <div className='bg-slate-300 rounded-full p-2'>
        <Image
          src={"/logo/logo_portfolio.svg"}
          alt='TimelineLogo'
          width={60}
          height={60}
        />
      </div>
      <div className={`absolute  w-2/5 ${index % 2 === 0 ? 'right-0 flex justify-start' : 'left-0 flex justify-end'} `}><p className='text-white font-bold text-3xl'>{date.dateString}</p></div>
    </div>
  )
}

