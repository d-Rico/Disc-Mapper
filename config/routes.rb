Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  devise_for :users

  namespace :api do
    namespace :v1 do
      resources :courses
      # resources :reviews, only: [:index, :show, :create]
      resources :events
    end
  end

  root 'courses#index'
  get "*path", to: "courses#index"
end
