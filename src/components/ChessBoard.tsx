import { BOARD_SIZE, type Challenge, type Position } from '../game/types'
import { getBoardPositions, samePosition } from '../game/movement'
import './ChessBoard.css'

type ChessBoardProps = {
  challenge: Challenge
  isCorrect: boolean
  selectedSquare: Position | null
  solutionMoves: Position[]
  moveResult: 'move' | 'capture' | 'invalid' | null
  onChooseSquare: (position: Position) => void
}

export function ChessBoard({
  challenge,
  isCorrect,
  selectedSquare,
  solutionMoves,
  moveResult,
  onChooseSquare,
}: ChessBoardProps) {
  return (
    <div className="board-frame">
      <fieldset className="board-lock" disabled={isCorrect}>
        <div
          className="board"
          role="group"
          aria-label="Plansza z figurą i złoczyńcami"
          aria-disabled={isCorrect}
        >
          {getBoardPositions().map((position) => {
            const isPlayer = samePosition(position, challenge.position)
            const enemy = challenge.enemies.find((candidate) =>
              samePosition(candidate.position, position),
            )
            const squareColor = (position.row + position.col) % 2 === 0 ? 'light' : 'dark'
            const squareLabel = `Rząd ${BOARD_SIZE - position.row}, kolumna ${position.col + 1}`
            const isSelected = selectedSquare !== null && samePosition(selectedSquare, position)
            const feedbackClass = isSelected ? ` ${moveResult}` : ''
            const solutionClass = solutionMoves.some((move) => samePosition(move, position))
              ? ' solution-move'
              : ''

            if (enemy) {
              return (
                <button
                  className={`square ${squareColor} enemy-square${isCorrect ? ' answered' : ''}${feedbackClass}${solutionClass}`}
                  key={`${position.row}-${position.col}`}
                  onClick={() => onChooseSquare(position)}
                  disabled={isCorrect}
                  aria-label={`${enemy.name}, ${squareLabel}${isSelected ? `, ${moveResult}` : ''}`}
                  aria-pressed={isSelected}
                >
                  <img className="enemy-image" src={enemy.image} alt="" />
                </button>
              )
            }

            return (
              <button
                className={`square ${squareColor}${isPlayer ? ' player-square' : ''}${feedbackClass}${solutionClass}`}
                key={`${position.row}-${position.col}`}
                onClick={() => onChooseSquare(position)}
                disabled={isPlayer || isCorrect}
                aria-label={
                  isPlayer
                    ? `${challenge.piece.name}, ${squareLabel}`
                    : `Puste pole, ${squareLabel}${isSelected ? `, ${moveResult}` : ''}`
                }
                aria-pressed={isSelected}
              >
                {isPlayer && (
                  <span className="board-player" aria-hidden="true">
                    <img
                      className="player-piece-image"
                      src={challenge.piece.image}
                      alt=""
                    />
                  </span>
                )}
              </button>
            )
          })}
        </div>
      </fieldset>
    </div>
  )
}
