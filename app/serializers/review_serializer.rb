class ReviewSerializer < ActiveModel::Serializer

  attributes :id, :rating, :comments, :user

  belongs_to :course
  belongs_to :user
end
