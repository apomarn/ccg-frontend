import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Breeds from './pages/Breeds'
import Information from './pages/Information'
import Include from './pages/Include'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      allBreeds: []
    }
  }
  render() {
    return (
      <>
        <Route exact path='/' component={Landing} key='/' />
        <Route exact path='/breeds' component={Breeds} key='/breeds' />
        {this.state.allBreeds.map(breed => {
          return (
            <Fragment key={breed._id}>
              <Route exact path={`/breeds/${breed.breed}`} render={() => <Information {...breed} />} key={breed._id} />
            </Fragment>
          )
        })}
        <Route exact path='/add' component={Include} key='/add' />
      </>
    )
  }
  componentDidMount() {
    var url

    if (process.env.NODE_ENV === 'development') {
      url = 'http://localhost:5000'
    } else {
      url = 'https://ccg-server.herokuapp.com'
    }

    fetch(`${url}/allbreeds`)
      .then(data => data.json())
      .then(breeds => {
        this.setState({ allBreeds: breeds })
      })
      .catch(err => console.log(err))
  }
}

export default App
