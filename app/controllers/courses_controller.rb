class CoursesController < ApplicationController
  before_action :authorize_user, except: [:index, :search]

  def index
  end

  def authorize_user
    if !user_signed_in? || !current_user.admin?
      raise ActionController::RoutingError.new("Not Found")
    end
  end
end
