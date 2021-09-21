import { getFirestore, collection, addDoc } from 'firebase/firestore'
import { ColorSelect } from '../ColorSelect'
import {
  PencilIcon,
  PencilAltIcon,
  UserIcon,
  MailIcon,
  MailOpenIcon,
  StarIcon,
} from '@heroicons/react/outline'
import { Input } from '../Input'
import { TextAreaInput } from '../TextAreaInput'
import { useCardCreateStore } from './cardCreateStore'
import { StickerSelect } from '../StickerSelect'
import { StampSelect } from '../StampSelect'
import { Card } from '../Card'
import { app } from '../../firebase'

const db = getFirestore(app)

export function CardCreateFormStep(props: { step: string }) {
  const store = useCardCreateStore()

  if (store.finished) {
    return (
      <Center>
        <MailIcon className="w-10 h-10 text-white" />
        <div className="h-3" />
        <p className="text-white text-2xl w-[250px] text-center select-none">
          Your card has been sent to Sarah! 🎉 🥳
        </p>
      </Center>
    )
  }

  switch (props.step) {
    case '1-welcome':
      return (
        <Center>
          <img
            className="bg-gray-200 select-none w-[250px] h-[250px] rounded-full"
            src={'/sarah.jpeg'}
          />
          <div className="h-5" />
          <p className="text-2xl text-white select-none">
            {"It's Sarah's birthday! 🎂 🎈"}
          </p>
        </Center>
      )
    case '2-welcome':
      return (
        <Center>
          <MailIcon className="w-10 h-10 text-white" />
          <div className="h-3" />
          <p className="text-white text-2xl w-[250px] text-center select-none">
            Make an e-card and send it to her.
          </p>
        </Center>
      )
    case '3-welcome':
      return (
        <Center>
          <MailOpenIcon className="w-10 h-10 text-white" />
          <div className="h-3" />
          <p className="text-white text-2xl w-[250px] text-center select-none">
            She can open it and read it later today.
          </p>
        </Center>
      )
    case '4-started':
      return (
        <Center>
          <UserIcon className="w-10 h-10 text-white" />
          <div className="h-3" />
          <p className="text-white text-2xl w-[250px] text-center select-none">
            Who is the card from?
          </p>
          <div className="h-4" />
          <Input
            value={store.sender}
            onChangeValue={(sender) => store.update({ sender })}
          />
        </Center>
      )
    case '5-card-color':
      return (
        <Center>
          <MailIcon className="w-10 h-10 text-white" />
          <div className="h-3" />
          <p className="text-white text-2xl w-[250px] text-center select-none">
            What color should the card be?
          </p>
          <div className="h-4" />
          <ColorSelect
            value={store.cardColor}
            onChangeValue={(cardColor) => store.update({ cardColor })}
          />
        </Center>
      )
    case '6-message-color':
      return (
        <Center>
          <PencilIcon className="w-10 h-10 text-white" />
          <div className="h-3" />
          <p className="text-white text-2xl w-[250px] text-center select-none">
            What color should the message be?
          </p>
          <div className="h-4" />
          <ColorSelect
            value={store.messageColor}
            onChangeValue={(messageColor) => store.update({ messageColor })}
          />
        </Center>
      )
    case '7-message':
      return (
        <Center>
          <PencilAltIcon className="w-10 h-10 text-white" />
          <div className="h-3" />
          <p className="text-white text-2xl w-[250px] text-center select-none">
            What would you like to say?
          </p>
          <div className="h-5" />
          <TextAreaInput
            className={`bg-${store.cardColor} text-${store.messageColor}`}
            value={store.message}
            onChangeValue={(message) => store.update({ message })}
          />
        </Center>
      )
    case '8-stickers':
      return (
        <Center>
          <StarIcon className="w-10 h-10 text-white" />
          <div className="h-3" />
          <p className="text-white text-2xl w-[250px] text-center select-none">
            What stickers would you like to use? (Pick up to 3)
          </p>
          <div className="h-5" />
          <StickerSelect
            value={store.stickers}
            onChangeValue={(stickers) => store.update({ stickers })}
          />
        </Center>
      )
    case '9-stamp':
      return (
        <Center>
          <StarIcon className="w-10 h-10 text-white" />
          <div className="h-3" />
          <p className="text-white text-2xl w-[250px] text-center select-none">
            Pick a stamp to use.
          </p>
          <div className="h-5" />
          <StampSelect
            value={store.stamp}
            onChangeValue={(stamp) => store.update({ stamp })}
          />
        </Center>
      )
    case '10-preview':
      return (
        <Center>
          <MailIcon className="w-10 h-10 text-white" />
          <div className="h-2" />
          <p className="text-white text-2xl w-[250px] text-center select-none">
            {'Take a look at your finished card!'}
          </p>
          <div className="h-2" />
          <p className="text-white w-[250px] text-center select-none">
            {'(Click the card to flip it over)'}
          </p>
          <div className="h-5" />
          <Card card={store} />
        </Center>
      )
    case '11-send':
      return (
        <Center>
          <MailIcon className="w-10 h-10 text-white" />
          <div className="h-3" />
          <p className="text-white text-2xl w-[250px] text-center select-none">
            Send your card to Sarah!
          </p>
          <div className="h-5" />
          <div
            className="px-3 py-2 bg-white rounded-full cursor-pointer"
            onClick={submit}
          >
            <p className="text-black select-none">Mail It!</p>
          </div>
        </Center>
      )
  }

  return null

  function submit() {
    const data = {
      cardColor: store.cardColor,
      messageColor: store.messageColor,
      message: store.message,
      recipient: store.recipient,
      sender: store.sender,
      stamp: store.stamp,
      stickers: store.stickers,
    }

    addDoc(collection(db, 'cards'), data)
      .then(() => store.finish())
      .catch((err) => console.error(err))
  }
}

function Center(props: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen p-8">
      {props.children}
    </div>
  )
}
