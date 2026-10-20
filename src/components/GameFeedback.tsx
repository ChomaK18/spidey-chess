type GameFeedbackProps = { message: string; isCorrect: boolean }

export function GameFeedback({ message, isCorrect }: GameFeedbackProps) {
  return (
    <div className={`feedback${isCorrect ? ' success' : ''}`} aria-live="polite">
      <span className="feedback-icon" aria-hidden="true">
        {isCorrect ? '🕸️' : '💡'}
      </span>
      <span>{message}</span>
    </div>
  )
}
