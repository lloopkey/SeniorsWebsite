import ServiceCard from './ServiceCard';

const services = [
  {
    title: 'Housekeeping',
    description: 'Professional cleaning services to help maintain a tidy and safe home environment.',
    imageSrc: 'https://ext.same-assets.com/3291232540/4248749872.jpeg',
    imageAlt: 'Housekeeping Service',
    linkUrl: '/our-services/#Housekeeping',
    hasPurchaseButton: true
  },
  {
    title: 'Yard Care',
    description: 'Let us help make your yard inviting by planting and maintaining your garden and flowers.',
    imageSrc: 'https://ext.same-assets.com/351469976/4234514579.jpeg',
    imageAlt: 'Yard Care Service',
    linkUrl: '/yard-care',
    hasPurchaseButton: true
  },
  {
    title: 'Handyman',
    description: 'Reliable handyman services for small repairs and home maintenance projects.',
    imageSrc: 'https://ext.same-assets.com/3291232540/4248749872.jpeg',
    imageAlt: 'Handyman Service',
    linkUrl: '/handyman',
    hasPurchaseButton: true
  },
  {
    title: 'Snow Removal',
    description: 'Keep your walkways and driveways clear and safe during winter months.',
    imageSrc: 'https://ext.same-assets.com/351469976/4234514579.jpeg',
    imageAlt: 'Snow Removal Service',
    linkUrl: '/our-services/#Snow-Removal',
    hasPurchaseButton: true
  },
  {
    title: 'Grocery Delivery',
    description: 'Have your groceries selected and delivered directly to your home.',
    imageSrc: 'https://ext.same-assets.com/3291232540/4248749872.jpeg',
    imageAlt: 'Grocery Delivery Service',
    linkUrl: '/grocery-delivery-service',
    hasPurchaseButton: true
  },
  {
    title: 'Friendly Visitor',
    description: 'Companionship visits to brighten your day and provide social interaction.',
    imageSrc: 'https://ext.same-assets.com/3291232540/4248749872.jpeg',
    imageAlt: 'Friendly Visitor Service',
    linkUrl: '/friendly-caller-personal-aid',
    hasPurchaseButton: true
  }
];

export default function ServicesSection() {
  return (
    <div className="py-10">
      <div className="mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Our Services</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We provide a variety of services to help seniors and physically challenged individuals
          maintain their independence and safety in their homes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            imageSrc={service.imageSrc}
            imageAlt={service.imageAlt}
            linkUrl={service.linkUrl}
            hasPurchaseButton={service.hasPurchaseButton}
          />
        ))}
      </div>
    </div>
  );
}
