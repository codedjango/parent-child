export type TaskFilter = 'all' | 'done' | 'todo'

export const TASK_FILTERS = ['all', 'done', 'todo'] as const
export type taskFilters = (typeof TASK_FILTERS)[number]
