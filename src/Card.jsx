import React, { useState, useEffect } from 'react'


const Card = (props) => {
    const { data, archetypeToCard } = props;
    console.log(archetypeToCard, 'archetipo selezionato per popolare la card')

    const [dataToDisplay, setDataToDisplay] = useState([]);

    useEffect(() => {
        if (archetypeToCard.length > 0) {
            setDataToDisplay(archetypeToCard);
        } else {
            setDataToDisplay(data);
        }
    }, [archetypeToCard, data]);

    return (
        <>
            {dataToDisplay.length === 0 && <p className='text-center m-4 fw-bold'>Non ci sono personaggi  da visualizzare</p>}
            <div className="row justify-content-center">
                {dataToDisplay.map((item) => (
                    <div key={item.id} className="col-3">
                        <div className='card my-2'>
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