<template>
	<div class="toast" :class="computed.background()">
		<div class="toast__body">
			<template v-if="icon">
				<div class="toast-icon">
					<my-icon :name="icon"
							 :color="computed.icoColor()"
							 width="30"
							 height="30">
					</my-icon>
				</div>
			</template>

			<span>{{ text }}</span>
		</div>

		<template v-if="isClosed">
			<my-icon v-if="icon"
					 name="ico-close"
					 width="30"
					 height="30"
					 @click="close"
					 class="cursor">
			</my-icon>
		</template>
	</div>
</template>

<script setup lang="ts">
import { defineEmits, watch, ref, computed, Ref } from "vue";
import MyIcon from "@/components/icon/MyIcon.vue";
import { AlertsType } from "@/types/alertsType";

const props = defineProps({
	type: {
		type: String
	},
	text: String,
	timeout: Number,
	icon: String,
	isClosed: {
		type: Boolean,
		default: true
	}
});
const emit = defineEmits(["close"]);
const close = () => emit("close");

const isShown = ref(true);

const computed = {
	background: () => {
		switch (props.type) {
			case AlertsType.ERROR:
			{
				return `toast__background--${AlertsType.ERROR}`;
			}
			case AlertsType.INFO:
			{
				return `toast__background--${AlertsType.INFO}`;
			}
		}
	},
	icoColor: () => {
		switch (props.type) {
			case AlertsType.ERROR:
			{
				return "#ff0000";
			}
			case AlertsType.INFO:
			{
				return "#002aff";
			}
		}
	}
};

if(props.timeout) setTimeout(close, props.timeout);


watch(() => isShown, (newValue: Ref<boolean>) => {
	if(!newValue) {
		close();
	}
});
</script>
<style scoped lang="scss">
.toast {
	padding: 20px;
	color: white;
	border-radius: 10px;
	box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.2);
	max-width: 400px;
	margin: 10px auto;
	display: flex;
	justify-content: space-between;
	align-items: center;

	&__body {
		display: flex;
		align-items: center;
	}

	&__background {
		&--error {
			background: #ff0000;
		}

		&--info {
			background: #002aff;
		}
	}
}

.toast-icon {
	background: white;
	width: 30px;
	height: 30px;
	border-radius: 20px;
	margin-right: 10px;
}

.cursor {
	cursor: pointer;
}
</style>
