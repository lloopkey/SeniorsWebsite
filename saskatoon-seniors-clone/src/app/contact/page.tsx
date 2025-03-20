import Link from 'next/link';
import PageLayout from '@/components/PageLayout';
import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <PageLayout>
      <div className="mb-2">
        <Link href="/" className="text-blue-600 hover:underline">Home</Link> » Contact
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h1 className="text-2xl font-medium mb-4">Comments or questions are welcome.</h1>
          <ContactForm />
        </div>

        <div>
          <div className="bg-gray-50 p-4 rounded-md mb-6">
            <h2 className="text-xl font-medium mb-2">Office Hours:</h2>
            <p className="mb-4">
              9:00-5:00 Monday to Friday. We are closed over lunch and all statutory holidays.
            </p>

            <h2 className="text-xl font-medium mb-2">We are located at:</h2>
            <address className="not-italic">
              Office 103 Clinkskill Manor<br />
              115 – 19th Street East<br />
              Saskatoon, SK<br />
              S7K 7Y8<br />
              Phone: (306) 668 2762<br />
              Fax: (306) 668 2559<br />
              Email: <a href="mailto:ssfs@saskseniors.ca" className="text-blue-600 hover:underline">ssfs@saskseniors.ca</a>
            </address>
          </div>

          <div className="w-full h-72 bg-gray-200 rounded-md overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2450.689671124188!2d-106.659148!3d52.1273896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5304f6d3a37dd06f%3A0x2d0370a9be422c93!2sSaskatoon%20Services%20For%20Seniors!5e0!3m2!1sen!2sca!4v1711408321789!5m2!1sen!2sca"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
