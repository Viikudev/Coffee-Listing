import './../styles/CoffeCard.css'
import imgStarUrl from './../assets/Star.svg'
import imgStarFillUrl from './../assets/Star_fill.svg'

type Props = {
  name: string
  image: string
  price: string
  rating: number
  votes: number
  popular: boolean
  available: boolean
}

function CoffeeCard({
  name,
  image,
  price,
  rating,
  votes,
  popular,
  available,
}: Props) {
  return (
    <li className='coffee-card'>
      <img className='image' src={image} alt='' />
      {popular && <div className='popular'>Popular</div>}
      <div className='name-price'>
        <div className='coffe-name'>{name}</div>
        <div className='price'>{price}</div>
      </div>
      <div className='preferences'>
        <div className='rating-votes'>
          {rating ? (
            <>
              <img src={imgStarFillUrl} alt='' />
              <div className='rating'>{rating}</div>
              <div className='votes'>
                <span>({votes} votes)</span>
              </div>
            </>
          ) : (
            <>
              <img src={imgStarUrl} alt='' />
              <div className='no-rating'>No ratings</div>
            </>
          )}
        </div>
        {available ? '' : <div className='sold-out'>Sold out</div>}
      </div>
    </li>
  )
}

export default CoffeeCard
