import { NftSwiper } from '@/components/nftSwiper/NftSwiper';
import S from './Nft.module.scss';

export const Nft = () => {
  return (
    <section className={S.nftSection}>
      <h2>Weekly - Top NFT</h2>
      <NftSwiper />
    </section>
  );
};
