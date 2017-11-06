class EventSerializer < ActiveModel::Serializer

  attributes :id, :name, :description, :date_time

  belongs_to :user
  belongs_to :course
  has_many :users
end
