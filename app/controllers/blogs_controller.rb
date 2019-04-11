class BlogsController < ApplicationController

  def index
   @country = Country.find(params[:country_id])
   @blogs = @country.blogs
   render json: @blogs, include: :country
 end

 def show
    @blog = Blog.find(params[:id])
   render json: @blog, include: :country
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

 def edit
  @country = Country.find(params[:country_id])
   @blog = Blog.find(params[:id])
 end

 def update
   @country = Country.find(params[:country_id])
   @blog = Blog.find(params[:id])
   if @blog.update_attributes(blog_params)
     redirect_to country_blog_path(@country, @blog)
   end
 end

 def destroy
   @blog = Blog.find(params[:id])
   @country = Country.find(params[:country_id])
   @blog.destroy
   redirect_to country_blogs_path(country)
 end

 private

 def blog_params
   params.require(:blog).permit(:title, :body, :country_id)
 end
end
