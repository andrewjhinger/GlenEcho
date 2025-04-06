import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/glen-echo-hero.jpg"
            alt="Glen Echo Neighborhood"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Glen Echo
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Join us in preserving and enhancing our beloved neighborhood
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/get-involved#membership"
              className="px-6 py-3 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Join Us
            </Link>
            <Link
              href="/get-involved#donations"
              className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              Donate
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-8">
            Friends of Glen Echo is dedicated to preserving the rich history,
            culture, and environment of our neighborhood while fostering community
            involvement and civic engagement.
          </p>
          <Link
            href="/about"
            className="text-blue-600 hover:text-blue-800 font-semibold"
          >
            Learn more about our mission →
          </Link>
        </div>
      </section>
    </main>
  );
}
