type TextAreaInputProps = {
  value?: string
  onChangeValue?(value: string): void
}

const placeholderMessage = `Hi Sarah...`

export function TextAreaInput(props: TextAreaInputProps) {
  return (
    <textarea
      className="resize-none select-none bg-white text-gray-700 p-4 rounded-2xl w-[325px] h-[250px] outline-none"
      value={props.value}
      onChange={(e) => props.onChangeValue(e.target.value)}
      placeholder={placeholderMessage}
    />
  )
}
