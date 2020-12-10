import { keyframes, css } from "styled-components";

export const colors = {
  brandDarker: "#111133",
  brandDark: "#222266",
  brand: "#333399",
  brandBright: "#d6d7eb",
  brandLight: "#f3f3f7",
  brandLighter: "#fafafc",
  lightest: "#ffffff",
  darkest: "#414058",
  text: "#333333",
  textMild: "#555555",
  textLight: "#72718a",
  textLighter: "#aaaaaa",
  lilac: `#6565b3`,
  accent: `#ff8138`,
  error: `#ec1818`,
  lemon: `#ffac37`,
};

export const badgeThemes = {
  BUILDWITHGATSBY: {
    level: 1,
    backgroundTheme: colors.brand,
    textTheme: colors.lemon,
  },
  HOLYBUCKETS: {
    level: 2,
    backgroundTheme: colors.lemon,
    textTheme: colors.brandDark,
  },
};

export const spacing = {
  "3xs": 2,
  "2xs": 4,
  xs: 8,
  sm: 12,
  md: 16,
  lg: 24,
  xl: 32,
  "2xl": 40,
  "3xl": 48,
};

export const breakpoints = {
  mobile: 400,
  phablet: 550,
  tablet: 750,
  desktop: 1000,
  hd: 1300,
};

export const radius = {
  default: 2,
  large: 4,
};

export const defaultFontStack = [
  "-apple-system",
  "BlinkMacSystemFont",
  "Segoe UI",
  "Roboto",
  "Oxygen",
  "Ubuntu",
  "Cantarell",
  "Open Sans",
  "Helvetica Neue",
  "sans-serif",
].join();

const monospaceFontStack = [
  `Space Mono`,
  `SFMono-Regular`,
  `Menlo`,
  `Monaco`,
  `Consolas`,
  `Liberation Mono`,
  `Courier New`,
  `monospace`,
].join();

export const fonts = {
  body: defaultFontStack,
  heading: `Futura PT, ${defaultFontStack}`,
  monospace: monospaceFontStack,
};

export const dimensions = {
  headerHeight: "60px",
  cartWidthDesktop: "400px",
  contributorAreaWidth: {
    closedDesktop: "60px",
    openDesktop: "340px",
    openHd: "420px",
  },
  contributorAreaBarHeight: "50px",
  pictureBrowserAction: {
    widthDesktop: "200px",
    heightMobile: "80px",
  },
};

export const scrollbarStyles = {
  WebkitOverflowScrolling: `touch`,
  "&::-webkit-scrollbar": { width: `6px`, height: `6px` },
  "&::-webkit-scrollbar-thumb": { background: colors.brandBright },
  "&::-webkit-scrollbar-thumb:hover": { background: colors.lilac },
  "&::-webkit-scrollbar-track": { background: colors.brandLight },
};

const simpleEntry = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
`;

const deadSimpleEntry = keyframes`
  from {
    opacity: .25;
  }
`;

export const animations = {
  simpleEntry: css`
    ${simpleEntry} .75s ease forwards
  `,
  deadSimpleEntry: css`
    ${deadSimpleEntry} .5s ease forwards
  `,
};

export const debounce = (delay: number, fn: Function) => {
  let timeout: number | null;

  return function (...args: any) {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      fn(...args);
      timeout = null;
    }, delay);
  };
};

export const removeCareInstructions = (desc: string) =>
  desc
    .split(/Care Instructions/)
    .slice(0, 1)
    .join("");

export const cutDescriptionShort = (desc: string, limit: number) => {
  if (desc.length > limit) {
    return `${desc.slice(0, limit).trim()}...`;
  }

  return desc;
};
