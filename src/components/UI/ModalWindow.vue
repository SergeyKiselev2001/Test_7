<template>
  <div
    class="w-screen h-screen absolute top-0 right-0 bg-[#6B7280BF] cursor-pointer"
    @click="$store.commit('closeModals')"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ModalWindow',
}
</script>