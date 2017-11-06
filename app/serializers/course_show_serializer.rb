class CourseShowSerializer < ActiveModel::Serializer

  attributes :id, :name, :address, :city, :state, :zip, :difficulty, :description, :photo_url, :user_id, :reviews, :events

  has_many :reviews
  has_many :events
end
