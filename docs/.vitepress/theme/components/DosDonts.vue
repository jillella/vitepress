<template>
  <div class="dos-donts">
    <div class="dos">
      <h3>Do's</h3>
      <ul>
        <li v-for="item in dos" :key="item">{{ item }}</li>
      </ul>
    </div>
    <div class="donts">
      <h3>Don'ts</h3>
      <ul>
        <li v-for="item in donts" :key="item">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  dos: string[]
  donts: string[]
}>()
</script>

<style scoped>
.dos-donts {
  display: flex;
  gap: 2rem;
}

.dos, .donts {
  flex: 1;
}

h3 {
  margin-bottom: 0.5rem;
}

ul {
  list-style-type: none;
  padding-left: 0;
}

li {
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;
}

li::before {
  position: absolute;
  left: 0;
}

.dos li::before {
  content: '✅';
}

.donts li::before {
  content: '❌';
}
</style>
