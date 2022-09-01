import commonWords from '../constants/data/common.json';

const getRandomWord = () => {
  const index = getRandomIndex();
  const word = commonWords[index].word,
    caption = commonWords[index].meanings?.[0]?.definitions[0]?.definition;
  return {
    word,
    caption: {
      en: caption,
      tr: '',
    },
  };
};

const getMultichoiceWord = () => {
  const indexes = [];

  while (indexes.length < 4) {
    const random = getRandomIndex();
    if (indexes.includes(random)) continue;
    indexes.push(random);
  }
  const correctIndex = Math.round(Math.random() * 2 + 1);
  const correct = indexes[correctIndex];
  const choices = indexes.map((index) => ({
    choice: commonWords[index].word,
    index,
  }));
  return {
    correct,
    caption: commonWords[correct]?.meanings?.[0]?.definitions[0]?.definition,
    choices,
  };
};

const getRandomIndex = () => {
  return Math.round(Math.random() * commonWords.length);
};

export { getRandomWord, getMultichoiceWord };
