'use client';

import { useState, useEffect } from 'react';
import { Sun, Moon, ZoomIn, ZoomOut, Phone } from 'lucide-react';

export default function AccessibilityNavbar() {
  const [fontSize, setFontSize] = useState(1);
  const [highContrast, setHighContrast] = useState(false);

  useEffect(() => {
    // Apply font size to html element
    document.documentElement.style.fontSize = `${fontSize}rem`;

    // Apply high contrast mode
    if (highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }

    return () => {
      // Reset on unmount
      document.documentElement.style.fontSize = '';
      document.documentElement.classList.remove('high-contrast');
    };
  }, [fontSize, highContrast]);

  const increaseFontSize = () => {
    if (fontSize < 1.5) {
      setFontSize(prev => prev + 0.1);
    }
  };

  const decreaseFontSize = () => {
    if (fontSize > 0.8) {
      setFontSize(prev => prev - 0.1);
    }
  };

  const toggleHighContrast = () => {
    setHighContrast(prev => !prev);
  };

  return (
    <div className="bg-blue-800 text-white p-2">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="hidden md:inline font-medium">Accessibility:</span>

          <button
            onClick={increaseFontSize}
            className="p-2 rounded-md hover:bg-blue-700 transition-colors"
            aria-label="Increase text size"
            title="Increase text size"
          >
            <ZoomIn size={20} />
          </button>

          <button
            onClick={decreaseFontSize}
            className="p-2 rounded-md hover:bg-blue-700 transition-colors"
            aria-label="Decrease text size"
            title="Decrease text size"
          >
            <ZoomOut size={20} />
          </button>

          <button
            onClick={toggleHighContrast}
            className="p-2 rounded-md hover:bg-blue-700 transition-colors"
            aria-label={highContrast ? "Disable high contrast" : "Enable high contrast"}
            title={highContrast ? "Disable high contrast" : "Enable high contrast"}
          >
            {highContrast ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        <div className="flex items-center">
          <a
            href="tel:3066682762"
            className="flex items-center hover:underline"
            aria-label="Call us at (306) 668-2762"
          >
            <Phone size={16} className="mr-1" />
            <span className="font-bold">Call Us: (306) 668-2762</span>
          </a>
        </div>
      </div>
    </div>
  );
}
