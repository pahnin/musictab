# -*- encoding: utf-8 -*-
require File.expand_path('../lib/musictab/version', __FILE__)

Gem::Specification.new do |gem|
  gem.authors       = ["Phanindra Srungavarapu"]
  gem.email         = ["pahninsd@gmail.com"]
  gem.description   = %q{MusicTab player is a music player with htlm5 frontend,
you can play and make playlists of you music collection in you browser tab.

It is powered by sinatra server in the backed and html5 audio player
}
  gem.summary       = %q{}
  gem.homepage      = "https://github.com/pahnin/musictab"

  gem.files         = `git ls-files`.split($\)
  gem.executables   = gem.files.grep(%r{^bin/}).map{ |f| File.basename(f) }
  gem.test_files    = gem.files.grep(%r{^(test|spec|features)/})
  gem.name          = "musictab"
  gem.require_paths = ["lib"]
  gem.version       = MusicTab::VERSION
end
