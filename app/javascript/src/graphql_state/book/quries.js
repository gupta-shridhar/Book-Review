import gql from 'graphql-tag';

const ALL_BOOKS = gql`
  query allBooks {
    books {
      id
      title
      author
      review
      reviewer
    }
  }
`;

export { ALL_BOOKS };
