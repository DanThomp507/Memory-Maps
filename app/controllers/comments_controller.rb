class CommentsController < ApplicationController

  def index
    @comments = Comment.all
    render json: @comments
  end

  def show
    @country = Country.find(params[:country_id])
    @comment = Comment.find(params[:id])
  end

  def create
    @country = Country.find(params[:country_id])
    @comment = Comment.new(comment_params)
    if @comment.save
      redirect_to country_comment_path(@country, @comment)
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    @country = Country.find(params[:country_id])
    @comment.destroy
      redirect_to country_comment_path(@country)
  end

  private

  def comment_params
    params.require(:comment).permit(:fave_food,:fave_city, :fave_site, :would_revisit, :biggest_surprise, :country_id)
  end
end
