import heroImage from "../assets/images/background.jpeg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center text-center bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 heading">
          NU Fencing Cup
        </h1>
        <button
          onClick={() =>
            document
              .getElementById("tournament")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="px-6 py-3 bg-blue-400 text-white rounded-full text-lg shadow-md hover:bg-blue-500 transition"
        >
          Learn More
        </button>
      </div>
    </section>
  );
}
