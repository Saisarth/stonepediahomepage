import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect, useRef } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const products = [
    { name: 'Granite', image: '/images/granite.png' },
    { name: 'Marble', image: '/images/marble.png' },
    { name: 'Slate', image: '/images/slate.png' },
  ];

  const testimonials = [
    { quote: 'Stonepedia has the best products!', author: 'Happy Customer' },
    { quote: 'Amazing quality and service!', author: 'Satisfied Client' },
  ];

  const heroTitleRef = useRef(null);

  useEffect(() => {
    const letters = heroTitleRef.current.querySelectorAll('span');
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      letters.forEach((letter, idx) => {
        letter.style.transform = `translateY(${scrollTop * (0.5 + idx * 0.1)}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>Stonepedia - Homepage</title>
        <meta name="description" content="Welcome to Stonepedia - Explore quality stones for your needs." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 ref={heroTitleRef} className={styles.heroTitle}>
              {Array.from('Welcome to Stonepedia').map((char, index) => (
                <span key={index}>{char === ' ' ? '\u00A0' : char}</span>
              ))}
            </h1>
            <p>Explore premium quality stones for your projects.</p>
            <button className={styles.ctaButton}>Explore Now</button>
          </div>
        </section>

        {/* About Section */}
        <section className={styles.about} id="about">
          <h2>About Us</h2>
          <p>
            Stonepedia is your trusted source for high-quality stones and materials.
            We pride ourselves on providing the best products for our customers.
          </p>
        </section>

        {/* Products Section */}
        <section className={styles.products} id="products">
          <h2>Our Products</h2>
          <div className={styles.productGrid}>
            {products.map((product, index) => (
              <div key={index} className={styles.productCard}>
                <Image src={product.image} alt={product.name} width={200} height={200} />
                <h3>{product.name}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className={styles.testimonials} id="testimonials">
          <h2>Testimonials</h2>
          <div className={styles.testimonialGrid}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className={styles.testimonialCard}>
                <p>"{testimonial.quote}"</p>
                <p>- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className={styles.contact} id="contact">
          <h2>Contact Us</h2>
          <p>Email: contact@stonepedia.com</p>
          <p>Phone: +123 456 7890</p>
        </section>
      </main>

      <Footer />
    </>
  );
}
