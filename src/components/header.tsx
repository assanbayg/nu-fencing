import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop;
      setIsSticky(scrollPosition > 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header
      className={`fixed z-50 w-full md:left-1/2 md:transform md:-translate-x-1/2 md:max-w-4xl md:w-3/4`}
    >
      <div
        className={`border border-white/30 backdrop-blur-lg shadow-lg px-6 md:px-12 py-4 md:py-6 md:rounded-b-full rounded-b-2xl transition-colors duration-300 ${
          isSticky ? "bg-white/80" : "bg-white/50"
        }`}
      >
        <div className="relative flex items-center justify-between">
          {/* Mobile: hamburger left, logo centered */}
          <button
            aria-label="Open menu"
            className="block md:hidden text-2xl text-gray-700"
            onClick={toggleMenu}
          >
            <RxHamburgerMenu />
          </button>

          <div className="absolute left-1/2 -translate-x-1/2 transform flex items-center gap-3 md:hidden">
            <img
              src="/images/logo/logo.jpg"
              alt="NU Fencing"
              className="h-10 w-10 object-cover rounded-full"
            />
            <div className="text-xl md:text-2xl font-bold text-blue-700 heading">
              NU Fencing
            </div>
          </div>

          {/* Desktop spacer to balance absolute center */}
          <div className="block md:hidden w-6" />

          {/* Desktop: logo with links below */}
          <div className="hidden md:flex w-full flex-col items-center ">
            <div className="flex items-center gap-3 mb-2">
              <img
                src="/images/logo/logo.jpg"
                alt="NU Fencing"
                className="h-12 w-12 object-cover rounded-full"
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
      </div>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40">
          <div
            className="flex h-full flex-col items-center justify-center gap-6 bg-white/95 p-6 text-2xl"
            onClick={toggleMenu}
          >
            <a href="#about" className="hover:text-blue-600">
              About
            </a>
            <a href="#tournament" className="hover:text-blue-600">
              Tournament
            </a>
            <a href="#social" className="hover:text-blue-600">
              Community
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
