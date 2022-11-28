<template>
  <div class="w-screen h-screen absolute top-0 right-0 bg-[#6B7280BF]">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ModalWindow',
  props: {
    text: {
      type:String,
      required: true
    },
    color: {
      type: String,
      required: true
    },
    callback: Function,
  },
}
</script>