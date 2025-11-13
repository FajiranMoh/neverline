import React from 'react';
import './App.css';

const projectName = 'neverline';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

function App() {
  return (
    <div className="page">
      <header className="site-header">
        <div className="site-header__brand">
          <span className="brand-mark">B</span>
          <span className="brand-name">{projectName}</span>
        </div>
        <nav className="site-header__nav">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="site-header__actions">
          <a href="#signin" className="link">
            Sign in
          </a>
          <a href="#contact" className="button button--primary button--sm">
            Sign up
          </a>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero__text">
            <span className="hero__eyebrow">Easy learning platform</span>
            <h1>Words learner come here.</h1>
            <p>
              Build skills with expert-led courses, earn certificates, and access live classes from our global
              instructor network.
            </p>
            <div className="hero__actions">
              <a className="button button--primary" href="#courses">
                Get Started
              </a>
              <button type="button" className="button button--ghost">
                Watch Preview
              </button>
            </div>
          </div>
          <div className="hero__media">
            <img
              src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=820&q=80"
              alt="Student celebrating success"
            />
          </div>
        </section>
        <!-- Add the rest of your sections here -->
      </main>

      <!-- Your footer here -->
    </div>
  );
}

export default App;
