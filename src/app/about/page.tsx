import Image from 'next/image';

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
      description: 'Promoting environmentally responsible practices and park improvements.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Mission Statement */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#003300]">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-8">
            Friends of Glen Echo is committed to fostering civic engagement and community involvement through the enhancement and preservation of the Glen Echo neighborhood and its surroundings.
          </p>
        </div>
      </section>

      {/* History */}
      <section className="py-16 px-4 bg-[#99CCCC]/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#003300]">Our History</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[400px]">
              <Image
                src="/images/1926_calumet-bridge_nhsyearbook_1926.jpg"
                alt="Glen Echo Historical Photo"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="space-y-4">
              <p className="text-gray-700">
                Founded in 2025, Friends of Glen Echo emerged from a group of passionate residents who recognized the need to bring community members together to celebrate and enhance our neighborhood's unique character.  Review our minutes and agendas below.  We look forward to connecting with you!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#003300]">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((value) => (
              <div
                key={value.title}
                className="text-center p-6 bg-[#99CCCC]/10 rounded-lg border border-[#99CCCC]/20"
              >
                <div className="text-[#003300] mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#003300]">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 