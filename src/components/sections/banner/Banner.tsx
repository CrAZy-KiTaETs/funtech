import { Button } from '@/shared/ui';
import S from './Banner.module.scss';

export const Banner = () => {
  return (
    <section className={`container ${S.banner}`}>
      <div className={S.bannerContent}>
        <div>
          <h2>Create and Sell NFTs</h2>
          <p>World’s Largest NFT Place</p>
          <div className={S.buttons}>
            <Button variant="secondary">Explore More</Button>
            <Button variant="third">Sell Artwork</Button>
          </div>
        </div>

        <div className={S.imageWrapper}>
          <img src="/images/card5.jpg" alt="" aria-hidden />
        </div>
      </div>
    </section>
  );
};
