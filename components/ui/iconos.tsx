import type { SVGProps } from "react";

const base = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  "aria-hidden": true as const,
};

export function IconoWhatsApp(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props} fill="currentColor">
      <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.38a9.86 9.86 0 0 0 4.73 1.2h.01c5.46 0 9.9-4.44 9.9-9.9 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.8c2.16 0 4.19.84 5.72 2.37a8.05 8.05 0 0 1 2.37 5.72c0 4.46-3.63 8.09-8.1 8.09a8.1 8.1 0 0 1-4.12-1.13l-.3-.17-3.15.82.84-3.07-.2-.31a8.03 8.03 0 0 1-1.24-4.28c0-4.46 3.63-8.09 8.1-8.09Zm-2.68 4.2c-.14 0-.37.05-.56.26-.19.21-.73.72-.73 1.75s.75 2.03.86 2.17c.1.14 1.46 2.34 3.62 3.19 1.79.71 2.16.57 2.55.53.39-.03 1.26-.51 1.44-1.01.18-.5.18-.92.13-1.01-.05-.09-.19-.14-.4-.24-.21-.11-1.26-.62-1.45-.69-.19-.07-.34-.11-.48.11-.14.21-.55.69-.67.83-.12.14-.25.16-.46.05-.21-.11-.9-.33-1.71-1.06-.63-.56-1.06-1.26-1.18-1.47-.12-.21-.01-.33.09-.43.09-.09.21-.25.32-.37.11-.12.14-.21.21-.35.07-.14.03-.26-.02-.37-.05-.11-.47-1.15-.65-1.57-.17-.41-.34-.36-.48-.36l-.4-.01Z" />
    </svg>
  );
}

export function IconoInstagram(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props} stroke="currentColor" strokeWidth={1.6}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconoFlecha(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props} stroke="currentColor" strokeWidth={1.8}>
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconoCheck(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props} stroke="currentColor" strokeWidth={2}>
      <path d="m5 13 4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconoTerapia(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props} stroke="currentColor" strokeWidth={1.6}>
      <path d="M12 21s-7-4.35-9-8.5C1.5 9 3.5 5.5 7 5.5c2 0 3.3 1.1 5 3 1.7-1.9 3-3 5-3 3.5 0 5.5 3.5 4 7-2 4.15-9 8.5-9 8.5Z" strokeLinejoin="round" />
    </svg>
  );
}

export function IconoFormacion(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props} stroke="currentColor" strokeWidth={1.6}>
      <path d="M12 4 2 9l10 5 10-5-10-5Z" strokeLinejoin="round" />
      <path d="M6 11v5c0 1.1 2.7 2.5 6 2.5s6-1.4 6-2.5v-5M22 9v5" strokeLinecap="round" />
    </svg>
  );
}

export function IconoSupervision(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props} stroke="currentColor" strokeWidth={1.6}>
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="10" r="2.5" />
      <path d="M3.5 19c.4-2.8 2.7-4.5 5.5-4.5s5.1 1.7 5.5 4.5M15 15.2c2 .3 3.6 1.7 4 3.8" strokeLinecap="round" />
    </svg>
  );
}

export function IconoHerramientas(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props} stroke="currentColor" strokeWidth={1.6}>
      <path d="M14.5 6.5a3.5 3.5 0 0 1-4.6 3.32L5 14.7 4 19l4.3-1 4.88-4.9A3.5 3.5 0 0 0 17.5 8c0-.6-.15-1.16-.4-1.66L14.5 8.9 12 6.4l2.56-2.56A3.5 3.5 0 0 0 14.5 6.5Z" strokeLinejoin="round" />
    </svg>
  );
}

export function IconoMenu(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props} stroke="currentColor" strokeWidth={1.8}>
      <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
    </svg>
  );
}

export function IconoCerrar(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props} stroke="currentColor" strokeWidth={1.8}>
      <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
    </svg>
  );
}
