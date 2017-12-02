import React, { Component } from 'react'

export default class EvenOdd extends Component {

    constructor() {
        super()

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }

    handleChange(val) {
        this.setState({ userInput: val });
    }

    assignEvenAndOdds(userInput) {
        const arr = userInput.split('')
        const evens = arr.filter((v, i) => i % 2).join(', ')
        const odds = arr.filter((v, i) => !(i % 2)).join(', ')
        this.setState({ evenArray: evens, oddArray: odds, userInput: '' });
    } 
        
    render(){
        return(
            
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine" value={this.state.userInput} onChange={ (e) => this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={ () => this.assignEvenAndOdds(this.state.userInput)}> Split </button>
                <span className="resultsBox">Evens: {JSON.stringify(this.state.evenArray)}</span>
                <span className="resultsBox">Odds: {JSON.stringify(this.state.oddArray)}</span>
            </div>
        )
    }
}