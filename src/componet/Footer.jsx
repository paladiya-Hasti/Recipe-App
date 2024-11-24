import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* About Section */}
        <div>
          <h4 className="text-lg font-semibold mb-3">About SocialChef Community</h4>
          <p className="text-sm text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
          </p>
        </div>

        {/* Help Section */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Need help?</h4>
          <p className="text-sm text-gray-400">Contact us via phone or email</p>
          <ul className="mt-3">
            <li className="text-sm text-gray-300">T: +1 555 555 555</li>
            <li className="text-sm text-gray-300">E: socialchef@email.com</li>
          </ul>
        </div>

        {/* Social Section */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Follow us</h4>
          <div className="flex space-x-4">
            {/* Replace # with actual links */}
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <i className="fab fa-facebook-f"></i> Facebook
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <i className="fab fa-instagram"></i> Instagram
            </a>
          </div>
        </div>
      </div>

      <hr className="my-6 border-gray-700" />

      <div className="text-center">
        <p className="text-sm text-gray-500">
          Copyright &copy; 2024 SocialChef. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
