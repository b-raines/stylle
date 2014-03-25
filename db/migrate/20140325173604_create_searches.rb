class CreateSearches < ActiveRecord::Migration
  def change
    create_table :searches do |t|
      t.integer :user_id, index: true
      t.string :query

      t.timestamps
    end
  end
end
