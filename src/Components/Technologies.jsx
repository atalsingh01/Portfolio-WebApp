import { RiReactjsLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaJava } from "react-icons/fa6";
import { BiLogoSpringBoot } from "react-icons/bi";

import { animate, motion } from "framer-motion";

const iconVariant = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariant(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 ☐ border-neutral-800 p-4"
        >
          <FaJava className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariant(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 ☐ border-neutral-800 p-4"
        >
          <BiLogoSpringBoot className="text-7xl " />
        </motion.div>
        <motion.div
          variants={iconVariant(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 ☐ border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-green-600 " />
        </motion.div>

        <motion.div
          variants={iconVariant(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 ☐ border-neutral-800 p-4"
        >
          <RiTailwindCssFill className="text-7xl text-red-400" />
        </motion.div>
        <motion.div
          variants={iconVariant(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 ☐ border-neutral-800 p-4"
        >
          <GrMysql className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariant(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 ☐ border-neutral-800 p-4"
        >
          <FaGithub className="text-7xl text-sky-400" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
