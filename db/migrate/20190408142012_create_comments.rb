class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.text :fave_food
      t.text :fave_city
      t.text :fave_site
      t.boolean :would_revisit
      t.text :biggest_surprise

      t.timestamps
    end
  end
end
