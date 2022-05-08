<template>
  <div class="flex flex-col">
    <div
      class="flex items-center mb-4"
    >
      <ThemeSelector
        :themes="[
          { id: 'dark', icon: 'moon' },
          { id: 'light', icon: 'sun' },
        ]"
        :theme="theme"
        @change="theme = $event"
      />
      <Html :data-theme="theme" />
      <ViewSelector
        class="ml-auto"
        :views="[
          { id: 'table', icon: 'table' },
          { id: 'grid', icon: 'grid' },
        ]"
        :view="view"
        @change="view = $event"
      />
    </div>
    <div
      :class="{
        'grid gap-6 grid-cols-1 sm:grid-cols-2': view === 'grid',
        'overflow-x-auto': view === 'table',
      }"
    >
      <template
        v-if="view === 'grid'"
      >
        <ProtocolCard
          v-for="protocol in protocols"
          :key="protocol.id"
          :protocol="protocol"
        />
      </template>
      <template
        v-else-if="view === 'table'"
      >
        <table
          class="table table-zebra w-full"
        >
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Creator</th>
              <th>Published</th>
            </tr>
          </thead>
          <tbody>
            <ProtocolRow
              v-for="(protocol, index) in protocols"
              :key="protocol.id"
              :protocol="protocol"
              :index="index + 1"
            />
          </tbody>
        </table>
      </template>
    </div>
  </div>
</template>
<script setup>
const { protocols } = defineProps({
  protocols: {
    type: Array,
    required: true,
  },
});

const view = ref('table');
const theme = ref('dark');
</script>
