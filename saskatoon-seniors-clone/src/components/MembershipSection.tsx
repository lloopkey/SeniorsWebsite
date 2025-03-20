'use client';

import { useState } from 'react';

const membershipOptions = [
  {
    title: 'Individual Membership',
    price: '$25',
    period: 'per year',
    benefits: [
      'Access to all services',
      'Priority scheduling',
      'Monthly newsletter',
      'Discounted rates on services'
    ]
  },
  {
    title: 'Family Membership',
    price: '$40',
    period: 'per year',
    benefits: [
      'Access to all services for up to 2 members',
      'Priority scheduling',
      'Monthly newsletter',
      'Discounted rates on services',
      'Family support resources'
    ],
    featured: true
  },
  {
    title: 'Lifetime Membership',
    price: '$200',
    period: 'one-time payment',
    benefits: [
      'Lifelong access to all services',
      'Premium priority scheduling',
      'Monthly newsletter',
      'Maximum discounts on all services',
      'Special events access'
    ]
  }
];

export default function MembershipSection() {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handlePurchase = (index: number) => {
    setSelectedOption(index);
    alert(`Thank you for your interest in our ${membershipOptions[index].title}! This is a demo website. In a real implementation, this would take you to a payment page.`);
  };

  return (
    <div className="py-10 bg-gray-50">
      <div className="mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Become a Member</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Join our community to receive benefits and discounts on our services.
          Your membership helps support our mission to help seniors and physically challenged
          individuals maintain independence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {membershipOptions.map((option, index) => (
          <div
            key={index}
            className={`
              bg-white rounded-xl shadow-md overflow-hidden flex flex-col
              ${option.featured ? 'border-4 border-blue-500 transform md:-translate-y-4' : ''}
            `}
          >
            {option.featured && (
              <div className="bg-blue-500 text-white py-2 text-center font-bold">
                MOST POPULAR
              </div>
            )}

            <div className="p-6 flex-grow">
              <h3 className="text-2xl font-bold mb-4 text-center">{option.title}</h3>

              <div className="text-center mb-6">
                <span className="text-4xl font-bold">{option.price}</span>
                <span className="text-gray-500 ml-2">{option.period}</span>
              </div>

              <ul className="space-y-3 mb-6">
                {option.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start">
                    <svg
                      className="h-6 w-6 text-green-500 mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="px-6 pb-6">
              <button
                onClick={() => handlePurchase(index)}
                className={`
                  w-full py-4 rounded-lg text-center text-lg font-bold transition-colors
                  ${option.featured
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                  }
                `}
              >
                Purchase Membership
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center max-w-2xl mx-auto">
        <p className="text-lg">
          <span className="font-bold">Need assistance?</span> Our friendly staff is happy to help you choose
          the right membership or answer any questions you may have.
        </p>
        <div className="mt-4">
          <a
            href="tel:3066682762"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Us: (306) 668-2762
          </a>
        </div>
      </div>
    </div>
  );
}
