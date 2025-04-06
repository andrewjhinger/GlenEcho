import Image from 'next/image'; // ✅ This is the correct one

export default function About() {
  const coreValues = [
    {
      title: 'Preservation',
      description: 'Protecting and maintaining the historical integrity and natural beauty of Glen Echo.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Community',
      description: 'Fostering a strong, inclusive community where neighbors connect and support each other.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'Sustainability',
      description: 'Promoting environmentally responsible practices and sustainable development.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
    },
  ];

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
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About Us</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Dedicated to preserving and enhancing our beloved neighborhood
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-8">
            Friends of Glen Echo is dedicated to preserving the rich history,
            culture, and environment of our neighborhood while fostering community
            involvement and civic engagement. We work to maintain the unique
            character of Glen Echo while ensuring its sustainable development for
            future generations.
          </p>
        </div>
      </section>

      {/* History */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Our History</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[400px]">
              <Image
                src="/images/history.jpg"
                alt="Glen Echo Historical Photo"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="space-y-4">
              <p className="text-gray-700">
                Founded in 1995, Friends of Glen Echo emerged from a group of
                passionate residents who recognized the need to protect and enhance
                our neighborhood&apos;s unique character. What started as a small
                community initiative has grown into a thriving nonprofit
                organization that continues to make a positive impact on our
                community.
              </p>
              <p className="text-gray-700">
                Over the years, we&apos;ve successfully led numerous preservation
                projects, community events, and environmental initiatives that have
                helped maintain Glen Echo&apos;s distinctive charm while ensuring its
                sustainable development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((value) => (
              <div
                key={value.title}
                className="text-center p-6 bg-gray-50 rounded-lg"
              >
                <div className="text-blue-600 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 