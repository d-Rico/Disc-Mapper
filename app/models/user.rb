class User < ApplicationRecord
  has_many :courses
  has_many :reviews
  has_many :events

  validates_presence_of :first_name
  validates_presence_of :last_name
  validates :email, presence: true
  validates :play_level, presence: true
  mount_uploader :profile_photo, ProfilePhotoUploader
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
  :recoverable, :rememberable, :trackable, :validatable

  def admin?
    role == "admin"
  end

  PLAY_LEVELS = [
    "Casual",
    "Novice",
    "Experienced",
    "Professional"
  ]
  
end
