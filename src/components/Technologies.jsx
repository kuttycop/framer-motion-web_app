// import { FaPython } from "react-icons/fa"
import { RiBootstrapLine, RiCss3Line, RiHtml5Line, RiJavascriptLine, RiNodejsLine, RiReactjsLine, RiTailwindCssLine } from "react-icons/ri"
import { SiExpress, SiMongodb } from "react-icons/si"
import { motion } from "framer-motion"

const iconVarient=(duration)=>({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat: Infinity,
            repeatType:"reverse",
        }
    }
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h2 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1.5}}
        className="my-20 text-center text-4xl">Technologies</motion.h2>
        <motion.div
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
            variants={iconVarient(2.4)}
            initial="initial"
            animate="animate"
            className=" rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400" /><p className="text-center">React.Js</p>
            </motion.div>
            <motion.div 
            variants={iconVarient(3)}
            initial="initial"
            animate="animate"
            className=" rounded-2xl border-4 border-neutral-800 p-4">
                <RiNodejsLine className="text-7xl text-green-800" /><p className="text-center">Node.Js</p>
            </motion.div>
            <motion.div 
            variants={iconVarient(3.4)}
            initial="initial"
            animate="animate"
            className=" rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className="text-7xl text-green-500" /><p className="text-center">MongoDB</p>
            </motion.div>
            <motion.div 
            variants={iconVarient(4)}
            initial="initial"
            animate="animate"
            className=" rounded-2xl border-4 border-neutral-800 p-4">
                <SiExpress className="text-7xl text-yellow-500" /><p className="text-center">Express.Js</p>
            </motion.div>
            <motion.div 
            variants={iconVarient(4.4)}
            initial="initial"
            animate="animate"
            className=" rounded-2xl border-4 border-neutral-800 p-4">
                <RiHtml5Line className="text-7xl text-orange-500" /><p className="text-center">Html5</p>
            </motion.div>
            <motion.div 
            variants={iconVarient(5)}
            initial="initial"
            animate="animate"
            className=" rounded-2xl border-4 border-neutral-800 p-4">
                <RiCss3Line className="text-7xl text-blue-700" /><p className="text-center">Css3</p>
            </motion.div>
            <motion.div 
            variants={iconVarient(5.4)}
            initial="initial"
            animate="animate"
            className=" rounded-2xl border-4 border-neutral-800 p-4">
                <RiBootstrapLine className="text-7xl text-purple-600" /><p className="text-center">Bootstrap</p>
            </motion.div>
            <motion.div 
            variants={iconVarient(6)}
            initial="initial"
            animate="animate"
            className=" rounded-2xl border-4 border-neutral-800 p-4">
                <RiTailwindCssLine className="text-7xl text-sky-500" /><p className="text-center">Tailwind</p>
            </motion.div>
            <motion.div 
            variants={iconVarient(6.4)}
            initial="initial"
            animate="animate"
            className=" rounded-2xl border-4 border-neutral-800 p-4">
                <RiJavascriptLine className="text-7xl text-yellow-300" /><p className="text-center">Javascript</p>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies