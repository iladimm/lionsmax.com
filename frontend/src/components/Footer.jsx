import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold text-white mb-4">LionsMax</h3>
            <p className="text-sm">Empowering your vitality journey after 50.</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a className="hover:text-primary transition-colors" href="#">Blog</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Store</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Shop</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">About Us</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a className="hover:text-primary transition-colors" href="#">
                {/* Placeholder for Instagram Icon */}
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-7.01 2.858-7.21 7.21-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.2 4.358 2.858 7.01 7.21 7.21 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c4.358-.2 7.01-2.858 7.21-7.21.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.2-4.358-2.858-7.01-7.21-7.21-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.44-1.441-1.44z"></path></svg>
              </a>
              <a className="hover:text-primary transition-colors" href="#">
                {/* Placeholder for Facebook Icon */}
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z"></path></svg>
              </a>
              <a className="hover:text-primary transition-colors" href="#">
                {/* Placeholder for Pinterest Icon */}
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 .992.371 1.931.82 2.448.092.103.084.192-.016.299-.092.084-.303.385-.384.453-.122.104-.26.166-.419.142-1.582-.104-2.599-1.536-2.599-3.192 0-2.486 1.835-4.992 5.247-4.992 2.756 0 4.931 1.977 4.931 4.756 0 2.899-1.733 5.226-4.144 5.226-1.343 0-2.647-.704-3.07-1.529l-.747 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.31.535 3.55.535 6.627 0 12-5.373 12-12s-5.373-12-12-12z"></path></svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Secure Shopping</h4>
            <div className="flex items-center gap-4 text-sm">
              <span className="material-symbols-outlined">lock</span>
              <span>SSL Secured Checkout</span>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>© 2024 LionsMax. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
