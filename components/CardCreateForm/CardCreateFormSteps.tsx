import { ColorSelect } from '../ColorSelect'

export function CardCreateFormStep(props: { step: string }) {
  switch (props.step) {
    case '1-sender':
      return <SetSender />
    case '2-card-color':
      return <SetCardColor />
  }
  return null
}

function SetSender() {
  return <div></div>
}

function SetCardColor() {
  return (
    <div>
      <ColorSelect />
    </div>
  )
}
