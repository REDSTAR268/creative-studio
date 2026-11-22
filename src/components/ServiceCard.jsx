
function ServiceCard({ icon, title, description }) {
  return (
    <div className="theme-card p-8 rounded-2xl hover:-translate-y-2 transition duration-300">

      <div className="text-4xl mb-5">
        {icon}
      </div>

      <h3 className="text-2xl font-bold mb-4 text-primary">
        {title}
      </h3>

      <p className="text-secondary leading-relaxed">
        {description}
      </p>

    </div>
  );
}

export default ServiceCard;
