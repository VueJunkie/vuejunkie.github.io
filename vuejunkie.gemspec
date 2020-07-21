# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "vuejunkie"
  spec.version       = "0.1.0"
  spec.authors       = ["PhearZero"]
  spec.email         = ["github@phearzero.com"]

  spec.summary       = "Vuetify Jekyll Theme"
  spec.homepage      = "https://vuejunkie.github.io"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 3.8.5"
end
