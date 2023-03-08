<script setup lang="ts">
// import FrpBreadcrumbs from "@/components/common/FrpBreadcrumbs";
// import FrpAlerts from "@/components/alerts/FrpAlerts";
// import storeManager from "@/ctore/manager";
// import FrpPageNotFound from "@/views/errors/FrpPageNotFound.vue";
// import FrpAccessDeniedError from "@/views/errors/FrpAccessDeniedError.vue";
// import { PageModeType } from "@/store/types/pageModeType";
//
//
// export default {
// 	data() {
// 		return {
// 			storeManager,
// 			PageModeType
// 		};
// 	},
// 	computed: {
// 		...mapState({
// 			pageMode: state => state.pageMode
// 		})
// 	},
// 	components: {
// 		FrpAccessDeniedError,
// 		FrpPageNotFound,
// 		FrpBreadcrumbs,
// 		FrpAlerts
// 	}
// };
</script>


<template>
	<header>

	</header>
	<main>
		<router-view :key="$route.meta.key || $route.name"/>
	</main>
	<footer>

	</footer>
</template>
<style lang="scss">

</style>
