import { ArrowLeftIcon, EthereumIcon } from '@/shared/assets/icons';
import { Button } from '@/shared/ui';
import { getRandomBid, getRandomFutureDate, getRandomImage } from '@/shared/utils';
import { useEffect, useState } from 'react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { SwiperModule, SwiperOptions } from 'swiper/types';
import { TimeCounter } from '../timeCounter/TimeCounter';
import S from './NftSwiper.module.scss';

import 'swiper/css';
import 'swiper/css/navigation';
import { data } from 'framer-motion/client';

interface NftItem {
  name: string;
  image: string;
  bid: string;
  endsAt: Date;
}

const swiperSettings: SwiperOptions = {
  spaceBetween: 32,
  slidesPerView: 1.4,
  pagination: { clickable: true, dynamicBullets: true },
  centeredSlides: true,
  navigation: {
    nextEl: '.nav-next',
    prevEl: '.nav-prev',
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
  initialSlide: 1,
  breakpoints: {
    526: { slidesPerView: 1.5 },
    601: { slidesPerView: 2 },
    769: { slidesPerView: 3 },
    1025: { slidesPerView: 3.5 },
    1281: { slidesPerView: 4 },
    1441: { slidesPerView: 4.6, spaceBetween: 40 },
    1921: { slidesPerView: 6, spaceBetween: 40 },
    2000: { slidesPerView: 6, spaceBetween: 40 },
    2561: { slidesPerView: 8, spaceBetween: 40 },
  },
  modules: [Navigation, Autoplay] as SwiperModule[],
};

export const NftSwiper = () => {
  const [items, setItems] = useState<NftItem[]>([]);

  useEffect(() => {
    const getItems = async () => {
      try {
        // const res = await fetch('https://api.coingecko.com/api/v3/nfts/list');
        // const data: { name: string }[] = await res.json();

        const data = [
          { name: 'CryptoPunk #3100' },
          { name: 'Bored Ape Yacht Club #8817' },
          { name: 'Art Blocks #1234' },
          { name: 'Cool Cat #5678' },
          { name: 'Meebits #91011' },
          { name: 'World of Women #1213' },
          { name: 'Doodles #1415' },
          { name: 'Azuki #1617' },
          { name: 'Azuki #1617' },
          { name: 'Azuki #1617' },
          { name: 'Azuki #1617' },
          { name: 'Azuki #1617' },
          { name: 'Azuki #1617' },
        ];

        if (Array.isArray(data)) {
          data.splice(30);
          const itemsWithDetails: NftItem[] = data.map((item) => ({
            name: item.name,
            image: getRandomImage(),
            bid: getRandomBid(),
            endsAt: getRandomFutureDate(),
          }));
          setItems(itemsWithDetails);
        }
      } catch (error) {
        console.error('Ошибка при получении данных', error);
      }
    };
    getItems();
  }, []);
  return (
    <>
      <Swiper className={S.swiper} wrapperTag="ul" {...swiperSettings}>
        {items.map((item, index) => (
          <SwiperSlide className={S.slide} tag="li" key={index}>
            <TimeCounter className={S.counter} date={item.endsAt} />
            <img src={item.image} alt={item.name} className={S.image} />
            <h3 className={S.nftName}>{item.name}</h3>
            <div className={S.bidWrapper}>
              <span className={S.bidText}>Current bid </span>
              <span className={S.bidValue}>
                <EthereumIcon />
                {item.bid}
              </span>
            </div>
            <Button className={S.button} size="small">
              PLACE BID
            </Button>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={S.navigation}>
        <button className={`${S.prevButton} nav-prev`}>
          <ArrowLeftIcon />
        </button>
        <span className={S.divider} />
        <button className={`${S.nextButton} nav-next`}>
          <ArrowLeftIcon />
        </button>
      </div>
    </>
  );
};
