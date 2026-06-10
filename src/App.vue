<script setup lang="ts">
import { ref } from 'vue'

import Child from '@/components/Child.vue'
import { TASK_FILTERS, type taskFilters } from '@/types.ts'

const msg = ref<taskFilters>('all')
</script>

<template>
	<div class="container mx-auto my-2">
		<h1 class="text-2xl">{{ msg ? msg.charAt(0).toUpperCase() + msg.slice(1) : msg }}</h1>
		<Child
			:taskFilters="TASK_FILTERS"
			v-model:f="msg"
		/>
	</div>
</template>
