import classnames from 'classnames'
import { useCallback, useState } from 'react'
import { ICard } from '../types'
import { Sticker } from './Sticker'
import { Stamp } from './Stamp'
import { paperStyle } from './utils'

type CardProps = {
  card: Omit<ICard, 'id'>
}

export function Card({ card }: CardProps) {
  const [flipped, setFlipped] = useState(true)

  const onClickCard = useCallback(() => {
    setFlipped((f) => !f)
  }, [])

  const cardClassName = classnames(
    'absolute w-full h-full p-4 rounded-2xl shadow-2xl',
    `bg-${card.cardColor} text-${card.messageColor}`,
  )

  const cardStyle = {
    backfaceVisibility: 'hidden',
    '-webkit-backface-visibility': 'hidden',
    ...paperStyle('texture'),
  } as const

  const sticker1 = card.stickers[0]
  const sticker2 = card.stickers[1]
  const sticker3 = card.stickers[2]

  const front = (
    <div className={cardClassName} style={cardStyle}>
      <span className="w-full h-full">
        {card.message.split('\n').map((line, i) => (
          <p
            key={i}
            className="text-sm bg-transparent select-none whitespace-pre-wrap"
          >
            {line ? line : '\n'}
          </p>
        ))}
      </span>
      {sticker1 && (
        <Sticker
          className="absolute bottom-[15px] right-3 rotate-[-15deg]"
          src={sticker1}
        />
      )}
    </div>
  )

  const back = (
    <div
      className={cardClassName}
      style={{ ...cardStyle, transform: 'rotateY(180deg)' }}
    >
      <div className="relative w-full h-full">
        {card.stamp && <Stamp className="right-5" pattern src={card.stamp} />}
        {sticker2 && (
          <Sticker className="absolute left-0 rotate-[-5deg]" src={sticker2} />
        )}
        {sticker3 && (
          <Sticker
            className="absolute left-[80px] bottom-[10px] rotate-[5deg]"
            src={sticker3}
          />
        )}
      </div>
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
