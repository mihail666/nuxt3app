<script setup lang="ts">
import { ref } from 'vue';
import { RouterView } from 'vue-router';
const title = ref("traiding-bot-nuxt");

//@ts-ignore
useHead({
  meta: [{ content: title }],
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} - Nuxt3 app`
      : "Modernize - Nuxt3 app";
  },
});
</script>

<template>
    <v-locale-provider >
        <v-app>
            <LayoutFullMain/>
            <v-main>
                <v-container fluid class="page-wrapper">
                    <div class="maxWidth">
                        <RouterView />
                    </div>
                </v-container>
            </v-main>
        </v-app>
    </v-locale-provider>
</template>
