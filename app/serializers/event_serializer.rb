class EventSerializer < ActiveModel::Serializer

  attributes :id, :name, :description, :date_time, :course, :users

  belongs_to :course
  has_many :users
end
