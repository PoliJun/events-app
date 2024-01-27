import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const Header = () => {
  return (
    <header className={`${styles.header} ${inter.className}`}>
      <nav>
        <Image
          alt="Logo"
          style={{ display: 'inline-block', marginLeft: '10px' }}
        />
        <Link
          href="/"
          passHref
          style={{ display: 'inline-block', marginLeft: '10px' }}
        >
          Home
        </Link>
        <Link
          href="/events"
          passHref
          style={{ display: 'inline-block', marginLeft: '10px' }}
        >
          Events
        </Link>
        <Link
          href="/about-us"
          passHref
          style={{ display: 'inline-block', marginLeft: '10px' }}
        >
          About Us
        </Link>
      </nav>
    </header>
  );
};

export default Header;

