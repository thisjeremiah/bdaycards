import classnames from 'classnames'

type TextAreaInputProps = {
  className?: string
  value?: string
  onChangeValue?(value: string): void
}

const placeholderMessage = `Hi Sarah...`

export function TextAreaInput(props: TextAreaInputProps) {
  return (
    <textarea
      className={classnames(
        'resize-none p-4 rounded-2xl w-[325px] h-[250px] outline-none',
        props.className,
      )}
      value={props.value}
      onChange={(e) => props.onChangeValue(e.target.value)}
      placeholder={placeholderMessage}
    />
  )
}
