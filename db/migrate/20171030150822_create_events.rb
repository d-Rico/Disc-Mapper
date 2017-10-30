class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.string :name, null: false
      t.string :description, null: false
      t.datetime :date_time, null: false
      t.belongs_to :course, null: false

      t.timestamps null: false
    end
  end
end
