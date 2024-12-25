import styles from '@/components/sectionsPages/main/experience/elements/styles-experience.module.css'

type CardPropsT = {
  index: number
}
export const Card = ({ index }: CardPropsT) => {
  return (
    <>
      <div className={`${index % 2 === 0 ? `${styles.cardLeft}` : `${styles.cardRigth}`}`}>
        <div className='flex flex-col justify-center items-start p-5'>
          <div><h1 className='text-2xl text-white font-bold uppercase'> Job Developer</h1></div>
          <div><h3 className='text-lg text-purple-600'>example</h3></div>
          <div ><p className='text-sm font-bold text-slate-800'>Lorem Ipsufsfddjdj de las rtfe te de las tre aye de los an de ter anca ders  trt terndrs catefir</p></div>
        </div>
      </div>
    </>
  )
}

