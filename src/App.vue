<template>
  <div>
    <ButtonComp 
      @click="$store.commit('setShowModal', { showModal: true, city:'Москва'})"
      text="Заказать в Москву"
      color="blue"
    />
    <ButtonComp
      @click="$store.commit('setShowModal', { showModal: true, city:'Санкт-Петербург'})"
      text="Заказать в Санкт-Петербург"
      color="green"
    />
    <ModalWindow v-if="$store.state.showModal">
      <RequestFeedback/>
    </ModalWindow>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    openModal(){
      //$store.mutations.toggleModal
    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
