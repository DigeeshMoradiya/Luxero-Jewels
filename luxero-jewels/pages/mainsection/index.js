import { useState } from 'react';

export default function Main() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex items-center">
      <img
        src="/assest/Frame 13.png"
        alt="Luxero Jewels Logo"
        className="w-auto h-auto"
      />
    </div>
  );
}
