import create from 'zustand'

type Store = {
  steps: string[]
  index: number
  goPrev(): void
  goNext(): void
}

export const useCardCreateStore = create<Store>((set) => ({
  steps: ['1-sender', '2-card-color'],
  index: 0,
  goPrev: () => set((state) => ({ index: state.index - 1 })),
  goNext: () => set((state) => ({ index: state.index + 1 })),
}))
