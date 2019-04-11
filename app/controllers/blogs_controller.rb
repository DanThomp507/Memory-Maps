class BlogsController < ApplicationController

  def index
    @blogs = Blog.all
    render json: @blogs
  end

  def show
   @country = Country.find(params[:country_id])
   @blogs = Blog.find(params[:id])
   render json: @blogs, include: :country, status: :ok
 end

 def new
   @country= Country.find(params[:country_id])
   @blog = Blog.new
   render json: @blog, include: :country, status: :ok
 end

 def create
   @country = Country.find(params[:country_id])
   @blog = Blog.new(blog_params)
   if @blog.save
   render json: @blog, include: :country, status: :ok
  end
 end

 def destroy
 @country = Country.find(params[:country_id])
 @blog = Blog.find(params[:id])
 @blog.destroy
 render json: @blog, include: :country, status: :ok
 end

 private

 def blog_params
   params.require(:blog).permit(:title, :body, :country_id)
 end
end
