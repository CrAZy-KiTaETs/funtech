import { ArrowSpringIcon } from '@/shared/assets/icons';
import { ANIMATIONS } from '@/shared/consts';
import { Link } from '@/shared/ui';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import S from './Hero.module.scss';

const statsData = [
  { title: '430K+', subtitle: 'Art Work' },
  { title: '159K+', subtitle: 'Creators' },
  { title: '87K+', subtitle: 'Collections' },
];

const BASE_DELAY = 0.3;

export const Hero = () => {
  return (
    <section className={clsx('container', S.hero)}>
      <div className={S.content}>
        <span className={S.topLine}>
          <b>OVER 1M CREATORS</b>
        </span>
        <motion.h1 {...ANIMATIONS.fadeInUp(BASE_DELAY)}>Discover And Create NFTs</motion.h1>
        <motion.p className={S.desc} {...ANIMATIONS.fadeInUp(BASE_DELAY * 2)}>
          Discover, Create and Sell NFTs On Our NFT Marketplace <br /> With Over Thousands Of NFTs
          And Get a <b>$20 bonus.</b>
        </motion.p>
        <div className={S.buttons}>
          <Link href="#" {...ANIMATIONS.fadeInUp(BASE_DELAY * 3)}>
            EXPLORE MORE
          </Link>
          <Link variant="secondary" href="#" {...ANIMATIONS.fadeInUp(BASE_DELAY * 3.5)}>
            CREATE NFT
          </Link>
        </div>
        <div className={S.stats}>
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.title}
              {...ANIMATIONS.fadeInUp(BASE_DELAY * 4 + index * 0.2)}
              className={S.stat}
            >
              <h2>{stat.title}</h2>
              <p>{stat.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className={S.animWrapper} aria-hidden>
        <div className={S.shape1}>
          <img src="/images/shape1.png" alt="" />
        </div>
        <div className={S.shape2}>
          <img src="/images/shape2.png" alt="" />
        </div>

        <img className={S.dots} src="/images/dots.png" alt="" />
        <ArrowSpringIcon className={S.arrow} />
      </div>
    </section>
  );
};
