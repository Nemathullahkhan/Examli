import React from "react";
import logoOrange from "../assets/logo-website-orange.png"
const Footer = () => {
  return (
    <footer class="bg-gradient-to-b from-zinc-800 to-zinc-900 text-gray-300">
      <div class="max-w-6xl mx-auto  py-16">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div class="space-y-4">
            <div class="flex items-center">
              <a href="/">
                <img src={logoOrange} alt="Examli Logo" className="h-10" />
              </a>
            </div>
            <p className="text-sm">
              Examli transforms raw exam data into meaningful insights
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  className="text-sm hover:text-white transition-colors"
                  href="/home"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="text-sm hover:text-white transition-colors"
                  href="/features"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  className="text-sm hover:text-white transition-colors"
                  href="/blog"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  className="text-sm hover:text-white transition-colors"
                  href="/contact-us"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  className="text-sm hover:text-white transition-colors"
                  href="/login"
                >
                  Login
                </a>
              </li>
              <li>
                <a
                  className="text-sm hover:text-white transition-colors"
                  href="/register"
                >
                  Register
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Reach Us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  className="text-sm hover:text-white transition-colors"
                  href="#linkedin"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  className="text-sm hover:text-white transition-colors"
                  href="#twitter"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  className="text-sm hover:text-white transition-colors"
                  href="#facebook"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  className="text-sm hover:text-white transition-colors"
                  href="#youtube"
                >
                  YouTube
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a
                  className="text-sm hover:text-white transition-colors"
                  href="/terms-and-conditions"
                >
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a
                  className="text-sm hover:text-white transition-colors"
                  href="/privacy-policy"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  className="text-sm hover:text-white transition-colors"
                  href="/refunds-and-returns"
                >
                  Refunds and Returns
                </a>
              </li>
              <li>
                <a
                  className="text-sm hover:text-white transition-colors"
                  href="/shipping-policy"
                >
                  Shipping Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <p className="text-sm text-center">
            ©2025 Datape. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
