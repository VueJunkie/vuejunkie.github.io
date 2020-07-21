<template>
    <v-main id="v-posts-view">
        <MarkdownCard
                v-for="(post,key) in posts"
                :key="key"
                :path="post.path"
                :post="post"
        />
    </v-main>
</template>

<script>
  import MarkdownCard from '@/components/MarkdownCard'
  import posts from '@/store/posts.json'

  export default {
    name: 'v-posts-view',
    components: {MarkdownCard},
    data: () => {
      return {
        posts,
      }
    },
  }
</script>
<style>
    #v-posts-view div.v-card__text p:nth-child(-n+2)  {
        margin: 0;
        padding: 0;
        height: 0;
        visibility: hidden;
    }
    #v-posts-view div.v-card__text hr  {
        margin: 0;
        padding: 0;
        height: 0;
        visibility: hidden;
    }
</style>
