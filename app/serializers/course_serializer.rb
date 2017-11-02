class CourseSerializer < ActiveModel::Serializer

  attributes :id, :name, :address, :city, :state, :zip, :description, :water_hazard, :photo_url, :difficulty

  belongs_to :user
  has_many :reviews
  has_many :events
end
