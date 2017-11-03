class Event < ApplicationRecord
  belongs_to :course
  has_many :attendees
  has_many :users, through: :attendees

  validates :name, presence: true
  validates :description, presence: true
  validates :date_time, presence: true
end
