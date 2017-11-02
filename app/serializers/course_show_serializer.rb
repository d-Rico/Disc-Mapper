class CourseShowSerializer < ActiveModel::Serializer

  attributes :id, :name, :address, :city, :state, :zip, :difficulty, :description, :photo_url, :user_id, :reviews

  has_many :reviews
end
