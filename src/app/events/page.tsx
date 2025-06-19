'use client';

import Link from 'next/link';

interface Event {
  id: string;
  title: string;
  description?: string;
  date: string;
  time: string;
  status: 'confirmed' | 'tbd';
  signUpLink?: string;
  flyerLink?: string;
  note?: string;
  additionalInfo?: string;
}

const events: Event[] = [
  {
    id: 'july4-2025',
    title: 'July 4th Breakfast & Bike Parade',
    description: 'Join us for our annual Independence Day celebration with breakfast and a community bike parade through the neighborhood.',
    date: 'July 4, 2025',
    time: '9:00 AM – 11:00 AM',
    status: 'confirmed',
    signUpLink: 'https://tinyurl.com/glen-echo-july-4',
    flyerLink: '/images/july4-front.pdf',
    additionalInfo: 'Bike Parade Lineup: 8:45 AM'
  },
  {
    id: 'invasives-removal',
    title: 'Invasives Removal Event',
    description: 'Help preserve our local ecosystem by removing invasive plant species from Glen Echo Park and surrounding areas.',
    date: 'TBD',
    time: 'TBD',
    status: 'tbd',
    note: 'Stay tuned for more information.'
  },
  {
    id: 'trash-pickup',
    title: 'Trash Pickup in Glen Echo Park',
    description: 'Community volunteer event to help keep our beautiful park clean and maintained for everyone to enjoy.',
    date: 'TBD',
    time: 'TBD',
    status: 'tbd',
    note: 'Details coming soon.'
  },
  {
    id: 'sinterclaus-bootfest',
    title: 'Sinterclaus/Bootfest',
    description: 'Annual winter celebration bringing the community together for festive fun and holiday cheer.',
    date: 'TBD',
    time: 'TBD',
    status: 'tbd',
    note: 'Check back later for schedule and sign-up.'
  }
];

function EventCard({ event }: { event: Event }) {
  const isConfirmed = event.status === 'confirmed';
  
  return (
    <div className={`bg-white rounded-lg shadow-md border-l-4 ${
      isConfirmed ? 'border-l-green-500' : 'border-l-yellow-500'
    } p-6 hover:shadow-lg transition-shadow`}>
      {/* Status Badge */}
      <div className="flex items-start justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-900 pr-4">
          {event.title}
        </h2>
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
          isConfirmed 
            ? 'bg-green-100 text-green-800' 
            : 'bg-yellow-100 text-yellow-800'
        }`}>
          {isConfirmed ? 'Confirmed' : 'TBD'}
        </span>
      </div>

      {/* Description */}
      {event.description && (
        <p className="text-gray-600 mb-4">
          {event.description}
        </p>
      )}

      {/* Date and Time */}
      <div className="mb-4">
        <div className="flex items-center text-gray-700 mb-2">
          <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="font-medium">Date:</span>
          <span className="ml-2">{event.date}</span>
        </div>
        <div className="flex items-center text-gray-700">
          <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="font-medium">Time:</span>
          <span className="ml-2">{event.time}</span>
        </div>
      </div>

      {/* Additional Info */}
      {event.additionalInfo && (
        <div className="mb-4 p-3 bg-blue-50 rounded-md">
          <p className="text-blue-800 text-sm font-medium">
            📍 {event.additionalInfo}
          </p>
        </div>
      )}

      {/* Note */}
      {event.note && (
        <div className="mb-4 p-3 bg-gray-50 rounded-md">
          <p className="text-gray-700 text-sm italic">
            {event.note}
          </p>
        </div>
      )}

      {/* Action Links */}
      <div className="flex flex-wrap gap-3">
        {event.signUpLink && (
          <a
            href={event.signUpLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
            Sign Up
          </a>
        )}
        
        {event.flyerLink && (
          <a
            href={event.flyerLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            View Flyer
          </a>
        )}
      </div>
    </div>
  );
}

export default function EventsPage() {
  const confirmedEvents = events.filter(event => event.status === 'confirmed');
  const tbdEvents = events.filter(event => event.status === 'tbd');

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join us for community events that bring Glen Echo together. From seasonal celebrations 
            to neighborhood improvement projects, there's something for everyone.
          </p>
        </div>

        {/* Legend */}
        <div className="mb-8 p-4 bg-white rounded-lg shadow-sm border">
          <h3 className="text-sm font-medium text-gray-900 mb-2">Event Status:</h3>
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              <span className="text-gray-600">Confirmed - Ready for sign-up</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
              <span className="text-gray-600">TBD - Details coming soon</span>
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="space-y-6">
          {/* Confirmed Events First */}
          {confirmedEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
          
          {/* TBD Events */}
          {tbdEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center p-6 bg-white rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Want to Help Organize Events?
          </h3>
          <p className="text-gray-600 mb-4">
            We're always looking for volunteers to help plan and run community events.
          </p>
          <Link
            href="/get-involved"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
          >
            Get Involved
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </main>
  );
} 