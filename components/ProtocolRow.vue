<template>
  <tr>
    <td>{{ index }}</td>
    <td class="max-w-md overflow-hidden whitespace-normal">{{ protocol.title }}</td>
    <td>{{ protocol.creator.name }}</td>
    <td>{{ published }}</td>
  </tr>
</template>
<script setup>
import dayjs from 'dayjs';

const { protocol } = defineProps({
  protocol: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});

const published = computed(() => dayjs.unix(protocol.created_on).format('MMMM D, YYYY'));
</script>
