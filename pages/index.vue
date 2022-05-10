<template>
  <div
    class="p-8 max-w-6xl mx-auto"
  >
    <div
      v-if="error"
    >Error</div>
    <div
      v-if="data"
      class="flex flex-col"
      :class="{ 'blur-sm !cursor-wait': pending }"
    >
      <Protocols
        :protocols="protocols"
      />
      <Pagination
        class="mt-8 mx-auto"
        :pagination="pagination"
        @change="setPage"
      />
    </div>
  </div>
</template>
<script setup>
const page = ref(1);
const { data, pending, refresh, error } = await useFetch(() => `/api/protocols?page=${page.value}`, {
  key: 'protocols',
});

const pagination = computed(() => data.value.pagination);
const protocols = computed(() => data.value.items);

const setPage = ($page) => {
  page.value = $page;
  refresh();  
};
</script>
