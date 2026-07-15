export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="section-header">
        <span className="eyebrow">تواصل معنا</span>
        <h2>نود سماعك</h2>
        <p>للمزيد من التعاون أو الاستفسارات تواصل عبر القنوات التالية.</p>
      </div>

      <div className="contact-grid">
        <div className="contact-card">
          <div className="contact-icon" aria-hidden>
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 8v13H3V3h11"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7 21V9a2 2 0 0 1 2-2h9"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>
            <p className="contact-title">البريد الإلكتروني</p>
            <a href="mailto:Eslam.Adel2596@gmail.com">
              Eslam.Adel2596@gmail.com
            </a>
          </div>
        </div>

        <div className="contact-card">
          <div className="contact-icon" aria-hidden>
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 12.07A10 10 0 1 1 11.93 2"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22 2v6h-6"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>
            <p className="contact-title">لينكد إن</p>
            <a
              href="https://www.linkedin.com/in/eslam-adel-jadalrab-808862361"
              target="_blank"
              rel="noopener noreferrer"
            >
              /in/eslam-adel-jadalrab
            </a>
          </div>
        </div>

        <div className="contact-card">
          <div className="contact-icon" aria-hidden>
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 12a10 10 0 1 1-5.61-9.14"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22 2v6h-6"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>
            <p className="contact-title">فيسبوك</p>
            <a
              href="https://www.facebook.com/eslam20057?mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
            >
              facebook.com/eslam20057
            </a>
          </div>
        </div>

        <div className="contact-card">
          <div className="contact-icon" aria-hidden>
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 16.92V21a1 1 0 0 1-1.11 1 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2 3.11 1 1 0 0 1 3 2h4.09a1 1 0 0 1 1 .75c.12.66.29 1.3.5 1.91a1 1 0 0 1-.24 1L7.91 7.91a16 16 0 0 0 6 6l1.25-1.25a1 1 0 0 1 1-.24c.61.21 1.25.38 1.91.5a1 1 0 0 1 .75 1V22z"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>
            <p className="contact-title">هاتف</p>
            <a href="tel:+201093397961">+20 1093397961</a>
          </div>
        </div>
      </div>
    </section>
  );
}
