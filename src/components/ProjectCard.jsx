
function ProjectCard({ image, title, category, description }) {
  return (
    <div className="theme-card rounded-2xl overflow-hidden group">

      {/* Project Image */}
      <div className="h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

      {/* Project Information */}
      <div className="p-6">

        <p className="text-accent font-semibold text-sm mb-3">
          {category}
        </p>

        <h3 className="text-2xl font-bold text-primary mb-3">
          {title}
        </h3>

        <p className="text-secondary leading-relaxed">
          {description}
        </p>

      </div>

    </div>
  );
}

export default ProjectCard;
