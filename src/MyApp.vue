<template>
	<my-app-spinner-loader v-if="mainStore.isMyAppLoading"></my-app-spinner-loader>
	<router-view v-else/>
</template>

<script setup lang="ts">
import { useRootStore } from "@/store";
import MyAppSpinnerLoader from "@/components/loaders/common/MyAppSpinnerLoader.vue";

const mainStore = useRootStore();
</script>
