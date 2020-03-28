import React from 'react';

import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <div className='font-sans bg-white flex flex-col min-h-screen w-full'>
        <div>
          <Header />
          { children }
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Layout;
