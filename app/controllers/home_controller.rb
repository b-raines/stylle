class HomeController < ApplicationController

  def index
  end

  def search
    @search = params[:search]
    query = @search.gsub(/\s/, '-')
    uri = URI("http://api.shopstyle.com/api/v2/products?pid=uid4144-24716488-94&fts=#{query}&limit=40")
    @shoes = JSON.parse(Net::HTTP.get(uri))
    @shoes = @shoes["products"]
    @email = params[:email]
    user = User.find_by(email: @email)
    if user.nil?
      user = User.create(email: @email, searches: [ @search ])
    else
      user.add_search(@search)
    end
    @searches = user.searches
  end
end
