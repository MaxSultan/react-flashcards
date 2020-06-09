import React from 'react';

class Card extends React.Component{

    state = {

    };

    render(){
        const { deck, front, flip, num, remove } = this.props

        return(
            <>
            {deck.length > 0 ? 
            <div className='notecard'>{front ? deck[num].question : deck[num].answer }
            <hr/>
                <div>
                    <button onClick={() => flip()}>flip</button>
                    <button onClick={() => remove(deck[num].id)}>delete</button>
                </div>
            </div> : <div>No cards</div>}
            </>
        )
    }
}

export default Card