import logo from "../assets/logo2.jpeg"
import { FaLinkedin, FaGithub, FaTwitterSquare, FaInstagram } from "react-icons/fa"
const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className=" mx-2 w-11 rounded-full" src={logo}/>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
           <a href="https://www.linkedin.com/in/hariharapudhranS/" target='_blank'> <FaLinkedin/></a>
            <a href="https://github.com/kuttycop" target='_blank'><FaGithub/></a>
            <a href="https://x.com/HariKavi_HK_07" target='_blank'><FaTwitterSquare/></a> 
            <a href="https://www.instagram.com/___hxri.__/" target='_blank'><FaInstagram/></a>
        </div>
    </nav>
  )
}

export default Navbar