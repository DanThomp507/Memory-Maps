class AddColumnToBlog < ActiveRecord::Migration[5.2]
  def change
    add_column :blogs, :country_id, :integer
  end
end
