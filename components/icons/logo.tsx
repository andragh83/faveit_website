import * as React from "react";

function LightBgLogo({ className }: { className?: string }) {
  return (
    <svg
      width={177}
      height={80}
      viewBox="0 0 177 80"
      fill="none"
      className={className}
    >
      <circle cx={136.119} cy={40} r={40} fill="var(--primary)" />
      <path
        d="M55.075 25.97l11.06 27.13 11.018-27.13h3.179L67.529 56.888h-2.787L51.896 25.97h3.179zM25.268 57.028l11.062-27.13 11.017 27.13h3.179L37.723 26.11h-2.787L22.09 57.028h3.178z"
        fill="var(--base-text)"
      />
      <path fill="var(--base-text)" d="M0 26.1102H20.8955V28.49826H0z" />
      <path fill="var(--base-text)" d="M0 40.14H11.9403V42.52806H0z" />
      <path
        fill="var(--base-text)"
        d="M87.1642 26.1102H108.05969999999999V28.49826H87.1642z"
      />
      <path
        fill="var(--base-text)"
        d="M87.1642 54.4684H108.05969999999999V56.856460000000006H87.1642z"
      />
      <path
        fill="var(--base-text)"
        d="M87.1642 40.14H99.1045V42.52806H87.1642z"
      />
      <path fill="#343434" d="M125.672 25.9702H146.5675V28.95527H125.672z" />
      <path
        transform="rotate(-90 134.925 57.015)"
        fill="#343434"
        d="M134.925 57.0149H151.93990000000002V59.99997H134.925z"
      />
      <circle cx={136.418} cy={34.0298} r={1.49254} fill="#343434" />
    </svg>
  );
}

export default LightBgLogo;
