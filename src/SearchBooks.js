import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import ListBooks from './ListBooks';

class SearchBooks extends Component {
    state = {
        query: ''
    }

    updataQuery = (query) => {
        this.setState({ query: query.trim() })
    }

    render(){
        let showingBooks
        if(this.state.query){
            const match = new RegExp(escapeRegExp(this.state.query), 'i')
            showingBooks = this.props.books.filter((book) => match.test(book.title))
        } else {
            showingBooks = []
        }

        const { changeShelf } = this.props

        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link 
                        to='/'
                        className="close-search">Close</Link>
                    
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={this.state.query} onChange={(event) => this.updataQuery( event.target.value )}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        <ListBooks books={ showingBooks } changeShelf={ changeShelf } />
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchBooks