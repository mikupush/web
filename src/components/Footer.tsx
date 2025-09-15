import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Logo & Description */}
        <div>
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
            <span className="text-lg font-semibold text-gray-800">Mikupush</span>
          </div>
          <p className="text-gray-500">
            Send large files easily and securely. Your simple WeTransfer alternative.
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        © 2025 Mikupush. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
