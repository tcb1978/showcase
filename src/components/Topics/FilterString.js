import React, { Component } from 'react'

export default class FilterString extends Component {

    constructor() {

        super()

        state.this = {

            userInput: '',

            unFilteredArray: ['snap', 'crackle', 'pop',],

            filteredArray: [],

        }
    }

    handleChange(val) {
        this.setState({ userInput: val });
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4 value="Filter String">Filter String</h4>
                <span className="puzzleText"></span>
                <input className="inputLine" value="Filter String" value={this.state.userInput} onChange={(e) => this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.filterGuitars(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterStringPB">Filtered:{JSON.stringify(this.state.filteredGuitar)}</span>
            </div>
        )
    }
}