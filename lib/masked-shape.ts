import type { CSSProperties } from "react";

export type NotchCorner = "top-right" | "top-left" | "bottom-right" | "bottom-left";

/**
 * Builds an SVG path for a rounded rectangle with one corner replaced by a
 * rounded "ear" notch (the shape used by the hero image cutout), placed on
 * the requested corner.
 *
 * `marginX`/`marginY` describe, for the base top-right notch, how far the
 * inward step sits from the right edge and from the top edge respectively.
 * Other corners are derived by mirroring these coordinates, toggling the
 * SVG arc sweep flag whenever a single axis is mirrored (mirroring both
 * axes — i.e. the diagonally opposite corner — leaves the sweep flags
 * unchanged, since a point reflection preserves arc chirality).
 */
export function buildNotchPath(
  corner: NotchCorner,
  width: number,
  height: number,
  radius: number,
  marginX: number,
  marginY: number,
): string {
  const notchX = width - marginX;
  const notchY = marginY;

  type Cmd =
    | ["M", number, number]
    | ["H" | "V", number]
    | ["A", number, number, number, number, number, number, number]
    | ["Z"];

  const base: Cmd[] = [
    ["M", radius, 0],
    ["H", notchX - radius],
    ["A", radius, radius, 0, 0, 1, notchX, radius],
    ["V", notchY - radius],
    ["A", radius, radius, 0, 0, 0, notchX + radius, notchY],
    ["H", width - radius],
    ["A", radius, radius, 0, 0, 1, width, notchY + radius],
    ["V", height - radius],
    ["A", radius, radius, 0, 0, 1, width - radius, height],
    ["H", radius],
    ["A", radius, radius, 0, 0, 1, 0, height - radius],
    ["V", radius],
    ["A", radius, radius, 0, 0, 1, radius, 0],
    ["Z"],
  ];

  const flipX = corner === "top-left" || corner === "bottom-left";
  const flipY = corner === "bottom-right" || corner === "bottom-left";
  const toggleSweep = flipX !== flipY;

  const mapX = (x: number) => (flipX ? width - x : x);
  const mapY = (y: number) => (flipY ? height - y : y);

  return base
    .map((cmd) => {
      if (cmd[0] === "Z") return "Z";
      if (cmd[0] === "M") return `M${mapX(cmd[1])} ${mapY(cmd[2])}`;
      if (cmd[0] === "H") return `H${mapX(cmd[1])}`;
      if (cmd[0] === "V") return `V${mapY(cmd[1])}`;
      // Arc: ["A", rx, ry, xRot, largeArc, sweep, x, y]
      const [, rx, ry, xRot, largeArc, sweep, x, y] = cmd as [
        "A",
        number,
        number,
        number,
        number,
        number,
        number,
        number,
      ];
      const finalSweep = toggleSweep ? (sweep === 1 ? 0 : 1) : sweep;
      return `A${rx} ${ry} ${xRot} ${largeArc} ${finalSweep} ${mapX(x)} ${mapY(y)}`;
    })
    .join(" ");
}

/** CSS to clip an element to an arbitrary SVG path via `mask-image`, sized to fill its box. */
export function maskedShapeStyle(
  path: string,
  width: number,
  height: number,
): CSSProperties {
  const svgString = `data:image/svg+xml,%3Csvg width='${width}' height='${height}' viewBox='0 0 ${width} ${height}' preserveAspectRatio='none' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fillRule='evenodd' clipRule='evenodd' d='${path}' fill='%23D9D9D9'/%3E%3C/svg%3E%0A`;

  return {
    aspectRatio: `${width}/${height}`,
    maskImage: `url("${svgString}")`,
    WebkitMaskImage: `url("${svgString}")`,
    maskRepeat: "no-repeat",
    WebkitMaskRepeat: "no-repeat",
    maskSize: "100% 100%",
    WebkitMaskSize: "100% 100%",
    width: "100%",
    maxWidth: "100%",
    margin: "0 auto",
  } as CSSProperties;
}
