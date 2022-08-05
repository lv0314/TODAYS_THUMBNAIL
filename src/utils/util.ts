export const getRandomHex = () => {
  let hex = '#';
  hex += (Math.floor(Math.random() * 90 + 1) + 150).toString(16);
  hex += (Math.floor(Math.random() * 90 + 1) + 150).toString(16);
  hex += (Math.floor(Math.random() * 90 + 1) + 150).toString(16);
  return hex;
};
