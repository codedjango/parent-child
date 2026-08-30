<script setup lang="ts">
import type { TaskFilter } from '@/types'

const currentFilter = defineModel<TaskFilter>('f', { default: 'all' })

defineProps<{
	taskFilters: TaskFilter[]
}>()

const updateFilter = (filter: TaskFilter): void => {
	currentFilter.value = filter
}
</script>

<template>
	<div class="flex gap-4">
		<button
			@click="updateFilter(filter)"
			v-for="(filter, index) in taskFilters"
			:key="index"
			class="my-4 rounded px-4 py-2 font-bold text-white hover:bg-blue-700"
			:class="currentFilter === filter ? 'bg-amber-600' : 'bg-amber-300'"
		>
			{{ filter ? filter.charAt(0).toUpperCase() + filter.slice(1) : filter }}
		</button>
	</div>
</template>
