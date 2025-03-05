import React from "react";
import { motion } from "framer-motion";


const Header = ({ setIsOpen }) => {
  const pathVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
    }),
  };

  const paths = [
    "M6.82 16.14c-2.11 0-3.85-1.88-3.85-4.15 0-2.27 1.74-4.14 3.85-4.14a3.8 3.8 0 0 1 3.28 1.97l2.54-1.68a6.75 6.75 0 0 0-5.81-3.49C3.08 4.65 0 7.97 0 12c0 4.03 3.08 7.35 6.83 7.35A6.75 6.75 0 0 0 12.57 16l-2.5-1.74a3.87 3.87 0 0 1-3.25 1.88Z",
    "M23.62 13.35a2.81 2.81 0 0 1-2.83 2.78h-.34a2.8 2.8 0 0 1-2.83-2.78v-8.4h-3.33v8.51a5.92 5.92 0 0 0 5.97 5.87H21c3.3 0 5.97-2.62 5.97-5.87v-8.5h-3.33v8.39Z",
    "M35.98 4.6c-1.4 0-2.72.46-3.81 1.23V0h-3.05v11.95c0 4.06 3.07 7.35 6.87 7.35 3.79 0 6.86-3.3 6.86-7.35 0-4.07-3.08-7.36-6.87-7.36Zm0 11.49c-2.13 0-3.86-1.86-3.86-4.15 0-2.28 1.73-4.14 3.86-4.14s3.86 1.86 3.86 4.14c.01 2.29-1.72 4.15-3.86 4.15Z",
    "M57.89 13.19a8.04 8.04 0 0 0 0-2.5c-.55-3.46-3.37-6.1-6.76-6.1-3.8 0-6.86 3.3-6.86 7.35 0 4.06 3.06 7.35 6.86 7.35 2.39 0 4.5-1.32 5.73-3.3l-.02-.01-2.5-1.75a3.8 3.8 0 0 1-3.22 1.86 3.91 3.91 0 0 1-3.7-2.9H57.9ZM51.13 7.8c1.73 0 3.2 1.22 3.69 2.9h-7.38a3.9 3.9 0 0 1 3.69-2.9Z",
    "M62.74 4.96H59.7v13.96h3.04v-6.33c0-3.33 2-4.62 4.49-4.63v-3c-1.74 0-3.28.48-4.49 1.3v-1.3Z",
    "M79.1 18.46c-.95.53-2.03.82-3.13.82-3.73 0-6.8-3.28-6.83-7.29V0h3.05v4.96h5.24v3h-5.24v4.03c.02 2.25 1.68 4.1 3.78 4.1a3.5 3.5 0 0 0 1.47-.33l1.66 2.7Z",
    "M86.14 4.6c-3.79 0-6.86 3.29-6.86 7.34 0 4.06 3.07 7.35 6.86 7.35 3.8 0 6.87-3.3 6.87-7.35 0-4.06-3.08-7.35-6.87-7.35Zm0 11.49c-2.13 0-3.86-1.86-3.86-4.15 0-2.28 1.73-4.14 3.86-4.14 2.14 0 3.87 1.86 3.87 4.14 0 2.29-1.73 4.15-3.87 4.15Z",
  ];

  return (
    <div className="flex justify-between p-12 h-14">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 94 20"
          className="w-24 h-auto"
        >
          {paths.map((d, i) => (
            <motion.path
              key={i}
              d={d}
              fill="currentColor"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
              custom={i}
            />
          ))}
        </svg>
      </div>

      <motion.button
        className="flex items-center gap-2 text-lg text-black mt-2"
        onClick={() => setIsOpen(true)}
        initial={{ y: 50, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.7, ease: "easeOut" }} 
      >
        <p>menu</p>
        <div className="group flex flex-col gap-[4px] mt-2 w-16 h-16 items-center justify-center rounded-full transition-all ease-in-out duration-700 bg-transparent hover:bg-black">
          <span className="w-6 h-[2px] bg-gray-800 transition-all ease-in-out duration-700 group-hover:bg-white"></span>
          <span className="w-6 h-[2px] bg-gray-800 transition-all ease-in-out duration-700 group-hover:bg-white"></span>
        </div>
      </motion.button>
    </div>
  );
};

export default Header;
