import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Heart, ZoomIn, X, ChevronLeft, ChevronRight, ChevronDown, ChevronUp, Check } from 'lucide-react';
import './Store.css';

// Import new images for The Eye
import bk1 from '../../assets/Bbloomers/bk1.png';
import bk2 from '../../assets/Bbloomers/bk2.png';
import bk3 from '../../assets/Bbloomers/bk3.png';
import bk4 from '../../assets/Bbloomers/bk4.png';
import bk5 from '../../assets/Bbloomers/bk5.png';
import bk6 from '../../assets/Bbloomers/bk6.png';

// Add new images for Baby Bonnet
import bb1 from '../../assets/Bbonnet/bb1.png';
import bb2 from '../../assets/Bbonnet/bb2.png';
import bb3 from '../../assets/Bbonnet/bb3.png';
import bb4 from '../../assets/Bbonnet/bb4.png';
import bb5 from '../../assets/Bbonnet/bb5.png';
import bb6 from '../../assets/Bbonnet/bb6.png';
import bb7 from '../../assets/Bbonnet/bb5.png';
import bb8 from '../../assets/Bbonnet/bb6.png';

// Add new images for Baby Doudou set
import bd1 from '../../assets/Bdoudou/bd1.jpg';
import bd2 from '../../assets/Bdoudou/bd2.jpg';
import bd3 from '../../assets/Bdoudou/bd3.jpg';
import bd4 from '../../assets/Bdoudou/bd4.jpg';
import bd5 from '../../assets/Bdoudou/bd5.jpg';
import bd6 from '../../assets/Bdoudou/bd6.jpg';
import bd7 from '../../assets/Bdoudou/bd7.jpg';

// Add new images for Baby Shoes
import bs1 from '../../assets/Bshoes/bs1.jpg';
import bs2 from '../../assets/Bshoes/bs2.jpg';
import bs3 from '../../assets/Bshoes/bs3.jpg';
import bs4 from '../../assets/Bshoes/bs4.jpg';
import bs5 from '../../assets/Bshoes/bs5.jpg';
import bs6 from '../../assets/Bshoes/bs6.jpg';
import bs7 from '../../assets/Bshoes/bs7.jpg';
import bs8 from '../../assets/Bshoes/bs8.jpg';
import bs9 from '../../assets/Bshoes/bs9.jpg';
import bs10 from '../../assets/Bshoes/bs10.jpg';

// Add new images for Waffle Blanket
import wb1 from '../../assets/Wblanket/wb1.png';
import wb2 from '../../assets/Wblanket/wb2.png';
import wb3 from '../../assets/Wblanket/wb3.png';
import wb4 from '../../assets/Wblanket/wb4.png';
import wb5 from '../../assets/Wblanket/wb5.png';
import wb6 from '../../assets/Wblanket/wb6.png';
import wb7 from '../../assets/Wblanket/wb7.png';
import wb8 from '../../assets/Wblanket/wb8.png';

// Add new images for Baby Jumpsuit
import bj1 from '../../assets/Bjumpsuit/bj1.png';
import bj2 from '../../assets/Bjumpsuit/bj2.png';
import bj3 from '../../assets/Bjumpsuit/bj3.png';
import bj4 from '../../assets/Bjumpsuit/bj4.png';
import bj5 from '../../assets/Bjumpsuit/bj5.png';
import bj6 from '../../assets/Bjumpsuit/bj6.png';
import bj7 from '../../assets/Bjumpsuit/bj7.png';
import bj8 from '../../assets/Bjumpsuit/bj8.png';
import bj9 from '../../assets/Bjumpsuit/bj9.png';
import bj10 from '../../assets/Bjumpsuit/bj10.png';

// Add new images for Set: Baby Shoes & Bow
import sb1 from '../../assets/Set1/sb1.png';
import sb2 from '../../assets/Set1/sb2.png';
import sb3 from '../../assets/Set1/sb3.png';
import sb4 from '../../assets/Set1/sb4.png';
import sb5 from '../../assets/Set1/sb5.png';
import sb6 from '../../assets/Set1/sb6.png';

// Add new images for Pink Linen
import pl1 from '../../assets/Pinklinen/pl1.png';
import pl2 from '../../assets/Pinklinen/pl2.png';
import pl3 from '../../assets/Pinklinen/pl3.png';
import pl4 from '../../assets/Pinklinen/pl4.png';
import pl5 from '../../assets/Pinklinen/pl5.png';
import pl6 from '../../assets/Pinklinen/pl6.png';
import pl7 from '../../assets/Pinklinen/pl7.png';
import pl8 from '../../assets/Pinklinen/pl8.png';

// Add new images for Baby Linen Jumpsuits
import lj1 from '../../assets/Linenjumpsuit/lj1.png';
import lj2 from '../../assets/Linenjumpsuit/lj2.png';
import lj3 from '../../assets/Linenjumpsuit/lj3.png';
import lj4 from '../../assets/Linenjumpsuit/lj4.png';
import lj5 from '../../assets/Linenjumpsuit/lj5.png';
import lj6 from '../../assets/Linenjumpsuit/lj6.png';
import lj7 from '../../assets/Linenjumpsuit/lj7.png';
import lj8 from '../../assets/Linenjumpsuit/lj8.png';

// Add new images for Box1
import bx1 from '../../assets/Box1/bx1.png';
import bx2 from '../../assets/Box1/bx2.png';
import bx3 from '../../assets/Box1/bx3.png';
import bx4 from '../../assets/Box1/bx4.png';
import bx5 from '../../assets/Box1/bx5.png';
import bx6 from '../../assets/Box1/bx6.png';

// Add new images for Linen Shoes
import ls1 from '../../assets/Linenshoes/ls1.png';
import ls2 from '../../assets/Linenshoes/ls2.png';
import ls3 from '../../assets/Linenshoes/ls3.png';
import ls4 from '../../assets/Linenshoes/ls4.png';
import ls5 from '../../assets/Linenshoes/ls5.png';
import ls6 from '../../assets/Linenshoes/ls6.png';
import ls7 from '../../assets/Linenshoes/ls7.png';
import ls8 from '../../assets/Linenshoes/ls8.png';
import ls9 from '../../assets/Linenshoes/ls9.png';

// Add new images for Baby Doudou
import dd1 from '../../assets/Doudou/dd1.jpg';
import dd2 from '../../assets/Doudou/dd2.jpg';
import dd3 from '../../assets/Doudou/dd3.jpg';
import dd4 from '../../assets/Doudou/dd4.jpg';
import dd5 from '../../assets/Doudou/dd5.jpg';
import dd6 from '../../assets/Doudou/dd6.jpg';
import dd7 from '../../assets/Doudou/dd7.jpg';
import dd8 from '../../assets/Doudou/dd8.jpg';
import dd9 from '../../assets/Doudou/dd9.jpg';
import dd10 from '../../assets/Doudou/dd10.jpg';
import dd11 from '../../assets/Doudou/dd11.jpg';
import dd12 from '../../assets/Doudou/dd12.jpg';



export const Store = ({ addToCart }) => {
  const [selectedArt, setSelectedArt] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [openSection, setOpenSection] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

const artworks = [
  {
    id: 1,
    name: 'Baby Bloomers',
    price: 46,
    imgSrc: bk3,
    images: [bk3, bk2, bk4, bk1, bk5, bk6],
    description: 'These beautiful gender-neutral baby bloomers with straps are crafted from premium cotton for maximum comfort. Perfect for special occasions or everyday wear, these bloomers feature adjustable straps and elastic leg openings for a perfect fit.',
    dimensions: ['1-3 months', '3-6 months', '6-9 months', '9-12 months'],
    colors: [
      { name: 'Natural', value: '#F5E6E0' },
      { name: 'Cream', value: '#F8F4E3' },
      { name: 'Light Grey', value: '#D3D3D3' }
    ],
    features: [
      'Premium 100% cotton material',
      'Adjustable straps for perfect fit',
      'Elastic leg openings for comfort',
      'Button closures for easy dressing',
      'Available in neutral tones'
    ],
    careInstructions: [
      'Machine wash cold with similar colors',
      'Use gentle cycle and mild detergent',
      'Tumble dry low or line dry',
      'Iron on low temperature if needed',
      'Do not bleach'
    ]
  },
  {
    id: 2,
    name: 'Baby Bonnet',
    price: 22,
    imgSrc: bb1,
    images: [bb1, bb2, bb3, bb4, bb5, bb6, bb7, bb8],
    description: 'Our classic baby bonnet is designed to keep your little one cozy and stylish. Made from soft, breathable fabric with a gentle elastic band for comfort, this bonnet provides protection while looking adorably vintage.',
    dimensions: ['1-3 months', '3-6 months', '6-9 months', '9-12 months'],
    features: [
      'Soft, breathable cotton blend',
      'Gentle elastic for secure fit',
      'Decorative bow detail',
      'Double-layered for warmth',
      'Vintage-inspired design'
    ],
    careInstructions: [
      'Hand wash in cool water',
      'Use mild baby-safe detergent',
      'Lay flat to dry',
      'Do not wring or twist',
      'Store flat in drawer'
    ]
  },
  {
    id: 3,
    name: 'Baby Doudou set',
    price: 40,
    imgSrc: bd1,
    images: [bd1, bd2, bd3, bd4, bd5, bd6, bd7],
    description: 'This charming Fox doudou set includes a lovey blanket and matching bib, perfect for soothing and practical use. The set is crafted from ultra-soft materials specifically chosen for sensitive baby skin.',
    dimensions: ['1-3 months', '3-6 months', '6-9 months', '9-12 months'],
    features: [
      'Ultra-soft plush material',
      'Hypoallergenic filling',
      'Adorable fox character design',
      'Machine washable',
      'Gift-ready packaging'
    ],
    careInstructions: [
      'Machine wash on delicate cycle',
      'Wash before first use',
      'Air dry recommended',
      'Spot clean when possible',
      'Keep away from direct sunlight when storing'
    ]
  },
  {
    id: 4,
    name: 'Baby Shoes',
    price: 32,
    imgSrc: bs1,
    images: [bs1, bs2, bs3, bs4, bs5, bs6, bs7, bs8, bs9, bs10],
    description: 'These handcrafted baby shoes combine style with practicality. Made with soft, flexible soles perfect for developing feet, these shoes feature easy-on design and secure closures to stay on active little feet.',
    dimensions: ['1-3 months', '3-6 months', '6-9 months', '9-12 months'],
    features: [
      'Soft, flexible soles',
      'Non-slip bottom texture',
      'Easy velcro closure',
      'Breathable materials',
      'Padded collar for comfort'
    ],
    careInstructions: [
      'Wipe clean with damp cloth',
      'Air dry at room temperature',
      'Use soft brush for suede parts',
      'Stuff with paper when storing',
      'Avoid direct heat'
    ]
  },
  {
    id: 5,
    name: 'Waffle Blanket',
    price: 57,
    imgSrc: wb1,
    images: [wb1, wb2, wb3, wb4, wb5, wb6, wb7, wb8],
    description: 'Our premium three-layer waffle blanket provides the perfect combination of warmth and breathability. The unique waffle texture adds visual interest while creating air pockets for optimal temperature regulation.',
    dimensions: ['1-3 months', '3-6 months', '6-9 months', '9-12 months'],
    features: [
      'Three-layer construction',
      'Breathable waffle texture',
      'Premium cotton blend',
      'Reinforced edges',
      'Temperature regulating'
    ],
    careInstructions: [
      'Machine wash cold',
      'Tumble dry low',
      'Avoid fabric softeners',
      'Wash separately first few times',
      'Reshape while damp'
    ]
  },
  {
    id: 6,
    name: 'Set: Baby Jumpsuit & Bunny Holder',
    price: 38,
    imgSrc: bj1,
    images: [bj1, bj2, bj3, bj4, bj5, bj6, bj7, bj8, bj9, bj10],
    description: 'This adorable set features a comfortable jumpsuit and matching bunny holder. The jumpsuit is designed for easy dressing with snap closures, while the bunny holder keeps pacifiers clean and within reach.',
    dimensions: ['1-3 months', '3-6 months', '6-9 months', '9-12 months'],
    features: [
      'Soft cotton jumpsuit',
      'Coordinated bunny holder',
      'Snap closure system',
      'Elastic cuffs',
      'Gentle neck opening'
    ],
    careInstructions: [
      'Machine wash inside out',
      'Use gentle cycle',
      'Wash holder separately',
      'Line dry recommended',
      'Iron on reverse if needed'
    ]
  },
  {
    id: 7,
    name: 'Set: Baby Shoes & Bow',
    price: 45,
    imgSrc: sb1,
    images: [sb1, sb2, sb3, sb4, sb5, sb6],
    description: 'This elegant set combines our handcrafted espadrille-style baby shoes with a matching bow headband. Perfect for special occasions, the set comes in a beautiful presentation box.',
    dimensions: ['1-3 months', '3-6 months', '6-9 months', '9-12 months'],
    features: [
      'Coordinated design',
      'Soft sole shoes',
      'Comfortable elastic headband',
      'Gift box included',
      'Premium materials'
    ],
    careInstructions: [
      'Spot clean shoes with soft cloth',
      'Hand wash headband gently',
      'Air dry both items',
      'Store in provided box',
      'Keep away from direct sunlight'
    ]
  },
  {
    id: 8,
    name: 'Pink Linen Jumpsuit',
    price: 32,
    imgSrc: pl1,
    images: [pl1, pl2, pl3, pl4, pl5, pl6, pl7, pl8],
    description: 'This delicate pink linen jumpsuit features charming daisy flower embroidery. Made from breathable linen, it\'s perfect for warm weather while maintaining a dressy appearance.',
    dimensions: ['1-3 months', '3-6 months', '6-9 months', '9-12 months'],
    features: [
      'Premium linen fabric',
      'Hand-embroidered daisies',
      'Pearl button closures',
      'Adjustable shoulder straps',
      'Lined bodice'
    ],
    careInstructions: [
      'Hand wash in cool water',
      'Use mild detergent',
      'Lay flat to dry',
      'Iron on low heat if needed',
      'Store on padded hanger'
    ]
  },
  {
    id: 9,
    name: 'Baby Linen Jumpsuit',
    price: 48,
    imgSrc: lj1,
    images: [lj1, lj2, lj3, lj4, lj5, lj6, lj7, lj8],
    description: 'Our linen-cotton blend jumpsuit offers the perfect balance of style and comfort for summer babies. The breathable fabric blend keeps baby cool while the classic design ensures timeless appeal.',
    dimensions: ['1-3 months', '3-6 months', '6-9 months', '9-12 months'],
    features: [
      'Linen-cotton blend',
      'Breathable weave',
      'Front button closure',
      'Adjustable straps',
      'Gentle elastic legs'
    ],
    careInstructions: [
      'Machine wash cold',
      'Gentle cycle only',
      'Line dry in shade',
      'Warm iron if needed',
      'Do not bleach'
    ]
  },
  {
    id: 10,
    name: 'Baby Box 1',
    price: 32,
    imgSrc: bx1,
    images: [bx1, bx2, bx3, bx4, bx5, bx6],
    description: 'Our welcome home baby box is thoughtfully curated with essential items for newborns. Each item is selected for quality and practicality, presented in a keepsake box perfect for gifting.',
    dimensions: ['1-3 months', '3-6 months', '6-9 months', '9-12 months'],
    features: [
      'Curated essentials',
      'Premium gift box',
      'Gender-neutral design',
      'Hospital bag ready',
      'Keepsake packaging'
    ],
    careInstructions: [
      'Follow care labels for each item',
      'Store box in dry place',
      'Keep away from direct sunlight',
      'Clean box with dry cloth',
      'Save for memory keeping'
    ]
  },
  {
    id: 11,
    name: 'Linen Shoes',
    price: 45,
    imgSrc: ls1,
    images: [ls1, ls2, ls3, ls4, ls5, ls6, ls7, ls8, ls9],
    description: 'These handcrafted linen shoes combine elegance with comfort for your newborn. The breathable linen upper and soft sole design make them perfect for warm weather and special occasions.',
    dimensions: ['1-3 months', '3-6 months', '6-9 months', '9-12 months'],
    features: [
      'Natural linen upper',
      'Soft flexible sole',
      'Elastic ankle design',
      'Non-slip texture',
      'Breathable construction'
    ],
    careInstructions: [
      'Spot clean with damp cloth',
      'Air dry naturally',
      'Brush gently when dry',
      'Store with shoe trees',
      'Avoid excess moisture'
    ]
  } ,
    {
      id: 12,
      name: 'Baby Animal Doudou',
      price: 36,
      imgSrc: dd1,
      images: [dd1, dd2, dd3, dd4, dd5, dd6, dd7, dd8, dd9, dd10, dd11, dd12],
      description: 'This beautiful baby animal doudou lovey blanket is perfect for your little baby. Crafted with soft, child-safe materials, it provides comfort and companionship for your little one.',
      features: [
        'Super soft and cuddly texture',
        'Safe for all ages',
        'Multiple animal designs to choose from',
        'Perfect size for little hands'
      ],
      careInstructions: [
        'Handwash with soft detergent',
        'Reshape',
        'Dry flat'
      ]
    }
    
    // ... other artworks remain the same
  ];

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const toggleFavorite = (artId) => {
    setFavorites((prev) =>
      prev.includes(artId) ? prev.filter((id) => id !== artId) : [...prev, artId]
    );
  };

  const handlePrevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === 0 ? selectedArt.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === selectedArt.images.length - 1 ? 0 : prev + 1
    );
  };

  const handleImageSelect = (index) => {
    setCurrentImageIndex(index);
  };

  const handleOpenModal = (art) => {
    setSelectedArt(art);
    setCurrentImageIndex(0);
    setSelectedSize(null);
    setSelectedColor(null);
    setOpenSection(null);
  };

  return (
    <motion.div 
      className="store-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header remains the same */}
      <div className="store-header">
        <motion.h1 
          variants={itemVariants}
          className="store-title"
        >
          Our Collection
        </motion.h1>
      </div>

      <motion.div 
        className="store-grid"
        layout
        variants={itemVariants}
      >
        <AnimatePresence mode="wait">
          {artworks.map((art) => (
            <motion.div
              key={art.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="store-item-card"
            >
              <div className="store-image-container">
                <img src={art.imgSrc} alt={art.name} className="store-image" />
                <motion.div 
                  className="store-overlay"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="overlay-button"
                    onClick={() => handleOpenModal(art)}
                  >
                    <ZoomIn size={20} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`overlay-button ${favorites.includes(art.id) ? 'favorite' : ''}`}
                    onClick={() => toggleFavorite(art.id)}
                  >
                    <Heart size={20} />
                  </motion.button>
                </motion.div>
              </div>

              {/* Item info remains the same */}
              <motion.div className="store-item-info">
                <h3>{art.name}</h3>
                <p className="store-item-medium">{art.medium}</p>
                <div className="price-container">
                  <span className="price">€{art.price}</span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="add-to-cart-button"
                    onClick={() => handleOpenModal(art)}
                  >
                    <ShoppingCart size={18} />
                    Select Options
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {selectedArt && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="store-modal-backdrop"
            onClick={() => setSelectedArt(null)}
          >
            <motion.div
              initial={{ scale: 0.5, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.5, y: 50 }}
              className="store-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                className="store-modal-close"
                onClick={() => setSelectedArt(null)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={24} />
              </motion.button>
              
              <div className="store-modal-image-section">
                <div className="store-modal-image-container">
                  <motion.img 
                    key={currentImageIndex}
                    src={selectedArt.images[currentImageIndex]} 
                    alt={selectedArt.name} 
                    className="store-modal-image"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                  
                  {selectedArt.images.length > 1 && (
                    <>
                      <motion.button
                        className="slider-button slider-button-left"
                        onClick={handlePrevImage}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ChevronLeft size={24} />
                      </motion.button>
                      <motion.button
                        className="slider-button slider-button-right"
                        onClick={handleNextImage}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ChevronRight size={24} />
                      </motion.button>
                    </>
                  )}
                </div>
                
                {selectedArt.images.length > 1 && (
                  <div className="image-thumbnails">
                    {selectedArt.images.map((img, index) => (
                      <motion.div
                        key={index}
                        className={`thumbnail-container ${index === currentImageIndex ? 'active' : ''}`}
                        onClick={() => handleImageSelect(index)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <img 
                          src={img} 
                          alt={`${selectedArt.name} view ${index + 1}`}
                          className="thumbnail-image"
                        />
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              <div className="store-modal-info">
                <h2>{selectedArt.name}</h2>
                <span className="store-modal-price">€{selectedArt.price}</span>
                <p className="store-modal-description">{selectedArt.description}</p>

                {/* Size Selection */}
{/* Size Selection */}
<div className="product-options">
  <h3>Available Sizes</h3>
  <div className="size-options">
    {Array.isArray(selectedArt.dimensions) 
      ? selectedArt.dimensions.map((size, index) => (
          <button
            key={index}
            className={`size-button ${selectedSize === size ? 'selected' : ''}`}
            onClick={() => setSelectedSize(size)}
          >
            {size}
          </button>
        ))
      : <button
          className={`size-button ${selectedSize === selectedArt.dimensions ? 'selected' : ''}`}
          onClick={() => setSelectedSize(selectedArt.dimensions)}
        >
          {selectedArt.dimensions}
        </button>
    }
  </div>
</div>
{/* Color Selection - only show if product has colors */}
{selectedArt.colors && (
  <div className="product-options">
    <h3>Available Colors</h3>
    <div className="color-options">
      {selectedArt.colors.map((color, index) => (
        <button
          key={index}
          className={`color-button ${selectedColor === color.name ? 'selected' : ''}`}
          onClick={() => setSelectedColor(color.name)}
          style={{ backgroundColor: color.value }}
        >
          <span className="sr-only">{color.name}</span>
          {selectedColor === color.name && (
            <motion.div
              className="color-check"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              <Check size={16} className="check-icon" />
            </motion.div>
          )}
        </button>
      ))}
    </div>
    {selectedColor && (
      <p className="selected-color-name">Selected: {selectedColor}</p>
    )}
  </div>
)}

                {/* Product Features Dropdown */}
                <div className="dropdown-section">
                  <button 
                    className="dropdown-button"
                    onClick={() => toggleSection('features')}
                  >
                    Product Features
                    {openSection === 'features' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                  <AnimatePresence>
                    {openSection === 'features' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="dropdown-content"
                      >
                        <ul className="features-list">
                          {selectedArt.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Care Instructions Dropdown */}
                <div className="dropdown-section">
                  <button 
                    className="dropdown-button"
                    onClick={() => toggleSection('care')}
                  >
                    Care Instructions
                    {openSection === 'care' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                  <AnimatePresence>
                    {openSection === 'care' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="dropdown-content"
                      >
                        <ul className="care-list">
                          {selectedArt.careInstructions.map((instruction, index) => (
                            <li key={index}>{instruction}</li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="store-modal-actions">
                <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="store-modal-buy-button"
  onClick={() => {
    const cartItem = {
      ...selectedArt,
      selectedSize,
      selectedColor: selectedArt.colors ? selectedColor : null,
      cartId: `${selectedArt.id}-${selectedSize}-${selectedColor}-${Date.now()}`
    };
    addToCart(cartItem);
    setSelectedArt(null);
    setSelectedSize(null);
    setSelectedColor(null);
  }}
  disabled={!selectedSize || (selectedArt.colors && !selectedColor)}
>
  Add to Cart
</motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Store;