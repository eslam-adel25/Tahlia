import { motion } from "framer-motion";

export default function HeroSection({
  searchValue,
  onSearch,
  categoryFilter,
  categories,
  onCategoryChange,
  onExplore,
}) {
  return (
    <section className="hero-panel" id="home">
      <div className="hero-backdrop" />
      <div className="hero-content">
        <motion.div
          className="hero-label"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          تجربة التحلية الراقية
        </motion.div>

        <motion.h1
          className="hero-heading"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          مشروبات عربية فخمة بروح مقهى عالمي
        </motion.h1>

        <motion.p
          className="hero-copy"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          دعنا نرشدك إلى وصفات غنية، ناعمة، ومذهلة، مع تجربة استخدام مريحة
          وتقنيات عرض مدروسة تعكس جودة كل مشروب.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button
            className="btn-primary"
            type="button"
            onClick={() => onExplore("menu")}
          >
            اكتشف القائمة
          </button>
          <button
            className="btn-secondary"
            type="button"
            onClick={() => onExplore("recipes")}
          >
            اقرأ الوصفات
          </button>
        </motion.div>
      </div>

      <div className="hero-panel-side">
        <div className="hero-deco hero-deco-1" />
        <div className="hero-deco hero-deco-2" />
        <div className="hero-glass">
          <div className="hero-glass-inner">
            <span>منقوع</span>
            <span>فاخر</span>
            <span>ممتع</span>
          </div>
        </div>
      </div>

      <div className="hero-search-block">
        <label className="search-box">
          <span className="search-caption">ابحث عن وصفة</span>
          <input
            type="search"
            value={searchValue}
            onChange={(event) => onSearch(event.target.value)}
            placeholder="مثال: لاتيه، شوكولاتة، مانجو"
            aria-label="بحث عن وصفة"
          />
        </label>

        <div className="filter-pills">
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              className={`pill ${categoryFilter === category.id ? "pill-active" : ""}`}
              onClick={() => onCategoryChange(category.id)}
              aria-pressed={categoryFilter === category.id}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
