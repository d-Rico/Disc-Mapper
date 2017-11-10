class CourseShowSerializer < ActiveModel::Serializer

  attributes :id, :name, :address, :city, :state, :zip, :difficulty, :water_hazard, :description, :photo_url, :user_id, :reviews, :events, :latitude, :longitude

  has_many :reviews
  has_many :events
end
