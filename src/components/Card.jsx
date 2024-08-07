import {HiArrowRight} from 'react-icons/hi'

const Card = ({ title, desc, icons:Icon }) => {
  return (
    <div className="w-full px-12  h-80 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100 ">
      <div className='h-72 py-6 overflow-y-hidden'>
      <div className="h-full flex flex-col md:gap-8 md:translate-y-9 gap-10 translate-y-12 group-hover:translate-y-0 transition-transform duration-500">
        <div>
          <span className="text-5xl text-designColor">
            <Icon/>
          </span>
        </div>
        <div className='flex flex-col gap-6 text-gray-300'>
          <h1 className="text-2xl font-titleFont font-bold text-gray-300">
            {title}
          </h1>
          <p className='base'>{desc}</p>
          <span className='text-2xl text-designColor'>
            <HiArrowRight/>
          </span>
        </div>
       
      </div>
      </div>
    </div>
  );
};

export default Card;
