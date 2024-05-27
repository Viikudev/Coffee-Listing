import './../styles/Title.css'

type Props = {
  title: string
}

function Title({ title }: Props) {
  return <div className='title'>{title}</div>
}

export default Title
