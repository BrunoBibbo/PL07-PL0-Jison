$:.unshift "."
require 'sinatra'
require "sinatra/reloader" if development?
require 'sinatra/flash'
require 'pl0_program'
require 'auth'
require 'pp'

enable :sessions
set :session_secret, '*&(^#234)'
set :reserved_words, %w{grammar test login auth}

helpers do
  def current?(path='/')
    (request.path==path || request.path==path+'/') ? 'class = "current"' : ''
  end
end


get '/grammar' do
  erb :grammar
end

get '/tests' do
  erb :tests
end

get '/:selected?' do |selected|
  pp session[:auth]
  programs = PL0Program.all
  pp programs
  puts "selected = #{selected}"
  c  = PL0Program.first(:name => selected)
  source = if c then c.source else "a = 3-2-1." end
  erb :index, 
      :locals => { :programs => programs, :source => source }
end

post '/save' do
  pp params
  name = params[:fname]

  if session[:auth] # authenticated
    if settings.reserved_words.include? name  # check it on the client side
      flash[:notice] = 
        %Q{<div class="error">Can't save file with name '#{name}'.</div>}
      redirect back
    else 
      c  = PL0Program.first(:name => name)
      if c
        c.source = params["input"]
        c.save
      else
        if PL0Program.count < 10
            c = PL0Program.new
            c.name = params["fname"]
            c.source = params["input"]
            c.save
        end
      end
      pp c
      redirect '/'
      end
  else
    flash[:notice] = 
      %Q{<div class="error">You are not authenticated.<br />
         Sign in with Google.
         </div>}
    redirect back
  end
end

post '/delete' do
  pp params
  name = params[:fname]
  
  if session[:auth] # authenticated
    if settings.reserved_words.include? name  # check it on the client side
      flash[:notice] = 
        %Q{<div class="error">Can't delete file with name '#{name}'.</div>}
      redirect back
    else 
      c  = PL0Program.first(:name => name)
        if c
          c.source = params["input"]
          c.destroy
        end
      pp c
      redirect '/'
    end
  else
    flash[:notice] = 
      %Q{<div class="error">You are not authenticated.<br />
         Sign in with Google.
         </div>}
    redirect back
  end
end
