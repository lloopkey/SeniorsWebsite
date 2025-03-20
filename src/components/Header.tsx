"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

// Simplified and organized menu for better accessibility
const menuCategories = [
  {
    title: 'About Us',
    items: [
      { label: 'Home', url: '/' },
      { label: 'Who we are', url: '/who-we-are' },
      { label: 'Staff and Board', url: '/staff-and-board' },
      { label: 'Partners', url: '/partners' },
      { label: 'Contact', url: '/contact' },
    ]
  },
  {
    title: 'Our Services',
    items: [
      { label: 'Housekeeping', url: '/our-services' },
      { label: 'Yard Care', url: '/yard-care' },
      { label: 'Handyman', url: '/handyman' },
      { label: 'Snow Removal', url: '/our-services/#Snow-Removal' },
      { label: 'Grocery Delivery', url: '/grocery-delivery-service' },
      { label: 'Friendly Visitor', url: '/friendly-caller-personal-aid' },
    ]
  },
  {
    title: 'Get Involved',
    items: [
      { label: 'Membership', url: '/membership-and-donor-information' },
      { label: 'Volunteer Opportunities', url: '/volunteer-opportunities' },
      { label: 'Giving to a Senior', url: '/giving-to-a-senior' },
      { label: 'Donations', url: '/donations' },
    ]
  }
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);

  const toggleCategory = (index: number) => {
    setExpandedCategory(expandedCategory === index ? null : index);
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="relative flex flex-col">
        {/* Logo and Mobile Menu Button */}
        <div className="flex items-center justify-between p-4">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="https://ext.same-assets.com/2931570665/700012736.png"
              alt="Saskatoon Services For Seniors"
              width={300}
              height={80}
              priority
              className="w-auto h-16 md:h-20"
            />
          </Link>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-3 rounded-md text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X className="h-8 w-8" />
              ) : (
                <Menu className="h-8 w-8" />
              )}
            </button>
          </div>

          {/* Desktop Call-to-action */}
          <div className="hidden md:block">
            <a
              href="tel:3066682762"
              className="bg-green-600 hover:bg-green-700 text-white text-lg font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Call Us: (306) 668-2762
            </a>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block bg-gray-100 py-4">
          <div className="container mx-auto flex justify-around">
            {menuCategories.map((category, index) => (
              <div key={index} className="relative group">
                <button
                  className="flex items-center text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors"
                  onClick={() => toggleCategory(index)}
                >
                  {category.title}
                  <ChevronDown className="ml-1 h-5 w-5" />
                </button>

                <div className="absolute z-10 w-56 mt-2 bg-white rounded-md shadow-lg invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200">
                  <div className="p-2">
                    {category.items.map((item, itemIndex) => (
                      <Link
                        key={itemIndex}
                        href={item.url}
                        className="block w-full text-left px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute z-20 w-full shadow-md">
          <nav className="p-4">
            {menuCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-4">
                <button
                  onClick={() => toggleCategory(categoryIndex)}
                  className="flex items-center justify-between w-full text-left text-xl font-bold py-2 px-3 bg-gray-100 rounded-md"
                >
                  <span>{category.title}</span>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${
                      expandedCategory === categoryIndex ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>

                {expandedCategory === categoryIndex && (
                  <div className="pl-4 mt-1 space-y-1">
                    {category.items.map((item, itemIndex) => (
                      <Link
                        key={itemIndex}
                        href={item.url}
                        className="block py-3 px-4 text-gray-800 hover:bg-gray-100 rounded-md transition-colors text-lg font-medium"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile Call-to-action */}
            <a
              href="tel:3066682762"
              className="block w-full bg-green-600 hover:bg-green-700 text-white text-xl font-bold py-4 px-6 rounded-lg mt-4 text-center transition-colors"
            >
              Call Us: (306) 668-2762
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
