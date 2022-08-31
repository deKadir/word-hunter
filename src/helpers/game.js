import commonWords from '../constants/data/common.json';

const getRandomWord = () => {
  const index = Math.round(Math.random() * commonWords.length);
  return commonWords[index];
};

export { getRandomWord };
