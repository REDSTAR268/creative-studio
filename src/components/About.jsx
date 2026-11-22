
function About() {

  return (
    <section
      id="about"
      className="section-secondary px-8 py-24 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div>
          <p className="text-accent font-semibold mb-4">
            WHO WE ARE
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            We Turn Ideas Into
            <span className="text-accent"> Reality.</span>
          </h2>

          <p className="text-secondary leading-relaxed mb-6">
            CreativeStudio is a digital creative agency focused
            on helping businesses build powerful digital
            experiences through creativity, technology and
            innovation.
          </p>

          <p className="text-secondary leading-relaxed mb-8">
            Our team combines creative thinking and modern
            technology to create meaningful solutions that
            help brands grow and connect with their audiences.
          </p>

          <a
            href="#services"
            className="theme-button inline-block px-8 py-3 rounded-lg font-semibold"
          >
            Discover More
          </a>

        </div>

        {/* Right Side */}
        <div className="grid grid-cols-2 gap-5">

          <div className="theme-card p-8 rounded-2xl text-center">
            <h3 className="text-4xl font-bold text-accent">
              50+
            </h3>
            <p className="text-secondary mt-3">
              Projects Completed
            </p>
          </div>

          <div className="theme-card p-8 rounded-2xl text-center">
            <h3 className="text-4xl font-bold text-accent">
              30+
            </h3>
            <p className="text-secondary mt-3">
              Happy Clients
            </p>
          </div>

          <div className="theme-card p-8 rounded-2xl text-center">
            <h3 className="text-4xl font-bold text-accent">
              5+
            </h3>
            <p className="text-secondary mt-3">
              Years Experience
            </p>
          </div>

          <div className="theme-card p-8 rounded-2xl text-center">
            <h3 className="text-4xl font-bold text-accent">
              100%
            </h3>
            <p className="text-secondary mt-3">
              Creative Passion
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
