import classnames from 'classnames'

type ColorSelectProps = {
  value?: string
  onChangeValue?(value: string): void
}

export function ColorSelect(props: ColorSelectProps) {
  const colors = ['gray', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink']
  const levels = [200, 300, 400, 500, 600, 700, 800]

  const palette = (
    <div className={`flex gap-3 flex-col bg-white p-4 rounded-2xl shadow-2xl`}>
      {colors.map((color) => (
        <div key={color} className="flex gap-3">
          {levels.map((level) => (
            <div
              key={color + level}
              className={classnames(
                'rounded-full w-5 h-5 cursor-pointer',
                `bg-${color}-${level}`,
              )}
              onClick={() => props.onChangeValue(`${color}-${level}`)}
            />
          ))}
        </div>
      ))}
    </div>
  )

  return (
    <div className="">
      <div className="flex bg-white rounded-2xl h-10 p-3 gap-3 items-center justify-center">
        <p className="text-black font-medium select-none shadow-2xl">
          Current Color
        </p>
        <div className={`rounded-full w-5 h-5 bg-${props.value}`} />
      </div>
      <div className="h-3" />
      {palette}
    </div>
  )
}

function colorClassNames() {
  const colors = ['gray', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink']
  const levels = [200, 300, 400, 500, 600, 700, 800, 900]
  const result = []

  for (let color of colors) {
    for (let level of levels) {
      result.push(`bg-${color}-${level}`)
    }
  }

  return result
}
