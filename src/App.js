import React from 'react'
import { Route } from 'react-router-dom'
import BookShelf from './BookShelf'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  changeShelf = (book, shelf) => {
    let bk = this.state.books.filter((b) => b !== book)
    book.shelf = shelf
    bk.push(book)

    BooksAPI.update(book, shelf).then(() => {
      this.setState(( state ) => ({
        books: bk
      }))
    })
  }

  render() {
    const { books, booksSearch } = this.state // simplifica variavel para não precisar usar sempre o this.state

    // CRIA VARIAVEL DE ACORDO COM O FILTRO
    const currentlyReading = books.filter((book) => book.shelf === 'currentlyReading')
    const wantToRead = books.filter((book) => book.shelf === 'wantToRead')
    const read = books.filter((book) => book.shelf === 'read')

    return (
      <div className="app">
        <Route exact path="/search" render={() => (
          <SearchBooks books={ books } search={ booksSearch } />
        )} />

        <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <BookShelf category={ 'Currently Reading' } books={ currentlyReading } changeShelf={this.changeShelf}/>
              <BookShelf category={ 'Want to Reading' } books={ wantToRead } changeShelf={this.changeShelf}/>
              <BookShelf category={ 'Read' } books={ read } changeShelf={this.changeShelf}/>
            </div>
          </div>
        )} />

      </div>
    )
  }
}

export default BooksApp