'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  linkUrl: string;
  hasPurchaseButton?: boolean;
}

export default function ServiceCard({
  title,
  description,
  imageSrc,
  imageAlt,
  linkUrl,
  hasPurchaseButton = false
}: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handlePurchaseClick = () => {
    alert('Thank you for your interest in our ' + title + ' service! This is a demo website. In a real implementation, this would take you to a booking page.');
  };

  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full transition-transform duration-200"
      style={{ transform: isHovered ? 'translateY(-5px)' : 'translateY(0)' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <Link href={linkUrl}>
          <div className="h-48 overflow-hidden">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={400}
              height={300}
              className="w-full h-full object-cover transition-transform duration-300"
              style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
            />
          </div>
        </Link>
        <div className="absolute top-0 right-0 bg-blue-500 text-white py-1 px-3 rounded-bl-lg">
          <span className="text-sm font-medium">Service</span>
        </div>
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 text-gray-800">
          <Link href={linkUrl} className="hover:text-blue-600 transition-colors">
            {title}
          </Link>
        </h3>

        <p className="text-gray-600 mb-4 flex-grow text-base">{description}</p>

        <div className="flex flex-col sm:flex-row gap-2 mt-auto">
          <Link
            href={linkUrl}
            className="text-center bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-md transition-colors font-medium text-lg"
          >
            Learn More
          </Link>

          {hasPurchaseButton && (
            <button
              onClick={handlePurchaseClick}
              className="text-center bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-md transition-colors font-medium text-lg"
            >
              Purchase Service
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
