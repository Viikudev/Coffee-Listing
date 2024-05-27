import Title from './Title'
import Description from './Description'
import Item from './Item'
import List from './List'
import { useEffect, useState } from 'react'
import './../styles/App.css'

function App() {
  const [data, setData] = useState(null)
  const [checkedOption, setCheckedOption] = useState('all')

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json',
      )
      const jsonData = await response.json()
      setData(jsonData)
    }

    fetchData()
  }, [])

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setCheckedOption(e.target.value)
  // }

  return (
    <>
      <main className='main'>
        <section className='header'>
          <Title title='Our Collection' />
          <Description text='Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.' />
          <div className='radio'>
            <Item
              id='all'
              text='All Products'
              value='all'
              checked={checkedOption === 'all'}
              onChange={(e) => setCheckedOption(e.target.value)}
            />
            <Item
              id='available'
              text='Available Now'
              value='available'
              checked={checkedOption === 'available'}
              onChange={(e) => setCheckedOption(e.target.value)}
            />
          </div>
        </section>
        <section>{data && <List data={data} value={checkedOption} />}</section>
      </main>
    </>
  )
}

export default App
