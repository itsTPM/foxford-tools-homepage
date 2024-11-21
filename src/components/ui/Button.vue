<script setup>
const props = defineProps({
  as: {
    type: String,
    default: "button",
  },
});
</script>

<template>
  <component
    :is="props.as"
    :type="props.as === 'button' ? button : null"
    class="p-4 border border-white/5 bg-white/[.02] hover:bg-white/5 transition focus:outline-none focus-visible:ring focus-visible:ring-blue-500 hover:border-white/10 w-full text-lg font-medium flex cursor-pointer select-none"
  >
    <slot></slot>
  </component>
</template>
