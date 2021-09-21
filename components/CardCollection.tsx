import classnames from 'classnames'
import { Navigation } from './Navigation'
import { getFirestore, collection, onSnapshot } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { app } from '../firebase'
import { ICard } from '../types'
import { Card } from './Card'
import { paperStyle } from './utils'

function useCards() {
  const [result, setResult] = useState<Array<ICard>>([])

  useEffect(
    () =>
      onSnapshot(collection(getFirestore(app), 'cards'), (snapshot) => {
        if (snapshot.docs) {
          // @ts-ignore
          setResult(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
        }
      }),
    [],
  )
  return result
}

export function CardCollection() {
  const cards = useCards()
  const [selectedCard, setSelectedCard] = useState<ICard | null>()

  if (selectedCard) {
    return (
      <>
        <div className="flex items-center justify-center w-full h-screen overflow-hidden">
          <Card card={selectedCard} />
        </div>
        <Navigation
          prev="ok"
          goNext={() => null}
          goPrev={() => setSelectedCard(null)}
        />
      </>
    )
  }

  return (
    <div className="flex gap-5 flex-wrap items-center justify-center w-full h-screen">
      {cards.map((card) => (
        <div
          key={card.id}
          style={paperStyle('default')}
          onClick={() => setSelectedCard(card)}
          className={classnames(
            `bg-${card.cardColor}`,
            'flex w-[150px] h-[120px] rounded-2xl p-2 text-center items-center shadow-2xl cursor-pointer',
            'transition duration-300 hover:scale-110',
          )}
        >
          <p
            className={`text-${card.messageColor} text-center w-full font-medium text-lg text-opacity-74 drop-shadow select-none`}
          >
            {card.sender}
          </p>
        </div>
      ))}
    </div>
  )
}
