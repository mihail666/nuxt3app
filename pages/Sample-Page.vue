<script setup lang="ts">
//@ts-ignore
import UiParentCard from '@/components/shared/UiParentCard.vue'
</script>

<template>
    <v-row>
        <UiParentCard></UiParentCard>
        <v-col cols="12" md="12">
            <sharedUiParentCard title="Sample Page"> 
                <div class="pa-7 pt-1"><p class="text-body-1">This is a sample page </p></div>
            </sharedUiParentCard>
        </v-col>
    </v-row>
</template>
