'use client';

export default function DonateButton() {
    const zeffyUrl = 'https://www.zeffy.com/en-US/donation-form/donate-to-make-a-difference-16104';

    return (
        <a
            href={zeffyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
        >
            Support Our Mission
        </a>
    );
}
