<template>
  <form class="bg-white p-5 rounded-lg">
    <span class="block">Заказать звонок</span>

    <input type="text" placeholder="Иван Иванов" />

    <input type="text" placeholder="+7 (___) ___-__-__" />
    <input type="text" placeholder="you@example.com" />

    <input type="text" placeholder="Москва" />
    <ButtonComp text="Отправить" color="greenLight" />
  </form>
</template>

<script>
import ButtonComp from '@/components/UI/ButtonComp'

export default {
  name: 'RequestFeedback',
  components: {
    ButtonComp
  }
}
</script>