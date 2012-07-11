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
	property :file_path	, String, :length => 500
	property :title		, String, :length => 100
	property :album		, String, :length => 100
	property :artist	, String, :length => 100
	property :include  	, Boolean, :default  => 1
end
	
DataMapper.finalize
