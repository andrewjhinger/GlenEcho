'use client';

export default function DonateButton() {
    const zeffyUrl = 'https://www.zeffy.com/en-US/donation-form/donate-to-make-a-difference-16104';

    return (
        <a
            href={zeffyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-colors"
        >
            Donate Now
        </a>
    );
}
