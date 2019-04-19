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

  render() {
    const { books } = this.state // simplifica variavel para não precisar usar sempre o this.state

    // CRIA VARIAVEL DE ACORDO COM O FILTRO
    let currentlyReading = books.filter((book) => book.shelf === 'currentlyReading')
    let wantToRead = books.filter((book) => book.shelf === 'wantToRead')
    let read = books.filter((book) => book.shelf === 'read')

    return (
      <div className="app">
        <Route exact path="/search" render={() => (
          <SearchBooks />
        )} />

        <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <BookShelf category={ 'Currently Reading' } books={ currentlyReading }/>
              <BookShelf category={ 'Wait to Reading' } books={ wantToRead }/>
              <BookShelf category={ 'Read' } books={ read }/>            </div>
          </div>
        )} />

      </div>
    )
  }
}

export default BooksApp