import classnames from 'classnames'
import { ArrowSmLeftIcon, ArrowSmRightIcon } from '@heroicons/react/solid'

type NavigationProps = {
  goNext(): void
  goPrev(): void
  prev?: string | null
  next?: string | null
}

export function Navigation(props: NavigationProps) {
  const arrowClassName =
    'fixed bg-white bg-opacity-75 w-10 h-10 rounded-full bottom-5 text-gray-700 cursor-pointer'

  return (
    <>
      {props.prev && (
        <div
          onClick={props.goPrev}
          className={classnames('left-5', arrowClassName)}
        >
          <ArrowSmLeftIcon />
        </div>
      )}
      {props.next && (
        <div
          onClick={props.goNext}
          className={classnames('right-5', arrowClassName)}
        >
          <ArrowSmRightIcon />
        </div>
      )}
    </>
  )
}
