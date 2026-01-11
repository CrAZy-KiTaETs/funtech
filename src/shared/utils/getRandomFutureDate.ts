export const getRandomFutureDate = () => {
  const now = new Date();
  const hours = Math.floor(Math.random() * 24);
  const minutes = Math.floor(Math.random() * 60);
  now.setHours(now.getHours() + hours);
  now.setMinutes(now.getMinutes() + minutes);
  return now;
};
