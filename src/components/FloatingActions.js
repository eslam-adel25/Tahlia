export default function FloatingActions({ onScrollTop, onHome }) {
  return (
    <div className="floating-actions" aria-label="إجراءات سريعة">
      <button
        type="button"
        className="floating-button"
        onClick={onHome}
        aria-label="العودة للرئيسية"
      >
        الرئيسية
      </button>
      <button
        type="button"
        className="floating-button"
        onClick={onScrollTop}
        aria-label="العودة إلى الأعلى"
      >
        أعلى الصفحة
      </button>
    </div>
  );
}
