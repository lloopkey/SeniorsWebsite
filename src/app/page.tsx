import Image from 'next/image';
import Link from 'next/link';
import PageLayout from '@/components/PageLayout';
import ServicesSection from '@/components/ServicesSection';
import MembershipSection from '@/components/MembershipSection';

export default function Home() {
  return (
    <PageLayout>
      {/* Hero Banner */}
      <div className="relative mb-8">
        <Image
          src="https://ext.same-assets.com/492374838/1331251667.jpeg"
          alt="Making a difference every day"
          width={1200}
          height={400}
          className="w-full h-auto"
          priority
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-6 md:p-8">
          <h1 className="text-2xl md:text-4xl font-bold text-white">
            Services for Seniors mission is to provide home support services to Saskatoon's seniors & physically-challenged which maximizes independence and safety in their homes
          </h1>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <Link
          href="/our-services"
          className="flex items-center justify-center p-6 bg-blue-600 hover:bg-blue-700 text-white text-xl font-bold rounded-lg transition-colors"
        >
          View All Services
        </Link>
        <Link
          href="/membership-and-donor-information"
          className="flex items-center justify-center p-6 bg-green-600 hover:bg-green-700 text-white text-xl font-bold rounded-lg transition-colors"
        >
          Become a Member
        </Link>
        <Link
          href="/contact"
          className="flex items-center justify-center p-6 bg-purple-600 hover:bg-purple-700 text-white text-xl font-bold rounded-lg transition-colors"
        >
          Contact Us
        </Link>
      </div>

      {/* Values Section */}
      <div className="mb-16 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <div className="bg-white p-5 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2 text-blue-700">Independence</h3>
            <p>Freedom to choose without being subject to the influence or control of others</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2 text-blue-700">Collaboration</h3>
            <p>Cultivating and honoring relationships to better serve our clients</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2 text-blue-700">Affordability</h3>
            <p>To have the means to acquire services without negatively impacting one's circumstances</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2 text-blue-700">Respect</h3>
            <p>Recognizing that all people and their needs are important</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2 text-blue-700">Excellence</h3>
            <p>Pursuing quality in all that we do</p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <ServicesSection />

      {/* Membership Section */}
      <MembershipSection />

      {/* Testimonials Section */}
      <div className="py-10">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">What Our Clients Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl font-bold">M</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Margaret W.</h3>
                <p className="text-gray-600">Senior Client</p>
              </div>
            </div>
            <p className="text-lg italic">
              "The yard care team has been amazing. I can no longer do the garden work myself, but they help me maintain my beautiful flowers. I'm so grateful for their help."
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl font-bold">J</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold">James T.</h3>
                <p className="text-gray-600">Family Member</p>
              </div>
            </div>
            <p className="text-lg italic">
              "Saskatoon Services for Seniors has been a lifesaver for my father. The house cleaning service helps him maintain his independence in his own home. Highly recommended!"
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
