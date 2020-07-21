<template>
    <v-main>
        <v-card>
            <v-toolbar color="error" flat>
                <v-btn outlined dark>Error</v-btn>
            </v-toolbar>
            <v-card-title>404</v-card-title>
            <v-card-text>
                <h3>Not found!</h3>
                {{ $route.params.pathMatch }}
            </v-card-text>
        </v-card>
    </v-main>
</template>


<script>
  export default {
    name: 'ErrorView',
  }
</script>
