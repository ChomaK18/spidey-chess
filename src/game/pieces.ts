import docOckImage from '../assets/villains/Doc ock.png'
import electroImage from '../assets/villains/Electro.png'
import greenGoblinImage from '../assets/villains/Green Goblin.png'
import hallowsEveImage from '../assets/villains/Hallows eve.png'
import rhinoImage from '../assets/villains/Rihno.png'
import arnimZolaImage from '../assets/villains/arnim zola.png'
import blackBishopImage from '../assets/chess pieces/black/bishop_b.png'
import blackKingImage from '../assets/chess pieces/black/king_b.png'
import blackKnightImage from '../assets/chess pieces/black/knight_b.png'
import blackPawnImage from '../assets/chess pieces/black/pawn_b.png'
import blackQueenImage from '../assets/chess pieces/black/queen_b.png'
import blackRookImage from '../assets/chess pieces/black/rook_b.png'
import whiteBishopImage from '../assets/chess pieces/white/bishop_w.png'
import whiteKingImage from '../assets/chess pieces/white/king_w.png'
import whiteKnightImage from '../assets/chess pieces/white/knight_w.png'
import whitePawnImage from '../assets/chess pieces/white/pawn_w.png'
import whiteQueenImage from '../assets/chess pieces/white/queen_w.png'
import whiteRookImage from '../assets/chess pieces/white/rook_w.png'
import type { Piece, Villain } from './types'

export const pieces: Piece[] = [
  { name: 'Pionek', image: whitePawnImage, headerImage: blackPawnImage },
  { name: 'Wieża', image: whiteRookImage, headerImage: blackRookImage },
  { name: 'Goniec', image: whiteBishopImage, headerImage: blackBishopImage },
  { name: 'Skoczek', image: whiteKnightImage, headerImage: blackKnightImage },
  { name: 'Hetman', image: whiteQueenImage, headerImage: blackQueenImage },
  { name: 'Król', image: whiteKingImage, headerImage: blackKingImage },
]

export const villains: Villain[] = [
  { name: 'Doktor Ośmiornica', image: docOckImage },
  { name: 'Zielony Goblin', image: greenGoblinImage },
  { name: 'Rhino', image: rhinoImage },
  { name: 'Electro', image: electroImage },
  { name: 'Hallows Eve', image: hallowsEveImage },
  { name: 'Arnim Zola', image: arnimZolaImage },
]
