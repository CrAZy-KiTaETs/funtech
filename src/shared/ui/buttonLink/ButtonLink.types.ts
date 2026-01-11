import type { MotionProps } from 'framer-motion';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

type TButtonLinkProps = MotionProps & {
  variant?: 'primary' | 'secondary' | 'third' | 'text';
  size?: 'none' | 'small' | 'medium' | 'large';
};

export type TLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & TButtonLinkProps;

export type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & TButtonLinkProps;
