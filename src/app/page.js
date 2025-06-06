'use client';

import { useEffect, useState } from 'react';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';

export default function HomePage() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <NextSeo
        title="Divyansh Bharbat | Full Stack Developer & UI/UX Designer"
        description="Portfolio of Divyansh Bharbat – MERN Stack Developer with UI/UX expertise. Projects: Foodination, Spices Shop, Event Manager."
        openGraph={{
          url: 'https://divyanshbharbat.netlify.app',
          title: 'Divyansh Bharbat Portfolio',
          description: 'Explore React, Node, MongoDB, and UI/UX projects by Divyansh Bharbat.',
        }}
      />
      <main className={dark ? 'bg-dark text-white' : 'bg-light text-dark'}>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top shadow-sm" style={{ background: 'linear-gradient(135deg, #0f0f1c, #1a0033)' }}>
          <div className="container">
            <a className="navbar-brand fw-bold text-gradient" href="#">Divyansh</a>
            <div className="d-flex gap-3">
              <button className="btn btn-outline-light btn-sm" onClick={() => scrollTo('about')}>About</button>
              <button className="btn btn-outline-light btn-sm" onClick={() => scrollTo('services')}>Services</button>
              <button className="btn btn-outline-light btn-sm" onClick={() => scrollTo('projects')}>Projects</button>
              <button className="btn btn-outline-light btn-sm" onClick={() => scrollTo('contact')}>Contact</button>
              <button className="btn btn-outline-light btn-sm" onClick={() => setDark(!dark)}>
                {dark ? 'Light Mode' : 'Dark Mode'}
              </button>
            </div>
          </div>
        </nav>

        {/* Hero */}
        <section className="container-fluid" style={{ paddingTop: '130px', background: 'linear-gradient(135deg, #0f0c29, #302b63, #00f0b5)' }} data-aos="fade-up">
          <div className="row align-items-center px-5">
            <div className="col-md-6 text-center" data-aos="fade-right">
              <Image
                src="/divyansh.jpg"
                alt="Divyansh"
                width={300}
                height={350}
                className=" rounded-circle shadow-lg"
              />
            </div>
            <div className="col-md-6" data-aos="fade-left">
              <h1 className="display-4 fw-bold text-gradient">Hi, I'm Divyansh</h1>
              <h4 className="animated-text">Full Stack Developer & UI/UX Designer</h4>
              <p>I develop stunning and scalable applications using the MERN stack with modern UI/UX designs.</p>
              <a href="#projects" className="btn btn-glow mt-3">Explore Projects</a>
            </div>
          </div>


          {/* About */}
          <section id="about" className="container my-5" data-aos="fade-up">
            <h2 className="text-center mb-4 text-gradient">About Me</h2>
            <p className="lead text-center">
              I'm a full-stack developer skilled in the MERN stack. I love building clean, efficient, and scalable apps that solve real-world problems.
            </p>
            <div className="row mt-4">
              <div className="col-md-6" data-aos="fade-right">
                <h5 className="fw-bold">🎓 Education</h5>
                <ul>
                  <li>B.Tech in IT, 4th Semester</li>
                  <li>Strong foundation in DSA, Web Development</li>
                </ul>
              </div>
              <div className="col-md-6" data-aos="fade-left">
                <h5 className="fw-bold">🛠 Tech Stack</h5>
                <ul>
                  <li>Frontend: React, Bootstrap, AOS</li>
                  <li>Backend: Node.js, Express.js</li>
                  <li>Database: MongoDB, PostgreSQL</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Services */}
          <section id="services" className="container my-5" data-aos="zoom-in">
            <h2 className="text-center mb-4 text-gradient">My Services</h2>
            <div className="row g-4">
              {[
                { title: '💻 Web Development', desc: 'Full-stack web apps using React, Node, and MongoDB.' },
                { title: '🎨 UI/UX Design', desc: 'Responsive and modern interfaces with a focus on user experience.' },
                { title: '📈 SEO Optimization', desc: 'Boost visibility and improve site structure for search engines.' },
                { title: '🛒 E-commerce Solutions', desc: 'Custom e-commerce stores with cart, filters, and analytics.' },
              ].map((service, i) => (
                <div className="col-md-3" key={i}>
                  <div
                    className="p-4 h-100 rounded shadow"
                    style={{
                      background: 'linear-gradient(145deg, #2c003b, #000)',
                      transition: '0.3s',
                      color: 'white',
                    }}
                  >
                    <h5>{service.title}</h5>
                    <p>{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section id="projects" className="container my-5" data-aos="zoom-in">
            <h2 className="text-center mb-4 text-gradient">Projects</h2>
            <div className="row g-4">
              {[
                {
                  title: '🥫 Foodination',
                  desc: 'Food donation system with request approval, analytics, and public listing.',
                  location: "https://fooddonationwebapplication.vercel.app"
                },
                {
                  title: '🌶 Spices Shop',
                  desc: 'E-commerce site for spices with loyalty program, cart, filters, and slider.',
                  location:"https://sgshop.netlify.app/"
                },
                {
                  title: '🎉 Event Management',
                  desc: 'Event creation/joining system with ticketing and admin dashboard.',
                  location:"*"
                },
              ].map((proj, i) => (
                <div className="col-md-4" key={i}>
                 <a href={proj.location}> <div
                    className="card h-100 p-3 border-0 text-white"
                    style={{
                      background: 'linear-gradient(135deg, #1f0036, #32004e)',
                      transition: '0.3s',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
                  >
                    <h5>{proj.title}</h5>
                    <p>{proj.desc}</p>
                  </div></a>
                </div>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="container my-5" data-aos="fade-up">
            <h2 className="text-center mb-4 text-gradient">Contact Me</h2>
            <form className="mx-auto" style={{ maxWidth: '600px' }}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" placeholder="Your name" />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="Your email" />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea rows="4" className="form-control" placeholder="Message"></textarea>
              </div>
              <button className="btn btn-glow">Send Message</button>
            </form>
          </section>
        </section>
        {/* Footer */}
        <footer className="text-center mt-5 py-4 bg-black text-white">
          <p>&copy; 2025 Divyansh Bharbat. All rights reserved.</p>
        </footer>
      </main>

      <style jsx>{`
        .text-gradient {
          background: linear-gradient(90deg, #b621fe, #1fd1f9);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .btn-glow {
          background: linear-gradient(90deg, #7928CA, #4ADEDE);
          border: none;
          color: white;
          transition: 0.3s;
        }
        .btn-glow:hover {
          transform: scale(1.05);
          box-shadow: 0 0 10px #4ADEDE;
        }
        .animated-text {
          animation: fadeInUp 2s ease-in-out;
        }
        @keyframes fadeInUp {
          0% {
            transform: translateY(40px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}