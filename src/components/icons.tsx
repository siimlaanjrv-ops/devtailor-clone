import type { SVGProps } from "react";

/*
 * Line icons copied from the original site (Framer exports them as
 * translated paths on a 24×24 grid). They inherit `currentColor`.
 */

type IconProps = SVGProps<SVGSVGElement>;

function Icon({ children, strokeWidth = 2, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      {children}
    </svg>
  );
}

export const CrownIcon = (p: IconProps) => (
  <Icon {...p}>
    <path transform="translate(3 3)" d="M3.5 18h11M9 0 5 7 0 5l3 10h12l3-10-5 2Z" />
  </Icon>
);

export const GaugeIcon = (p: IconProps) => (
  <Icon {...p}>
    <path
      transform="translate(2 2)"
      d="M14.5 5.5 10 10m0 10C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10Zm0-9a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
    />
  </Icon>
);

export const DatabaseIcon = (p: IconProps) => (
  <Icon {...p}>
    <path
      transform="translate(3 2)"
      d="M18 3c0 1.657-4.029 3-9 3S0 4.657 0 3m18 0c0-1.657-4.029-3-9-3S0 1.343 0 3m18 0v14c0 1.657-4.029 3-9 3s-9-1.343-9-3V3m18 7c0 1.657-4.029 3-9 3s-9-1.343-9-3m14.1-1H14m.1 7H14"
    />
  </Icon>
);

export const MagicWandIcon = (p: IconProps) => (
  <Icon {...p}>
    <path
      transform="translate(2 2)"
      d="M16.5 10H20M5.5 5.5 3 3m11.5 2.5L17 3M5.5 14.5 3 17M0 10h3.5M10 0v3m0 13.5V20m10.439-.885-8.586-8.586-2.728-1.313 1.314 2.727 8.586 8.587a1 1 0 0 0 1.414 0 1 1 0 0 0 0-1.415Z"
    />
  </Icon>
);

export const GridIcon = (p: IconProps) => (
  <Icon {...p}>
    {[
      [3, 3],
      [3, 14],
      [14, 3],
      [14, 14],
    ].map(([x, y]) => (
      <rect key={`${x}-${y}`} x={x} y={y} width={7} height={7} rx={1} />
    ))}
  </Icon>
);

export const CodeIcon = (p: IconProps) => (
  <Icon {...p}>
    <path transform="translate(2 4)" d="M4 4 0 8l4 4m12-8 4 4-4 4M12 0 8 16" />
  </Icon>
);

export const ChartIcon = (p: IconProps) => (
  <Icon {...p}>
    <path transform="translate(3 3)" d="M0 0v18h18M4 13l5.25-5.25 3.5 3.5L18 6" />
  </Icon>
);

export const HierarchyIcon = (p: IconProps) => (
  <Icon {...p}>
    <path
      transform="translate(2 2)"
      d="M2 16v-4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v4M2 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm16 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6M8 6h4a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1Z"
    />
  </Icon>
);

export const CheckIcon = (p: IconProps) => (
  <Icon strokeWidth={1.5} {...p}>
    <path transform="translate(6 7.5)" d="M0 5.25 3.75 9l9-9" />
  </Icon>
);

export const BriefcaseIcon = (p: IconProps) => (
  <Icon strokeWidth={1.5} {...p}>
    <path d="M3.75 19.5a.75.75 0 0 1-.75-.75v-12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 .75.75v12a.75.75 0 0 1-.75.75Z" />
    <path d="M15.75 6V4.5A1.5 1.5 0 0 0 14.25 3h-4.5a1.5 1.5 0 0 0-1.5 1.5V6M3 14.25h18" />
  </Icon>
);

export const ScatterChartIcon = (p: IconProps) => (
  <Icon strokeWidth={1.5} {...p}>
    <path d="M21 19.5H3v-15" />
    <g fill="currentColor" stroke="none">
      {[
        [12.375, 13.875],
        [10.125, 8.625],
        [7.125, 15.375],
        [16.125, 10.875],
        [18.375, 7.125],
        [17.625, 15.375],
      ].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={1.125} />
      ))}
    </g>
  </Icon>
);

export const RocketIcon = (p: IconProps) => (
  <Icon strokeWidth={1.5} {...p}>
    <path d="M17.917 10.583c2.25-2.25 2.39-4.926 2.32-6.12a.75.75 0 0 0-.7-.7c-1.194-.07-3.87.069-6.12 2.32L7.5 12l4.5 4.5Z" />
    <path d="M12.75 6.75H6.97a.75.75 0 0 0-.53.219L3.22 10.19a.75.75 0 0 0 .424 1.272l3.855.538" />
    <path d="M17.25 11.25v5.78a.75.75 0 0 1-.219.529l-3.221 3.221a.75.75 0 0 1-1.272-.425L12 16.5" />
    <path d="M8.865 17.608c-.363.796-1.585 2.642-5.115 2.642 0-3.53 1.846-4.752 2.642-5.115" />
  </Icon>
);

export const ArrowUpRightIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M7 17 17 7M7 7h10v10" />
  </Icon>
);

export const ChevronDownIcon = (p: IconProps) => (
  <svg
    width={12}
    height={12}
    viewBox="0 0 18 18"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
    {...p}
  >
    <path d="M2 5.5 9 12.5 16 5.5" />
  </svg>
);
