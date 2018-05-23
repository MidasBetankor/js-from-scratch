import React from 'react'
import AddColorForm from './AddColorForm'
import ColourList from './ColourList'
import {Component} from 'react'
import {v4} from 'uuid'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      colours: []
    }
    this.addColour = this.addColour.bind(this)
    this.rateColour = this.rateColour.bind(this)
    this.removeColour = this.removeColour.bind(this)
  }

  addColour(title, colour) {
    const colours = [
      ...this.state.colours,
      { id: v4(), title, colour, rating: 0}
    ]
    this.setState({colours})
  }
  rateColour(id, rating) {
    const colours = this.state.colours.map((colour) => 
      (colour.id !== id) ? colour: {...colour, rating})
    this.setState({colours})
  }
  removeColour(id) {
    const colours = this.state.colours.filter(colour => colour.id !== id)
    this.setState({colours})
  }

  render() {
    const {addColour, rateColour, removeColour} = this
    const {colours} = this.state
    return (
      <div className="app">
        <AddColorForm onNewColor={addColour} />
        <ColourList colours={colours}
                    onRate={rateColour}
                    onRemove={removeColour} />
      </div>
    )
  }
}

export default App
