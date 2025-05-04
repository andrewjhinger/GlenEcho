'use client';

import { useState } from 'react';

export default function DonateButton() {
    const [loading, setLoading] = useState(false);
    const [amount, setAmount] = useState('');

    const handleCheckout = async () => {
        if (!amount || Number(amount) < 1) {
            alert('Please enter a valid amount');
            return;
        }

        setLoading(true);

        const res = await fetch('api/create-checkout-session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amount: Number(amount) }),
        });

        const data = await res.json();
        window.location.href = data.url; // Redirect to Stripe
    };

    return (
        <div className="flex flex-col sm:flex-row gap-4">
            <input
                type="number"
                min="1"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount (USD)"
                className="px-4 py-2 rounded border"
                required
            />
            <button
                onClick={handleCheckout}
                disabled={loading}
                className="px-6 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-colors"
            >
                {loading ? 'Processing...' : 'Donate Now'}
            </button>
        </div>
    );
}
