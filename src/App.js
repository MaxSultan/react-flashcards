import React from 'react';
import './App.css';
import Cards from './Cards';
import Form from './Form'

class App extends React.Component{
 
  state = {
    deck: [
      {id: 1, question: 'What are the differences between a class component and functional component?', answer: 'Class components allows us to use additional features such as local state and lifecycle hooks',},
      {id: 2, question: 'What is the difference between state and props?' , answer: 'The state is a data structure that starts with a default value when a Component mounts. Props (short for properties) are a Component’s configuration. Props are how components talk to each other.',},
      {id: 3, question: 'What are controlled components?', answer: 'In HTML, form elements such as <input>, <textarea>, and <select> typically maintain their own state and update it based on user input.',},
    ],
    num: 0,
    currentCard:{},
    front: true,
  }

 flipCard = () => {
   const { front } = this.state
    this.setState({
      front: !front,
    })
 }

 incrCurrent = () => {
   const { num, deck } = this.state
    if (deck[num].id < deck.length){
    this.setState({
      num: num + 1,
      currentCard: deck[num],
    }) 
    } else {
    alert('there are no more cards in this direction')
    } 
  }

 decrCurrent = () => {
  const { num, deck } = this.state
  if (num > 0){ 
    this.setState({
      num: num - 1,
      currentCard: deck[num],
    })
    } else {
    alert('there are no more cards in this direction')
    } 
  } 

  remove = (id) => {
    const { deck, } = this.state
  const newDeck = deck.filter( c => c.id !== id) 
  this.setState({
    deck: newDeck,
  })
  }

  addCard = (card) => {
    const {deck} = this.state
    let newCard = { id: deck.length + 1, ...card};
    this.setState({ deck: [...this.state.deck, newCard] });
    console.log(this.state)
  };

  render(){
    const { deck, front, num, } = this.state
    return (
      <>
        <h1 className='title'>FlashcardPro</h1>
        <div className='layout'>
          <div className='arrow left' onClick={() => this.decrCurrent()}>^</div>
            <Cards 
            deck={deck} 
            front={front} 
            flip={this.flipCard} 
            num={num}
            remove={this.remove}
            />
          <div className='arrow right' onClick={() => this.incrCurrent()}>^</div>
        </div>
        
        <Form add={this.addCard}/>
      </>
    );
  }
}

export default App;
