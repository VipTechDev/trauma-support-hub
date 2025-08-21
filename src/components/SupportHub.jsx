import React from 'react';
import Footer from './Footer';
import UpliftingQuotes from './UpliftingQuotes';

const SupportHub = () => {
  const showDemoAlert = () => {
    alert("This is a demo project for learning purposes. The buttons are non-functional.");
  };

  return (
    <div className="support-hub-container">
      <div className="demo-banner">
         🚧 This is a demo site built for educational purposes. Buttons are non-functional.
      </div>
      <header>
        <h1>Welcome to the Trauma Support Hub</h1>
      </header>

      <section className="description">
        <p>
          A safe space for survivors of trauma, PTSD, and CPTSD. Find resources, connect with support networks, and begin your healing journey.
        </p>
        <button className="get-help-button" onClick={showDemoAlert}>Find Support</button>
      </section>

      <section className="resources">
        <ul>
          <h2>Emergency & Crisis Lines</h2>
          <li>Samaritans: 116 123 (UK)</li>
          <li>Mind Helpline: 0300 123 3393</li>
          <li>National Suicide Prevention Helpline: 0800 689 5652</li>
        </ul>
        <ul>
          <h2>Therapy & Counseling</h2>
          <li>BetterHelp</li>
          <li>Trauma Recovery UK</li>
          <li>PTSD UK</li>
        </ul>
        <ul>
          <h2>Community & Peer Support</h2>
          <li>Reddit: r/CPTSD</li>
          <li>Survivors Network</li>
          <li>Facebook Support Groups</li>
        </ul>
      </section>

      <section className="healing-resources">
        <h2>Self-Guided Healing Tools</h2>
            <ul>
                <li>🌿 Grounding Exercises</li>
                <li>🧘 Guided Meditation (YouTube or Calm)</li>
                <li>📚 Recommended Reads: “The Body Keeps the Score”</li>
                <li>🎧 Podcasts on Trauma Recovery</li>
            </ul>
        </section>

      <UpliftingQuotes />

      <section className="contact">
        <h2>Reach Out</h2>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button className="submit-button" onClick={showDemoAlert}>Send</button>
        </form>
      </section>

      <Footer />
    </div>
  );
};

export default SupportHub;