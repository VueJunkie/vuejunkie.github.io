<template>
    <v-app id="app" data-server-rendered="true">
        <v-app-bar app>
            <v-spacer></v-spacer>
            <v-tabs
                    v-model="tab"
                    fixed-tabs
                    icons-and-text
            >
                <v-tabs-slider></v-tabs-slider>
                <v-tab to="/">
                    Home
                </v-tab>
                <v-tab to="/posts">
                    Posts
                </v-tab>
            </v-tabs>
        </v-app-bar>
        <v-tabs-items v-model="tab">
            <router-view/>
        </v-tabs-items>
    </v-app>
</template>

<script>
  export default {
    name: 'App',
    data () {
      return {
        tab: null,
      }
    },
  };
</script>

<style>
    html {
        overflow-y: auto;
    }
</style>