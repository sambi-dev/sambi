import { useId } from 'react';

export function Pattern({
  size = 40,
  gapX = 16,
  gapY = 8,
  pattern = [
    [0, 1, 0, 1, 1, 0, 1, 0],
    [1, 0, 1, 1, 0, 0, 0, 1],
    [0, 1, 0, 1, 1, 0, 1, 0],
    [1, 0, 1, 1, 0, 0, 0, 1],
  ],
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & {
  size?: number;
  gapX?: number;
  gapY?: number;
  pattern?: (0 | 1)[][];
}) {
  const id = useId();
  const width = pattern[0]!.length * size + (pattern[0]!.length - 1) * gapX;
  const height = pattern.length * size + (pattern.length - 1) * gapY;

  return (
    <svg aria-hidden="true" width={width} height={height} {...props}>
      <defs>
        <symbol id={`${id}-0`} width={size} height={size}>
          <rect className="fill-alternate/20" width={size} height={size} />
          <circle
            className="fill-primary/20"
            cx={size / 2}
            cy={size / 2}
            r={size * (13 / 40)}
          />
        </symbol>
        <symbol id={`${id}-1`} width={size} height={size}>
          <circle
            className="fill-primary/20"
            cx={size / 2}
            cy={size / 2}
            r={size / 2}
          />
          <rect
            className="fill-primary/20"
            width={size / 2}
            height={size / 2}
            x={size / 4}
            y={size / 4}
          />
        </symbol>
      </defs>
      {pattern.map((row, rowIndex) =>
        row.map((shape, columnIndex) => (
          <use
            key={`${rowIndex}-${columnIndex}`}
            href={`#${id}-${shape}`}
            x={columnIndex * size + columnIndex * gapX}
            y={rowIndex * size + rowIndex * gapY}
          />
        )),
      )}
    </svg>
  );
}
