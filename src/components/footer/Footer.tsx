import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  LogoIcon,
  TwitterIcon,
} from '@/shared/assets/icons';
import S from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={S.footer}>
      <div className={`container ${S.content}`}>
        <div className={S.logo}>
          <LogoIcon color="white" />
          DiveSea
        </div>
        <ul className={S.links}>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Term & Conditions</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className={S.divider} />
        <span className={S.copyright}>
          © 2023 <i>DiveSea All Rights Reserved.</i>
        </span>
        <ul className={S.socials}>
          <li>
            <a href="#">
              <InstagramIcon />
            </a>
          </li>
          <li>
            <a href="#">
              <LinkedInIcon />
            </a>
          </li>
          <li>
            <a href="#">
              <FacebookIcon />
            </a>
          </li>
          <li>
            <a href="#">
              <TwitterIcon color="white" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
