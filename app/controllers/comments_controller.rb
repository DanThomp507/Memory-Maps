class CommentsController < ApplicationController

  def index
    @comments = Comment.all
    render json: @comments
  end

  def show
    @country = Country.find(params[:country_id])
    @comment = Comment.find(params[:id])
    render json: @comments, include: :country, status: :ok
  end

  def new
    @country= Country.find(params[:country_id])
    @comment = Comment.new
    render json: @comment, include: :country, status: :ok
  end

  def create
    @country = Country.find(params[:country_id])
    @comment = Comment.new(comment_params)
    if @comment.save
    render json: @comment, include: :country, status: :ok
   end
  end

  def destroy
    @country = Country.find(params[:country_id])
    @comment = Comment.find(params[:id])
    @comment.destroy
  end

  private

  def comment_params
    params.require(:comment).permit(:fave_food,:fave_city, :fave_site, :would_revisit, :biggest_surprise, :country_id)
  end
end
