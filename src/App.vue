<script setup lang="ts">
import { ref } from 'vue'

import Child from '@/components/Child.vue'
import { TASK_FILTERS, type taskFilters } from '@/types.ts'

const msg = ref<taskFilters>('all')
</script>

<template>
	<h1>{{ msg }}</h1>
	<Child
		:taskFilters="TASK_FILTERS"
		v-model:f="msg"
	/>
</template>
