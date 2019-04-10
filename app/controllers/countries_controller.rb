class CountriesController < ApplicationController

  def index
    @countries = Country.all
    render json: @countries
  end

  def show
    render json: @country
  end
end
