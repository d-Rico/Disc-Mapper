class Review < ApplicationRecord
  belongs_to :course
  belongs_to :user

  validates :comments, presence: true
  validates :rating, presence: true

  RATINGS = [
    [ 1, "1 Star" ],
    [ 2, "2 Stars" ],
    [ 3, "3 Stars" ],
    [ 4, "4 Stars" ],
    [ 5, "5 Stars" ]
  ]
end
