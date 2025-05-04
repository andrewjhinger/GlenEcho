export default function History() {
    return (
        <main className="min-h-screen">
            {/* Content Section */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-4xl mx-auto space-y-6 text-gray-700 text-lg">
                    <h1 className="text-4xl font-bold text-gray-900">Neighborhood History</h1>
                    <p>
                        Glen Echo Ravine, a natural feature formed by glacial activity, has played a crucial role in shaping the neighborhood and suburban development in north Columbus, Ohio. The ravine’s dramatic landscape was preserved and incorporated into the development plans by the Columbus Real Estate and Improvement Company in the early 20th century.
                    </p>
                    <p>
                        In 1909, the Northwood Park Addition was platted, preserving the Glen Echo Ravine as parkland and dedicating it for public use. The ravine became part of the City Beautiful and Parks movements that encouraged the integration of green spaces into urban environments. It was officially accepted as parkland by the City of Columbus in 1912 and remains a public park to this day.
                    </p>
                    <p>
                        The surrounding residential neighborhood grew around the ravine, with streetcar access helping to shape the suburban development. The neighborhood showcases architectural styles such as Craftsman, Bungalow, and Colonial Revival homes, developed between 1909 and the 1930s.
                    </p>
                    <p>
                        Glen Echo Park, created from the ravine’s preserved land, reflects early urban planning ideals that emphasized naturalistic beauty, healthful environments, and social benefit. The community valued the presence of the ravine as an amenity that provided both recreational opportunities and scenic beauty.
                    </p>
                    <p>
                        The ravine influenced the layout of streets and lots within the addition, promoting a curvilinear street pattern that followed the natural topography. Bridges were constructed to span the ravine and connect various sections of the neighborhood.
                    </p>
                    <p>
                        In recognition of its significance, the Glen Echo Historic District was listed in the National Register of Historic Places. It represents not only a preserved natural area within an urban setting, but also the evolution of early 20th-century suburban design and planning in Columbus.
                    </p>
                    <p className="text-sm text-gray-500">
                        Content adapted from the National Register of Historic Places nomination for Glen Echo Historic District.
                    </p>
                </div>
            </section>

            {/* Embedded Historical Images & Maps Section */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-4xl mx-auto text-gray-700 text-lg space-y-4">
                    <h2 className="text-2xl font-semibold mb-4">Historical Images & Maps</h2>
                    <a
                        href="https://glenechoravine.com/historical-images-maps/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline font-medium hover:text-blue-800"
                    >
                        Navigate to the Glen Echo Ravine Historical Archives
                    </a>

                </div>
            </section>
        </main>
    );
}
