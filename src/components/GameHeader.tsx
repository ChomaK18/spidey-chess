type GameHeaderProps = { score: number }

export function GameHeader({ score }: GameHeaderProps) {
  return (
    <header className="topbar">
      <div className="brand-mark" aria-hidden="true">🕷️</div>
      <div className="brand-copy">
        <span className="eyebrow">PAJĘCZY TRENING</span>
        <h1>Szachowi bohaterowie</h1>
      </div>
      <div className="score-badge" aria-label={`Zdobyte punkty: ${score}`}>
        <span aria-hidden="true">⭐</span> {score}
      </div>
    </header>
  )
}
