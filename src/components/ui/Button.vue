<script setup>
const props = defineProps({
  as: {
    type: String,
    default: 'button',
  },
});
</script>

<template>
  <component :is="props.as" :type="props.as === 'button' ? 'button' : null" class="button">
    <slot></slot>
  </component>
</template>

<style scoped>
.button {
  padding: 1rem;
  border: 1px solid rgb(255 255 255 / 0.05);
  background-color: rgb(255 255 255 / 0.02);
  width: 100%;
  font-size: 1.125rem;
  font-weight: 500;
  display: flex;
  cursor: pointer;
  user-select: none;
  transition:
    background-color 150ms ease,
    border-color 150ms ease;
  height: 100%;

  &:hover {
    background-color: rgb(255 255 255 / 0.05);
    border-color: rgb(255 255 255 / 0.1);
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    box-shadow: 0 0 0 3px rgb(59 130 246 / 0.5);
  }
}
</style>
