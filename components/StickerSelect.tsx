import classnames from 'classnames'
import { Sticker } from './Card/Sticker'

const stickers = ['pug', 'isabelle', 'tom-nook']

type StickerSelectProps = {
  value?: string[]
  onChangeValue(value: string): void
}

export function StickerSelect(props: StickerSelectProps) {
  return (
    <div className="flex w-full items-center justify-center gap-5">
      {stickers.map((sticker) => (
        <div
          key={sticker}
          className={classnames('p-3 rounded-2xl', 'bg-white')}
        >
          <Sticker name={sticker as any} className="w-[50px]" />
        </div>
      ))}
    </div>
  )
}
