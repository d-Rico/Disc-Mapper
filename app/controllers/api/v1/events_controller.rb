class Api::V1::EventsController < ApplicationController
  def index
    render json: Event.all
  end

  def create

    attributes = JSON.parse(request.body.read)
    attributes["user"] = current_user
    matching_events = Event.where(date_time: attributes["date_time"], course_id: attributes["course_id"])
    if matching_events == []
      event = Event.new(attributes)
      if event.save
        Attendee.create( user: current_user, event: event)
        render json: event
      else
        render json: { error: event.errors.full_messages }, status: :unprocessable_entity
      end
    elsif matching_events.first.users.length < 4 && matching_events.first.users.exclude?(current_user)
      binding.pry
      event = matching_events.first
      attendee = Attendee.new(user: current_user, event: event)
      if attendee.save
        render json: { message: "You have successfully joined your Pair-Up!"}
      else
        render json: { error: "You must be logged in to sign up for Pair-Ups" }, status: :unauthorized
      end
    else
      render json: { error: "This Pair-Up full, please select a different time" }, status: :unprocessable_entity
    end

  end
end
