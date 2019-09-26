import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Breed extends Component {
  render() {
    const { breed, image, description } = this.props

    return (
      <Link to={`/breeds/${breed}`} key={breed}>
        <img src={image} key={breed} alt={breed} />
        <p>{breed}</p>
        <p>{description}</p>
      </Link>
    )
  }
}

export default Breed
