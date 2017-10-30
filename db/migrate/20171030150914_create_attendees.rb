class CreateAttendees < ActiveRecord::Migration[5.1]
  def change
    create_table :attendees do |t|
      t.belongs_to :user, null: false
      t.belongs_to :event, null: false

      t.timestamps null: false
    end
  end
end
