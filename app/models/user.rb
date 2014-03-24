class User < ActiveRecord::Base

  def add_search(search)
    self.searches = [] if self.searches == nil
    unless self.searches.include?(search)
      update_attributes searches: self.searches + [ search ]
    end
  end
end
