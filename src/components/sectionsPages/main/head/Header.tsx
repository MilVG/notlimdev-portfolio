
import Banner from './elementsHeader/Banner';
import HeaderNavigation from './elementsHeader/HeaderNavigation';
export default function Header() {


  return (
    <div className="relative  w-full h-full flex flex-col justify-start items-center ">
      {/*header Navigation*/}
      <HeaderNavigation />

      {/*Banner_Background*/}
      <Banner />
    </div>
  )
}

