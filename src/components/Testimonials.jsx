
import TestimonialCard from "./TestimonialCard";

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Business Owner",
      review:
        "CreativeStudio transformed our online presence. Their creativity and professionalism exceeded our expectations.",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200"
    },
    {
      id: 2,
      name: "Michael Brown",
      role: "Startup Founder",
      review:
        "Working with CreativeStudio was an amazing experience. They delivered a beautiful and modern website.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200"
    },
    {
      id: 3,
      name: "Emily Davis",
      role: "Marketing Manager",
      review:
        "Their team understands creativity and technology. I highly recommend their services to growing businesses.",
      image:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200"
    }
  ];

  return (
    <section
      id="testimonials"
      className="section-primary px-8 py-24 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-14">
          <p className="text-accent font-semibold mb-3">
            CLIENT FEEDBACK
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            What Our Clients Say
          </h2>

          <p className="text-secondary mt-4">
            Discover what our clients think about working with us.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              role={testimonial.role}
              review={testimonial.review}
              image={testimonial.image}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;
