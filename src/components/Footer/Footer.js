import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Phone } from 'lucide-react';
import { FaEtsy, FaPinterest } from 'react-icons/fa';
import ScrollLink from '../../components/ScrollLink';
import './Footer.css';
import logo from '../../assets/logos/lg1.jpg';
import Logo2 from '../../assets/logos/lg2.png';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      icon: <Instagram size={24} />, 
      url: 'https://www.instagram.com/b_cocoon_kids/', 
      label: 'Instagram' 
    },
    { 
      icon: <FaPinterest size={24} />, 
      url: 'https://br.pinterest.com/bcocoonkids/', 
      label: 'Pinterest' 
    },
    {
      icon: <FaEtsy size={24} />,
      url: 'https://www.etsy.com/shop/BCocoonkids?sort_order=date_desc&page=1#items',
      label: 'Etsy'
    },
    { 
      icon: <Phone size={24} />, 
      url: 'https://api.whatsapp.com/message/LZ35Q24HS6C7I1?autoload=1&app_absent=0', 
      label: 'WhatsApp' 
    }
  ];

  const footerLinks = [
    {
      title: 'Navigation',
      links: [
        { name: 'Home', path: '/' },
        { name: 'Store', path: '/store' },
        { name: 'About Us', path: '/aboutus' },
        { name: 'Location', path: '/location' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', path: '/privacy' },
        { name: 'Terms of Service', path: '/terms' },
        { name: 'Returns', path: '/returns' },
      ],
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <img src={logo} alt="B Cocoon Kids Logo" className="footer-logo" />
          <div className="social-links">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="social-icon"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        <div className="footer-links-container">
          {footerLinks.map((section, index) => (
            <div key={index} className="footer-section">
              <h3>{section.title}</h3>
              <ul>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <ScrollLink to={link.path}>{link.name}</ScrollLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
      <div className="footer-bottom-content">
        <p>&copy; {currentYear} Made by TG Web Design. B Cocoon Kids. All rights reserved.</p>
        <p>
          <a 
            href="https://linktr.ee/bcocoonkids" 
            target="_blank" 
            rel="noopener noreferrer"
            className="linktree-link"
          >
            linktr.ee/bcocoonkids
          </a>
        </p>
        {/* Add the logo here */}
        <p>
          <a 
            href="https://tgwebdesign.netlify.app/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img 
              src={Logo2} 
              alt="TG Web Design Logo" 
              className="footer-logo2" 
              style={{ width: "60px", height: "auto" }} // Optional inline style
            />
          </a>
        </p>
      </div>
    </div>
    </footer>
  );
};

export default Footer;