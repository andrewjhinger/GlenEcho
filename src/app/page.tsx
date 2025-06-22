import Image from "next/image";
import Link from "next/link";
import JoinUsLink from "@/components/JoinUsLink";
import DonateButton from "@/components/DonateButton";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="section-hero divider-wave">
        <div className="container">
          <div className="grid grid-2 gap-12 items-center min-h-[80vh]">
            <div className="space-y-8">
              <h1 className="text-client-green">
                Preserving Glen Echo's Natural Beauty
              </h1>
              <p className="text-lg text-charcoal leading-relaxed">
                Join us in fostering civic engagement and community involvement 
                through the enhancement and preservation of the Glen Echo neighborhood 
                and its surrounding natural spaces.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <JoinUsLink />
                <DonateButton />
              </div>
            </div>
            <div className="image-hero image-overlay">
              <Image
                src="/images/glen-echo-hero.jpg"
                alt="Glen Echo Neighborhood"
                width={600}
                height={500}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section section-alt">
        <div className="container text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-client-green">Our Mission</h2>
            <p className="text-lg text-charcoal leading-relaxed">
              Friends of Glen Echo is committed to fostering civic engagement and community 
              involvement through the enhancement and preservation of the Glen Echo neighborhood 
              and its surroundings. We celebrate our rich history while building a sustainable 
              future for generations to come.
            </p>
            <Link href="/about" className="btn btn-outline">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-client-green mb-6">What We Do</h2>
            <p className="text-lg text-charcoal max-w-3xl mx-auto leading-relaxed">
              From preserving our historic character to protecting our natural environment, 
              we work together to make Glen Echo a thriving community.
            </p>
          </div>
          
          <div className="grid grid-3 gap-8">
            <div className="card text-center">
              <h3 className="text-client-green mb-4">Rich History</h3>
              <p className="text-charcoal leading-relaxed mb-6">
                Discover the fascinating story of Glen Echo, from its early settlement 
                to its role in Columbus's development and growth.
              </p>
              <Link href="/history" className="btn btn-outline">
                Explore Our History
              </Link>
            </div>

            <div className="card text-center">
              <h3 className="text-client-green mb-4">Community Action</h3>
              <p className="text-charcoal leading-relaxed mb-6">
                Join your neighbors in projects that strengthen our community 
                and preserve our unique natural environment.
              </p>
              <Link href="/get-involved" className="btn btn-outline">
                Get Involved
              </Link>
            </div>

            <div className="card text-center">
              <h3 className="text-client-green mb-4">Upcoming Events</h3>
              <p className="text-charcoal leading-relaxed mb-6">
                From seasonal celebrations to volunteer opportunities, 
                there's always something happening in Glen Echo.
              </p>
              <Link href="/events" className="btn btn-outline">
                View Events
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Priorities Section */}
      <section className="section section-alt divider-slope">
        <div className="container">
          <div className="grid grid-2 gap-12 items-center">
            <div className="image-hero image-overlay order-2 md:order-1">
              <Image
                src="/images/glen-echo-hero.jpg"
                alt="Glen Echo Ravine"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="space-y-8 order-1 md:order-2">
              <h2 className="text-client-green">Our Priorities</h2>
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-client-green text-xl">Environmental Stewardship</h3>
                  <p className="text-charcoal leading-relaxed">
                    Protecting our ravines, native ecosystems, and green spaces 
                    that make Glen Echo unique.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-client-green text-xl">Historic Preservation</h3>
                  <p className="text-charcoal leading-relaxed">
                    Maintaining the architectural character and cultural heritage 
                    that defines our neighborhood.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-client-green text-xl">Community Engagement</h3>
                  <p className="text-charcoal leading-relaxed">
                    Bringing neighbors together through events, projects, 
                    and shared stewardship of our community.
                  </p>
                </div>
              </div>
              <Link href="/priorities" className="btn btn-secondary">
                Learn About Our Priorities
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section">
        <div className="container">
          <div className="card text-center max-w-4xl mx-auto">
            <h2 className="text-client-green mb-6">Join Our Community</h2>
            <p className="text-lg text-charcoal leading-relaxed mb-8">
              Whether you're a longtime resident or new to the neighborhood, 
              there are many ways to get involved and help preserve what makes 
              Glen Echo special.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <JoinUsLink />
              <Link href="/get-involved" className="btn btn-outline">
                Ways to Help
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
