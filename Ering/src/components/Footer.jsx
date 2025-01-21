import React from "react";
import { Mail, Phone, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 select-none" id="contact">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">Ering Estudio</h3>
            <p className="text-gray-400">Diseña tu futuro, Hoy.</p>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12">
            <div className="flex items-center">
              <a
                href="https://www.instagram.com/ering.estudio/?hl=es-la"
                className="hover:text-blue-400"
                target="_blank"
              >
                <Instagram className="mr-4" />
              </a>
              <span className="text-gray-400">ering.estudio</span>
            </div>
            <div className="flex items-center">
              <Mail className="text-white mr-4" />
              <span className="text-gray-400">ering.estudio@gmail.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="text-white mr-4" />
              <span className="text-gray-400">+54 (011) 3683-2271</span>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Ering Studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
