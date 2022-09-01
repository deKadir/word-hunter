import React from 'react';
import styles from '../styles/multichoice.module.scss';
import { Caption, Option } from '../components';
import { getMultichoiceWord } from '../helpers/game';
import { translateToTurkish } from '../helpers/libraries/translate';
function Multichoice() {
  const [lang, setLang] = React.useState('en');
  const [question, setQuestion] = React.useState({});
  const [answer, setAnswer] = React.useState(-1);

  React.useEffect(() => setNewQuestion(), []);

  const handleTranslate = async () => {
    const translated = await translateToTurkish(question?.caption.en);
    setQuestion((q) => ({ ...q, caption: { ...q.caption, tr: translated } }));
    setLang((l) => (l === 'tr' ? 'en' : 'tr'));
  };

  const setNewQuestion = () => {
    const q = getMultichoiceWord();
    setQuestion({ ...q, caption: { en: q.caption, tr: '' } });
    setLang('en');
    setAnswer(-1);
  };

  const handleAnswer = (index) => () => setAnswer(index);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <section className={styles.options}>
          <button onClick={handleTranslate}>translate</button>
        </section>
        <Caption>{question?.caption?.[lang]}</Caption>
        <section className={styles.choices}>
          {question.choices?.map(({ choice, index }) => (
            <Option
              key={index}
              choiceIndex={index}
              onClick={handleAnswer(index)}
              answer={answer}
              correct={question?.correct}
            >
              {choice}
            </Option>
          ))}
        </section>
        <button style={buttonStyle[answer === -1]} onClick={setNewQuestion}>
          Next
        </button>
      </main>
    </div>
  );
}

export default Multichoice;

const buttonStyle = {
  true: {
    opacity: 0,
    pointerEvents: 'none',
  },

  false: {
    opacity: 1,
  },
};
