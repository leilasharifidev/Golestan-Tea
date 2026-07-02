const socialLinks = [
  { key: "gl", label: "گلستان", href: "#", type: "text", text: "GL" },
  { key: "aparat", label: "آپارات", href: "#", type: "aparat" },
  { key: "telegram", label: "تلگرام", href: "#", type: "telegram" },
  { key: "instagram", label: "اینستاگرام", href: "#", type: "instagram" },
  { key: "linkedin", label: "لینکدین", href: "#", type: "linkedin" },
  { key: "facebook", label: "فیسبوک", href: "#", type: "facebook" },
];

function SocialIcon({ type }) {
  switch (type) {
    case "aparat":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
          <circle cx="12" cy="6" r="3" />
          <circle cx="18" cy="12" r="3" />
          <circle cx="12" cy="18" r="3" />
          <circle cx="6" cy="12" r="3" />
        </svg>
      );
    case "telegram":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
          <path d="M21.8 3.4 2.7 10.9c-1 .4-1 1.8.1 2.1l4.6 1.4 1.8 5.7c.3 1 .6 1.4 1.1 1.4.4 0 .6-.2 1-.5l2.6-2.5 4.7 3.5c.9.6 1.5.3 1.8-.7l3.5-16.4c.3-1.3-.5-1.9-1.1-1.5Z" />
        </svg>
      );
    case "instagram":
      return (
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
          <rect x="3" y="9" width="4" height="12" />
          <circle cx="5" cy="4.5" r="2.5" />
          <path d="M11 9h4v2.2c.6-1.1 2-2.5 4.3-2.5 3.5 0 5.7 2.3 5.7 6.6V21h-4v-5.2c0-2-.7-3.4-2.5-3.4-1.4 0-2.2 1-2.6 1.9-.1.3-.2.7-.2 1.2V21h-4V9Z" />
        </svg>
      );
    case "facebook":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
          <path d="M14 21v-8h2.7l.4-3.2H14V7.7c0-.9.3-1.5 1.6-1.5h1.7V3.4C17 3.3 15.9 3 14.6 3 11.9 3 10 4.6 10 7.4v2.4H7V13h3v8h4Z" />
        </svg>
      );
    default:
      return null;
  }
}

const productColumns = [
  {
    title: "حبوبات گلستان",
    icon: (
      <svg
        viewBox="0 0 48 48"
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M8 20h32l-3 18a4 4 0 0 1-4 3H15a4 4 0 0 1-4-3L8 20Z" />
        <path d="M6 20h36" />
        <path d="M14 20c0-6 4-10 10-10s10 4 10 10" />
      </svg>
    ),
    items: [
      "لوبیا قرمز ممتاز",
      "لوبیا چیتی گلستان",
      "عدس کانادایی",
      "نخود زودپز کرمانشاه",
      "لوبیا سفید گلستان",
    ],
  },
  {
    title: "ادویه گلستان",
    icon: (
      <svg
        viewBox="0 0 48 48"
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M14 22a10 10 0 0 1 20 0v6a10 10 0 0 1-20 0v-6Z" />
        <path d="M24 12v-4" />
        <path d="M20 8l4-4 4 4" />
      </svg>
    ),
    items: [
      "زعفران ممتاز خراسان",
      "ادویه کاری",
      "ادویه ماست و خیار",
      "فلفل سیاه خالص",
      "زردچوبه ممتاز",
    ],
  },
  {
    title: "تی بگ گلستان",
    icon: (
      <svg
        viewBox="0 0 48 48"
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M12 18h20l-2 16a4 4 0 0 1-4 3H18a4 4 0 0 1-4-3l-2-16Z" />
        <path d="M22 18V8" />
        <circle cx="26" cy="6" r="2" />
      </svg>
    ),
    items: [
      "تی بگ بلک لاین",
      "تی بگ ارل گری",
      "دمنوش نعناع",
      "دمنوش بابونه",
      "منوش چای سبز",
    ],
  },
  {
    title: "چای گلستان",
    icon: (
      <svg
        viewBox="0 0 48 48"
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M10 22h24v8a8 8 0 0 1-8 8h-8a8 8 0 0 1-8-8v-8Z" />
        <path d="M34 24h3a4 4 0 0 1 0 8h-3" />
        <path d="M18 14c0-2 2-2 2-4s-2-2-2-4" />
        <path d="M24 14c0-2 2-2 2-4s-2-2-2-4" />
      </svg>
    ),
    items: [
      "چای ممتاز هندوستان",
      "چای ممتاز ارل گری",
      "چای سیلان عطری",
      "چای ممتاز سیلان",
      "چای صبحانه گلستان",
    ],
  },
];

export default function Footer() {
  return (
    <footer
      dir="rtl"
      className="w-full font-sans"
      style={{ fontFamily: "IRANSansLight, sans-serif" }}
    >
      {/* Social icons row */}
      <div className="bg-gray-100 py-10">
        <div className="flex justify-center items-center gap-4">
          {socialLinks.map((s) => (
            <a
              key={s.key}
              href={s.href}
              aria-label={s.label}
              className="w-12 h-12 rounded-full bg-gray-300 hover:bg-red-700 text-gray-600 hover:text-white flex items-center justify-center transition-colors duration-300"
            >
              {s.type === "text" ? (
                <span className="font-bold text-sm">{s.text}</span>
              ) : (
                <SocialIcon type={s.type} />
              )}
            </a>
          ))}
        </div>
      </div>

      {/* Red divider */}
      <div className="h-3 bg-red-700" />

      {/* Product columns */}
      <div className="bg-neutral-900 text-gray-300 py-14 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {productColumns.map((col) => (
            <div key={col.title}>
              <div className="flex flex-col items-center gap-3">
                <div className="text-gray-300">{col.icon}</div>
                <h3 className="text-white font-bold text-base pb-3 border-b border-gray-600 w-fit">
                  {col.title}
                </h3>
              </div>
              <ul className="mt-5 space-y-3">
                {col.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-gray-300 hover:text-red-500 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-500 mt-14">
          All Right Reserved Golestan Company 2022-2025
          <br />
          Design By: leila sharifi
        </p>
      </div>
    </footer>
  );
}
