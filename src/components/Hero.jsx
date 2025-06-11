/* eslint-disable react/no-unescaped-entities */
import {motion} from 'framer-motion';
import {styles} from '../styles'
import {ComputersCanvas} from './canvas';

const Hero = () => {
  return (
    <section className={`relative w-full h-[145vh] mx-auto`}>
      <div className={`${styles.paddingX} absolute
      inset-0 top-[120px] max-w-7xl mx-auto flex
      flex-row items-start gap-5`}>
        <div className="flex flex-col
        justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#fbfafc]"/>
          <div className="w-1 sm:h-80 h-40 green-pink-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText}
          purple-text-gradient`}>Frank Ditz</h1>
          <p className={styles.sectionSubText}>Data Engineering | Data Analysis | Data Science | Data Visualization</p>
          <p className="mt-4 text-white text-[19px] max-w-3xl leading-[30px]">
            I am a skilled data analyst with experience in many programming languages and data vizualization programs. I am profficient
            in data collection and the construction and maintanence of data pipelines. My interests are not just limited to data analytics
            but also in UI/UX development, the maintenance of data servers, and in machine learning/AI development.
          </p>
          <p className="mt-4 text-white text-[19px] max-w-3xl leading-[30px]">
            My desire is to work for a company that takes pride in their work and who's work will change the future. I wish to be part of 
            a team who takes pride in what they do and wish to consistently improve.
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10
      bottom-32 w-full flex justify-center
      items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px]
          rounded-3xl border-4 border-secondary
          flex justify-center items-start p-2">
            <motion.dev
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;