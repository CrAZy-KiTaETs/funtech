const images = ['/images/card1.jpg', '/images/card2.jpg', '/images/card3.jpg', '/images/card4.jpg'];

export const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};
