export default function Header() {
  return (
    <header className="fixed  left-1/2 transform -translate-x-1/2 z-50 w-3/4 max-w-4xl">
      <div className="bg-white/60 backdrop-blur-lg rounded-b-full px-12 py-6 shadow-lg border border-white/30">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-3 mb-2">
            <img
              src="/images/logo/logo.jpg"
              alt="NU Fencing"
              className="h-12 w-auto object-contain"
            />
            <div className="text-2xl font-bold text-blue-700 heading">
              NU Fencing
            </div>
          </div>
          <nav className="mt-2 flex gap-6 text-gray-700">
            <a
              href="#about"
              className="hover:text-blue-500 transition-colors duration-200"
            >
              About
            </a>
            <a
              href="#tournament"
              className="hover:text-blue-500 transition-colors duration-200"
            >
              Tournament
            </a>
            <a
              href="#social"
              className="hover:text-blue-500 transition-colors duration-200"
            >
              Community
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
