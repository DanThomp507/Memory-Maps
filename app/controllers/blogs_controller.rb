class BlogsController < ApplicationController

  def index
    @blogs = Blog.all
    render json: @blogs
  end

  def show
   @country = Country.find(params[:country_id])
   @blogs = Blog.find(params[:id])
 end

 def new
   @country= Country.find(params[:country_id])
   @blog = Blog.new
 end

 def create
   @country = Country.find(params[:country_id])
   @blog = Blog.new(blog_params)
   if @blog.save
     redirect_to country_blog_path(@country, @blog)
   end
 end

 def destroy
 @blog = Blog.find(params[:id])
 @country = Country.find(params[:country_id])
 @blog.destroy
 redirect_to country_blog_path(@country)
 end

 private

 def blog_params
   params.require(:blog).permit(:title, :body, :country_id)
 end
end
