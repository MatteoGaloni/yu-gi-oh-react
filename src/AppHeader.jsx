import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AppHeader = ({ archetypeFromChild }) => {

    // ***USE STATE***
    const [archetype, setArchetype] = useState([]);

    // ***FUNCTIONS***
    const getArchetipes = async () => {
        try {
            const response = await axios.get("https://db.ygoprodeck.com/api/v7/archetypes.php?");
            setArchetype(response.data)
            // console.log('Ecco tutti gli archetipi per popolare la select', response.data)

        } catch (error) {
            console.log('something went wrong...', error)
        }
    }

    // ***USE-EFFECT***
    useEffect(() => {
        getArchetipes()
    }, [])


    return (
        <>
            <h1 className='text-center'>React YU-GI-OH</h1>
            <select onChange={e => archetypeFromChild(e.target.value)} className='form-control' placeholder='scegli il tuo personaggio'>
                {archetype.map((item, index) => <option key={index} value={item.archetype_name}>{item.archetype_name}</option>)}
            </select>
        </>
    )
}

export default AppHeader