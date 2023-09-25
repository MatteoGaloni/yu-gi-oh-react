import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import AppHeader from './AppHeader'
import Card from './Card'

function App() {

  // ***USE STATE***
  const [data, setData] = useState([]);
  const [archetype, setArchetype] = useState([]);
  const [archetypeToCard, setArchetypeToCard] = useState([]);

  // ***FUNCTIONS***
  // chiamo il database per visulizzare i personaggi Alien come primo risultato
  const getData = async () => {
    try {
      const response = await axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Alien&num=20&offset=0");
      setData(response.data.data)
      console.log('I dati contenenti gli ALien per popolare la pagina al primo caricamento', response.data.data)

    } catch (error) {
      console.log('something went wrong...', error)
    }
  }

  // recupero l'archetipo selezionato dall'utente nella select
  const archetypeFromChild = (myData) => {
    setArchetype(myData);
  }

  // chiamo il Db per ottenere i personaggi selezionati dall'utente nella select
  const getArchetype = async () => {
    try {
      const response = await axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=${archetype}&num=20&offset=0`);
      setArchetypeToCard(response.data.data)
      console.log(response.data.data, "Dati dell'archetipo selezionato")

    } catch (error) {
      console.log('something went wrong...', error)

    }
  }


  // ***USE-EFFECT***

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {

    getArchetype()
    // if (archetypeToCard.length > 0) {
    //   getArchetype()
    // }
  }, [])



  return (
    <div className='container'>
      <AppHeader archetypeFromChild={archetypeFromChild} />
      <Card data={data} archetypeToCard={archetypeToCard} />
    </div>
  )
}

export default App
