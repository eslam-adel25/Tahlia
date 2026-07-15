export default function Toast({ message }) {
  return (
    <div
      className={`toast-notification ${message ? "toast-visible" : ""}`}
      role="status"
      aria-live="polite"
    >
      {message}
    </div>
  );
}
