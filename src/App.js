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

const featureCards = [
  {
    icon: '🖥️',
    title: 'Live Class',
    description: 'Attend interactive live sessions with world-class instructors and collaborate in real time.',
  },
  {
    icon: '💬',
    title: 'Discuss',
    description: 'Stay connected with classmates and mentors in focused discussion channels.',
  },
  {
    icon: '✅',
    title: 'Task',
    description: 'Complete guided assignments and get rapid feedback to reinforce every lesson.',
  },
  {
    icon: '📚',
    title: 'Resources',
    description: 'Access comprehensive libraries, templates, and tools to accelerate your learning.',
  },
  {
    icon: '🎓',
    title: 'Certificates',
    description: 'Earn industry-recognized certificates that validate your skills and expertise.',
  },
  {
    icon: '👥',
    title: 'Community',
    description: 'Join a vibrant community of learners, mentors, and industry professionals.',
  },
];

const courses = [
  // Existing courses omitted for brevity
];

const metrics = [
  // Existing metrics omitted for brevity
];

const testimonials = [
  // Existing testimonials omitted for brevity
];

const pricingPlans = [
  // Existing pricing plans omitted for brevity
];

function App() {
  return (
    <div className='page'>
      <header className='site-header'>
        {/* Site header content omitted for brevity */}
      </header>
      <main>
        <section className='hero'>
          <div className='hero__text'>
            <h1>Welcome to neverline</h1>
            <p>Unlock your potential with our curated online courses.</p>
            <div className='hero__actions'>
              <a href='#courses' className='button button--primary'>Browse Courses</a>
              <a href='#contact' className='button button--ghost'>Contact Us</a>
            </div>
          </div>
          <div className='hero__media'>
            <div className='hero__image-wrapper'>
              <img src='https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' alt='Learning Platform' />
            </div>
          </div>
        </section>
        {/* Other sections omitted for brevity */}
      </main>
    </div>
  );
}

export default App;
