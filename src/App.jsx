import { useEffect, useState } from 'react'
import './App.css'

const PoliticianCard = ({ name, image, country, position, years_in_office, biography }) => {
  console.log('Rendered Card', name)
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

  const [politicians, setPoliticians] = useState([]);
  const [search, setSeach] = useState("");

  const loadPoliticians = async () => {
    const res = await fetch('https://boolean-spec-frontend.vercel.app/freetestapi/politicians');
    const data = await res.json();
    console.log(data);
    setPoliticians(data);
  }

  const filteredPoliticians = politicians.filter(
    ({ name, biography }) =>
      name.toLowerCase().includes(search.toLowerCase()) ||
      biography.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    loadPoliticians()
  }, [])

  return (
    <>
      <label htmlFor="search">Search by name or biography:</label><br />
      <input
        type="text"
        name='search'
        value={search}
        onChange={({ target }) => setSeach(target.value)}
      />
      {filteredPoliticians.map((p, i) => (
        <PoliticianCard key={i} {...p} />
      ))}
    </>
  )
}

export default App
