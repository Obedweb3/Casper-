import { useState, useEffect } from 'react';

const quotes = [
  "Innovation distinguishes between a leader and a follower. - Steve Jobs",
  "Technology is best when it brings people together. - Matt Mullenweg",
  "The advance of technology is based on making it fit in so that you don't really even notice it. - Bill Gates",
  "Any sufficiently advanced technology is indistinguishable from magic. - Arthur C. Clarke",
  "Tech empowers dreams at OBED TECH KENYA."
];

function Quote() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  }, []);

  return <p className="quote">{quote}</p>;
}

export default Quote;
