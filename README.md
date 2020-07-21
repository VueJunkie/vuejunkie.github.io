# [Vue Junkie](https://github.com/VueJunkie/vuejunkie.github.io)
> Magical github pages theme with Dragons!

This is a hybrid project with vue-cli and jekyll. During build time for vue's production target it should insert jekyll 
liquid variables in place of development @octocat/rest requests, similar to how Jekyll Github plugins work. For now it
is only replacing Markdown documents with render templates.


## Vue Development

## Project setup
```bash
npm install
```

### Compiles and hot-reloads for development
```bash
npm run serve:vue
```

### Compiles and minifies prerender tempates for jekyll
```bash
npm run build
```

### Lints and fixes files
```bash
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Jekyll Development

To set up your environment to develop this theme, run `bundle install`.

Your theme is setup just like a normal Jekyll site! To test your theme, run `bundle exec jekyll serve` and open your browser at `http://localhost:4000`. This starts a Jekyll server using your theme. Add pages, documents, data, etc. like normal to test your theme's contents. As you make modifications to your theme and to your content, your site will regenerate and you should see the changes in the browser after a refresh, just like normal.

When your theme is released, only the files in `_layouts`, `_includes`, `_sass` and `assets` tracked with Git will be bundled.
To add a custom directory to your theme-gem, please edit the regexp in `vuejunkie.gemspec` accordingly.

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

