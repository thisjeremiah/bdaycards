import classnames from 'classnames'
import { useCallback, useState } from 'react'
import { paperStyle } from './utils'

type CardProps = {
  className?: string // background color, text color
  message: string
  onFront?: React.ReactNode
  onBack?: React.ReactNode
}

export function Card(props: CardProps) {
  const [flipped, setFlipped] = useState(false)

  const onClickCard = useCallback(() => {
    setFlipped((f) => !f)
  }, [])

  const cardClassName = classnames(
    'absolute w-full h-full p-4 rounded-2xl shadow-2xl',
    props.className,
  )

  const cardStyle = {
    backfaceVisibility: 'hidden',
    ...paperStyle('texture'),
  } as const

  const front = (
    <div className={cardClassName} style={cardStyle}>
      {props.message.split('\n').map((line, i) => (
        <p
          key={i}
          className="text-xl bg-transparent text-white w-full h-full resize-none outline-none"
        >
          {line}&nbsp;
        </p>
      ))}
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
    <div className="w-[325px] h-[250px]" style={{ perspective: 600 }}>
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
