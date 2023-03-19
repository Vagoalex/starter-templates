<template>
	<template v-if="pageMode === PageModeType.OK">
		<header class="header">
			<h3>header</h3>
		</header>
		<main>
			<router-view :key="$route.meta.key || $route.name"/>
			<my-alerts></my-alerts>
		</main>
		<footer class="footer">
			<h3>footer</h3>
		</footer>
	</template>
	<template v-else-if="pageMode === PageModeType.PAGE_NOT_FOUND">
		<my-page-not-found-error></my-page-not-found-error>
	</template>
	<template v-else-if="pageMode === PageModeType.ACCESS_DENIED">
		<my-access-denied-error></my-access-denied-error>
	</template>
</template>

<script setup lang="ts">
import { useRootStore } from "@/store";
import { storeToRefs } from "pinia";
import { PageModeType } from "@/store/types/pageModeType";
import MyPageNotFoundError from "@/views/errors/MyPageNotFoundError.vue";
import MyAccessDeniedError from "@/views/errors/MyAccessDeniedError.vue";
import MyAlerts from "@/components/alerts/MyAlerts.vue";

const mainStore = useRootStore();
const { pageMode } = storeToRefs(mainStore);
</script>

<style lang="scss">
.header {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	width: 100%;
	height: 30px;
	background: #0033ff;
}

.footer {
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	width: 100%;
	height: 30px;
	background: #aa00ff;
}
</style>
