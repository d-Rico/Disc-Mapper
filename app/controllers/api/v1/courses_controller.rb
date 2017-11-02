class Api::V1::CoursesController < ApplicationController
  # serialization_scope :current_user

  def index
    render json: Course.all
  end

  def show
    render json: Course.find(params[:id]), serializer: CourseShowSerializer
  end


  # def create
  #   park = Park.new(
  #     name: params[:name],
  #     address: params[:address],
  #     city: params[:city],
  #     state: params[:state],
  #     zip: params[:zip],
  #     category: params[:category],
  #     description: params[:description],
  #     photo_url: params[:photo_url],
  #     size: params[:size].to_i,
  #     user_id: current_user.id
  #   )
  #
  #
  #   if park.save
  #     render json: { park: park }
  #   else
  #     render json: { error: park.errors.full_messages }, status: :unprocessable_entity
  #   end
  # end
end
