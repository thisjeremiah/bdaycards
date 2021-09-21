import { ColorSelect } from '../ColorSelect'
import {
  PencilIcon,
  PencilAltIcon,
  UserIcon,
  MailIcon,
  MailOpenIcon,
} from '@heroicons/react/outline'
import { Input } from '../Input'
import { TextAreaInput } from '../TextAreaInput'
import { useCardCreateStore } from './cardCreateStore'

// 🥳
// 🙌
// 🎂
// 🍰
// 🎈
// 🎉
// 🎁

export function CardCreateFormStep(props: { step: string }) {
  const store = useCardCreateStore()

  switch (props.step) {
    case '1-welcome':
      return (
        <Center>
          <img
            className="select-none w-[250px] h-[250px] rounded-full"
            src={'/sarah.jpeg'}
          />
          <div className="h-5" />
          <p className="text-white text-2xl select-none">
            It's Sarah's birthday! 🎂 🎈
          </p>
        </Center>
      )
    case '2-welcome':
      return (
        <Center>
          <MailIcon className="text-white w-10 h-10" />
          <div className="h-3" />
          <p className="text-white text-2xl w-[250px] text-center select-none">
            Make an e-card and send it to her
          </p>
        </Center>
      )
    case '3-welcome':
      return (
        <Center>
          <MailOpenIcon className="text-white w-10 h-10" />
          <div className="h-3" />
          <p className="text-white text-2xl w-[250px] text-center select-none">
            She can open it and read it later today
          </p>
        </Center>
      )
    case '4-started':
      return (
        <Center>
          <UserIcon className="text-white w-10 h-10" />
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
          <MailIcon className="text-white w-10 h-10" />
          <div className="h-3" />
          <p className="text-white text-2xl w-[250px] text-center select-none">
            What color is the card?
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
          <PencilIcon className="text-white w-10 h-10" />
          <div className="h-3" />
          <p className="text-white text-2xl w-[250px] text-center select-none">
            What color is the message?
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
          <PencilAltIcon className="text-white w-10 h-10" />
          <div className="h-3" />
          <p className="text-white text-2xl w-[250px] text-center select-none">
            What would you like to say?
          </p>
          <div className="h-5" />
          <TextAreaInput
            value={store.cardMessage}
            onChangeValue={(cardMessage) => store.update({ cardMessage })}
          />
        </Center>
      )
    case '8-stickers':
      return (
        <Center>
          <PencilAltIcon className="text-white w-10 h-10" />
          <div className="h-3" />
          <p className="text-white text-2xl w-[250px] text-center select-none">
            What stickers would you like to add?
          </p>
        </Center>
      )
    case '9-stamp':
      return (
        <Center>
          <PencilAltIcon className="text-white w-10 h-10" />
          <div className="h-3" />
          <p className="text-white text-2xl w-[250px] text-center select-none">
            Pick a stamp to use.
          </p>
        </Center>
      )
    case '10-preview':
      return (
        <Center>
          <p className="text-white text-2xl w-[250px] text-center select-none">
            Here's what your card will look like.
          </p>
        </Center>
      )
    case '11-send':
      return (
        <Center>
          <MailIcon className="text-white w-10 h-10" />
          <div className="h-3" />
          <p className="text-white text-2xl w-[250px] text-center select-none">
            Send your card to Sarah!
          </p>
        </Center>
      )
  }
  return null
}

function Center(props: { children: React.ReactNode }) {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center p-8">
      {props.children}
    </div>
  )
}
