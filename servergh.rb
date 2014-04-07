require 'sinatra'
require 'rest-client'
require 'json'
require "rubygems"
require "bundler/setup"
require 'rack/ssl'
require 'sinatra/auth/github'

CLIENT_ID = ENV['ebdc67dadba7cd25f020']
CLIENT_SECRET = ENV['76ac0b4769c02cb5361855c1638374724098435c']

get '/' do
  erb :index, :locals => {:client_id => CLIENT_ID}
end


get '/callback' do
  # get temporary GitHub code...
  session_code = request.env['rack.request.query_hash']['code']

  # ... and POST it back to GitHub
  result = RestClient.post('https://github.com/login/oauth/access_token',
                          {:client_id => CLIENT_ID,
                           :client_secret => CLIENT_SECRET,
                           :code => session_code},
                           :accept => :json)

  # extract the token and granted scopes
  access_token = JSON.parse(result)['access_token']
end

