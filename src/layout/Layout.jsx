import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* <main className={`${styles.main} flex flex-col justify-content content-center`}> */}
      {/* //flex and flex col  */}
      <main className="flex flex-col relative items-center grow my-10 md:my-15 mx-5 sm:mx-[10%] md:mx-[20%] lg:mx-[30%]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export { Layout };
