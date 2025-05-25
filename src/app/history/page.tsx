export default function History() {
    return (
        <main className="min-h-screen">
            {/* Content Section */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-4xl mx-auto space-y-6 text-gray-700 text-lg">
                    <h1 className="text-4xl font-bold text-gray-900">Glen Echo: A Historic Columbus Neighborhood</h1>

                    <p>Nestled just four miles north of downtown Columbus, Glen Echo is more than just a neighborhood—it’s a living piece of early 20th-century history. Recognized on the National Register of Historic Places, Glen Echo stands as a beautifully preserved example of early suburban planning, reflecting the character and vision of its original developers.</p>

                    <h2 className="text-2xl font-bold text-gray-900">A Planned Community with Purpose</h2>
                    <p>Platted in 1909 and annexed to the City of Columbus by 1910, Glen Echo was one of the city’s first planned residential subdivisions. Developed by the Columbus Real Estate and Improvement Company, the neighborhood was carefully designed to harmonize with the area’s natural landscape—most notably, the Glen Echo Ravine. This picturesque ravine not only influenced the street layout but also remains a central natural feature and community treasure.</p>

                    <h2 className="text-2xl font-bold text-gray-900">Streets That Follow Nature</h2>
                    <p>Unlike the rigid grid of other urban neighborhoods, Glen Echo’s layout flows with the land. Curvilinear streets, landscaped ellipses on Glenmawr Avenue and North Fourth Street, and a mix of east-west and north-south thoroughfares create a peaceful, park-like environment. Retaining walls, tree-lined sidewalks, and stone stanchions with historic street lighting reflect the neighborhood’s enduring charm.</p>

                    <h2 className="text-2xl font-bold text-gray-900">Glen Echo Park and Ravine</h2>
                    <p>At the heart of the neighborhood lies Glen Echo Park—a 3.9-acre wooded oasis dedicated to the city in 1912. The park features the Glen Echo Run stream, stone walls, vintage bridges, and trails that highlight the ravine’s scenic beauty. The ravine itself extends to the Olentangy River and serves as both a stormwater channel and a serene retreat for residents.</p>

                    <h2 className="text-2xl font-bold text-gray-900">A Rich Architectural Legacy</h2>
                    <p>The homes of Glen Echo, built primarily between 1910 and 1923, showcase popular architectural styles of the time. Here, you’ll find:</p>
                    <ul>
                        <li>Craftsman bungalows with wide porches and handcrafted details</li>
                        <li>Tudor Revival homes featuring half-timbering and steep gables</li>
                        <li>Colonial Revival houses with classical columns and symmetrical facades</li>
                        <li>American Foursquares known for their boxy shape and efficient layout</li>
                    </ul>
                    <p>Many homes still feature original elements such as stonework, wood siding, stained glass, and historic garages tucked along alleyways. For more information and examples of architectural styles, view the gallery below.</p>

                    <h2 className="text-2xl font-bold text-gray-900">A Community Built to Last</h2>
                    <p>Glen Echo has retained its architectural character and neighborhood feel through decades of change. Sidewalks, mature trees, and consistent setbacks preserve the streetscape, while dedicated residents have maintained and restored original features, from porch columns to period-appropriate lighting.</p>

                    <p>Today, Glen Echo remains a beloved neighborhood—valued for its history, natural beauty, and close-knit community. Whether you're walking through Glen Echo Park, admiring the charming architecture, or enjoying the tree-lined streets, you’re experiencing a neighborhood that honors its past while embracing the present.</p>

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
