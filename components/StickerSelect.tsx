import classnames from 'classnames'
import { Sticker } from './Sticker'

const stickers = [
  '/stickers/pug.png',
  '/stickers/isabelle.png',
  '/stickers/tom-nook.png',
  '/stickers/tea.png',
  '/stickers/leaf.png',
  '/stickers/pikachu.png',
  '/stickers/timothee.png',
  '/stickers/cherry-blossom.png',
]

type StickerSelectProps = {
  value?: string[]
  onChangeValue(value: string[]): void
}

export function StickerSelect(props: StickerSelectProps) {
  return (
    <div className="flex w-[300px] flex-wrap items-center justify-center gap-5">
      {stickers.map((sticker) => (
        <div
          key={sticker}
          className={classnames(
            'p-3 rounded-2xl cursor-pointer bg-opacity-50',
            selected(sticker) && 'bg-white',
          )}
          onClick={() => {
            if (selected(sticker)) {
              props.onChangeValue(props.value.filter((x) => x !== sticker))
            } else if (props.value.length < 3) {
              props.onChangeValue([...props.value, sticker])
            }
          }}
        >
          <Sticker src={sticker as any} className="w-[50px]" />
        </div>
      ))}
    </div>
  )

  function selected(sticker: string) {
    return props.value.includes(sticker)
  }
}
