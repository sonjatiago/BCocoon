import React from 'react';
import { motion } from 'framer-motion';
import './Location.css';

export const Location = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.6
      }
    }
  };

// Coordinates for Rua Luís de Camões 44, Benavente, Portugal
const latitude = 38.98116115340248;
const longitude = -8.808900575548556;


  return (
    <div className="location-section">
      <motion.div
        className="location-container"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="location-content">
          <motion.div className="location-info" variants={contentVariants}>
            <h2>Visit Our Gallery</h2>
            <div className="address-details">
              <p className="address">Rua Luís de Camões 44, Benavente</p>
              <p className="city">Benavente, Portugal 2130-062</p>
              <div className="contact-details">
                <p>Phone: +351 962 908 845</p>
                <p>Email: info@bcocoonkids.pt</p>
              </div>
              <div className="hours">
                <h3>Opening Hours</h3>
                <p>Monday - Friday: 10:00 - 18:00</p>
                <p>Saturday - Sunday: 11:00 - 16:00</p>
              </div>
            </div>
          </motion.div>

          <motion.div className="map-wrapper" variants={contentVariants}>
            <iframe
              title="Tallinn Map"
              className="map-frame"
              src={`https://www.openstreetmap.org/export/embed.html?bbox=${longitude - 0.015},${latitude - 0.015},${longitude + 0.015},${latitude + 0.015}&layer=mapnik&marker=${latitude},${longitude}`}
              frameBorder="0"
              allowFullScreen
            />
            <div className="map-actions">
              <a 
                href={`https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}#map=15/${latitude}/${longitude}`}
                target="_blank"
                rel="noopener noreferrer"
                className="view-larger"
              >
                View Larger Map
              </a>
              <a 
                href={`https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`}
                target="_blank"
                rel="noopener noreferrer"
                className="get-directions"
              >
                Get Directions
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Location;