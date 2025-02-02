import { motion } from "framer-motion";
import { HERO_CONTENT } from "../PortfolioData/Data";
import heroImg from "../assets/heroImg.jpg"
import resume from "../assets/resume.pdf"
const container =(delay)=>({
    hidden: {x: -100, opacity: 0},
    visible: 
    {
        x: 10,
        opacity: 1,
        transition: {duration: 0.5, delay: delay},
    },
});
    

const Hero = () => {
    return (
        <div className="border-b☐ border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                        variants={container(0)}
                        initial="hidden"
                        animate="visible"
                            className="pb-16 text-6xl font-thin tracking-tight lg:mt-16    lg:text-8xl"
                        >


                            Atal Singh
                        </motion.h1>

                        <motion.span
                        
                        variants={container(0.5)}
                        initial="hidden"
                        animate="visible"
                            className="bg-gradient-to-r from-pink-300 via-slate-500 
                         to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
    
                        >
                            JAVA Developer
                        </motion.span>

                        <motion.p 
                        
                        variants={container(1)}
                        initial="hidden"
                        animate="visible"
                        className="my-2 max-w-xl py-6 font-light tracking-tighter">
                            {HERO_CONTENT}
                        </motion.p>
                        <motion.a
                            href={resume}
                            download="Atal_Singh_Resume.pdf"
                            className="mt-4 inline-block rounded bg-blue-500 px-6 py-3 text-white font-semibold shadow-lg hover:bg-blue-700"
                            variants={container(1.5)}
                            initial="hidden"
                            animate="visible"
                        >
                            Download Resume
                        </motion.a>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <motion.img
                        initial={{x: 100, opacity: 0}}
                        animate={{x:0, opacity: 1}}
                        transition={{duration:1, delay:1.2}}
                        src={heroImg} alt="Atal pratap singh "
                        className="max-w-full hyphens-auto rounded-lg border-2 border-gray-300 shadow-lg" />
                    </div>
                </div>
            </div>
        </div>
    );
};
4;

export default Hero;
