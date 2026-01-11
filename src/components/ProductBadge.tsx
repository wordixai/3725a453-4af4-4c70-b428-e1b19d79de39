interface ProductBadgeProps {
  title: string;
  rank: string;
}

const LaurelLeft = () => (
  <svg width="28" height="52" viewBox="0 0 28 52" fill="none" className="text-badge-laurel">
    <path d="M20 4C20 4 22 8 20 12C18 16 14 18 14 18" stroke="currentColor" strokeWidth="2" fill="none"/>
    <ellipse cx="16" cy="8" rx="3" ry="5" fill="currentColor" transform="rotate(-25 16 8)"/>
    <path d="M18 16C18 16 20 20 18 24C16 28 12 30 12 30" stroke="currentColor" strokeWidth="2" fill="none"/>
    <ellipse cx="14" cy="20" rx="3" ry="5" fill="currentColor" transform="rotate(-15 14 20)"/>
    <path d="M16 28C16 28 18 32 16 36C14 40 10 42 10 42" stroke="currentColor" strokeWidth="2" fill="none"/>
    <ellipse cx="12" cy="32" rx="3" ry="5" fill="currentColor" transform="rotate(-5 12 32)"/>
    <path d="M14 40C14 40 16 44 14 48" stroke="currentColor" strokeWidth="2" fill="none"/>
    <ellipse cx="10" cy="44" rx="3" ry="5" fill="currentColor" transform="rotate(5 10 44)"/>
  </svg>
);

const LaurelRight = () => (
  <svg width="28" height="52" viewBox="0 0 28 52" fill="none" className="text-badge-laurel">
    <path d="M8 4C8 4 6 8 8 12C10 16 14 18 14 18" stroke="currentColor" strokeWidth="2" fill="none"/>
    <ellipse cx="12" cy="8" rx="3" ry="5" fill="currentColor" transform="rotate(25 12 8)"/>
    <path d="M10 16C10 16 8 20 10 24C12 28 16 30 16 30" stroke="currentColor" strokeWidth="2" fill="none"/>
    <ellipse cx="14" cy="20" rx="3" ry="5" fill="currentColor" transform="rotate(15 14 20)"/>
    <path d="M12 28C12 28 10 32 12 36C14 40 18 42 18 42" stroke="currentColor" strokeWidth="2" fill="none"/>
    <ellipse cx="16" cy="32" rx="3" ry="5" fill="currentColor" transform="rotate(5 16 32)"/>
    <path d="M14 40C14 40 12 44 14 48" stroke="currentColor" strokeWidth="2" fill="none"/>
    <ellipse cx="18" cy="44" rx="3" ry="5" fill="currentColor" transform="rotate(-5 18 44)"/>
  </svg>
);

const ProductBadge = ({ title, rank }: ProductBadgeProps) => {
  return (
    <div className="flex items-center gap-0">
      <LaurelLeft />
      <div className="text-center px-1">
        <p className="text-badge-orange text-sm font-medium tracking-wide">{title}</p>
        <p className="text-badge-orange text-2xl font-bold">{rank}</p>
      </div>
      <LaurelRight />
    </div>
  );
};

export default ProductBadge;
