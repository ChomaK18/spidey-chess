import { BOARD_SIZE, type Piece, type Position } from './types'

type Direction = [number, number]

export function samePosition(first: Position, second: Position) {
  return first.row === second.row && first.col === second.col
}

function onBoard({ row, col }: Position) {
  return row >= 0 && row < BOARD_SIZE && col >= 0 && col < BOARD_SIZE
}

export function getMoves(
  piece: Piece,
  position: Position,
  enemyPositions: Position[],
): Position[] {
  const { row, col } = position
  const moves: Position[] = []
  const add = (nextRow: number, nextCol: number) => {
    const next = { row: nextRow, col: nextCol }
    if (onBoard(next)) moves.push(next)
  }

  if (piece.name === 'Pionek') {
    const forward = { row: row - 1, col }
    if (
      onBoard(forward) &&
      !enemyPositions.some((enemy) => samePosition(enemy, forward))
    ) {
      moves.push(forward)
    }
    for (const colStep of [-1, 1]) {
      const target = { row: row - 1, col: col + colStep }
      if (onBoard(target) && enemyPositions.some((enemy) => samePosition(enemy, target))) {
        moves.push(target)
      }
    }
  } else if (piece.name === 'Skoczek') {
    const jumps: Direction[] = [
      [-2, -1], [-2, 1], [-1, -2], [-1, 2],
      [1, -2], [1, 2], [2, -1], [2, 1],
    ]
    for (const [rowStep, colStep] of jumps) add(row + rowStep, col + colStep)
  } else if (piece.name === 'Król') {
    for (let rowStep = -1; rowStep <= 1; rowStep += 1) {
      for (let colStep = -1; colStep <= 1; colStep += 1) {
        if (rowStep !== 0 || colStep !== 0) add(row + rowStep, col + colStep)
      }
    }
  } else {
    const directions: Direction[] =
      piece.name === 'Wieża'
        ? [[-1, 0], [1, 0], [0, -1], [0, 1]]
        : piece.name === 'Goniec'
          ? [[-1, -1], [-1, 1], [1, -1], [1, 1]]
          : [[-1, 0], [1, 0], [0, -1], [0, 1], [-1, -1], [-1, 1], [1, -1], [1, 1]]

    for (const [rowStep, colStep] of directions) {
      for (let distance = 1; distance < BOARD_SIZE; distance += 1) {
        const next = { row: row + rowStep * distance, col: col + colStep * distance }
        if (!onBoard(next)) break
        moves.push(next)
        if (enemyPositions.some((enemy) => samePosition(enemy, next))) break
      }
    }
  }

  return moves
}

export function getBoardPositions(): Position[] {
  return Array.from({ length: BOARD_SIZE * BOARD_SIZE }, (_, index) => ({
    row: Math.floor(index / BOARD_SIZE),
    col: index % BOARD_SIZE,
  }))
}
