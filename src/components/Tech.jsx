/* eslint-disable react-refresh/only-export-components */
import {BallCanvas} from "./canvas";
import {motion} from "framer-motion";
import {textVariant} from '../utils/motion';
import {styles} from '../styles';
import {SectionWrapper} from "../hoc";
import {technologies} from "../constants";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Experince Working With</p>
        <h2 
        style={{ paddingTop: '5px', paddingBottom: '60px' }}
        className={styles.sectionHeadText}>Tech Education.</h2>
      </motion.div>
      <div className="flex flex-row flex-wrap
      justify-center gap-10">
        {technologies.map((technology) =>(
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon}/>
          </div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, "");