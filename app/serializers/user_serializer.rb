class UserSerializer < ActiveModel::Serializer

  attributes :id, :first_name, :play_level

  has_many :events
  has_many :courses
  has_many :reviews
end
