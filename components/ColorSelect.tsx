import classnames from 'classnames'
import { useState } from 'react'

export function ColorSelect() {
  const colors = ['gray', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink']
  const levels = [200, 300, 400, 500, 600, 700, 800]
  const [currentColor, setCurrentColor] = useState({
    color: 'yellow',
    level: 200,
  })

  const palette = (
    <div className={`flex gap-3 flex-col bg-white p-4 rounded-2xl shadow-2xl`}>
      {colors.map((color) => (
        <div key={color} className="flex gap-3">
          {levels.map((level) => (
            <div
              key={color + level}
              className={classnames(
                'rounded-full w-5 h-5 cursor-pointer',
                bgClassname(color, level),
              )}
              onClick={() => setCurrentColor({ color, level })}
            />
          ))}
        </div>
      ))}
    </div>
  )

  return (
    <div className="">
      <div className="flex bg-white rounded-2xl h-10 p-3 gap-3 items-center justify-center">
        <p className="text-gray-700 font-bold select-none shadow-2xl">
          Current Color
        </p>
        <div
          className={`rounded-full w-5 h-5 ${bgClassname(
            currentColor.color,
            currentColor.level,
          )}`}
        />
      </div>
      <div className="h-3" />
      {palette}
    </div>
  )

  function bgClassname(color: string, level: number) {
    return `bg-${color}-${level}`
  }
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
