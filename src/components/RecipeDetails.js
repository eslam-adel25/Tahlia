import { motion } from "framer-motion";

export default function RecipeDetails({ recipe, onScrollToCard }) {
  return (
    <motion.section
      className="details-section"
      id={recipe.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="details-grid">
        <div className="details-panel">
          <div className="details-header">
            <span className="details-label">وصفة مشروب</span>
            <h2>{recipe.title}</h2>
          </div>

          <div className="details-summary">
            <div className="info-card">
              <strong>وقت التحضير</strong>
              <span>5 دقائق</span>
            </div>
            <div className="info-card">
              <strong>المستوى</strong>
              <span>سهل</span>
            </div>
            <div className="info-card">
              <strong>النوع</strong>
              <span>مشروب بارد / ساخن</span>
            </div>
          </div>

          <div className="details-copy">
            <p>
              استمتع بطريقة عرض جديدة تنقل الوصفة إلى تجربة قراءة مريحة ومترفة
              مع تركيز على المكونات والخطوات.
            </p>
          </div>

          <div className="panel-blocks">
            <div>
              <h3>المكونات</h3>
              <div className="chip-grid">
                {recipe.ingredients.map((ingredient, index) => (
                  <span key={index} className="chip">
                    {ingredient}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="details-visual-card">
          <img src={recipe.img} alt={recipe.title} />
          <div className="details-visual-tag">طعم مميز</div>
        </div>
      </div>

      <div className="timeline-block">
        <div className="timeline-header">
          <span>خطوات التحضير</span>
        </div>
        <div className="timeline-list">
          {recipe.method.map((step, index) => (
            <article key={index} className="timeline-item">
              <div className="timeline-marker">
                <span>{index + 1}</span>
              </div>
              <div className="timeline-content">
                <p>{step}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <button
        type="button"
        className="btn-secondary details-back"
        onClick={() => onScrollToCard(recipe.id)}
      >
        العودة إلى البطاقة
      </button>
    </motion.section>
  );
}
