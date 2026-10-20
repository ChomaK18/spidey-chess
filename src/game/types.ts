export const BOARD_SIZE = 6

export type PieceName = 'Pionek' | 'Wieża' | 'Goniec' | 'Skoczek' | 'Hetman' | 'Król'
export type Position = { row: number; col: number }
export type Piece = { name: PieceName; image: string; headerImage: string }
export type Villain = { name: string; image: string }
export type Enemy = Villain & { position: Position }
export type Challenge = { piece: Piece; position: Position; enemies: Enemy[] }
export type MoveResult = 'move' | 'capture' | 'invalid'
