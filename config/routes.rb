Rails.application.routes.draw do
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end
  post "/graphql", to: "graphql#execute"

  get '/books' => 'index#index'
  get '/books/*other' => 'index#index'

  root to: "index#index"
end
