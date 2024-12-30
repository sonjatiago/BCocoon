import React from 'react';
import { motion } from 'framer-motion';
import './AboutUs.css';
import memberPhoto from '../../assets/logos/member.jpg';


export const AboutUs = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  const teamMembers = [
    {
      name: "Isabel Esteves",
      role: "Founder & Creative Director",
      description: "With 30+ years of experience, Isabel crafts high-quality, stylish, and comfortable baby clothes with love and care."
    },
  ];

  return (
    <motion.div
      className="about-container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.section className="team-section" variants={itemVariants}>
        <h2>Our Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index}
              className="team-member"
              variants={itemVariants}
            >
              <div className="member-photo">
              <img src={memberPhoto} alt={member.name} />
              </div>
              <h3>{member.name}</h3>
              <h4>{member.role}</h4>
              <p>{member.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
      <motion.section className="about-story" variants={itemVariants}>
        <h2>Our Story</h2>
        <p>
        Isabel's journey started in her childhood, inspired by her mother, a skilled sewist. 
        With sewing tools and fabrics all around her, Isabel quickly fell in love with creating 
        and learned the art of sewing at an early age. Although she aspired to study fashion design,
         life took her in a different direction for a while. However, when her daughter, Carolina,
          was born, the need to stay home and care for her, combined with the global challenges
           of the COVID-19 pandemic, ignited Isabel’s creativity. She began making baby clothes,
            and from that passion, BCocoon Kids was born. Over the years, Isabel has crafted more 
            than 500 unique products, selling them to families worldwide. Today, her store continues to flourish, built on the love, skill, and dedication she has nurtured since childhood, providing parents with beautifully crafted pieces for their little ones.
        </p>
      </motion.section>

      <motion.section className="about-vision" variants={itemVariants}>
  <div className="vision-content">
    <h2>Our Vision</h2>
    <p>
    At BCocoon Kids, we envision a world where parents can find high-quality,
     comfortable, and beautifully crafted baby clothes they can trust and cherish.
    Driven by our passion for craftsmanship and a love for design, we strive to offer
     products that nurture both babies and families around the globe, all while celebrating 
     creativity, comfort, and timeless style.
    </p>
  </div>
</motion.section>

    </motion.div>
  );
};

export default AboutUs;