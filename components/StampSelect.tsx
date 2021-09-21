import classnames from 'classnames'
import { Stamp } from './Stamp'

const stamps = [
  '/stamps/starwars.jpg',
  '/stamps/starwars1.jpg',
  '/stamps/hamilton.jpg',
  '/stamps/lilo-and-stitch.jpg',
  '/stamps/pride.jpg',
  '/stamps/scott-pilgrim.jpg',
  '/stamps/disneyland.jpg',
  '/stamps/ferris-bueller.jpg',
  '/stamps/disney-up.jpg',
]

type StampSelectProps = {
  value?: string
  onChangeValue(value: string): void
}

export function StampSelect(props: StampSelectProps) {
  return (
    <div className="flex w-[400px] flex-wrap items-center justify-center gap-5">
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
          <Stamp className="relative" src={stamp} />
        </div>
      ))}
    </div>
  )
}
