class ChatChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stream_from "chat_#{params[:chat_id]}"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def receive(data)
  # current_user
    data["chat_key"] = "#{Time.now.to_datetime.strftime('%Q')}-#{current_user.id}"
    ActionCable.server.broadcast("chat_#{params[:chat_id]}", data)
  end
end
