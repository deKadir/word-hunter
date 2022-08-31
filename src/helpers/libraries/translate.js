import translate from 'translate';
const translateToTurkish = async (text) => {
  const translated = await translate(text, { from: 'en', to: 'tr' });
  return translated;
};

export { translateToTurkish };
