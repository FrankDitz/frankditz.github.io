/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-refresh/only-export-components */
import { SectionWrapper } from "../hoc";
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';

const Education = () => {
    return (
      <>
        <motion.div variants={textVariant()} >
          <p className={styles.sectionSubText}>My Educational Background</p>
          <h2 className={styles.sectionHeadText}>University Education.</h2>
        </motion.div>

        <div className="w-full flex">
            <motion.p
            style={{ paddingTop: '5px', paddingBottom: '80px' }}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
            This section is a "Proof of Education" section containing my Certified Electronic Diploma for my Bachelors in Biology degree 
            from the University of Florida and my Electronic Certificate in Data Analytics & Visualization from the University of Central Florida.
            </motion.p>
      </div>

        <div style={{ display: 'flex', justifyContent: 'space-evenly', gap: '0px' }}>
        <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
                <a href="/Pictures/UCF_Certification.pdf" target="_blank" rel="noopener noreferrer">
                    <img className="rounded-t-lg" src="/Pictures/ucf_certification.jpg" alt="" />
                </a>
                <div className="mt-5">
                    <a href="/Pictures/Certification.pdf" target="_blank" rel="noopener noreferrer">
                        <h5 className="text-white font-bold text-[24px]">University of Florida: Bachelors of Biology</h5>
                    </a>
                    <p className="mt-2 text-secondary text-[14px] pt-3 pb-8">Here is a link to my Certified Electronic Diploma for my University of Florida Bachelor of Biology. The University of Florida is currently the number one public university in the United States.</p>
                    <a href="/Pictures/UCF_Certification.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Click Me
                        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
            </div>
            <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
                <a href="/Pictures/UCF_Certification.pdf" target="_blank" rel="noopener noreferrer">
                    <img className="rounded-t-lg" src="/Pictures/ucf_certification.jpg" alt="" />
                </a>
                <div className="mt-5">
                    <a href="/Pictures/Certification.pdf" target="_blank" rel="noopener noreferrer">
                        <h5 className="text-white font-bold text-[24px]">University of Central Florida: Data Analytics & Visualization Certificate</h5>
                    </a>
                    <p className="mt-2 text-secondary text-[14px] pt-3 pb-8">Here is a link to my Electronic Certificate for my University of Central Florida Data Analytics & Visualization program.</p>
                    <a href="/Pictures/UCF_Certification.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Click Me
                        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
        
      </>
    );
};

export default SectionWrapper(Education, "education");
