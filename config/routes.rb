Stylle::Application.routes.draw do
  root 'home#index'

  get '/search', to: 'home#search', as: 'search'
  resources :users do
    resources :searches
  end
end
