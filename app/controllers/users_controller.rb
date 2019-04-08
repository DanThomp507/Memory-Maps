class UsersController < ApplicationController
  skip_before_action :ensure_signed_in, only: [:create, :login]

 def gen_token(user_id)
   payload = {id: user_id}
   JWT.encode(payload, Rails.application.secrets.secret_key_base)
 end

  def index
    @users = User.all
    render json: @users
  end

  def create
   name = params[:name]
   username = params[:username]
   password = params[:password]
   email = params[:email]
   bio = params[:bio]

   new_user = User.new({
     name: name,
     username: username,
     password: password,
     email: email,
     bio: bio
   })


   if new_user.valid?
     new_user.save!
     user_data = {
       name: user.name,
       username: user.username,
       password: user.password,
       bio: user.bio,
       email: user.email
     }
     render json: { user: user_data, token: gen_token(new_user.id)}
   else
     render nothing: true, status: 401
   end
 end

 def login
   email = params[:email]
   password = params[:password]

   user = User.find_from_credentials email, password
   if user.nil?
     render nothing: true, status: 401
   else
     render json: {user: user, token: gen_token(user.id)}
   end
 end

 def verify
   ensure_signed_in
   render json: { user: current_user }
 end
end
