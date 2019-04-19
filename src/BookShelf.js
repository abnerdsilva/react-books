import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class BookShelf extends Component {
  render (){
    const { category, books } = this.props
    
    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{category}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {books.map((book) => (
                <li key='book.title'>
                  <div className="book">
                    <div className="book-top">
                      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                      <div className="book-shelf-changer">
                        <select>
                          <option value="move" disabled>Move to...</option>
                          <option value="currentlyReading">Currently Reading</option>
                          <option value="wantToRead">Want to Read</option>
                          <option value="read">Read</option>
                          <option value="none">None</option>
                        </select>
                      </div>
                    </div>
                    <div className="book-title">To Kill a Mockingbird</div>
                    <div className="book-authors">Harper Lee</div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
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