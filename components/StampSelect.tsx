import classnames from 'classnames'
import { Stamp } from './Stamp'

const stamps = [
  '/stamps/starwars.jpg',
  '/stamps/starwars1.jpg',
  '/stamps/hamilton.jpg',
]

type StampSelectProps = {
  value?: string
  onChangeValue(value: string): void
}

export function StampSelect(props: StampSelectProps) {
  return (
    <div className="flex w-[500px] flex-wrap items-center justify-center gap-5">
      {stamps.map((stamp) => (
        <div
          key={stamp}
          className={classnames(
            'p-3 rounded-2xl cursor-pointer bg-opacity-50',
            props.value === stamp && 'bg-white',
          )}
          onClick={() => {
            props.onChangeValue(stamp)
          }}
        >
          <Stamp src={stamp} />
        </div>
      ))}
    </div>
  )
}
