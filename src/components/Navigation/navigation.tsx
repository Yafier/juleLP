import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navigation() {
  return (
    <nav className="w-full bg-transparent z-50 pt-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-12">
          <Link href="/">
            <Image
              src="/alife_logo.png"
              alt="Alife Logo"
              width={50}
              height={50}
              className="object-contain"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
} 