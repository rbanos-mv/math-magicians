import React from 'react';

const Quote = () => {
  const quotes = [
    {
      text: 'Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding.',
      author: 'William Paul Thurston',
    },
    {
      text: 'Pure mathematics is, in its way, the poetry of logical ideas.',
      author: 'Albert Einstein, German theoretical physicist',
    },
    {
      text: 'Without mathematics, there’s nothing you can do. Everything around you is mathematics. Everything around you is numbers.',
      author: 'Shakuntala Devi, Indian writer and mental calculator',
    },
    {
      text: 'Mathematics is the most beautiful and most powerful creation of the human spirit.',
      author: 'Stefan Banach, Polish mathematician',
    },
    {
      text: 'We will always have STEM with us. Some things will drop out of the public eye and go away, but there will always be science, engineering, and technology. And there will always, always be mathematics.',
      author: 'Katherine Johnson, African-American mathematician',
    },
    {
      text: 'Mathematics as an expression of the human mind reflects the active will, the contemplative reason, and the desire for aesthetic perfection. Its basic elements are logic and intuition, analysis and construction, generality and individuality.',
      author: 'Richard Courant, German-American mathematician',
    },
    {
      text: 'As far as the laws of mathematics refer to reality, they are not certain, and as far as they are certain, they do not refer to reality.',
      author: 'Albert Einstein',
    },
    {
      text: 'What is mathematics? It is only a systematic effort of solving puzzles posed by nature.',
      author: 'Shakuntala Devi',
    },
    {
      text: 'Mathematics is the music of reason.',
      author: 'James Joseph Sylvester, English mathematician',
    },
    {
      text: 'Mathematics knows no races or geographic boundaries; for mathematics, the cultural world is one country.',
      author: 'David Hilbert, German mathematician',
    },
  ];
  const index = Math.floor(Math.random() * quotes.length);
  const quote = quotes[index];
  return (
    <div className="quote">
      <p>{quote.text}</p>
      {' — '}
      <em>{quote.author}</em>
    </div>
  );
};

export default Quote;
