require 'rubygems' if RUBY_VERSION.to_f < 1.9
require 'sinatra/base'
require 'haml'

require 'json'

require File.expand_path("musictab/version",File.dirname(__FILE__))
require File.expand_path("musictab/db_wrap",File.dirname(__FILE__))
require File.expand_path("musictab/fops",File.dirname(__FILE__))

module MusicTab
	class Server < Sinatra::Base

		set :root, File.dirname(File.dirname(__FILE__))
		set :views, File.dirname(__FILE__) + "/../views"
		set :public_folder, File.dirname(__FILE__) + "/../public"
		#set :server, :thin
		
		configure :development do  
			DataMapper.auto_upgrade!  
		end 

		get '/' do
			if Sources.all.size > 0 then
				haml :home, {:layout => :"home-layout"}
			elsif request.ip == "127.0.0.1" then
				redirect '/setup/sources'
			else
				redirect '/nothing-here'
			end				
		end 
		
		get '/setup/sources' do
			if Sources.all.size > 0 then
				redirect '/setup/files'
			else
				@list=FOps.ls(Dir.home).to_json
				haml :setup, {:layout => :"nosetup-layout"}
			end
		end
		
		get '/setup/files' do
			
		end
		
		get '/nothing-here' do
			haml :nosetup, {:layout => :"nosetup-layout"}
		end
		
		get '/dev' do
			send_file(Dir.home+'/Nuvvena.ogg')			
		end
		
		get '/music/:id' do
			send_file(Files.fetch(params[:id].to_i).file_path)
		end
		
		get '/setup/cdls/*' do
			puts '/'+params[:captures].join
			FOps.ls('/'+params[:captures].join).to_json
		end
		
	end
end
