<template>
  <div class="pt-2.5 sm:pt-5 px-2.5 sm:px-10 md:px-20 flex flex-col sm:flex-row">
    <ButtonComp
      class="w-full sm:w-auto mb-2.5 sm:mb-0 mr-0 sm:mr-4"
      @click="$store.commit('showFormModal', 'Москва')"
      text="Заказать в Москву"
      color="blue"
    />
    <ButtonComp
      class="w-full sm:w-auto"
      @click="$store.commit('showFormModal', 'Санкт-Петербург')"
      text="Заказать в Санкт-Петербург"
      color="green"
    />
  </div>
  <ModalWindow
    class="px-2.5 absolute sm:px-10 md:px-0"
    v-if="$store.state.showFormModal"
  >
    <RequestFeedback
      class="w-full relative top-1/2 translate-y-[-50%] md:w-[793px] md:left-1/2 md:translate-x-[-50%]"
    />
  </ModalWindow>
  <ModalWindow v-if="$store.state.showResponseModal" class="px-6">
    <div class="bg-white p-5 rounded-lg relative top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] sm:max-w-[500px]" v-html="$store.state.htmlResponse" />
  </ModalWindow>
</template>

<script>
import RequestFeedback from "@/components/RequestFeedback";

export default {
  name: "App",
  components: {
    RequestFeedback,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap');

#app {
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.text-red-500 {
}
.w-full {
}
.space-y-2 {
}
.space-x-4 {
}
.font-medium {
}
</style>
