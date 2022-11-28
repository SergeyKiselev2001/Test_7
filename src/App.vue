<template>
  <div>
    <ButtonComp text="Заказать в Москву" color="blue"/>
    <ButtonComp text="Заказать в Санкт-Петербург" color="green" />
    <ModalWindow>
      <RequestFeedback/>
    </ModalWindow>
  </div>
</template>

<script>
import ButtonComp from '@/components/UI/ButtonComp'
import ModalWindow from '@/components/UI/ModalWindow'
import RequestFeedback from '@/components/UI/RequestFeedback'

RequestFeedback
export default {
  name: 'App',
  components: {
    ButtonComp, ModalWindow, RequestFeedback
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
