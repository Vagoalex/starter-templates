<script setup lang="ts">
import { ref } from "vue";
import { useMainStore } from "./stores/main";

const mainStore = useMainStore();

const title = ref("Hello world!");

</script>

<template>
	<div class="test">
		<h1 class="test__title">{{ title }}</h1>
		<div class="test-div">
			<div>
				Test counter:  {{mainStore.count}}
			</div>
			<button @click="mainStore.increment()">INCR counter</button>
			<button @click="mainStore.doubleIncrement()">Double counter</button>
			<div>
				Doubled counter: {{mainStore.doubleCount}}
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
</style>
