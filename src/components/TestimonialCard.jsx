
function TestimonialCard({ name, role, review, image }) {
  return (
    <div className="theme-card p-8 rounded-2xl hover:-translate-y-2 transition duration-300">

      {/* Customer Image */}
      <img
        src={image}
        alt={name}
        className="w-16 h-16 rounded-full object-cover mb-5"
      />

      {/* Stars */}
      <div className="text-yellow-400 text-xl mb-4">
        ★★★★★
      </div>

      {/* Review */}
      <p className="text-secondary leading-relaxed mb-6">
        "{review}"
      </p>

      {/* Customer Information */}
      <h3 className="text-primary font-bold text-lg">
        {name}
      </h3>

      <p className="text-accent text-sm mt-1">
        {role}
      </p>

    </div>
  );
}

export default TestimonialCard;
