class RemoveIsoFromCountries < ActiveRecord::Migration[5.2]
  def change
    remove_column :countries, :iso, :string
  end
end
