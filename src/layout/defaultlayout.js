import React, { Children } from 'react';
import { Header } from './half/header.component';
import { Footer } from './half/footer.component';

export const DefaultLayout = ({children}) => {
  return (

    <div className='default-layout'>
      <header className='header'>
      <Header />
      </header>

      <main className='main'>{children}</main>

      <footer className='footer'>
      <Footer />
      </footer>

    </div>
  );
};