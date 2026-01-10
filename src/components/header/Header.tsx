import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  LogoIcon,
  TwitterIcon,
} from '@/shared/assets/icons';
import { Button, Link } from '@/shared/ui';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import S from './Header.module.scss';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={clsx(S.header, isScrolled && S.scrolled)}>
      <div className={`container ${S.content}`}>
        <div className={S.logoWrapper}>
          <LogoIcon className={S.logo} />
          <span>DiveSea</span>
        </div>
        <nav className={clsx(S.nav, isMenuOpen && S.navActive)}>
          <ul className={S.linksWrapper}>
            <li className={S.link}>
              <Link variant="text" size="none" href="#">
                DISCOVER
              </Link>
            </li>
            <li className={S.link}>
              <Link variant="text" size="none" href="#">
                CREATORS
              </Link>
            </li>
            <li className={S.link}>
              <Link variant="text" size="none" href="#">
                SELL
              </Link>
            </li>
            <li className={S.link}>
              <Link variant="text" size="none" href="#">
                STATS
              </Link>
            </li>
          </ul>
          <ul className={S.socialWrapper}>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <InstagramIcon />
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon />
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <TwitterIcon />
              </a>
            </li>
          </ul>

          <Button className={S.headerButton}>CONNECT WALLET</Button>
        </nav>
        <button
          className={clsx(S.hamburger, isMenuOpen && S.hamburgerActive)}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
};
