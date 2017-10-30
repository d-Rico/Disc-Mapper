class CreateCourses < ActiveRecord::Migration[5.1]
  def change
    create_table :courses do |t|
      t.string :name, null: false
      t.string :address, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.string :zip, null: false
      t.string :description, null: false
      t.string :difficulty, null: false
      t.boolean :water_hazard, null: false
      t.string :photo_url, null: false
      t.belongs_to :user, null: false

      t.timestamps null: false
    end
  end
end
