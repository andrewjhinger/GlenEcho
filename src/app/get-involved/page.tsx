'use client';

import { useState } from 'react';

export default function DonateButton() {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    const res = await fetch('/api/create-checkout-session', {
      method: 'POST',
    });

    const data = await res.json();
    window.location.href = data.url; // Redirect to Stripe
  };

  return (
    <button onClick={handleCheckout} disabled={loading}>
      {loading ? 'Redirecting...' : 'Donate $50'}
    </button>
  );
}
