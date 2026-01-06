'use client';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import S from './ButtonLink.module.scss';
import type { TButtonProps } from './ButtonLink.types';

export const Button = ({
  children,
  variant = 'primary',
  className,
  type = 'button',
  size = 'medium',
  ...restProps
}: TButtonProps) => {
  return (
    <motion.button
      className={clsx(S.buttonLink, S[variant], S[size], className)}
      type={type}
      {...restProps}
    >
      {children}
    </motion.button>
  );
};
