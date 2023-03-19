<template>
	<div :style="styleObject" class="d-flex" @click="$emit('click')">
		<inline-svg :width="`${width}px`" :height="`${height}px`" :src="processedSrc"></inline-svg>
	</div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import InlineSvg from "vue-inline-svg";
import { getBaseUrl } from "@/utils/getBaseUrl";

const props = defineProps({
	name: {
		type: String,
		required: true
	},
	width: {
		type: [String, Number],
		required: true
	},
	height: {
		type: [String, Number],
		required: true
	},
	color: String
});

const baseUrl = getBaseUrl();

const styleObject = computed(() => ({ color: props.color, fill: props.color }));
const processedSrc = computed(() => `${baseUrl}/img/icons/${props.name}.svg`);
</script>
