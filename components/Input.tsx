type InputProps = {
  value?: string
  onChangeValue?(value: string): void
}

export function Input(props: InputProps) {
  return (
    <input
      className="text-center bg-white text-gray-700 py-2 px-3 rounded-2xl min-w-[50px] outline-none"
      value={props.value}
      onChange={(e) => props.onChangeValue(e.target.value)}
      placeholder="Tom Nook"
    />
  )
}
