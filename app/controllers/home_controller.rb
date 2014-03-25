class HomeController < ApplicationController

  def index
  end

  def search
    @search = params[:search]
    query = @search.gsub(/\s/, '-') unless @search.nil?
    uri = URI("http://api.shopstyle.com/api/v2/products?pid=uid4144-24716488-94&fts=#{query}&limit=40")
    @shoes = JSON.parse(Net::HTTP.get(uri))
    @shoes = @shoes["products"]
    @email = params[:email]
    if @email.present?
      @user = User.find_by(email: @email)
      if @user.nil?
        @user = User.create(email: @email)
        @user.searches.build(query: @search)
        @user.save
      elsif @user.searches.find_by(query: @search).nil?
        @user.searches.build(query: @search)
        @user.save
      end
      @searches = @user.searches
    end
  end

  private

    def current_user
      User.find_by(email: params[:email])
    end
end
