import LeftBanner from "./LeftBanner"
import RightBanner from "./RightBanner"

const Banner = () => {
    
  return (
    <section id="home" className="w-full py-10 md:flex md:flex-row flex flex-col-reverse border-b-[1px] border-b-black ">
        <LeftBanner/>
      <RightBanner/>
    </section>
  )
}

export default Banner
