class Api::V1::CoursesController < ApplicationController
  serialization_scope :current_user

  def index
    render json: Course.all
  end

  def show
    render json: Course.find(params[:id]), serializer: CourseShowSerializer
  end

end
