import DonateButton from "@/components/DonateButton";
import JoinUsLink from "@/components/JoinUsLink";

export default function GetInvolved() {
  return (
    <main className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-3xl mx-auto space-y-16 text-gray-700 text-lg">
        <header className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get Involved</h1>
          <p className="max-w-2xl mx-auto">
            Glen Echo Ravine thrives because of neighbors and volunteers like you. There are many ways to contribute — from planning events and sharing ideas to lending a hand at cleanups or donating to sustain ongoing efforts.
          </p>
        </header>

        {/* Join Us Section */}
        <section className="bg-white border border-gray-200 p-8 rounded-lg shadow-sm text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Join Our Email List</h2>
          <p className="mb-6">
            Stay informed and help shape the future of Glen Echo. Join our email distribution to receive updates about planning meetings, neighborhood events, and volunteer opportunities.
          </p>
          <div className="flex justify-center">
            <JoinUsLink />
          </div>
        </section>

        {/* Donate Section */}
        <section className="bg-white border border-gray-200 p-8 rounded-lg shadow-sm text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Donate to Support Our Work</h2>
          <p className="mb-6">
            100% of your donation goes directly toward Glen Echo neighborhood initiatives — from ravine restoration and signage to supplies for community events.
          </p>
          <div className="flex justify-center">
            <DonateButton />
          </div>
        </section>
      </div>
    </main>
  );
}

