import Link from 'next/link';
import React from 'react';
import Container from './Container';

export default function Cta() {
  return (
    <Container>
      <div className="flex w-full max-w-4xl gap-5 mx-auto">
        <div className="relative group flex-1">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-pink-600 rounded-lg blur opacity-50 group-hover:opacity-100 duration-300"></div>
          <div className="flex relative flex-1 flex-wrap items-center justify-between text-white bg-neutral-900 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
            <div className="flex-grow text-center lg:text-left">
              <h2 className="text-2xl font-medium lg:text-3xl">Siap Berkolaborasi?</h2>
              <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
                Kontak kami sekarang
              </p>
            </div>
            <div className="flex-shrink-0 w-full text-center lg:w-auto">
              <Link
                href="#"
                target="_blank"
                rel="noopener"
                className="inline-block py-3 mx-auto text-lg font-medium text-center text-white bg-indigo-600 rounded-md px-7 lg:px-10 lg:py-5 "
              >
                Kontak Kami
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
