import React, { useState, useEffect } from 'react'


const Card = (props) => {
    const { data, archetypeToCard } = props;
    // const [selectedArchetype, setSelectedArchetype] = useState(data ? data : archetype);
    // console.log(archetypeToCard, 'tipo di dato selezionato')


    // useEffect(() => {

    // }, [data])

    return (
        <>
            {data.length === 0 && <p className='text-center m-4 fw-bold'>Non ci sono personaggi  da visualizzare</p>}
            <div className="row">
                {data.map((item) => (
                    <div key={item.id} className="col-4">
                        <div className='card mt-2'>
                            <img src={item.card_images[0].image_url} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h2 className="text-center card-title"> {item.archetype}</h2>
                                <p id='my-card-text' className="card-text">{item.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>


    )
}

export default Card