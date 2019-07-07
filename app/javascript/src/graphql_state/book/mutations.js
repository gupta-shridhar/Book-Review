import gql from 'graphql-tag';

const CREATE_BOOK_REVIEW = gql`
  mutation createBookReview($book: BookAttributes!) {
    createBook(input: { book: $book }) {
      errorMessages
      book {
        id
        title
        author
        review
        reviewer
      }
    }
  }
`;

export { CREATE_BOOK_REVIEW };
