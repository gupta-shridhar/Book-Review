class Mutations::CreateBook < Mutations::BaseMutation
  field :error_messages, [String], null: true
  field :book, Types::BookType, null: true

  argument :book, InputObjects::BookAttributes, required: true

  def resolve(book:)
    do_resolve(context, book.to_h)
  end

  private

  def do_resolve(context, book_attrs)
    book = Book.new(book_attrs)

    if book.save
      { book: book }
    else
      book.errors.full_messages
    end
  end
end
