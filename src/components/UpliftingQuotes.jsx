import React, { useState } from 'react';

const quotes = [
  "You are not broken. You are healing.",
  "Every step forward is a victory.",
  "You survived the storm. Now you’re learning to dance in the rain.",
  "Your story isn’t over yet.",
  "Healing doesn’t mean the damage never existed. It means it no longer controls you.",
  "You are worthy of peace.",
  "It’s okay to rest. You’re doing enough.",
  "You are allowed to take up space.",
  "You are not alone in this.",
  "Progress, not perfection.",
  "You are stronger than you think.",
  "Your feelings are valid.",
  "You deserve kindness—from others and yourself.",
  "You are not your trauma.",
  "You are growing through what you’ve gone through.",
  "It’s okay to ask for help.",
  "You are enough.",
  "You are loved, even when you don’t feel it.",
  "You are safe now.",
  "You are allowed to feel joy.",
  "You are doing the best you can.",
  "You are resilient.",
  "You are not a burden.",
  "You are healing at your own pace.",
  "You are brave for facing each day.",
  "You are not defined by your past.",
  "You are worthy of support.",
  "You are making progress, even when it’s invisible.",
  "You are not alone in your pain.",
  "You are allowed to feel everything.",
  "You are reclaiming your power.",
  "You are not too much.",
  "You are learning to trust again.",
  "You are worthy of love.",
  "You are allowed to set boundaries.",
  "You are not behind.",
  "You are allowed to be proud of yourself.",
  "You are healing, even when it’s hard.",
  "You are not weak for needing rest.",
  "You are allowed to take up space.",
  "You are not alone in your journey.",
  "You are worthy of compassion.",
  "You are allowed to feel safe.",
  "You are not your worst day.",
  "You are growing, even when it’s slow.",
  "You are allowed to start over.",
  "You are worthy of healing.",
  "You are not alone. Ever.",
  "You are enough. Always.",
  "You are here. And that matters."
];

const UpliftingQuotes = () => {
  const [index, setIndex] = useState(0);

  const handleNextQuote = () => {
    setIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  };

  return (
    <section className="uplifting-quotes">
      <h2>Uplifting Quote</h2>
      <p className="quote">“{quotes[index]}”</p>
      <button className="next-quote-button" onClick={handleNextQuote}>
        Show Another
      </button>
      <p className="demo-note">Note: This demo is limited to 50 quotes.</p>
    </section>
  );
};

export default UpliftingQuotes;