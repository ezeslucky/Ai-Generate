import { assets } from "../assets/assets"


function Footer() {
  return (
    <div className=" flex items-center justify-between gap-4 py-3 mt-20 ">
      <img src={assets.logo} width={150}  alt="" />
      <p className="flex-1 border-l border-gray-400 pl-4  text-sm text-gray-500 max-sm:hidden">Copyright Ezeslucky | All right reserved</p>

     
    </div>
  )
}

export default Footer