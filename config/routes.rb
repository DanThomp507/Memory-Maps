Rails.application.routes.draw do
  get "/users/verify", to: 'users#verify'
  post "/users/login", to: 'users#login'
  post 'user_token' => 'user_token#create'

  resources :users do
  resources :countries do
  resources :blogs, :comments
end 
  end
  resources :countries, :blogs, :comments


end
