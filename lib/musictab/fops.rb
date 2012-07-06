module MusicTab
	module FOps
		@pwd='/'
		def self.ls(dir=@pwd)
			return filter(Dir[dir+'/*'])
		end
		
		def self.filter(arr)
			filtered_arr=[]
			arr.each{ |a|
				if !File.directory?(a) then
					filtered_arr<< File.basename(a) if IO.read(a,8) == "ID3\x03\x00\x00\x00\x00"				
				else
					filtered_arr<< File.basename(a)
				end				
			}
			return filtered_arr.sort!
		end
	end
end
