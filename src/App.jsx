import { useEffect, useState } from 'react'
import './App.css'

const PoliticianCard = ({ name, image, country, position, years_in_office, biography }) => {
  return (
    <div className='card'>
      <img src={image} alt={name} />
      <h3>{name} ({country})</h3>
      <p>{position} ({years_in_office})</p>
      <p>{biography}</p>
    </div>
  )
}


function App() {

  const [politicians, setPoliticians] = useState([])

  const loadPoliticians = async () => {
    const res = await fetch('https://boolean-spec-frontend.vercel.app/freetestapi/politicians');
    const data = await res.json();
    console.log(data)
    setPoliticians(data);
  }

  useEffect(() => {
    loadPoliticians()
  }, [])

  return (
    <>
      {politicians.map((p, i) => (
        <PoliticianCard key={i} {...p} />
      ))}
    </>
  )
}

export default App
