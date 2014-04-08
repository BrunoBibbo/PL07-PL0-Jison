require 'omniauth-oauth2'
require 'omniauth-google-oauth2'
require 'omniauth-twitter'

use OmniAuth::Builder do
  #config = YAML.load_file 'config/config_template.yml'
  #provider :google_oauth2, config['identifier'], config['secret']

  provider :google_oauth2, '427790437902-rrctbhjqbtntbmqv868gciesa4lae9t6.apps.googleusercontent.com','yhulvz3NyNikKRgw-8nxJ3fg'
  provider :twitter, 'urwk8N1OYdwDKSKH8P188M93X', 'jx17JqcqEn4zMiuv2l5rq4XxCclR255n6xPpw7LxB0ENwRXYF2'

end

get '/auth/:provider/callback' do

  session[:auth] = @auth = request.env['omniauth.auth']
  session[:name] = @auth['info'].name
  session[:image] = @auth['info'].image
  puts "params = #{params}"
  puts "@auth.class = #{@auth.class}"
  puts "@auth info = #{@auth['info']}"
  puts "@auth info class = #{@auth['info'].class}"
  puts "@auth info name = #{@auth['info'].name}"
  puts "@auth info email = #{@auth['info'].email}"
  #puts "-------------@auth----------------------------------"
  #PP.pp @auth
  #puts "*************@auth.methods*****************"
  #PP.pp @auth.methods.sort
  flash[:notice] = %Q{<div class="success">Authenticated as #{@auth['info'].name}.</div>}
  redirect '/'
end

get '/auth/failure' do
  flash[:notice] = params[:message] 
  redirect '/'
end