export const getRandomBid = () => {
  return (Math.random() * (5 - 0.1) + 0.1).toFixed(2);
};
