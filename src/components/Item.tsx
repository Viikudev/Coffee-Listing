import './../styles/Item.css'

type Props = {
  id: string
  text: string
  checked?: boolean
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function Item({ id, text, checked, onChange, value }: Props) {
  return (
    <>
      <input
        className='input'
        type='radio'
        id={id}
        name='item'
        checked={checked}
        onChange={onChange}
        value={value}
      />
      <label className='label' htmlFor={id}>
        {text}
      </label>
    </>
  )
}

export default Item
