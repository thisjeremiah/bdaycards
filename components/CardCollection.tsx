import classnames from 'classnames'
import { paperStyle } from './utils'

const item = {
  sender: 'Jeremiah Montoya',
  className: 'bg-blue-500 text-white',
}

const items = [item, item, item, item, item, item, item, item, item, item]

export function CardCollection() {
  return (
    <div className="flex gap-5 flex-wrap justify-center">
      {items.map((item, i) => (
        <div
          key={i}
          style={paperStyle}
          className={classnames(
            item.className,
            'flex w-[150px] h-[120px] rounded-2xl p-2 text-center items-center shadow-2xl',
          )}
        >
          <p className="text-white">{item.sender}</p>
        </div>
      ))}
    </div>
  )
}
