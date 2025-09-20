import { navItems } from "../constants";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useState } from "react";
import { FiGithub, FiLinkedin, FiTwitter, FiMenu, FiX } from "react-icons/fi";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className='absolute w-full z-50 transition-all duration-300'>
      <div className='container h-16 md:h-20 mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between'>
        {/* Logo/Name */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
            delay: 0.3,
            duration: 1.2,
          }}
          className='flex items-center'
        >
          <div className='h-10 w-10 rounded-xl bg-gradient-to-r from-gray-500 to-gray-100 flex items-center justify-center text-purple-600 font-bold text-xl mr-3'>
            R
          </div>
        </motion.div>

        <nav className='lg:flex hidden space-x-8'>
          {navItems.map((item, index) => (
            <motion.a
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.7 + index * 0.2,
              }}
              key={index}
              className='relative text-gray-800 dark:text-gray-200 hover:violet-600 dark:hover:text-violet-400 font-medium transition-colors duration-300 group'
              href={item.href}
            >
              {item.name}
              <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300'></span>
            </motion.a>
          ))}
        </nav>

        {/* Social  icons - Desktop*/}
        <div className='md:flex hidden items-center space-x-4'>
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.8,
              duration: 0.8,
            }}
            href='https://github.com/aleexxii'
            className='text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300'
          >
            <FiGithub className='w-5 h-5' />
          </motion.a>
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.8,
              duration: 0.8,
            }}
            href='https://www.linkedin.com/in/i-am-rahul-p'
            className='text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300'
          >
            <FiLinkedin className='w-5 h-5' />
          </motion.a>
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.8,
              duration: 0.8,
            }}
            href='#'
            className='text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300'
          >
            <FiTwitter className='w-5 h-5' />
          </motion.a>
        </div>

        {/* Hire Me Button */}
        <a href='#contact'>
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1.6,
              duration: 0.8,
              type: "spring",
              damping: 15,
            }}
            className='ml-4 px-4 py-2 rounded-xl bg-gradient-to-r from-gray-400 to-gray-100 text-violet-700 font-bold hover:from-violet-700 hover:to-purple-900 hover:text-white transition-all duration-500'
          >
            Hire Me
          </motion.button>
        </a>

        {/* Mobile Menu Button */}
        <div className='md:hidden flex-center'>
          <motion.button
            whileTap={{ scale: 0.7 }}
            className='text-gray-300'
            onClick={toggleMenu}
          >
            {isOpen ? (
              <FiX className='md:hidden h-6 w-6' />
            ) : (
              <FiMenu className='md:hidden h-6 w-6' />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.5 }}
        className='md:hidden overflow-hidden bg-white dark:bg-gray-900 shadow-lg px-4 py-5 space-y-3'
      >
        <nav className='flex flex-col space-y-3'>
          {navItems.map((item, index) => (
            <a
              onClick={toggleMenu}
              key={index}
              href={item.href}
              className='text-gray-300 font-medium py-2'
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className='pt-4 border-t border-gray-200 dark:border-gray-700'>
          <div className='flex space-x-5'>
            <a href='https://www.linkedin.com/in/i-am-rahul-p'>
              <FiLinkedin className='h-5 w-5 text-gray-300' />
            </a>
            <a href='https://github.com/aleexxii'>
              <FiGithub className='h-5 w-5 text-gray-300' />
            </a>
            <a href=''>
              <FiTwitter className='h-5 w-5 text-gray-300' />
            </a>
          </div>
          <a href='#contact'>
            <button
              onClick={() => {
                toggleMenu();
              }}
              className='mt-4 block w-full px-4 py-2 text-white rounded-lg bg-gradient-to-r from-pink-900 to-violet-950 font-bold'
            >
              Contact Me
            </button>
          </a>
        </div>
      </motion.div>
    </header>
  );
}

export default Header;
