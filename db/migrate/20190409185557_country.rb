class Country < ActiveRecord::Migration[5.2]
  def change
    create_table :countries do |t|
      t.string :iso
      t.float :latitude
      t.float :longitude
      t.string :name
    end 
  end
end
