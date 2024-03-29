import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/vercel.svg';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const Header = () => {
  return (
    <header>
      <div className="topNav">
        <Image src={logo} width={50} height={50} alt="Logo" />
        <nav>
          <ul>
            <li>
              <Link
                href="/"
                passHref
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/events"
                passHref
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                href="/about-us"
                passHref
              >
                About Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <h1 className='title'>Sed ut perspiciatis unde omnis</h1>
    </header>
  );
};

export default Header;
