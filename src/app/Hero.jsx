'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import Image from 'next/image';

export default function Hero() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section className="bg-dark text-light p-5 text-center" data-aos="fade-up">
      <Image src="/profile.jpg" width={120} height={120} className="rounded-circle mb-3" alt="Profile" />
      <h1 className="display-5 fw-bold">Hi 👋 I'm Emmanuel</h1>
      <p className="lead">Frontend Developer | Lifelong Learner | UI Enthusiast</p>
      <button className="btn btn-outline-light mt-3">Contact Me</button>
    </section>
  );
}