import Link from "next/link";
import ProductCard from "./productCard/ProductCard";
import { ProductServices } from "./services/product-services";

export default async function Home() {
  let products = [];

  try {
    products = await ProductServices.getProducts();
  } catch (error) {
    console.error("Error fetching featured products:", error);
  }

  const features = [
    {
      icon: "🚚",
      title: "Free Delivery",
      description: "Enjoy convenient delivery on selected orders.",
    },
    {
      icon: "🔒",
      title: "Secure Payment",
      description: "Shop confidently with a secure checkout experience.",
    },
    {
      icon: "↩️",
      title: "Easy Returns",
      description: "Simple and hassle-free return experience.",
    },
    {
      icon: "🎧",
      title: "24/7 Support",
      description: "Our support team is always here to help.",
    },
  ];

  const categories = [
    {
      name: "Beauty",
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600",
    },
    {
      name: "Electronics",
      image:
        "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600",
    },
    {
      name: "Fashion",
      image:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600",
    },
    {
      name: "Accessories",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
    },
  ];

  return (
    <main className="min-h-screen bg-white">

      {/* HERO SECTION */}
      <section className="bg-blue-50">

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">

          {/* Hero Content */}
          <div>

            <p className="mb-4 font-semibold uppercase tracking-widest text-blue-600">
              Welcome to Vaangikkoo
            </p>

            <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-6xl">
              Discover Your
              <span className="text-blue-600"> Perfect </span>
              Shopping Experience
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-gray-600">
              Explore the latest products at amazing prices. Find everything
              you need in one place and enjoy a simple, convenient shopping
              experience.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                href="/products"
                className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Shop Now →
              </Link>

              <Link
                href="#featuredproducts"
                className="rounded-lg border border-gray-300 px-8 py-3 font-semibold text-gray-800 transition hover:bg-white"
              >
                Featured Products
              </Link>

            </div>

            {/* Statistics */}
            <div className="mt-10 flex flex-wrap gap-8 sm:gap-12">

              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  1000+
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Happy Customers
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  500+
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Products
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  24/7
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Support
                </p>
              </div>

            </div>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center">

            <img
              src="https://images.unsplash.com/photo-1607082349566-187342175e2f?w=900"
              alt="Online shopping"
              className="h-80 w-full max-w-lg rounded-3xl object-cover shadow-xl md:h-[450px]"
            />

          </div>

        </div>
      </section>


      {/* FEATURES SECTION */}
      <section className="mx-auto max-w-7xl px-6 py-12">

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">

          {features.map((feature, index) => (

            <div
              key={index}
              className="rounded-xl border border-gray-200 bg-white p-6 text-center transition hover:-translate-y-1 hover:shadow-lg"
            >

              <div className="mb-3 text-4xl">
                {feature.icon}
              </div>

              <h3 className="font-bold text-gray-800">
                {feature.title}
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                {feature.description}
              </p>

            </div>

          ))}

        </div>
      </section>


      {/* CATEGORY SECTION */}
      <section className="bg-gray-50 py-16">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-10 text-center">

            <p className="font-semibold text-blue-600">
              EXPLORE
            </p>

            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              Shop By Category
            </h2>

            <p className="mt-3 text-gray-500">
              Find products that match your style.
            </p>

          </div>

          <div className="grid grid-cols-2 gap-5 md:grid-cols-4">

            {categories.map((category) => (

              <Link
                href="/products"
                key={category.name}
                className="group relative h-48 overflow-hidden rounded-2xl md:h-64"
              >

                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 flex items-center justify-center bg-black/40 transition group-hover:bg-black/50">

                  <h3 className="text-xl font-bold text-white md:text-2xl">
                    {category.name}
                  </h3>

                </div>

              </Link>

            ))}

          </div>

        </div>
      </section>


      {/* FEATURED PRODUCTS SECTION */}
      <section className="mx-auto max-w-7xl scroll-mt-24 px-6 py-16" id="featuredproducts">

        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">

          <div>

            <p className="font-semibold text-blue-600">
              OUR COLLECTION
            </p>

            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              Featured Products
            </h2>

            <p className="mt-2 text-gray-500">
              Discover our popular products.
            </p>

          </div>

          <Link
            href="/products"
            className="font-semibold text-blue-600 transition hover:text-blue-800"
          >
            View All Products →
          </Link>

        </div>

        {products.length === 0 ? (

          <p className="py-10 text-center text-gray-500">
            Products are currently unavailable.
          </p>

        ) : (

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {products.slice(0, 4).map((product: any) => (

              <ProductCard
                key={product.id}
                product={product}
              />

            ))}

          </div>

        )}

      </section>


      {/* PROMOTIONAL BANNER */}
      <section className="mx-auto max-w-7xl px-6 pb-16">

        <div className="rounded-3xl bg-blue-600 px-8 py-12 text-center text-white md:p-16">

          <p className="font-semibold uppercase tracking-widest text-blue-100">
            Special Shopping Experience
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-5xl">
            Upgrade Your Lifestyle Today!
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-blue-100">
            Explore our collection and discover amazing products
            for your everyday needs.
          </p>

          <Link
            href="/products"
            className="mt-8 inline-block rounded-lg bg-white px-8 py-3 font-bold text-blue-600 transition hover:bg-gray-100"
          >
            Start Shopping →
          </Link>

        </div>

      </section>

    </main>
  );
}