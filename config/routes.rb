Rails.application.routes.draw do

  resources :users do
  resources :countries, :blogs, :comments

  end
  resources :countries do
  resources :blogs, :comments
  end

 get "/users/verify", to: 'users#verify'
 post "/users/login", to: 'users#login'

end
