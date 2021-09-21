import { Navigation } from '../Navigation'
import { CardCreateFormStep } from './CardCreateFormSteps'
import { useCardCreateStore } from './cardCreateStore'

export function CardCreateForm() {
  const store = useCardCreateStore()
  const step = store.steps[store.index]
  const prev = !store.finished && store.steps[store.index - 1]
  const next = !store.finished && store.steps[store.index + 1]

  return (
    <>
      <CardCreateFormStep step={step} />
      <Navigation
        prev={prev}
        next={next}
        goPrev={store.goPrev}
        goNext={store.goNext}
      />
    </>
  )
}
