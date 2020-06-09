import React from 'react'

class Form extends React.Component{
    state={
        question: '',
        answer: '',
    }

    // handleChange = (e) =>{
    //     e.preventDefault
    //     console.log(e)
    // }

    render(){
        const { add } = this.props
        return(
            <>
            <input name='question' placeholder='add a question here'></input>
            <input name='answer' placeholder='add an answer here'></input>
            <button onClick={() => add()}>Add Card</button>
            </>
        )
    }
}

export default Form