'use client';

// Local lightweight Card primitives so we don't rely on shadcn/ui yet
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

function Card({ className = "", children, ...props }: CardProps) {
  return (
    <div
      {...props}
      className={`rounded-2xl border shadow-sm bg-white ${className}`.trim()}
    >
      {children}
    </div>
  );
}

function CardContent({
  children,
  className = ""
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}

interface Product {
  name: string;
  img: string;
  url: string;
}

const products: Product[] = [
  {
    name: "Glen Echo Moon Phases",
    img: "https://dynamic.bonfireassets.com/thumb/design-image/5585bef8-4382-4771-82bb-54bad2ab7af8/7329f207-b69c-4f7e-8322-9f628fd81358/900/",
    url: "https://www.bonfire.com/glen-echo-moon-phases/?productType=bacf6cd6-b53d-469c-ab96-02afe5b15f71",
  },
  {
    name: "Friends of Glen Echo - Butter Yellow",
    img: "https://dynamic.bonfireassets.com/thumb/design-image/ad09ccc4-64cc-4058-8a23-78b3ef018602/34b258ab-4e51-4a67-8274-61ffac4534c0/900/",
    url: "https://www.bonfire.com/friends-of-glen-echo-butter-yellow/?productType=bacf6cd6-b53d-469c-ab96-02afe5b15f71",
  },
  {
    name: "Glen Echo Script",
    img: "https://dynamic.bonfireassets.com/thumb/design-image/f7a73ce5-6ea1-420b-95ba-be189e764070/77323c84-2672-462a-8c8f-886cc0db5ea3/900/",
    url: "https://www.bonfire.com/columbus-ravines-1/?productType=bacf6cd6-b53d-469c-ab96-02afe5b15f71",
  },
  {
    name: "Glen Echo Stanchion",
    img: "https://dynamic.bonfireassets.com/thumb/design-image/2d95598c-ee31-4f7e-a9e0-953484098682/9d8b807d-87a1-4813-8057-9b081f8e6296/900/",
    url: "https://www.bonfire.com/glen-echo-stanchion/?productType=bacf6cd6-b53d-469c-ab96-02afe5b15f71",
  },
  {
    name: "Columbus Ravines",
    img: "https://dynamic.bonfireassets.com/thumb/design-image/2eecb5a2-1ddb-4a48-9f14-2b01feef4835/5205a469-427b-4aac-8455-556ef3ed63da/900/",
    url: "https://www.bonfire.com/columbus-ravines/?productType=bacf6cd6-b53d-469c-ab96-02afe5b15f71",
  },
  {
    name: "Friends of Glen Echo - Green & Teal",
    img: "https://dynamic.bonfireassets.com/thumb/design-image/a88835bf-1132-4e47-98ec-d89aa534bbbf/28411c04-3187-4333-b4a7-99c06f26c0f2/900/",
    url: "https://www.bonfire.com/friends-of-glen-echo-green-logo-1/?productType=bacf6cd6-b53d-469c-ab96-02afe5b15f71",
  },
];

export default function StorePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Shop</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Support Friends of Glen Echo by purchasing our community merchandise. 
            All proceeds help fund neighborhood events and initiatives.
          </p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <a
              key={product.name}
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block transform transition-transform hover:scale-105 active:scale-95"
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-64 object-contain bg-gray-50 rounded-t-2xl"
                  />
                </CardContent>
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-900">
                    {product.name}
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    Click to buy
                  </p>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
} 