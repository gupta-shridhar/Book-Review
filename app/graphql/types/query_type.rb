module Types
  class QueryType < Types::BaseObject
    field :books, [BookType], null: true

    field :book, BookType, null: true do
      argument :id, ID, required: true
    end


    def books
      Book.all
    end

    def book(id:)
      Book.find(id)
    end
  end
end
