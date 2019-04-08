Rails.application.routes.draw do
 get "/users/verify", to: 'users#verify'
 post "/users/login", to: 'users#login'
  resources :users
  resources :blogs, :comments, :countries
  end
