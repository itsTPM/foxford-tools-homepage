<script setup>
import Button from './Button.vue';

defineProps({
  href: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    default: null,
  },
  iconSrc: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <Button as="a" :href="href" class="link">
    <div class="link-content">
      <span v-if="subtitle" class="link-label">{{ subtitle }}</span>
      <span class="link-name">{{ title }}</span>
    </div>
    <img :src="iconSrc" alt="" aria-hidden="true" class="link-icon" />
  </Button>
</template>

<style scoped>
.link {
  position: relative;
  padding-right: 6rem;
  overflow: hidden;
}

.link-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.link-label {
  font-size: 0.875rem;
  font-weight: 400;
  color: rgb(255 255 255 / 0.5);
}

.link-name {
  font-size: 1.75rem;
}

.link-icon {
  position: absolute;
  width: 5.25rem;
  height: auto;
  right: -0.75rem;
  bottom: -0.75rem;
}
</style>
