import classnames from 'classnames'

export function Sticker(props: {
  src: string
  className?: string
  style?: any
}) {
  return (
    <img
      className={classnames(
        'w-[75px] select-none pointer-events-none',
        props.className,
      )}
      style={{
        ...props.style,
        filter: 'drop-shadow(0 0.2rem 0.25rem rgba(0, 0, 0, 0.2))',
      }}
      src={props.src}
    />
  )
}
