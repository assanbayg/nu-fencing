import { FaInstagram } from "react-icons/fa";
import { FaTelegram, FaTiktok } from "react-icons/fa6";

export default function Social() {
  const socialLinks = [
    {
      name: "Instagram",
      icon: <FaInstagram />,
      url: "https://instagram.com/nu_fencing",
      color: "hover:text-pink-600",
    },
    {
      name: "TikTok",
      icon: <FaTiktok />,
      url: "https://tiktok.com/@nu.fencing.club",
      color: "hover:text-blue-600",
    },
    {
      name: "Telegram",
      icon: <FaTelegram />,
      url: "https://twitter.com/nufencingclub",
      color: "hover:text-blue-400",
    },
  ];

  return (
    <section id="social" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-blue-800 mb-8 heading">
          Follow Us
        </h2>

        <p className="text-xl text-gray-700 mb-12">
          Stay updated with our latest news, events, and fencing tips
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center p-6 bg-gray-50 rounded-3xl hover:bg-gray-100 transition-all duration-300 ${social.color} group`}
            >
              <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                {social.icon}
              </div>
              <span className="font-semibold text-gray-700 group-hover:text-current">
                {social.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
