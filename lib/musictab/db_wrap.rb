require 'sqlite3'
require 'dm-core'  
require 'dm-timestamps'  
require 'dm-validations'  
require 'dm-migrations' 

DataMapper.setup :default, "sqlite://#{Dir.pwd}/db/database.db" 

class Sources
	include DataMapper::Resource  
	          
	property :id       , Serial  
	property :path , String  
	property :name    , String  
end  

class Files
	include DataMapper::Resource  
	
	property :id		, Serial
	property :file_path	, String
	property :title		, String
	property :album		, String
	property :artist	, String
	property :include  	, Boolean, :default  => true
end
	
