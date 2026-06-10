<script setup lang="ts">
import { ref } from 'vue'

import Child from '@/components/Child.vue'
import { TASK_FILTERS, type TaskFilter } from '@/types'

const msg = ref<TaskFilter>('all')
</script>

<template>
	<div class="container mx-auto my-2">
		<h1 class="text-2xl">{{ msg ? msg.charAt(0).toUpperCase() + msg.slice(1) : msg }}</h1>
		<Child
			:task-filters="TASK_FILTERS"
			v-model:f="msg"
		/>
	</div>
</template>
