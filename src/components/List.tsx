import './../styles/List.css'
import CoffeeCard from './CoffeeCard'

type Props = {
  data: {
    name: string
    image: string
    price: string
    rating: number
    votes: number
    popular: boolean
    available: boolean
  }[]
  value: string
}

function List({ data, value }: Props) {
  data =
    value === 'available'
      ? data.filter((coffeeItem) => coffeeItem.available)
      : data

  return (
    <ul className='coffe-card-list'>
      {data.map((coffeeItem) => (
        <CoffeeCard
          name={coffeeItem.name}
          image={coffeeItem.image}
          price={coffeeItem.price}
          rating={coffeeItem.rating}
          votes={coffeeItem.votes}
          popular={coffeeItem.popular}
          available={coffeeItem.available}
        />
      ))}
    </ul>
  )
}

export default List
