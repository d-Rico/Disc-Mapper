class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.string :comments, null: false
      t.integer :rating, null: false
      t.belongs_to :user, null: false
      t.belongs_to :course, null: false

      t.timestamps null: false
    end
  end
end
