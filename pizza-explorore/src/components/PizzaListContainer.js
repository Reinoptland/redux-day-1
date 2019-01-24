import * as React from 'react'
import PizzaList from './PizzaList'
import { connect } from 'react-redux'

class PizzaListContainer extends React.Component {
  selectPizza(id) {
    console.log('selected pizza:', id)
  }

  render() {
    console.log(this.props)
    this.props.dispatch({ type: 'TEST' })
    return <PizzaList 
      pizzas={this.props.pizzas} 
      selectPizza={this.selectPizza} 
    />
  }
}

const mapStateToProps = (state) => {
  console.log(state, 'in map state to props')
  // the object from mapStateToProps gets added to the props of this component
  return {
    pizzas: state.pizzas
  }
}

export default connect(mapStateToProps)(PizzaListContainer)