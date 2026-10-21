import { pieces, villains } from './pieces'
import { getBoardPositions, getMoves, samePosition } from './movement'
import type { Challenge, Enemy } from './types'

const ENEMIES_PER_CHALLENGE = 4

function randomItem<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)]
}

function shuffled<T>(items: T[]): T[] {
  return [...items].sort(() => Math.random() - 0.5)
}

export function createChallenge(): Challenge {
  const positions = getBoardPositions()

  for (let attempt = 0; attempt < 500; attempt += 1) {
    const piece = randomItem(pieces)
    const playerPositions = positions.filter(
      (position) => piece.name !== 'Pionek' || position.row > 0,
    )
    const position = randomItem(playerPositions)
    const enemyPositions = shuffled(
      positions.filter((candidate) => !samePosition(candidate, position)),
    ).slice(0, ENEMIES_PER_CHALLENGE)
    const moves = getMoves(piece, position, enemyPositions)
    const correctAnswers = enemyPositions.filter((enemy) =>
      moves.some((move) => samePosition(move, enemy)),
    )

    if (correctAnswers.length > 0 && correctAnswers.length < enemyPositions.length) {
      const enemyVillains = shuffled(villains).slice(0, enemyPositions.length)
      return {
        piece,
        position,
        enemies: enemyPositions.map((enemyPosition, index) => ({
          ...enemyVillains[index],
          position: enemyPosition,
        })),
      }
    }
  }

  const position = { row: 2, col: 2 }
  const enemies: Enemy[] = [
    { ...villains[0], position: { row: 1, col: 1 } },
    { ...villains[1], position: { row: 1, col: 3 } },
    { ...villains[2], position: { row: 3, col: 1 } },
    { ...villains[3], position: { row: 0, col: 5 } },
  ]
  return { piece: pieces[5], position, enemies }
}
