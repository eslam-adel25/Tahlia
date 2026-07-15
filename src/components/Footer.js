export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="brand-mark footer-mark" aria-hidden="true" />
          <div>
            <strong>رفيف الكافيه</strong>
            <p>تصميم راقٍ لوصفات مشروبات عربية مميزة.</p>
          </div>
        </div>

        <div className="footer-links">
          <div>
            <p className="footer-title">روابط سريعة</p>
            <a href="#home">الرئيسية</a>
            <a href="#menu">المشروبات</a>
            <a href="#recipes">الوصفات</a>
          </div>
          <div>
            <p className="footer-title">تابعنا</p>
            <a href="#contact">تواصل</a>
            <a href="mailto:Eslam.Adel2596@gmail.com">
              Eslam.Adel2596@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className="footer-copy">© 2025 ركن التحلية. كل الحقوق محفوظة.</div>
    </footer>
  );
}
