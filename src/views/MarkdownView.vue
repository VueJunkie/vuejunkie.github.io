<template>
    <v-main id="v-markdown-view">
        <MarkdownCard
            :path="path"
        />
    </v-main>
</template>

<script>
  import MarkdownCard from '@/components/MarkdownCard'
  export default {
    name: 'MarkdownView',
    replace: false,
    components:{MarkdownCard},
    props: {
      path: String
    },
  }
</script>
