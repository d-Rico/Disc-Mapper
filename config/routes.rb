Rails.application.routes.draw do

  devise_for :users

  namespace :api do
    namespace :v1 do
      resources :courses
      # resources :reviews, only: [:index, :show, :create]
      resources :events
      resources :users, only: :index
    end
  end

  mount ActionCable.server => '/cable'

  resources :chatrooms, param: :slug
  resources :messages

  root 'courses#index'
  get "*path", to: "courses#index"
end
