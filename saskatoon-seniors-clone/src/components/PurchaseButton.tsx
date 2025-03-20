'use client';

import React from 'react';

export default function PurchaseButton() {
  const handlePurchaseClick = () => {
    alert('Thank you for your interest! This is a demo website. In a real implementation, this would direct you to a booking/purchase page.');
  };

  return (
    <button
      onClick={handlePurchaseClick}
      className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition-colors self-start mt-auto"
    >
      Purchase Service
    </button>
  );
}
