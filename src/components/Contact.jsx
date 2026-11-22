
function Contact() {
  return (
    <section
      id="contact"
      className="section-secondary px-6 py-24 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">

        <p className="text-accent font-semibold mb-3">
          GET IN TOUCH
        </p>

        <h2 className="text-4xl font-bold mb-6">
          Let's Work Together
        </h2>

        <p className="text-secondary mb-12 max-w-xl">
          Have a creative project in mind?
          Contact us and let's create something amazing.
        </p>

        <form className="max-w-2xl space-y-6">

          <input
            type="text"
            placeholder="Your Name"
            className="theme-input w-full p-4 rounded-lg"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="theme-input w-full p-4 rounded-lg"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="theme-input w-full p-4 rounded-lg"
          />

          <button
            type="submit"
            className="theme-button px-8 py-3 rounded-lg font-semibold"
          >
            Send Message
          </button>

        </form>

        {/* GitHub Profile Button */}
        <div className="mt-10">
          <a
            href="https://github.com/REDSTAR268"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-slate-900 text-white px-7 py-3 rounded-full font-semibold hover:bg-blue-700 hover:scale-105 transition duration-300"
          >
            <span>GitHub Profile</span>
            <span>↗</span>
          </a>
        </div>

      </div>
    </section>
  );
}

export default Contact;
