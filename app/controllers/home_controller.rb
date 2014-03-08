class HomeController < ApplicationController

  def index
  end

  def search
    pid = 'uid4144-24716488-94'
    @search = params[:search]
    query = @search.gsub(/\s/, '-')
    uri = URI("http://api.shopstyle.com/api/v2/products?pid=uid4144-24716488-94&fts=#{query}&limit=40")
    @shoes = JSON.parse(Net::HTTP.get(uri))
    @shoes = @shoes["products"]
  end
end
