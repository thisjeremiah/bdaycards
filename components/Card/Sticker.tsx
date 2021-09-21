import classnames from 'classnames'

// export function Sticker() {
// return (
// <>
// <ImageSticker name="tom-nook" />
// <ImageSticker name="pug" />
// <ImageSticker name="tea" />
// </>
// )
// }

type StickerName = 'pug' | 'tea' | 'tom-nook' | 'isabelle'

export function Sticker(props: {
  name: StickerName
  className?: string
  style?: any // TODO
}) {
  return (
    <img
      className={classnames(
        'w-[150px] select-none pointer-events-none',
        props.className,
      )}
      style={{
        ...props.style,
        filter: 'drop-shadow(0 0.2rem 0.25rem rgba(0, 0, 0, 0.2))',
      }}
      src={`/stickers/${props.name}.png`}
    />
  )
}

// const star = <div className="bg-green-500">
// </div>

// function TextSticker(props: { text: string }) {
// return <div className="">{props.text}</div>
// }
