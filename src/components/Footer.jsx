import React from 'react';

const TransparentFooter = () => {
  return (
    <footer className="backdrop-filter backdrop-blur-lg text-white bg-black py-4 mt-20">
      <div className="container mx-auto flex flex-wrap justify-between items-center space-y-4 md:space-y-0 md:flex-nowrap">
        <div className="w-full md:w-auto text-center md:text-left">
          <p>Email: codecrafterslb@gmail.com</p>
          <p>Phone: +961 81 713 314</p>
        </div>
        <div className="w-full md:w-auto text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} CodeCrafterslb. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default TransparentFooter;
