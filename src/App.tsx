import { useState } from 'react'
import { ChallengeBanner } from './components/ChallengeBanner'
import { ChessBoard } from './components/ChessBoard'
import { GameFeedback } from './components/GameFeedback'
import { GameFooter } from './components/GameFooter'
import { GameHeader } from './components/GameHeader'
import { MoveLegend } from './components/MoveLegend'
import { createChallenge } from './game/challenges'
import { getMoves, samePosition } from './game/movement'
import type { MoveResult, Position } from './game/types'
import './App.css'

const initialMessage = 'Wybierz złoczyńcę, do którego może ruszyć figura!'

function App() {
  const [challenge, setChallenge] = useState(createChallenge)
  const [score, setScore] = useState(0)
  const [message, setMessage] = useState(initialMessage)
  const [isCorrect, setIsCorrect] = useState(false)
  const [selectedSquare, setSelectedSquare] = useState<Position | null>(null)
  const [moveResult, setMoveResult] = useState<MoveResult | null>(null)

  const chooseSquare = (position: Position) => {
    if (isCorrect) return

    const enemyPositions = challenge.enemies.map(({ position: enemyPosition }) => enemyPosition)
    const moves = getMoves(challenge.piece, challenge.position, enemyPositions)
    const isLegalMove = moves.some((move) => samePosition(move, position))
    const enemy = challenge.enemies.find((candidate) =>
      samePosition(candidate.position, position),
    )
    const result: MoveResult = isLegalMove
      ? enemy ? 'capture' : 'move'
      : 'invalid'

    setSelectedSquare(position)
    setMoveResult(result)

    if (result === 'capture' && enemy) {
      setMessage(`Super! ${enemy.name} nie ma szans! 🕸️`)
      setIsCorrect(true)
      setScore((currentScore) => currentScore + 1)
    } else if (result === 'move') {
      setMessage('Tak! Figura może tu się ruszyć, ale nikogo nie zbija! 🟡')
    } else {
      setMessage('Tego ruchu figura nie może wykonać! 🔴')
    }
  }

  const nextChallenge = () => {
    setChallenge(createChallenge())
    setMessage(initialMessage)
    setIsCorrect(false)
    setSelectedSquare(null)
    setMoveResult(null)
  }

  const solutionMoves = isCorrect
    ? getMoves(
        challenge.piece,
        challenge.position,
        challenge.enemies.map(({ position }) => position),
      )
    : []

  return (
    <main className="game-shell">
      <GameHeader score={score} />

      <section className="game-card" aria-label="Gra w szachy">
        <ChallengeBanner piece={challenge.piece} />
        <p className="board-instruction">Dotknij złoczyńcy lub pustego pola!</p>
        <MoveLegend showPossibleMoves={isCorrect} />
        <ChessBoard
          challenge={challenge}
          isCorrect={isCorrect}
          selectedSquare={selectedSquare}
          solutionMoves={solutionMoves}
          moveResult={moveResult}
          onChooseSquare={chooseSquare}
        />
        <GameFeedback message={message} isCorrect={isCorrect} />
        <button className="next-button" onClick={nextChallenge}>
          <span aria-hidden="true">🎯</span> Następna zagadka
        </button>
      </section>

      <GameFooter />
    </main>
  )
}

export default App
