import React from 'react';
import Link from "next/link";

const Header = () => {
  return (
    <header className='header'>
      <div className="container">
        <div className="header__inner">
          <Link className='logo' href='/'>
            У братьев
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;