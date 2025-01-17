'use client';

import Image from 'next/image';
import React from 'react';
import Logo from '@/public/logo.png';
import Button from '@/components/Button';
import Link from 'next/link';

const Header = () => {
  const returnHome = true;
  const retunActivities = true;

  return (
    <header className="bg-sesi text-white p-4 grid grid-cols-header items-center">
      <h1>Name</h1>
      <Link href="/">
        <Image
          src={Logo.src}
          alt="Logo"
          width={200}
          height={200}
          className="justify-self-center"
        />
      </Link>
      <div className="flex gap-4 justify-self-end">
        {returnHome && (
          <Button link="/" theme="green">
            Home
          </Button>
        )}
        {retunActivities && (
          <Button link="/activities" theme="green">
            Atividades
          </Button>
        )}
        <Button link="/logout" theme="red">
          Sair
        </Button>
      </div>
    </header>
  );
};

export default Header;
