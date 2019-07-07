import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { compose, graphql } from "react-apollo";
import { bookState } from "../../../graphql_state";

const Book = ({ createBookReview, history }) => {
  const [title, setTitle] = useState(null);
  const [author, setAuthor] = useState(null);
  const [review, setReview] = useState(null);
  const [reviewer, setReviewer] = useState(null);

  const handleFormSubmit = event => {
    event.preventDefault();
    createBookReview({
      variables: { book: { title, author, review, reviewer } }
    }).then(() => history.push('/books'));
  };

  const handleChange = event => {
    switch(event.target.id) {
      case 'title':
        setTitle(event.target.value);
        break;
      case 'author':
        setAuthor(event.target.value);
        break;
      case 'review':
        setReview(event.target.value);
        break;
      case 'reviewer':
        setReviewer(event.target.value);
        break;
      default:
        null;
    }
  };

  return (
    <div>
      <h2><header>Book Review</header></h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Title</label>
          <input type="text" id="title" onChange={handleChange} required/>
        </div>

        <div>
          <label>Author</label>
          <input type="text" id="author" onChange={handleChange} required/>
        </div>

        <div>
          <label>Reviewer</label>
          <input type="text" id="reviewer" onChange={handleChange} required/>
        </div>

        <div>
          <label>Review</label>
          <textarea rows="10" cols="60" id="review" onChange={handleChange} required/>
        </div>
        <button type="submit">SUBMIT</button>
        <Link to="/books">Go to List</Link>
      </form>
    </div>
  );
}

export default compose(graphql(bookState.mutations.CREATE_BOOK_REVIEW, { name: 'createBookReview' }))(Book);
