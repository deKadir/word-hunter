import React from 'react';
import { Box, Caption, Input } from '../components';
import styles from '../styles/guess.module.scss';
import { getRandomWord } from '../helpers/game';
import { translateToTurkish } from '../helpers/libraries/translate';
function Guess() {
  const [question, setQuestion] = React.useState({ word: '', caption: '' });
  const [answer, setAnswer] = React.useState('');
  const [lang, setLang] = React.useState('en');
  const [reveal, setReveal] = React.useState([]);

  React.useEffect(() => setNewQuestion(), []);

  const setNewQuestion = () => {
    const data = getRandomWord();
    const q = {
      word: data.word,
      caption: {
        en: data.meanings?.[0]?.definitions[0]?.definition,
        tr: '',
      },
    };

    setLang('en');
    setQuestion({ ...q });
    setReveal([]);
  };

  const handleTranslate = async () => {
    const translated = await translateToTurkish(question.caption.en);
    setQuestion((q) => ({ ...q, caption: { ...q.caption, tr: translated } }));
    setLang((l) => (l === 'tr' ? 'en' : 'tr'));
  };

  const input = {
    change: (e) => {
      if (e.target.value.trim().length > question.word.length) return;
      setAnswer(e.target.value);
    },
    submit: () => {
      if (question.word === answer) {
        setNewQuestion();
      }
      setAnswer('');
    },
  };

  const handleReveal = () => {
    const remaining = question.word
      .split('')
      .map((w, k) => k)
      .filter((index) => !reveal.includes(index));
    if (remaining.length <= 0) return;
    const index = Math.round(Math.random() * (remaining.length - 1));
    console.log('remaining', remaining, 'index', index);
    setReveal((r) => [...r, remaining[index]]);
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <section className={styles.wordSection}>
          {question?.word?.split('').map((w, key) => (
            <Box key={key}>{reveal.includes(key) ? w : ''}</Box>
          ))}
        </section>
        <section className={styles.options}>
          <button onClick={handleReveal}>tip</button>
          <button onClick={handleTranslate}>translate</button>
        </section>
        <Caption>{question?.caption[lang]}</Caption>
        <Input
          placeholder="Enter your guess"
          value={answer}
          onChange={input.change}
          handleSubmit={input.submit}
        />
      </main>
    </div>
  );
}

export default Guess;
