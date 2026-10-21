import spideyFriendsImage from '../assets/Spidey Friends.png'
import type { Piece } from '../game/types'
import './ChallengeBanner.css'

type ChallengeBannerProps = { piece: Piece }

export function ChallengeBanner({ piece }: ChallengeBannerProps) {
  return (
    <div className="challenge">
      <div className="piece-token">
        <img src={piece.headerImage} alt="" />
      </div>
      <div className="challenge-copy">
        <span className="eyebrow">FIGURA SPIDEYA</span>
        <h2>{piece.name}!</h2>
        <p>Kogo może złapać?</p>
      </div>
      <img className="spidey-hero" src={spideyFriendsImage} alt="Spidey i przyjaciele" />
    </div>
  )
}
