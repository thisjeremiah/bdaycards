export type ICard = {
  id: string
  cardColor: string
  cardMessage: string
  envelopeColor: string
  recipient: string
  sender: string
  stampImage: string
  stickers: Array<ISticker>
}

export type ISticker = {
  image: string
  location: ILocation
  x: number
  y: number
}

type ILocation = 'card_front' | 'card_back' | 'envelope_front' | 'envelope_back'
