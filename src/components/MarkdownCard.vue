<template>
    <v-card>
        <div v-if="isPrerender" v-html="`{{content}}`"/>
        <v-card-text v-else v-html="markdown"/>
    </v-card>
</template>

<script>
  export default {
    name: 'MarkdownCard',
    props: {path: String, post: Object},
    computed: {
      isPrerender: () => window['__PRERENDER__'],
    },
    data() {
      return {
        title: null,
        markdown: null
      }
    },
    created() {
      if(!this.isPrerender){
        this.importMarkdown();
      }
    },
    methods: {
      importMarkdown() {
        if (typeof this.path !== 'undefined' && this.markdown === null) {
          //TODO: Need a better way to deal with markdown like VuePress
          // Check for post in path
          if (!this.path.match('post')) {

            if (this.path.match('README')) {
              // https://github.com/webpack/webpack/issues/4292
              import(`../../README.md`)
                .then((md) => {
                  this.markdown = md.default
                })
            }
          } else {
            //https://github.com/webpack/webpack/issues/4292
            import(
              `../../_posts/${this.path.replace('_posts/', '')}`)
              .then((md) => {
                this.markdown = md.default
              })
          }
        }
      }
    },
  }
</script>
