'use client';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import S from './ButtonLink.module.scss';
import type { TLinkProps } from './ButtonLink.types';

export const Link = ({
  children,
  variant = 'primary',
  className,
  size = 'medium',
  ...restProps
}: TLinkProps) => {
  return (
    <motion.a className={clsx(S.buttonLink, S[variant], S[size], className)} {...restProps}>
      {children}
    </motion.a>
  );
};
