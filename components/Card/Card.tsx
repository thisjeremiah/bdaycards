import classnames from 'classnames'
import { useCallback, useState } from 'react'

type CardProps = {
  className?: string // background color, text color
  message: string
  onFront?: React.ReactNode
  onBack?: React.ReactNode
}

const paperPatterns = {
  default: 'paper-2',
  fibers: 'light-paper-fibers',
  canvas: 'beige-paper',
  texture: 'cream-paper',
  board: 'white-paperboard',
  painterly: 'textured-paper',
  rice: 'rice-paper-2',
  natural: 'natural-paper',
}

const paperPattern = paperPatterns['natural']

export function Card(props: CardProps) {
  const [message, setMessage] = useState(props.message)
  const [flipped, setFlipped] = useState(false)
  const [disabled, setDisabled] = useState(false)

  const onClickCard = useCallback(() => {
    setFlipped((f) => !f)
  }, [])

  const cardClassName = classnames(
    'absolute w-full h-full p-16 rounded-2xl shadow-2xl',
    props.className,
  )

  const cardStyle = {
    backgroundImage: `url("https://www.transparenttextures.com/patterns/${paperPattern}.png")`,
    backfaceVisibility: 'hidden',
  } as const

  const front = (
    <div className={cardClassName} style={cardStyle}>
      <textarea
        className="text-3xl bg-transparent w-full h-full resize-none outline-none"
        value={message}
        onClick={(e) => e.stopPropagation()}
        onChange={({ target }) => setMessage(target.value)}
        disabled={disabled}
      />
      <div className="relative w-full h-full">{props.onFront}</div>
    </div>
  )

  const back = (
    <div
      className={cardClassName}
      style={{ ...cardStyle, transform: 'rotateY(180deg)' }}
    >
      <div className="relative w-full h-full">{props.onBack}</div>
    </div>
  )

  return (
    <div className="w-[800px] h-[600px]" style={{ perspective: 600 }}>
      <div
        onClick={onClickCard}
        className="w-full h-full relative cursor-pointer"
        style={{
          transformStyle: 'preserve-3d',
          transformOrigin: 'center right',
          transition: 'transform 1s',
          transform: flipped && 'translateX(-100%) rotateY(-180deg)', // TODO on hover
        }}
      >
        {front}
        {back}
      </div>
    </div>
  )
}
