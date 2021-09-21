import create from 'zustand'
import { ICard } from '../../types'

type Store = {
  steps: string[]
  index: number
  goPrev(): void
  goNext(): void
  cardColor: string
  messageColor: string
  cardMessage: string
  envelopeColor: string
  recipient: string
  sender: string
  stamp: string
  stickers: string[]
  update(partial: Partial<Omit<ICard, 'id'>>): void
}

export const useCardCreateStore = create<Store>((set) => ({
  steps: [
    '1-welcome',
    '2-welcome',
    '3-welcome',
    '4-started',
    '5-card-color',
    '6-message-color',
    '7-message',
    '8-stickers',
    '9-stamp',
    '10-preview',
    '11-send',
  ],
  index: 0,
  goPrev: () => set((state) => ({ index: state.index - 1 })),
  goNext: () => set((state) => ({ index: state.index + 1 })),
  cardColor: 'purple-300',
  messageColor: 'gray-500',
  cardMessage: '',
  envelopeColor: 'bg-purple-300',
  recipient: 'Sarah Racker',
  sender: '',
  stamp: '/stamps/hamilton.jpg',
  stickers: [],
  update: (partial) => set((state) => ({ ...state, ...partial })),
}))
