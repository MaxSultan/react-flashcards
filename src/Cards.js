import React from 'react'
import Card from './Card'

function Cards({ deck, front, flip, num, remove }){
    return(
        <>
        <div className='layout'>
             <Card 
             deck={deck}
             front={front}
             flip={flip}
             num={num}
             remove={remove}
             />
        </div>
        </>
    )
}

export default Cards