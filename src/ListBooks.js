import React, { Component } from 'react'

class ListBooks extends Component {
    render(){
        const { books, changeShelf } = this.props

        return(
            <div className="bookshelf-books">
                <ol className="books-grid">
                {books.map((book) => (
                    <li key={ book.id }>
                    <div className="book">
                        <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                        <div className="book-shelf-changer">
                            <select value={book.shelf ? book.shelf : 'none'} onChange={(event) => changeShelf(book, event.target.value)}>
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
        )
    }
}

export default ListBooks