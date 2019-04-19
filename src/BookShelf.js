import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ListBooks from './ListBooks'

class BookShelf extends Component {
  render (){
    const { category, books, changeShelf } = this.props

    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{category}</h2>
          <ListBooks books={ books } changeShelf={ changeShelf } />
        </div>
        

        <div className="open-search">
          <Link
            to='/search'
          >Add a book</Link>
        </div>
      </div>
    )
  }
}

export default BookShelf