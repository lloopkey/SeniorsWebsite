import Image from 'next/image';
import Link from 'next/link';
import PageLayout from '@/components/PageLayout';

export default function WhoWeAre() {
  return (
    <PageLayout>
      <div className="mb-2">
        <Link href="/" className="text-blue-600 hover:underline">Home</Link> » Who we are
      </div>

      <div className="prose max-w-none">
        <p className="text-lg mb-6">
          We are a not-for-profit, charitable organization dedicated to providing services that enable older adults (55+), seniors and physically
          challenged individuals to reside independently in their own homes for as long as possible.
        </p>

        <h1 className="text-3xl font-bold mb-6 uppercase">Types of Services</h1>

        <p className="mb-4">
          Saskatoon Services for Seniors provides trained and reliable, employees who visit clients to perform an agreed upon service.
        </p>

        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li>House Keeping & Home Support Services (see rates below)</li>
          <li>Yard Work Services</li>
          <li>Snow Removal Services</li>
          <li>Urban Camp Program</li>
          <li>Snowbird Services</li>
          <li>Eaves cleaning, window washing, painting and other odd jobs</li>
          <li>Grocery Delivery</li>
          <li>Friendly Visitor</li>
          <li>Other services (Errands, walking pets, etc.)</li>
        </ul>

        <p className="mb-8">
          We provide friendly services that meet your individual needs. Tell us what you need done and provide some direction on how you'd
          like it done; we'll do the rest!
        </p>

        <h1 className="text-3xl font-bold mb-6 uppercase">
          Why choose Saskatoon Services for Seniors?
        </h1>

        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li>Flexible services — no hourly minimums</li>
          <li>You can hire our services as frequently as needed: weekly, bi-weekly, or occasionally.</li>
          <li>Employees undergo a police security check and carry full WCB coverage for your piece of mind.</li>
          <li>When able, we will schedule the same worker.</li>
          <li>We are licensed and insured</li>
          <li>We try to keep our fees low!</li>
        </ul>

        <h1 className="text-3xl font-bold mb-6">Our history</h1>

        <div className="float-right ml-4 mb-4">
          <Image
            src="https://ext.same-assets.com/1033117812/3187957863.jpeg"
            alt="Our history"
            width={300}
            height={200}
            className="rounded-md"
          />
        </div>

        <p className="mb-4">
          Saskatoon Services for Seniors emerged in 1988 as an organization that was "born of need." No
          affordable services existed in our community to help seniors in their own homes. The Board of the
          day believed, as we do today, that in order for older adults, seniors and physically challenged
          individuals to age-in-place, they need access to affordable services like housekeeping and yard
          work.
        </p>

        <p className="mb-4">
          Initially, housekeeping and yard work were the only services offered but today we offer a range of
          specialized services that correspond to the changing needs of our aging population. Indeed, the need for different types of services
          continues to increase as our population strives to remain in their own homes for as long as possible.
        </p>

        <p className="mb-8">
          Today we pride ourselves in providing quality service options that meet the needs of our older adult, senior and physically challenged
          clients that allow them to age successfully in their own homes, wherever that may be.
        </p>

        <div className="bg-gray-100 p-4 border-l-4 border-blue-500 mb-8">
          <p className="italic">
            "We value your privacy. We will use the information you have provided to provide you with a response. We will protect your
            information and report to you immediately, in case of a breach. We will not sell or divulge your information to any other
            party."
          </p>
        </div>

        <div className="flex items-center mb-4">
          <Image
            src="https://ext.same-assets.com/38992233/929365727.png"
            alt="Accessibility symbols"
            width={100}
            height={50}
            className="mr-4"
          />
          <p className="italic">
            Respectfully in Treaty 6 Territory and the Traditional Homeland of the Métis
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
