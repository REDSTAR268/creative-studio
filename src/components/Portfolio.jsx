
import ProjectCard from "./ProjectCard";

function Portfolio() {
  const projects = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=900",
      title: "Orbit Explorer",
      category: "Web Development",
      description:
        "An interactive space exploration website designed to inspire curiosity about the universe."
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=900",
      title: "Cosmic Identity",
      category: "Brand Identity",
      description:
        "A creative visual identity inspired by galaxies, stars and the beauty of outer space."
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900",
      title: "Stellar Campaign",
      category: "Digital Marketing",
      description:
        "A digital campaign concept connecting technology, creativity and futuristic ideas."
    }
  ];

  return (
    <section
      id="portfolio"
      className="section-secondary px-8 py-24 scroll-mt-20"
    >

      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-14">
          <p className="text-accent font-semibold mb-3">
            OUR RECENT WORK
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Our Portfolio
          </h2>

          <p className="text-secondary mt-4">
            Explore some of our creative projects and digital experiences.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              image={project.image}
              title={project.title}
              category={project.category}
              description={project.description}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default Portfolio;
