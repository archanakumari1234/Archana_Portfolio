
const Title = ({title, desc}) => {
  return (
    <>
      <div className="flex flex-col gap-4 font-titleFont mb-14">
   <h3 className="text-sm uppercase font-normal text-designColor tracking-wider ">{title}</h3>
   <h1 className="text-3xl text-gray-300 font-bold capitalize">{desc}</h1>
   </div>
    </>
  )
}

export default Title
