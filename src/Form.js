import React from 'react'

class Form extends React.Component{
    state={
        question: '',
        answer: '',

    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.add(this.state);
        this.setState({
          question: " ",
          answer: " ",
        });
    };

    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        });
    }

    render(){
        const { add } = this.props
        return(
            <>
            <form onSubmit={this.handleSubmit}>
            <input name='question' placeholder='add a question here' onChange={this.handleChange}></input>
            <input name='answer' placeholder='add an answer here' onChange={this.handleChange}></input>
            <button>Add Card</button>
            </form>
            </>
        )
    }
}

export default Form