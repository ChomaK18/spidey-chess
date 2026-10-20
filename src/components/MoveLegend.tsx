type MoveLegendProps = { showPossibleMoves: boolean }

export function MoveLegend({ showPossibleMoves }: MoveLegendProps) {
  return (
    <div className="move-legend" aria-label="Znaczenie kolorów">
      <span><i className="legend-dot move" />Ruch</span>
      <span><i className="legend-dot capture" />Zbicie</span>
      <span><i className="legend-dot invalid" />Nie można</span>
      {showPossibleMoves && <span><i className="legend-dot possible" />Możliwy ruch</span>}
    </div>
  )
}
