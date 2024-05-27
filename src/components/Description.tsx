import './../styles/Description.css'

type Props = {
  text: string
}

function Description({ text }: Props) {
  return <div className='description'>{text}</div>
}

export default Description
