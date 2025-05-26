import JoinUsLink from "@/components/JoinUsLink";

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
                    <li>Establishing community awareness of our organization</li>
                    <li>Glenmawr median park improvements, including invasives removal</li>
                    <li>Environmental education, including spotted lanternfly reduction</li>
                    <li>Community events: July 4th bicycle parade & December Sinterklaus/Bootfest</li>
                    <li>Trash cleanups and more</li>
                </ul>
                <div className="flex justify-center">
                    <JoinUsLink />
                </div>
            </div>
        </main>
    );
}
