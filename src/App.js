import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { allBreeds } from './data'
import Landing from './pages/Landing'
import Breeds from './pages/Breeds'
import Information from './pages/Information'

class App extends Component {
  render() {
    return (
      <>
        <Route exact path='/' component={Landing} key='/' />
        <Route exact path='/breeds' component={Breeds} key='/breeds' />
        {allBreeds.map(breed => {
          return (
            <div>
              <Route
                exact
                path={`/breeds/${breed.breed}`}
                render={() => <Information {...breed} />}
                key={breed.breed}
              />
            </div>
          )
        })}
      </>
    )
  }
}

export default App
