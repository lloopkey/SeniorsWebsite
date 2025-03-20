import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-10">
      <div className="mx-auto max-w-5xl px-4">
        <hr className="border-t border-gray-300 my-6" />

        <div className="flex flex-wrap justify-center items-center gap-8 mb-6">
          <Link href="https://www.canada.ca/en/employment-social-development/corporate/seniors.html" target="_blank" rel="noopener noreferrer">
            <Image
              src="https://ext.same-assets.com/661945931/1838570713.png"
              alt="Older Adults Moving Forward"
              width={200}
              height={100}
              className="h-auto w-36"
            />
          </Link>

          <Link href="https://www.canada.ca/en/services/benefits/housing.html" target="_blank" rel="noopener noreferrer">
            <Image
              src="https://ext.same-assets.com/1398748848/784820813.png"
              alt="Seniors Housing Information"
              width={200}
              height={100}
              className="h-auto w-36"
            />
          </Link>

          <Link href="https://www.helpagecanada.ca/" target="_blank" rel="noopener noreferrer">
            <Image
              src="https://ext.same-assets.com/1683719332/733575953.jpeg"
              alt="HelpAge Canada"
              width={200}
              height={100}
              className="h-auto w-36"
            />
          </Link>
        </div>

        <div className="bg-gray-100 py-3 text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Saskatoon Services For Seniors</p>
        </div>
      </div>
    </footer>
  );
}
