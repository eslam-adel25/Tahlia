import { motion } from "framer-motion";

export default function RecipeCardGrid({
  recipes,
  activeRecipeId,
  onSelect,
  favorites,
  onToggleFavorite,
}) {
  return (
    <section className="featured-section" id="menu">
      <div className="section-header">
        <div>
          <span className="eyebrow">اختر مشروبك</span>
          <h2>مجموعة مختارة من مشروباتنا المميزة</h2>
        </div>
        <p>انغمس في تصاميم بطاقات أنيقة، تفاعلات ناعمة، وصور تشع جودة.</p>
      </div>

      <div className="recipe-grid">
        {recipes.map((item) => {
          const active = activeRecipeId === item.id;
          const favorite = favorites.includes(item.id);
          return (
            <motion.article
              key={item.id}
              className={`recipe-card ${active ? "recipe-card-active" : ""}`}
              whileHover={{ y: -10, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 180, damping: 20 }}
            >
              <button
                type="button"
                className="recipe-card-media"
                onClick={() => onSelect(item.id)}
                aria-label={`عرض وصفة ${item.title}`}
              >
                <img src={item.img} alt={item.title} loading="lazy" />
                <div className="recipe-card-overlay" />
              </button>

              <div className="recipe-card-body">
                <div className="recipe-card-top">
                  <span className="recipe-card-badge">مشروب</span>
                  <button
                    type="button"
                    className={`favorite-icon ${favorite ? "favorite-icon-active" : ""}`}
                    onClick={(event) => {
                      event.stopPropagation();
                      onToggleFavorite(item.id);
                    }}
                    aria-label={
                      favorite
                        ? `إزالة ${item.title} من المفضلة`
                        : `إضافة ${item.title} إلى المفضلة`
                    }
                  >
                    ★
                  </button>
                </div>
                <h3>{item.title}</h3>
                <p>وصفة مُختارة بعناية لرحلة مذاقٍ غنيّة وسلسة.</p>
                <button
                  type="button"
                  className="recipe-card-button"
                  onClick={() => onSelect(item.id)}
                >
                  عرض الوصفة
                </button>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
