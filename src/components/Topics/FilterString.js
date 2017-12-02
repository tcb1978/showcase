import React, { Component } from 'react'

export default class FilterString extends Component {

    constructor() {

        super()

        this.state = {

            userInput: '',

            names: ['snap', 'crackle', 'pop', 'krackle', 'popped', 'frackle', 'snaz',],

            filteredNames: [],

        }
    }

    filterName(userInput) {
        const names = this.state.names
        const filteredNames = []
        for (let i = 0; i < names.length; i++) {
            if (names[i].includes(userInput)) {
            filteredNames.push(names[i])
            }
        }
        this.setState({filteredNames: filteredNames})
    }

    handleChange(val) {
        this.setState({ userInput: val });
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4 value="Filter String">Filter String</h4>
                <span className="puzzleText">{JSON.stringify(this.state.names)}</span>
                <input className="inputLine" value="Filter String" value={this.state.userInput} onChange={(e) => this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.filterName(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterStringPB">Filtered:{JSON.stringify(this.state.filteredNames)}</span>
            </div>
        )
    }
}