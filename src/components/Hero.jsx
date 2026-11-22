
import { useState, useEffect } from "react";

// Import slideshow images
import sea1 from "../assets/images/sea1.jpg";
import sea2 from "../assets/images/sea2.jpg";
import sky1 from "../assets/images/sky1.jpg";
import sky2 from "../assets/images/sky2.jpg";
import sky3 from "../assets/images/sky3.jpg";
import space1 from "../assets/images/space1.jpg";
import space2 from "../assets/images/space2.jpg";
import space3 from "../assets/images/space3.jpg";
import space4 from "../assets/images/space4.jpg";
function Hero() {

  // Store all slideshow images
  const images = [sea1, sea2, sky1, sky2, sky3, space1, space2, space3, space4];

  // Track the current image
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatically change images every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((current) =>
        (current + 1) % images.length
      );
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  // Move to the next image
  const nextSlide = () => {
    setCurrentSlide((current) =>
      (current + 1) % images.length
    );
  };

  // Move to the previous image
  const previousSlide = () => {
    setCurrentSlide((current) =>
      (current - 1 + images.length) % images.length
    );
  };

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden min-h-[85vh]
      flex items-center px-6 md:px-10 py-20 scroll-mt-20"
    >

      {/* Background Slideshow */}
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 w-full h-full
          object-cover transition-opacity duration-1000
          ${currentSlide === index ? "opacity-100" : "opacity-0"}`}
        />
      ))}

      {/* Blue Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r
        from-[#071B49]/90 via-[#071B49]/60 to-[#071B49]/30"
      />

      {/* Hero Content */}
      <div className="relative z-10 max-w-3xl text-white">

        {/* Agency Label */}
        <p className="text-blue-300 font-semibold mb-4 tracking-widest">
          CREATIVE DIGITAL AGENCY
        </p>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          We Build
          <span className="text-blue-300">
            {" "}Digital Experiences
          </span>
        </h1>

        {/* Description */}
        <p className="text-blue-100 text-lg mt-6 max-w-xl leading-relaxed">
          We help businesses grow through creative design,
          modern technology, and powerful digital solutions.
        </p>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-8 flex-wrap">

          <a
            href="#portfolio"
            className="bg-blue-500 hover:bg-blue-400
            text-white px-8 py-4 rounded-lg font-semibold
            transition-all duration-300"
          >
            Explore Our Work
          </a>

          <a
            href="#about"
            className="border border-blue-300 text-white
            hover:bg-blue-500/30 px-8 py-4 rounded-lg
            font-semibold transition-all duration-300"
          >
            Learn More
          </a>

        </div>

      </div>

      {/* Previous and Next Buttons */}
      <div className="absolute bottom-10 right-6 md:right-12
        z-20 flex items-center gap-4">

        <button
          onClick={previousSlide}
          aria-label="Previous slide"
          className="w-11 h-11 rounded-full border border-white/60
          text-white hover:bg-blue-500 transition-all duration-300"
        >
          &#10094;
        </button>

        {/* Slide Indicators */}
        <div className="flex items-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={currentSlide === index ? "true" : undefined}
              className={`h-2 rounded-full transition-all duration-300
              ${currentSlide === index
                ? "w-8 bg-blue-400"
                : "w-2 bg-white/60 hover:bg-white"
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="w-11 h-11 rounded-full border border-white/60
          text-white hover:bg-blue-500 transition-all duration-300"
        >
          &#10095;
        </button>

      </div>

    </section>
  );
}

export default Hero;
