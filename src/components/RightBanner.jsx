import bannerImg from '../assets/images/BannerImage.png'

const RightBanner = () => {
  return (
    <>
      <div className="md:w-1/2 flex justify-center p-6">
      <img src={bannerImg} alt="banner" className="md:w-[600px] md:h-[600px] w-[100%] h-[100%]"/>
      </div>
    </>
  )
}

export default RightBanner
