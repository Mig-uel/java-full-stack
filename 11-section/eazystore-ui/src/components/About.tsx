import PageTitle from "./PageTitle";

export default function About() {
  const features = [
    {
      title: "Premium Quality",
      text: "We strive to provide every customer with the utmost satisfaction by delivering high-quality vinyl stickers crafted with care and precision.",
    },
    {
      title: "Product Innovation",
      text: "Our vinyl stickers feature a premium matte or glossy finish lamination and are made with advanced adhesive technology. Designed to withstand all weather conditions and resist scratches, our stickers are gentle enough to preserve the surface of your beloved gadgets.",
    },
    {
      title: "Excellent Service",
      text: "Customer satisfaction is our top priority, and we’re committed to delivering an exceptional shopping experience.",
    },
    {
      title: "Designs You’ll Love",
      text: "With over 1,000 designs, our collection ranges from relatable and seriously funny to delightfully quirky. And we’re just getting started—stay tuned for more exciting products and designs!",
    },
  ];

  return (
    <div className="max-w-6xl min-h-213 mx-auto px-6 py-8 font-primary">
      <PageTitle title="About Us" />
      {/* About Us Content */}
      <p className="leading-6 mb-8 text-gray-600 dark:text-lighter">
        <span className="text-lg font-semibold text-primary dark:text-light">
          Eazy Sticker
        </span>{" "}
        is an initiative by{" "}
        <span className="text-lg font-semibold text-primary dark:text-light">
          Designs by Miguel
        </span>
        , dedicated to offering you the most sought-after stickers and posters!
      </p>

      {/* Why Choose Us Section */}
      <h2 className="text-2xl leading-8 font-bold text-primary dark:text-light mb-6">
        Why Choose Us?
      </h2>

      {/* Features */}
      <div className="space-y-8">
        {features.map((feature) => (
          <div key={feature.title}>
            <h3 className="text-lg font-semibold text-primary dark:text-light mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 dark:text-lighter">{feature.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
