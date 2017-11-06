class User < ApplicationRecord
  has_many :courses
  has_many :reviews
  has_many :events
  has_many :attendees
  has_many :events, through: :attendees

  validates_presence_of :first_name
  validates_presence_of :last_name
  validates :email, presence: true
  validates :play_level, inclusion: { in: ["Casual", "Novice", "Experienced", "Professional"], message: "must be selected" }
  # mount_uploader :profile_photo, ProfilePhotoUploader
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
  :recoverable, :rememberable, :trackable, :validatable

  def admin?
    role == "admin"
  end

end
