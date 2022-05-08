<template>
  <div
    class="btn-group"
  >
    <button
      v-for="$theme in themes"
      :key="$theme.id"
      class="btn"
      :class="{ 'btn-active': $theme.id === theme }"
      @click="emit('change', $theme.id)"
    >
      <FeatherIcon
        :icon="$theme.icon"
      />
    </button>
  </div>
</template>
<script setup>
const props = defineProps({
  themes: {
    type: Array,
    required: true,
  },
  theme: {
    type: String,
    required: true,
  },
});

const {
  themes,
  theme,
} = toRefs(props);

const emit = defineEmits(['change']);
</script>
