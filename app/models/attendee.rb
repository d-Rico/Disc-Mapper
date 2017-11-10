class Attendee < ApplicationRecord
  belongs_to :user
  belongs_to :event

  # validate uniqueness and scope
end
