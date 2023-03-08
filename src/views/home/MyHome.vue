<script setup lang="ts">
import { ref } from "vue";
import { useMainStore } from "@/store/main";
import MyIcon from "@/components/icon/MyIcon.vue";
import { useFakeApiProductsStore } from "@/store/modules/fakeApi/products";

const mainStore = useMainStore();
const productsStore = useFakeApiProductsStore();

const title = ref("Hello world!");

const testSecretKey = import.meta.env.VITE_SECRET_ENV_LOCAL_TEST_CODE;

</script>

<template>
	<div class="test">
		<h1 class="test__title">{{ title }}</h1>
		<div class="test-div">
			<div>
				Test counter: {{ mainStore.count }}
			</div>
			<button @click="mainStore.increment()">INCR counter</button>
			<button @click="mainStore.doubleIncrement()">Double counter</button>
			<div>
				Doubled counter: {{ mainStore.doubleCount }}
			</div>
			<div class="flex">
				<span>Test svg:</span>

				<my-icon name="vite"></my-icon>

				<div>{{ testSecretKey }}</div>

				<div>
					<h4 v-if="productsStore.isProductsLoading">Loading.....</h4>
					<button v-else @click="productsStore.fetchProducts">Fetch products</button>
				</div>

				<template v-if="productsStore.products.products.length">
					<div class="products-wrapper">
						<div class="products">
							{{ productsStore.products.products[0].id }}
						</div>
						<div class="products">
							{{ productsStore.products.products[0].title }}
						</div>
						<div class="products">
							{{ productsStore.products.products[0].description }}
						</div>
						<div class="products">
							{{ productsStore.products.products[0].price }}
						</div>
						<div class="products">
							{{ productsStore.products.products[0].discountPercentage }}
						</div>
					</div>
				</template>

			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.test {
	margin: 0 auto;
	text-align: center;
	display: flex;
	justify-content: center;
	flex-direction: column;
	height: 100vh;

	&__title {
		color: red;
		font-weight: 700;
		text-transform: uppercase;
	}
}

.test-div {
	font-size: 20px;
	font-weight: 700;
}

.flex {
	display: flex;
	justify-content: center;
}

.products-wrapper {
	display: flex;
	justify-content: center;
	flex-direction: column;
}
</style>
