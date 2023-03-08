<script setup lang="ts">
import { ref } from "vue";
import { useMainStore } from "@/store/main";
import MyAppSpinnerLoader from "@/components/loaders/common/MyAppSpinnerLoader.vue";

const mainStore = useMainStore();
</script>

<template>
	<my-app-spinner-loader v-if="mainStore.isMyAppLoading"></my-app-spinner-loader>
	<router-view v-else/>
</template>
