<template>
  <div
    class="card bg-base-300 shadow-xl"
  >
    <div class="card-body p-4">
      <h2 class="card-title text-lg">{{ protocol.title }}</h2>
      <div
        class="flex flex-wrap gap-2 mt-auto pt-4"
      >
        <div class="badge badge-outline badge-info">{{ published }}</div>
        <div
          v-for="author in authors"
          :key="author"
          class="badge badge-outline"
        >{{ author }}</div>
      </div>
      <div
        class="flex flex-wrap gap-2 pt-2"
      >
        <div
          v-for="stat in stats"
          :key="stat.key"
          class="flex items-center gap-1"
        >
          <FeatherIcon
            class="w-4"
            :icon="stat.icon"
          />
          <span>{{ protocol.stats[stat.key] }}</span>
        </div>
      </div>
      <!-- <div class="card-actions justify-end mt-auto pt-4">
        <button
          class="btn gap-2"
        >
          <div
            v-if="protocol.creator.image.source && avatar"
            class="avatar"
          >
            <div class="w-10 mask mask-hexagon">
              <img
                :src="protocol.creator.image.source"
                :alt="protocol.creator.name"
                loading="lazy"
                width="40"
                height="40"
                @error="avatar = false"
              >
            </div>
          </div>
          <div
            v-else
            class="avatar placeholder"
          >
            <div class="w-10 mask mask-hexagon bg-neutral-focus text-neutral-content">
              <span
                class="text-xl"
              >
                {{ protocol.creator.name.split(' ').map(n => n[0]).join() }}
              </span>
            </div>
          </div>
          <div>
            {{ protocol.creator.name }}
          </div>
        </button>
      </div> -->
    </div>
  </div>
</template>
<script setup>
import dayjs from 'dayjs';

const { protocol } = defineProps({
  protocol: {
    type: Object,
    required: true,
  },
});

const published = computed(() => dayjs.unix(protocol.created_on).format('MMMM D, YYYY'));
const authors = computed(() => protocol.authors
  .map(a => a.name));
const avatar = ref(true);
const stats = [
  { key: 'number_of_steps', icon: 'tool' },
  { key: 'number_of_views', icon: 'eye' },
  { key: 'number_of_votes', icon: 'thumbs-up' },
  { key: 'number_of_bookmarks', icon: 'bookmark' },
];
</script>
