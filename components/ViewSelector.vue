<template>
  <div
    class="btn-group"
  >
    <button
      v-for="$view in views"
      :key="$view.id"
      class="btn"
      :class="{ 'btn-active': $view.id === view }"
      @click="emit('change', $view.id)"
    >
      <FeatherIcon
        :icon="$view.icon"
      />
    </button>
  </div>
</template>
<script setup>
const {
  view,
  views,
} = defineProps({
  views: {
    type: Array,
    required: true,
  },
  view: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(['change']);
</script>
