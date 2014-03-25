class SearchesController < ApplicationController
  before_action :current_user

  def create

  end

  def destroy
    Search.find(params[:id]).delete
  end

  private

  def current_user
    @user = User.find_by(params[:email])
  end
end
