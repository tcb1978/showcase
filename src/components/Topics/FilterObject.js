import React, { Component } from 'react'

export default class FilterObject extends Component {

    constructor() {
        super()

        this.state = {

            filteredGuitar: [],

            userInput: '',
            
            guitars : [
                {
                    make: 'Gibson',
                    model: 'SG',
                    color: 'white',
                },
                {
                    make: 'Fender',
                    model: 'Telecaster',
                    year: '\'63',
                },
                {
                    make: 'Nash',
                    model: 'No-Caster',
                    endorsee: 'Matthew Eldredge'
                }
            ]
        }
    }

    filterGuitars(prop) {
        //.hasOwnProperty(prop)
        const arr = this.state.guitars
        const filteredGuitar = []
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].hasOwnProperty(prop)) {
                filteredGuitar.push(arr[i])
                console.log(filteredGuitar);
            }
        }
        this.setState({ filteredGuitar: filteredGuitar})
    }


    handleChange(val) {
        this.setState({ userInput: val });
    }

    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span><i>make, model, year, color, endorsee</i></span>
                <span className="puzzleText"></span>
                <input className="inputLine" value={this.state.userInput} onChange={(e) => this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.FilterObject(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterObjectPB">Filtered:{JSON.stringify(this.state.filteredGuitar)}</span>
            </div>
        )
    }
}