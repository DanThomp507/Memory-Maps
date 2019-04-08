class RemoveGeolocationFromCountry < ActiveRecord::Migration[5.2]
  def change
    remove_column :countries, :geolocation, :text
  end
end
