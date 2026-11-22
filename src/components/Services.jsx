
import ServiceCard from "./ServiceCard";

function Services() {
  const services = [
    {
      id: 1,
      icon: "🎨",
      title: "Graphic Design",
      description: "We create beautiful visual designs that make your brand stand out."
    },
    {
      id: 2,
      icon: "💻",
      title: "Web Development",
      description: "We build modern, responsive and user-friendly websites."
    },
    {
      id: 3,
      icon: "🚀",
      title: "Digital Marketing",
      description: "We help businesses reach more people through digital strategies."
    },
    {
      id: 4,
      icon: "✨",
      title: "Brand Identity",
      description: "We build unique brand identities that people remember."
    }
  ];

  return (
    <section
      id="services"
      className="section-primary px-8 py-20 min-h-screen scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14">
          <p className="text-accent font-semibold mb-3">
            WHAT WE DO
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Our Services
          </h2>

          <p className="text-secondary mt-4">
            We provide creative solutions to help your business grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;
