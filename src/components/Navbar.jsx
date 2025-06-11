import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-20 bg-primary`} style={{ paddingRight: '20px' }}>
      <div className="w-full flex justify-between items-center max-w-7x1 mx-auto">
        <Link
          to="/"
          className="flex items-center gap-1"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
          <p className="text-white text-[16px] font-bold cursor-pointer flex">
            Frank Ditz
            &nbsp; <span className="sm:block hidden">| Data Analyst</span>
          </p>
        </Link>

        {/* Desktop navigation */}
        <ul className="list-none hidden sm:flex flex-row gap-6">
          {/* Add the Resume tab here (for desktop view) */}
          <li
            className={`${
              active === 'Resume'
                ? 'text-white'
                : 'text-secondary'
            } hover:text-white text-[20px] font-medium cursor-pointer`}
            onClick={() => setActive('Resume')}
          >
            <a href="https://docs.google.com/document/d/1ThskgdMm3zUB6u12ASQh1808hWachYMi/edit?usp=sharing&ouid=102598603791278614125&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">Resume</a>
          </li>

          {/* Add the About, Work, and Contact tabs here (for desktop view) */}
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title
                  ? 'text-white'
                  : 'text-secondary'
              } hover:text-white text-[20px]
              font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}

          {/* Add the LinkedIn and GitHub icons here (for desktop view) */}
          <li className="flex items-center gap-2">
            <a
              href="https://www.linkedin.com/in/frank-ditz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-xl"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://github.com/FrankDitz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-xl"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
        </ul>

        {/* Mobile menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[24px] h-[24px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div className={`${!toggle ? 'hidden' : 'flex'}
          p-4 black-gradient absolute top-14 right-0 mx-4 my-2
          min-w-[140px] z-10 rounded-xl`}>
            <ul className="list-none flex justify-end items-start flex-col gap-2">
              {/* Add the About, Work, Contact, and Resume tabs here (for mobile view) */}
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title
                      ? 'text-white'
                      : 'text-secondary'
                  } font-poppins font-medium cursor-pointer text-[14px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}

              {/* Add the Resume tab here (for mobile view) */}
              <li
                className={`${
                  active === 'Resume'
                    ? 'text-white'
                    : 'text-secondary'
                } font-poppins font-medium cursor-pointer text-[14px]`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive('Resume');
                }}
              >
                <a href="https://docs.google.com/document/d/1ThskgdMm3zUB6u12ASQh1808hWachYMi/edit?usp=sharing&ouid=102598603791278614125&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">Resume</a>
              </li>

              {/* Add the LinkedIn and GitHub icons here (for mobile view) */}
              <li className="flex items-center gap-2">
                <a
                  href="https://www.linkedin.com/in/frank-ditz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-xl"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                  href="https://github.com/FrankDitz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-xl"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
