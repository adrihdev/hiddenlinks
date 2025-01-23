import Link from 'next/link';

export default function Hard() {
  const gridSize = 8;
  const cellSize = 100 / gridSize;

  interface LinkData {
    href: string;
    style: React.CSSProperties;
  }

  const positions = Array.from({ length: gridSize * gridSize }, (_, i) => i);
  const shuffledPositions = positions.sort(() => Math.random() - 0.5).slice(0, 15);

  const links: LinkData[] = shuffledPositions.map((pos, i) => ({
    href: i === 7 ? "/win" : "/lose",
    style: {
      position: 'absolute',
      left: `${(pos % gridSize) * cellSize + cellSize / 2 - 3}%`,
      top: `${Math.floor(pos / gridSize) * cellSize + cellSize / 2 - 3}%`,
    },
  }));

  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <div
        className="absolute top-0 bottom-0 z-[-2] min-h-screen w-full bg-gray-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(239,68,68,0.2),rgba(255,255,255,0))]"
      ></div>

      {links.map((link, i) => (
        <Link
          key={i}
          href={link.href}
          style={link.style}
          className="w-6 h-6 bg-red-500 bg-opacity-20 rounded-full hover:bg-opacity-50 transition-colors duration-300 absolute"
        ></Link>
      ))}
    </main>
  );
}
