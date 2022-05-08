<template>
  <div class="btn-group text-sm">
    <button
      class="btn btn-sm"
      :class="{ 'btn-disabled': pagination.current_page === 1 }"
      @click="emit('change', pagination.current_page - 1)"
    >
      <FeatherIcon icon="chevron-left" class="w-5" />
    </button>
    <button
      v-if="!range.includes(1)"
      class="btn btn-sm"
      :class="{ 'btn-active': pagination.current_page === 1 }"
      @click="emit('change', 1)"
    >
      {{ 1 }}
    </button>
    <button
      v-if="deltaLeft > 0"
      class="btn btn-disabled btn-sm"
    >...</button>
    <button
      v-for="page in range"
      :key="page"
      class="btn btn-sm"
      :class="{ 'btn-active': pagination.current_page === page }"
      @click="emit('change', page)"
    >{{ page }}</button>
    <button
      v-if="deltaRight > 0"
      class="btn btn-disabled btn-sm"
    >...</button>
    <button
      v-if="!range.includes(pagination.total_pages)"
      class="btn btn-sm"
      :class="{ 'btn-active': pagination.current_page === pagination.total_pages }"
      @click="emit('change', pagination.total_pages)"
    >
      {{ pagination.total_pages }}
    </button>
    <button
      class="btn btn-sm"
      :class="{ 'btn-disabled': pagination.current_page === pagination.total_pages }"
      @click="emit('change', pagination.current_page + 1)"
    >
      <FeatherIcon icon="chevron-right" class="w-5" />
    </button>
  </div>
</template>
<script setup>
const props = defineProps({
  pagination: {
    type: Object,
    required: true,
  },
});

const { pagination } = toRefs(props);

const range = computed(() => {
  return [-2, -1, 0, 1, 2]
    .map(p => p + pagination.value.current_page)
    .filter(p => p > 0 && p <= pagination.value.total_pages);
});

const deltaLeft = computed(() => range.value.at(0) - 1);
const deltaRight = computed(() => pagination.value.total_pages - range.value.at(-1));

const emit = defineEmits(['change']);
</script>
