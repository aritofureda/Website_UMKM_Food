export default function Card({ children, className = '', ...props }) {
  return (
    <div className={`bg-white rounded-xl shadow-sm border border-neutral-100 overflow-hidden ${className}`} {...props}>
      {children}
    </div>
  );
}
