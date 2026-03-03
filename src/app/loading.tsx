export default function Loading() {
  return (
    <div className="ml-12 min-h-screen flex items-center justify-center" style={{ background: 'var(--bg-base)' }}>
      <div className="flex flex-col items-center gap-4">
        <span className="font-display text-4xl text-accent-ember animate-rune-pulse select-none">
          ✦
        </span>
        <p className="font-display font-semibold uppercase tracking-[0.4em] text-xs text-primary-500">
          Loading…
        </p>
      </div>
    </div>
  );
}
