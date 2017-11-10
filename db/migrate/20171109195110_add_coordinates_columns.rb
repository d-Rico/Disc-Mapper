class AddCoordinatesColumns < ActiveRecord::Migration[5.1]
  def change
    add_column :courses, :longitude, :float
    add_column :courses, :latitude, :float
  end
end
