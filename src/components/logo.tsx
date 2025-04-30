import type React from 'react';

export const Logo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 20"
    width="140"
    height="24"
    fill="currentColor" // Use currentColor to inherit text color
    aria-label="AgencyFlow Logo"
    {...props}
  >
    <text
      x="0"
      y="15"
      fontFamily="Arial, sans-serif"
      fontSize="18"
      fontWeight="bold"
    >
      AgencyFlow
    </text>
  </svg>
);
