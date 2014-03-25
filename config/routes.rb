Stylle::Application.routes.draw do
  root 'home#index'

  get '/search', to: 'home#search', as: 'search'
  resource :users, only:[:create]
end
