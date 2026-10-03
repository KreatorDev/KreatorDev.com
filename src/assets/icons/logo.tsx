import { useId } from "react";

const LogoIcon = (props: any) => {
  const maskId = useId();
  return (
    <svg viewBox="0 0 120 120" aria-hidden="true" {...props}>
      <defs>
        <mask id={maskId} maskUnits="userSpaceOnUse" x="0" y="0" width="120" height="120">
          <rect width="120" height="120" fill="#FFFFFF" />
          <g transform="translate(60 60) scale(1.1) translate(-60 -60)">
            <rect x="41" y="38" width="12" height="45" rx="6" fill="#000000" />
            <path
              d="M74 44 56 60 74 76"
              fill="none"
              stroke="#000000"
              strokeWidth="12"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </mask>
      </defs>
      <g fill="currentColor" mask={`url(#${maskId})`}>
        <rect x="22" y="22" width="76" height="76" rx="17" />
        <rect x="22" y="22" width="76" height="76" rx="17" transform="rotate(45 60 60)" />
      </g>
    </svg>
  );
};

export default LogoIcon;
