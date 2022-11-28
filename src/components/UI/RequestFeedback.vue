<template>
  <form class="bg-white p-5 rounded-lg" @click.stop>
    <span class="block">Заказать звонок</span>

    <input type="text" placeholder="Иван Иванов" />

    <input type="text" placeholder="+7 (___) ___-__-__" />
    <input type="text" placeholder="you@example.com" />

    <input type="text" :value='$store.state?.city'/>
    <ButtonComp text="Отправить" color="greenLight" />
  </form>
</template>

<script>

export default {
  name: 'RequestFeedback',
  mounted() {
    console.log(`the component is now mounted.`)
    console.log(this.$store.state)
  }
}

</script>