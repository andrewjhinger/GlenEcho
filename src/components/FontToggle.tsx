'use client';

import { useState, useEffect } from 'react';

interface FontPairing {
  id: number;
  name: string;
  heading: string;
  body: string;
  className: string;
}

const fontPairings: FontPairing[] = [
  {
    id: 1,
    name: 'Playfair + Inter',
    heading: 'Playfair Display',
    body: 'Inter',
    className: 'font-pairing-1'
  },
  {
    id: 2,
    name: 'Libre Baskerville + Instrument Sans',
    heading: 'Libre Baskerville',
    body: 'Instrument Sans',
    className: 'font-pairing-2'
  },
  {
    id: 3,
    name: 'Inknut Antiqua + DM Sans',
    heading: 'Inknut Antiqua',
    body: 'DM Sans',
    className: 'font-pairing-3'
  },
  {
    id: 4,
    name: 'Fraunces + DM Sans',
    heading: 'Fraunces',
    body: 'DM Sans',
    className: 'font-pairing-4'
  },
  {
    id: 5,
    name: 'Fraunces + Epilogue',
    heading: 'Fraunces',
    body: 'Epilogue',
    className: 'font-pairing-5'
  }
];

export default function FontToggle() {
  const [currentPairing, setCurrentPairing] = useState(0);
  const [showInfo, setShowInfo] = useState(true);

  useEffect(() => {
    // Apply the font pairing class to the body
    const body = document.body;
    
    // Remove all existing font pairing classes
    fontPairings.forEach(pairing => {
      body.classList.remove(pairing.className);
    });
    
    // Add the current font pairing class
    body.classList.add(fontPairings[currentPairing].className);
  }, [currentPairing]);

  const nextPairing = () => {
    setCurrentPairing((prev) => (prev + 1) % fontPairings.length);
  };

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  const currentFont = fontPairings[currentPairing];

  return (
    <>
      <button
        onClick={nextPairing}
        className="font-toggle"
        title="Click to cycle through font pairings"
      >
        Font {currentFont.id}/5
      </button>
      
      {showInfo && (
        <div className="font-info">
          <div className="mb-2">
            <strong>Current Pairing:</strong>
          </div>
          <div className="mb-1">
            <strong>Headings:</strong> {currentFont.heading}
          </div>
          <div className="mb-2">
            <strong>Body:</strong> {currentFont.body}
          </div>
          <button
            onClick={toggleInfo}
            className="text-xs underline text-client-teal hover:text-client-green"
          >
            Hide Info
          </button>
        </div>
      )}
      
      {!showInfo && (
        <button
          onClick={toggleInfo}
          className="font-info text-xs"
          style={{ padding: '0.5rem', top: '140px' }}
        >
          Show Font Info
        </button>
      )}
    </>
  );
} 