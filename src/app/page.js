'use client';

import { useState } from 'react';
import Image from 'next/image';
import './hero.css';

export default function Hero() {
  const [dark, setDark] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Message sent.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <main className={dark ? 'dark-mode' : 'light-mode'}>
      <nav className="navbar">
        <h1 className="logo">Divyansh Bharbat</h1>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button className="mode-toggle" onClick={() => setDark(!dark)}>
          {dark ? '🌞 Light' : '🌙 Dark'}
        </button>
      </nav>

      <section className="hero">
        <div className="hero-text">
          <h2>Hello, I'm <span className="highlight">Divyansh</span> 👋</h2>
          <p>I'm a passionate Full Stack Developer</p>
        </div>
        <Image
          src="/divyansh.jpg"
          alt="Divyansh"
          width={200}
          height={200}
          className="profile-pic"
        />
      </section>

      <section className="about" id="about">
        <h2>About Me</h2>
        <p>
          I am a full stack developer with experience in building high-performance web apps using MERN and Next.js.
          I focus on intuitive design, optimized code, and practical solutions that scale and perform.
        </p>
      </section>

      <section className="services" id="services">
        <h2>Services</h2>
        <ul>
          <li><strong>Web Development:</strong> Responsive, clean, and modern websites</li>
          <li><strong>Backend/API:</strong> Secure Express/Node APIs with MongoDB/PostgreSQL</li>
          <li><strong>Frontend UI:</strong> Next.js, React.js, Bootstrap, AOS animations</li>
          <li><strong>Deployment:</strong> Vercel, Supabase, GitHub CI/CD</li>
        </ul>
      </section>

      <section className="projects" id="projects">
        <h2>My Projects</h2>
        <div className="project-list">
          <div className="project-card">
            <h3>🍛 Food Donation Web App</h3>
            <p>A platform to connect food donors with nearby NGOs and needy people. Built with React, Node.js, and MongoDB.</p>
          </div>
          <div className="project-card">
            <h3>🍰 E-commerce Cake Shop</h3>
            <p>An online store for ordering cakes with cart, checkout, and order tracking. Built using React, Bootstrap, and Firebase.</p>
          </div>
          <div className="project-card">
            <h3>🧂 Spices Shop Web UI</h3>
            <p>Interactive spice shopping experience with product carousel, filters, and animations. Built with React, AOS, Framer Motion.</p>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <h2>Contact Me</h2>
        <p>I'd love to hear from you! Fill out the form below:</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </main>
  );
}
