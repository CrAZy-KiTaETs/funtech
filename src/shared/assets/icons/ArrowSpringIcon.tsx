import type { MotionProps } from 'framer-motion';
import { motion } from 'framer-motion';
import type { SVGProps } from 'react';

export const ArrowSpringIcon = (props: SVGProps<SVGSVGElement> & MotionProps) => {
  return (
    <motion.svg
      width="131"
      height="136"
      viewBox="0 0 131 136"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial="hidden"
      animate="visible"
      {...props}
    >
      <motion.path
        d="M15.6509 43.2948C32.4342 30.7253 51.9746 23.0114 72.6833 28.6292C91.3752 33.7 103.143 49.6307 90.5399 69.3322C84.5738 78.6585 71.8709 85.1865 61.8854 79.8739C50.7608 73.9553 59.5291 59.0169 66.6508 54.7088C83.2842 44.6466 106.697 49.3236 118.212 68.8675C131.849 92.012 108.786 103.532 108.77 103.344"
        stroke="black"
        strokeWidth="3.37884"
        strokeMiterlimit="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: { pathLength: 1, opacity: 1 },
        }}
        transition={{ duration: 0.5, delay: 1.5 }}
      />
      <motion.path
        d="M19.2679 18.3822C19.8772 20.8067 19.5254 23.2337 19.2859 25.6773C18.5004 33.7008 15.355 42.031 9.71129 47.2934C17.1377 44.0372 27.7919 42.619 34.5371 48.3348"
        stroke="black"
        strokeWidth="3.37884"
        strokeMiterlimit="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        transition={{ duration: 0.3, delay: 1.4 }}
      />
    </motion.svg>
  );
};
