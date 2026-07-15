import { motion } from "framer-motion";

const navItems = [
  { id: "home", label: "الرئيسية" },
  { id: "menu", label: "المشروبات" },
  { id: "recipes", label: "الوصفات" },
  { id: "popular", label: "الأكثر شعبية" },
  { id: "contact", label: "تواصل" },
];

export default function Navbar({
  activeSection,
  onNavigate,
  isMenuOpen,
  onToggleMenu,
  themeDark,
  onToggleTheme,
}) {
  return (
    <header className="topbar">
      <motion.div
        className="topbar-inner"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="brand" aria-label="شعار الموقع">
          <div className="brand-mark" aria-hidden="true" />
          <div>
            <p className="brand-caption">ركن التحلية</p>
            <strong className="brand-title">رفيف الكافيه</strong>
          </div>
        </div>

        <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`nav-link ${activeSection === item.id ? "active" : ""}`}
              onClick={() => onNavigate(item.id)}
              aria-label={`اذهب إلى ${item.label}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="topbar-actions">
          <button
            type="button"
            className="icon-button"
            onClick={onToggleTheme}
            aria-label="تبديل الوضع"
          >
            {themeDark ? "☾" : "☀"}
          </button>

          <button
            type="button"
            className="icon-button menu-toggle"
            onClick={onToggleMenu}
            aria-label="قائمة التنقل"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </motion.div>
    </header>
  );
}
