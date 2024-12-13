import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>Stonepedia</Link>
        <button className={styles.menuToggle} onClick={toggleMobileMenu}>
          ☰
        </button>
        <ul className={`${styles.navLinks} ${isMobileMenuOpen ? styles.navLinksMobile : ''}`}>
          <li><Link href="#about">About</Link></li>
          <li><Link href="#products">Products</Link></li>
          <li><Link href="#testimonials">Testimonials</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}