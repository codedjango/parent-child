<script setup lang="ts">
type TaskFilter = 'all' | 'done' | 'todo'

const currentFilter = defineModel<TaskFilter>('f', { default: 'all' })

defineProps<{
	taskFilters: readonly TaskFilter[]
}>()

const updateFilter = (filter: TaskFilter): void => {
	currentFilter.value = filter
}
</script>

<template>
	<div>
		<button
			@click="updateFilter(filter)"
			v-for="(filter, index) in taskFilters"
			:key="index"
		>
			{{ filter }}
		</button>
	</div>
</template>
