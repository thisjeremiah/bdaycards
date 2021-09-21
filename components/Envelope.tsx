import classnames from 'classnames'
import { useCallback, useState } from 'react'

type EnvelopeProps = {
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

export function Envelope(props: EnvelopeProps) {
  const [message, setMessage] = useState(props.message)
  const [flipped, setFlipped] = useState(true)
  const [disabled, setDisabled] = useState(false)

  const onClickCard = useCallback(() => {
    setFlipped((f) => !f)
  }, [])

  const cardClassName = classnames(
    'absolute w-full h-full rounded-2xl shadow-2xl',
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
      className={classnames('isolate overflow-hidden', cardClassName)}
      style={{ ...cardStyle, transform: 'rotateY(180deg)' }}
    >
      <div className="absolute bg-green-500 w-[200px] h-full skew-x-[12deg] translate-x-[-60px]" />
      <div className="absolute right-0 bg-red-500 w-[200px] h-full skew-x-[-12deg] translate-x-[60px]" />
      <div className="absolute bottom-0 bg-yellow-500 w-[100px] h-[70%] skew-x-[-12deg] translate-x-[50px]" />
      <div className="absolute right-0 bottom-0 bg-yellow-500 w-[100px] h-[70%] skew-x-[12deg] translate-x-[-50px]" />
      <div className="absolute bottom-0 left-[100px] bg-yellow-500 w-[600px] h-[70%]" />
      <div className="absolute left-0 w-[100px] bg-purple-500 h-[40%] skew-x-[12deg] translate-x-[25px]" />
      <div className="absolute right-0 w-[100px] bg-purple-500 h-[40%] skew-x-[-12deg] translate-x-[-25px]" />
      <div className="absolute left-[100px] w-[600px] bg-purple-500 h-[40%]" />
    </div>
  )

  // <div className="relative w-full h-full">{props.onBack}</div>

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
