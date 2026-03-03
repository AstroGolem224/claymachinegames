'use client';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export function SidebarOverlay({ isOpen, onClose }: Props) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm md:hidden"
      onClick={onClose}
      aria-hidden
    />
  );
}
