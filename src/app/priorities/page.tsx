import JoinUsLink from "@/components/DonateButton";

export default function Priorities() {
    return (
        <main className="min-h-screen bg-white py-16 px-4">
            <div className="max-w-4xl mx-auto space-y-8 text-gray-700 text-lg">
                <h1 className="text-4xl font-bold text-gray-900">Our Priorities</h1>

                <p>
                    The Glen Echo neighborhood is committed to protecting and celebrating the unique natural, historic, and cultural features of the Glen Echo Ravine. Our priorities reflect the values of stewardship, community involvement, education, and sustainable restoration.
                </p>

                <h2 className="text-2xl font-semibold mt-8">Key Areas of Focus</h2>
                <ul className="list-disc list-inside space-y-2">
                    <li>Preservation and restoration of the ravine's native habitats</li>
                    <li>Stormwater management and erosion control</li>
                    <li>Community clean-up events and ecological stewardship</li>
                    <li>Educational signage and historical interpretation</li>
                    <li>Partnerships with local schools, parks, and environmental groups</li>
                </ul>
            </div>
        </main>
    );
}
