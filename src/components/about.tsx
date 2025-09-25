export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-blue-800 mb-8 heading">
          About the Club
        </h2>

        <div className="mb-12 px-8">
          <blockquote className="text-2xl md:text-3xl font-medium italic leading-relaxed">
            "Why settle for the average sport, when you can be a Fencer!"
          </blockquote>
        </div>

        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
          <p>
            Established in 2015, NU Fencing Club is dedicated to promoting the
            art and sport of fencing among students and the community. We
            provide training, competition opportunities, and a welcoming
            environment for fencers of all skill levels.
          </p>
        </div>
      </div>
    </section>
  );
}
