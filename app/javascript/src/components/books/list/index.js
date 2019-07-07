import React from 'react';
import { isEmpty } from 'lodash';
import { Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import { compose, graphql } from 'react-apollo';

import { bookState } from '../../../graphql_state';

const BookList = ({ data: { loading, error, books } }) => {

  const renderBooks = () => (
    books.map(book => (
      <tr key={book.id}>
        <th>{book.id}</th>
        <th>{book.title}</th>
        <td>{book.author}</td>
        <td>{book.reviewer}</td>
        <td>{book.review}</td>
      </tr>
    ))
  );

  if (loading) return 'Loading...';
  if(error) return 'Error Occured';

  return (
    <React.Fragment>
      <h2><header>Book Review</header></h2>

      <Link to="/books/new">+ New Book Review</Link>

      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Author</th>
            <th>Reviewer</th>
            <th>Review</th>
          </tr>
        </thead>
        <tbody>
          {isEmpty(books) ? <p>No Books Avalable</p> : renderBooks()}
        </tbody>
      </Table>
    </React.Fragment>
  );
}

export default compose(
  graphql(
    bookState.queries.ALL_BOOKS, {
      options: () => ({
        fetchPolicy: 'network-only',
      }),
    }
  ),
)(BookList);
